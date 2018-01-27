<template>
    <div>
        <common-popover
            :confirmText="confirmText"
            size="medium"
            :onFirstOpen="getOrderInfo"
            :handleConfirm="handleConfirm"
        >
            <span slot="title">{{title}}</span>
            <common-edit v-if="confirmText==='保存'" slot="content" :tableData="tableData"></common-edit>
            <common-static slot="content" v-else :tableData="tableData"></common-static>
            <slot>button</slot>
        </common-popover>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common'
    import {getOrderInfo} from 'api';
    Vue.component('common-edit', Common.EditOrder);
    Vue.component('common-static', Common.StaticOrder);
    Vue.component('common-popover', Common.Popover);
    export default {
        //type 1修改2添加
        props: ['title', 'type'],
        data() {
            return {
                tableData: [],
                confirmText: this.type === 1 ? '保存' : '变更',
            };
        },
        methods: {
            async getOrderInfo() {
                return getOrderInfo().then(res => {
                    this.tableData = res.data.list;
                });
            },
            async handleConfirm() {
                let closeDialog = true;
                if (this.confirmText === '变更') {
                    this.confirmText = '保存';
                    closeDialog = false;
                } else if (this.confirmText === '保存') {
                    //handle保存
                    this.confirmText = '变更';
                }
                return closeDialog;
            }
        },
    };
</script>

<style lang="less" scoped>

</style>
