<template>
    <div :class="$style.wrapper">
        <div style="margin-bottom: 10px">
            <Report-Table>
                <div>
                    <el-table size="small" :data="tableData" :border="true">
                        <el-table-column label="效能" prop="staff_name"></el-table-column>
                        <el-table-column label="2017-12" prop="left"></el-table-column>
                        <el-table-column label="2017-11" prop="right"></el-table-column>
                        <el-table-column label="2017-10" prop="right"></el-table-column>
                        <el-table-column label="2017-9" prop="right"></el-table-column>
                        <el-table-column label="2017-8" prop="right"></el-table-column>
                    </el-table>
                    <el-pagination
                        v-if="tableData.length>0"
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </Report-Table>
        </div>
        <Report-Pie></Report-Pie>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Table from './Table.vue';
    import Pie from './Pie.vue';
    Vue.component('Report-Table', Table);
    Vue.component('Report-Pie', Pie);
    export default {
        data () {
            return {
                tableData: [{
                    'staff_name': '效能1',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能2',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能3',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能4',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能5',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能6',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能7',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能8',
                    'left': '1',
                    'right': '2',
                    'summary': '3'
                }, {
                    'staff_name': '效能9',
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
