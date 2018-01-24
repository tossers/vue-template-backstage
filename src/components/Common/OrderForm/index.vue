<template>
    <div class="orderForm">
        <el-form
            label-position="top"
            size="small"
            label-width="80px"
        >
            <el-form-item label="送货方式">
                <el-select placeholder="请选择" style="width: 100%" :value="1">
                    <el-option label="送装" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择安装公司">
                <el-select placeholder="请选择" style="width: 100%" :value="1">
                    <el-option label="广州杰盛机电安装服务有限公司" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="客户姓名">
                <el-input value="龙伟伟" style="width: 100%"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
                <el-input value="18677657875"></el-input>
            </el-form-item>
            <el-form-item label="安装时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="地区">
                <el-select placeholder="省份" style="width: 32%" :value="1">
                    <el-option label="11" :value="1"></el-option>
                </el-select>
                <el-select placeholder="城市" style="width: 32%" :value="1">
                    <el-option label="11" :value="1"></el-option>
                </el-select>
                <el-select placeholder="地区" style="width: 32%" :value="1">
                    <el-option label="11" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细地区">
                <el-input type="textarea" :rows="3"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .orderForm{
        /deep/ .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
            margin-bottom: 6px;
        }
        /deep/ .el-form-item__label {
            color:#636975;
            padding: 0;
        }
        /deep/ .el-input {
            input {
                border-radius: 0;
                color:#1f2329;
            }
        }
    }
</style>
