<template>
    <div style="display: inline-block">
        <common-popover
            confirmText="保存"
            size="mini"
        >
            <span slot="title">安装信息</span>
            <div slot="content" class="assignPop-form">
                <el-form
                    label-position="top"
                    size="small"
                >
                    <el-form-item label="选择工程队">
                        <el-select placeholder="请选择" style="width: 100%" :value="1">
                            <el-option label="11" :value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择日期">
                        <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
            <slot>button</slot>
        </common-popover>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common';

    Vue.component('common-Popover', Common.Popover);
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less" scoped>
    .assignPop-form {
        padding: 15px 60px;
        .el-form-item {
            margin-bottom: 12px;
            /deep/ .el-form-item__label {
                padding: 0;
            }
            /deep/ input {
                color:#1f2329;
                border-radius: 0;
            }
        }
    }
</style>
