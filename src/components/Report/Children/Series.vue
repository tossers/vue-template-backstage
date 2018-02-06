<template>
    <div :class="$style.wrapper">
        <el-row style="margin-bottom: 10px" type="flex">
            <el-col :span="12" style="margin-right: 10px">
                <Report-Table>
                    <div>
                        <el-table size="small" :data="tableData" :border="true">
                            <el-table-column label="员工姓名" prop="staff_name"></el-table-column>
                            <el-table-column label="2017(数量)" prop="left"></el-table-column>
                            <el-table-column label="2016(数量)" prop="right"></el-table-column>
                            <el-table-column label="汇总(数量)" prop="summary"></el-table-column>
                        </el-table>
                        <el-pagination
                            v-if="tableData.length>0"
                            background
                            layout="prev, pager, next"
                            :total="20">
                        </el-pagination>
                    </div>
                </Report-Table>
            </el-col>
            <el-col style="height: 100%;" :span="12">
                <Report-Pie></Report-Pie>
            </el-col>
        </el-row>
        <!--<div style="display: flex; margin-bottom: 10px">-->
        <!--<div style="flex: 0.5; margin-right: 10px">-->
        <!---->
        <!--</div>-->
        <!--<div style="flex: 0.5">-->
        <!--&lt;!&ndash;<Report-Pie ></Report-Pie>&ndash;&gt;-->
        <!--</div>-->
        <!--</div>-->
        <Report-Bar :type="1"></Report-Bar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Table from './Table.vue';
    import Pie from './Pie.vue';
    import Bar from './Bar.vue';

    Vue.component('Report-Table', Table);
    Vue.component('Report-Pie', Pie);
    Vue.component('Report-Bar', Bar);
    export default {
        data () {
            return {
                staff_arr: [],
                page_count: 1,
                tableData: [{
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
        },
        beforeMount () {
        },
        methods: {}
    };
</script>

<style lang="less" module>
    .wrapper {

    }
</style>
