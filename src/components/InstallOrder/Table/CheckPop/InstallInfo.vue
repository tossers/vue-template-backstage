<template>
    <div class="installInfo">
        <div class="installInfo-left">
            <el-table :data="tableData" size="small" style="width: 100%" stripe border>
                <el-table-column label="图片" width="60">
                    <template slot-scope="scope">
                        <img style="border:0 solid #dee0e0;width:39px;height:39px;" src="~assets/prod.png" alt="">
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
            </el-table>
        </div>
        <div class="installInfo-right">
            <div>
                <p>送货方式</p>
                <p>送装</p>
            </div>
            <div>
                <p>选择安装公司</p>
                <p>广州杰盛机电安装服务有限公司</p>
            </div>
            <div>
                <p>客户姓名</p>
                <p>卢本伟</p>
            </div>
            <div>
                <p>联系电话</p>
                <p>18677657875</p>
            </div>
            <div>
                <p>安装时间</p>
                <p>2017年9月14日</p>
            </div>
            <div>
                <p>地区</p>
                <p>广东省清远市清新县</p>
            </div>
            <div>
                <p>详细地址</p>
                <p>测试街，测试3栋A座201</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getOrderInfo} from 'api';

    export default {
        data() {
            return {
                tableData: [],
            };
        },
        beforeMount() {
            this.getOrderInfo();
        },
        methods: {
            async getOrderInfo() {
                return getOrderInfo().then(res => {
                    console.log(res.data.list);
                    this.tableData = res.data.list;
                });
            }
        },
    };
</script>

<style lang="less" scoped>
    .installInfo {
        display: flex;
        .installInfo-left {
            flex: 0.55;
            padding: 0 20px;
        }
        .installInfo-right {
            flex: 0.45;
            padding: 0 20px;
            & > div > p:nth-child(1) {
                margin-top: 0;
                margin-bottom: 0;

            }
            & > div > p:nth-child(2) {
                margin-top: 10px;
                color: #1f2329;
            }
        }
    }
</style>
