<template>
    <div class="timeFilter">
        <div class="timeFilter-left">
            <div class="timeFilter-radio">
                <span>{{label||'时间'}}</span>
                <el-radio-group v-model="currId">
                    <el-radio v-for="{id, name} in list" :key="id" :label="id">{{name}}</el-radio>
                </el-radio-group>
            </div>
            <div class="timeFilter-date">
                <span>自定义</span>
                <el-date-picker
                    size="small"
                    v-model="date"
                    type="daterange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-value="new Date()">
                </el-date-picker>
                <el-button size="small" @click="">筛选</el-button>
            </div>
        </div>
        <!--<el-button class="export"><slot>批量导出</slot></el-button>-->
    </div>
</template>

<script>
    const list = [{
        id: 7,
        name: '7天内',
    }, {
        id: 30,
        name: '30天内',
    }, {
        id: 90,
        name: '90天内',
    }];
    export default {
        props: ['currDate', 'dateRange', 'handleClick', 'label'],
        data() {
            return {
                list: list,
                currId: '',
                date: null,
            };
        },
        watch: {
            currId(val) {
                this.$emit('update:currDate', val);

                if (val !== '') {
                    this.date = null;
                    this.handleClick();
                }
            },
            date(val) {
                this.$emit('update:dateRange', val);
                if (val) {
                    this.currId = '';
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @import 'index';
</style>
