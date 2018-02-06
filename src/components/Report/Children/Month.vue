<template>
    <div :class="$style.wrapper">
        <div style="margin-bottom: 10px">
            <Report-Table>
                <div>
                    <el-table size="small" :data="tableData" :border="true">
                        <el-table-column label="员工姓名" prop="staff_name"></el-table-column>
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
        <Report-Bar :type="2"></Report-Bar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Table from './Table.vue';
    import Bar from './Bar.vue';
    Vue.component('Report-Table', Table);
    Vue.component('Report-Bar', Bar);
    export default {
        data () {
            return {
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
        }
    };
</script>

<style lang="less" module>
    .wrapper {

    }
</style>
