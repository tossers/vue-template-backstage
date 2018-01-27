<template>
    <div class="wrapper">
        <span @click.stop="visible=true"><slot></slot></span>
        <el-dialog
            :visible.sync="visible"
            :append-to-body="true"
            :custom-class="`yx-popover yx-popover-${size||'small'}`"
        >
            <slot name="title" slot="title"></slot>
            <div class="yx-popover-content">
                <slot name="content">content</slot>
            </div>
            <div class="yx-popover-footer">
                <el-button v-if="!noConfirmBtn" style="background: #f56c31" :loading="btnLoading" @click="onConfirm">{{confirmText || '确认'}}
                </el-button>
                <el-button style="background: #cdcfd1" @click="visible=false">取消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        //size: medium,small,mini
        props: ['confirmText', 'size', 'onFirstOpen', 'handleConfirm', 'noConfirmBtn'],
        data() {
            return {
                visible: false,
                btnLoading: false,
                isFirstOpen: true,
            };
        },
        methods: {
            async onConfirm() {
                let closeDialog = true;
                if (this.handleConfirm) {
                    this.btnLoading = true;
                    closeDialog = await this.handleConfirm();
                    this.btnLoading = false;
                }
                this.visible = !closeDialog;
            }
        },
        watch: {
            visible(val) {
                if (this.isFirstOpen && val) {
                    this.isFirstOpen = false;
                    if (this.onFirstOpen) {
                        this.onFirstOpen();
                    }
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "index";
</style>
