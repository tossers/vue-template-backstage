<template>
    <div class="wrapper">
        <h1 class="crumb" style="border: 0; margin-bottom: 0">订单报表</h1>
        <div>
            <el-row type="flex">
                <el-col :span="4">
                    <ul class="menu">
                        <li v-for="{id, name} in tabList" :key="id" @click="setReportTab(id)"
                            :class="{'chosen': reportTab === id}">{{name}}
                        </li>
                    </ul>
                </el-col>
                <el-col :span="20">
                    <div class="content">
                        <h1
                            v-for="{id, name} in tabList"
                            :key="id"
                            v-if="reportTab===id"
                            class="crumb"
                            style="color:#636975; margin-top: 20px"
                        >{{name}}</h1>
                        <Report-Filter></Report-Filter>
                        <Report-Series v-if="reportTab===1"></Report-Series>
                        <Report-Month v-if="reportTab===2"></Report-Month>
                        <Report-Efficiency v-if="reportTab===3"></Report-Efficiency>
                        <StoreSale v-if="reportTab===4"></StoreSale>
                    </div>
                </el-col>
            </el-row>
            <!--<div style="width: 300px;">-->
            <!--<ul :class="$style.menu">-->
            <!--<li v-for="{id, name} in tabList" :key="id" @click="setReportTab(id)"-->
            <!--:class="{[$style.chosen]: reportTab === id}">{{name}}-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--<div :class="$style.content">-->
            <!--<h1-->
            <!--v-for="{id, name} in tabList"-->
            <!--:key="id"-->
            <!--v-if="reportTab===id"-->
            <!--class="crumb"-->
            <!--style="color:#636975; margin-top: 20px"-->
            <!--&gt;{{name}}</h1>-->
            <!--<Report-Filter></Report-Filter>-->
            <!--<Report-Series v-if="reportTab===1"></Report-Series>-->
            <!--<Report-Month v-if="reportTab===2"></Report-Month>-->
            <!--<Report-Efficiency v-if="reportTab===3"></Report-Efficiency>-->
            <!--<StoreSale v-if="reportTab===4"></StoreSale>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Report from './Children';

    Vue.component('Report-Series', Report.Series);
    Vue.component('Report-Month', Report.Month);
    Vue.component('Report-Filter', Report.Filter);
    Vue.component('Report-Efficiency', Report.Efficiency);
    Vue.component('StoreSale', Report.StoreSale);
    const tabList = [{
        id: 1,
        name: '系列对比',
    }, {
        id: 2,
        name: '月度对比',
    }, {
        id: 3,
        name: '效能对比',
    }, {
        id: 4,
        name: '门店销售额',
    }];
    export default {
        data () {
            return {
                reportTab: tabList[0].id, //1系列对比 2月度对比 3效能对比 4门店销售额
                tabList: tabList,
            };
        },
        methods: {
            setReportTab (tab) {
                this.reportTab = tab;
            }
        }
    };
</script>

<style lang="less" scoped>
    .wrapper {
        & > div {
            background: #ffffff;
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.15);
            width: 1525px;
            /*display: flex;*/
            .content {
                /*flex: 0.8;*/
                /*width: ~'calc(100% - 400Px)';*/
                border-left: 1px solid #D1D1D1;
                padding: 0 40px 20px  40px;
            }
            .menu {
                list-style-type: none;
                margin: 0;
                padding: 0;
                & > li {
                    height: 64px;
                    line-height: 64px;
                    text-align: center;
                    font-size: 20px;
                    color: #1f2329;
                    border-bottom: 1px solid #D1D1D1;
                    cursor: pointer;
                    &:hover {
                        .chosen;
                    }
                }
                .chosen {
                    background: #e6e8eb;
                }
            }
        }
    }
</style>
