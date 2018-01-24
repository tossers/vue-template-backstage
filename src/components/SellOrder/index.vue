<template>
    <div>
        <sellOrder-header
            :type="1"
            :navList="navList"
            :placeholder="'客户姓名/联系电话/订单号'"
        ></sellOrder-header>
        <sellOrder-timeFilter label="下单时间"></sellOrder-timeFilter>
        <sellOrder-table
            :tableData="sellOrderList"
        ></sellOrder-table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common';
    import {getSellOrderList} from '../../stores/api';
    import Table from './Table';

    Vue.component('sellOrder-header', Common.Header);
    Vue.component('sellOrder-timeFilter', Common.TimeFilter);
    Vue.component('sellOrder-table', Table);
    export default {
        data() {
            return {
                sellOrderList: [],
                navList: [],
            };
        },
        beforeMount() {
            this.getSellOrderList();
        },
        methods: {
            async getSellOrderList() {
                return getSellOrderList().then(res => {
                    this.sellOrderList = res.data.list;
                    this.navList = res.data.navList;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .wrapper {

    }
</style>
