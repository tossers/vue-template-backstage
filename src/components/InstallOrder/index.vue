<template>
    <div class="installOrder">
        <installOrder-header
            :type="1"
            :navList="navList"
            :placeholder="'客户姓名/联系电话/订单号'"
        ></installOrder-header>
        <div style="display: flex; justify-content: space-between; align-items: center">
            <installOrder-timeFilter label="安装日期"></installOrder-timeFilter>
            <installOrder-orderFormPop><el-button class="export">新建售后订单</el-button></installOrder-orderFormPop>
        </div>
        <installOrder-table :tableData="installOrderList"></installOrder-table>
        <el-pagination
            style="float: right; margin-top: 15px"
            background
            layout="prev, pager, next"
            :current-page="1"
            :page-count="5"
            @current-change=""
        >
        </el-pagination>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common';
    import {getInstallOrderList} from 'api';
    import Table from './Table';
    import OrderFormPop from './OrderFormPop';

    Vue.component('installOrder-header', Common.Header);
    Vue.component('installOrder-timeFilter', Common.TimeFilter);
    Vue.component('installOrder-table', Table);
    Vue.component('installOrder-orderFormPop', OrderFormPop);
    export default {
        data() {
            return {
                navList: [],
                installOrderList: [],
            };
        },
        beforeMount() {
            this.getInstallOrderList();
        },
        methods: {
            async getInstallOrderList() {
                return getInstallOrderList().then(res => {
                    this.installOrderList = res.data.list;
                    this.navList = res.data.navList;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .installOrder {
        .export {
            background:#ffffff;
            box-shadow:0 2px 6px 0 rgba(29,30,31,0.15);
            border-radius:2px;
            width:90Px;
            height:32Px;
            font-size:12px;
            color:#636975;
        }
    }
</style>
