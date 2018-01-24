<template>
    <div style="display: inline-block">
        <span @click.stop="visible=true"><slot></slot></span>
        <el-dialog
            :visible.sync="visible"
            :append-to-body="true"
            custom-class="yx-confirm"
        >
            <p style="text-align: center; font-size: 20px"><slot name="content">你确定要删除吗？</slot></p>
            <div class="yx-confirm__footer">
                <el-button style="background: #f56c31" :loading="btnLoading" @click="">{{confirmText || '确认'}}
                </el-button>
                <el-button style="background: #cdcfd1" @click="visible=false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['confirmText'],
        data() {
            return {
                visible: false,
                btnLoading: false,
            };
        }
    };
</script>

<style lang="less" scoped>
    /deep/ .yx-confirm {
        width: 500px;
        box-shadow:0 2px 8px 0 rgba(0,0,0,0.30);
        border-radius:8px;
        .yx-confirm__footer {
            margin-top: 50px;
            text-align: center;
            button {
                font-size: 16px;
                color: #ffffff;
                border-radius: 4px;
                width: 130px;
                height: 30px;
                margin-right: 20px;
            }
        }
    }
</style>
