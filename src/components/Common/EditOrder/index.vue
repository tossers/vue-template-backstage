<template>
    <div class="oderEdit">
        <div class="oderEdit-left">
            <el-table :data="tableData" size="small" style="width: 100%" stripe border>
                <el-table-column
                    type="selection"
                    width="45">
                </el-table-column>
                <el-table-column label="图片" width="60">
                    <template slot-scope="scope">
                        <img style="border:0 solid #dee0e0;width:39px;height:39px;" src="~assets/prod.png"
                             alt="">
                    </template>
                </el-table-column>
                <el-table-column label="商品" width="200">
                    <template slot-scope="scope">
                        <div>
                            {{scope.row.product.name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="购买" prop="amount"></el-table-column>
                <el-table-column label="已分配" prop="distributed"></el-table-column>
                <el-table-column label="分配" prop="distribute">
                    <template slot-scope="scope">
                        <el-input-number size="mini" controls-position="right"
                                         style="width: 100%"></el-input-number>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="oderEdi-right">
            <common-orderForm></common-orderForm>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import OrderForm from '../OrderForm';

    Vue.component('common-orderForm', OrderForm);
    export default {
        props: ['tableData'],
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    @import 'index';
</style>
