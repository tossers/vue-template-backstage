<template>
    <div class="sellOrder-table">
        <el-table
            :data="tableData"
            :row-class-name="setRowClass"
            :stripe="true"
            size="small"
            style="width: 100%">
            <el-table-column width="100" prop="id" label="序号"></el-table-column>
            <el-table-column prop="orderId" label="订单号"></el-table-column>
            <el-table-column prop="buyer" label="买家"></el-table-column>
            <el-table-column prop="payDate" label="支付时间" sortable></el-table-column>
            <el-table-column prop="appointDate" label="预约时间" sortable></el-table-column>
            <el-table-column width="100" prop="status" label="状态" sortable class-name="sellOrder-table-noPadding">
                <!--0未分配1部分分配2已分配3取消4退货5换货-->
                <template slot-scope="scope">
                    <div v-for="{status, name, backgroundColor} in statusMap"
                         v-if="scope.row.status===status"
                         :style="{backgroundColor, color: '#FFF', height: '40px', lineHeight: '40px'}"
                    >{{name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作" class-name="sellOrder-table-noPadding">
                <template slot-scope="scope">
                    <sellOrder-table-popover v-if="scope.row.status===0||scope.row.status===1" title="添加安装单" :type="1">
                        <el-button class="addBtn">添加安装单</el-button>
                    </sellOrder-table-popover>
                    <sellOrder-table-popover v-if="scope.row.status===2" title="安装单详情" :type="2">
                        <a >查看安装单详情</a>
                    </sellOrder-table-popover>
                    <common-confirm><a v-if="scope.row.status===3">删除</a></common-confirm>
                    <a v-if="scope.row.status===4||scope.row.status===5">查看详情</a>
                </template>
            </el-table-column>
        </el-table>
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
    import OrderPop from './OrderPop';
    import Common from 'components/Common';

    Vue.component('common-confirm', Common.Confirm);
    Vue.component('sellOrder-table-popover', OrderPop);
    const statusMap = [{
        status: 0,
        name: '未分配',
        backgroundColor: '#598cff',
    }, {
        status: 1,
        name: '部分分配',
        backgroundColor: '#6bbef1',
    }, {
        status: 2,
        name: '已分配',
        backgroundColor: '#5bc377',
    }, {
        status: 3,
        name: '取消',
        backgroundColor: '#aaabad',
    }, {
        status: 4,
        name: '退货',
        backgroundColor: '#fa6583',
    }, {
        status: 5,
        name: '换货',
        backgroundColor: '#fa6583',
    }];
    export default {
        props: ['tableData'],
        data() {
            return {
                statusMap: statusMap,
            };
        },
        methods: {
            setRowClass({row, rowIndex}) {
                if (row.status === 3) {
                    return 'sellOrder-table-row-cancel';
                } else {
                    return '';
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @import 'index';
</style>
