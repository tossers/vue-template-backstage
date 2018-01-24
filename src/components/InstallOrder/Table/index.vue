<template>
    <div class="installOrder-table">
        <el-table
            :data="tableData"
            :row-class-name="setRowClass"
            :stripe="true"
            size="small"
            style="width: 100%">
            <el-table-column align="center" width="80" prop="id" label="序号" sortable></el-table-column>
            <el-table-column align="center" prop="orderId" label="安装单号" sortable></el-table-column>
            <el-table-column align="center" prop="installDate" label="安装日期" sortable></el-table-column>
            <el-table-column align="center" prop="orderId" label="订单号" sortable></el-table-column>
            <el-table-column align="center" prop="client" label="客户" sortable></el-table-column>
            <el-table-column align="center" prop="phone" label="电话"></el-table-column>
            <el-table-column align="center" width="220" prop="company" label="安装公司" sortable></el-table-column>
            <el-table-column align="center" prop="team" label="安装工程队" sortable></el-table-column>
            <el-table-column align="center" prop="type" label="送货方式" sortable>
                <template slot-scope="scope">
                    <span
                        v-for="{name, type, color} in typeMap"
                        v-if="type===scope.row.type"
                        :style="{color: scope.row.status===3? '#9ca2ad':color}"
                    >{{name}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="status" width="90" label="状态" sortable
                             class-name="sellOrder-table-noPadding">
                <template slot-scope="scope">
                    <div
                        v-for="{name, status, backgroundColor} in statusMap"
                        v-if="status===scope.row.status"
                        :style="{backgroundColor, color: '#FFF', height: '40px', lineHeight: '40px'}"
                    >{{name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="createTime" label="创建时间" sortable></el-table-column>
            <el-table-column align="center" width="120" label="操作">
                <template slot-scope="scope">
                    <div style="text-align: left">
                        <installOrder-table-checkPop v-if="scope.row.status!==3">
                            <a style="margin-right: 5px">查看</a>
                        </installOrder-table-checkPop>
                        <installOrder-table-assignPop  v-if="scope.row.status===0">
                            <a style="margin-right: 5px">指派</a>
                        </installOrder-table-assignPop>
                        <common-confirm v-if="scope.row.status!==3&&scope.row.status!==2">
                            <span slot="content">是否要作废此条安装单：AC-c1ab5f2d？</span>
                            <a style="margin-right: 5px">作废</a>
                        </common-confirm>
                        <common-confirm v-if="scope.row.status===3">
                            <a style="margin-right: 5px">删除</a>
                        </common-confirm>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common';
    import AssignPop from './AssignPop';
    import CheckPop from './CheckPop';
    Vue.component('common-confirm', Common.Confirm);
    Vue.component('installOrder-table-assignPop', AssignPop);
    Vue.component('installOrder-table-checkPop', CheckPop);
    const statusMap = [{
        status: 0,
        name: '受理中',
        backgroundColor: '#598cff',
    }, {
        status: 1,
        name: '已指派',
        backgroundColor: '#f2be26',
    }, {
        status: 2,
        name: '已完成',
        backgroundColor: '#5bc377',
    }, {
        status: 3,
        name: '作废',
        backgroundColor: '#aaabad',
    }];
    const typeMap = [{
        type: 0,
        name: '送装',
        color: '#326ae8',
    }, {
        type: 1,
        name: '送货',
        color: '#1c8ed3',
    }, {
        type: 2,
        name: '物流',
        color: '#df7b25',
    }, {
        type: 3,
        name: '自提',
        color: '#d9a70e',
    }];
    export default {
        props: ['tableData'],
        data() {
            return {
                statusMap,
                typeMap
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
