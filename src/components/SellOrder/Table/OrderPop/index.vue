<template>
    <div>
        <common-popover
            :confirmText="confirmText"
            size="medium"
            :onFirstOpen="getOrderInfo"
            :handleConfirm="handleConfirm"
        >
            <span slot="title">{{title}}</span>
            <orderPop-edit v-if="confirmText==='保存'" slot="content" :tableData="tableData"></orderPop-edit>
            <orderPop-static slot="content" v-else :tableData="tableData"></orderPop-static>
            <slot>button</slot>
        </common-popover>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Edit from './Edit';
    import Static from './Static';
    import Popover from '../Popover';
    import {getOrderInfo} from 'api';
    Vue.component('orderPop-edit', Edit);
    Vue.component('orderPop-static', Static);
    Vue.component('common-popover', Popover);
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
