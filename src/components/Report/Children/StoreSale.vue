<template>
    <div :class="$style.wrapper">
        <Report-Table style="margin-bottom: 10px">
            <div>
                <el-table size="small" :data="data" :border="true">
                    <el-table-column label="年月" >
                        <el-table-column label="员工" prop="staff_name"></el-table-column>
                    </el-table-column>
                    <el-table-column label="2017-12">
                        <el-table-column width="100px" label="数量" prop="left"></el-table-column>
                        <el-table-column width="100px" label="成交金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="销售金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="佣金" prop="right"></el-table-column>
                    </el-table-column>
                    <el-table-column label="2017-11">
                        <el-table-column width="100px" label="数量" prop="left"></el-table-column>
                        <el-table-column width="100px" label="成交金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="销售金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="佣金" prop="right"></el-table-column>
                    </el-table-column>
                    <el-table-column label="2017-10">
                        <el-table-column width="100px" label="数量" prop="left"></el-table-column>
                        <el-table-column width="100px" label="成交金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="销售金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="佣金" prop="right"></el-table-column>
                    </el-table-column>
                    <el-table-column label="2017-9">
                        <el-table-column width="100px" label="数量" prop="left"></el-table-column>
                        <el-table-column width="100px" label="成交金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="销售金额" prop="right"></el-table-column>
                        <el-table-column width="100px" label="佣金" prop="right"></el-table-column>
                    </el-table-column>
                </el-table>
                <el-pagination
                    v-if="data.length>0"
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </Report-Table>
        <el-row type="flex">
            <el-col :span="12" style="margin-right: 10px"><Report-Pie></Report-Pie></el-col>
            <el-col :span="12"><Report-Bar></Report-Bar></el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Table from './Table.vue';
    import Bar from './Bar.vue';
    import Pie from './Pie.vue';

    Vue.component('Report-Table', Table);
    Vue.component('Report-Bar', Bar);
    Vue.component('Report-Pie', Pie);
    export default {
        data () {
            return {
                data: [{
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '张三1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }]
            };
        }
    };
</script>

<style lang="less" module>
    .wrapper {

    }
</style>
