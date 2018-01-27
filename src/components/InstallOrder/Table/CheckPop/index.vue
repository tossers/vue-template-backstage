<template>
    <div style="display: inline-block">
        <common-popover
            :confirmText="confirmText"
            :onFirstOpen="getOrderInfo"
            :handleConfirm="handleConfirm"
            :noConfimBtn="true"
            size="medium"
        >
            <div slot="title" class="checkPop-title">
                <span :class="{'checkPop-title__chosen': currTab===1}" @click="currTab=1">安装信息</span>
                <span :class="{'checkPop-title__chosen': currTab===2}" @click="currTab=2">客户评价</span>
                <span :class="{'checkPop-title__chosen': currTab===3}" @click="currTab=3">附件信息</span>
            </div>
            <div slot="content">
                <div v-if="currTab===1">
                    <common-editOrder :tableData="tableData" v-if="confirmText==='保存'"></common-editOrder>
                    <common-staticOrder v-else :tableData="tableData"></common-staticOrder>
                </div>
                <checkPop-comment v-if="currTab===2"></checkPop-comment>
                <checkPop-accessory v-if="currTab===3"></checkPop-accessory>
            </div>
            <slot>button</slot>
        </common-popover>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Common from 'components/Common';
    import InstallInfo from './InstallInfo.vue';
    import Accessory from './Accessory.vue';
    import Comment from './Comment.vue';
    import {getOrderInfo} from 'api';
    Vue.component('common-Popover', Common.Popover);
    Vue.component('common-editOrder', Common.EditOrder);
    Vue.component('common-staticOrder', Common.StaticOrder);
    Vue.component('checkPop-installInfo', InstallInfo);
    Vue.component('checkPop-accessory', Accessory);
    Vue.component('checkPop-comment', Comment);
    export default {
        data() {
            return {
                currTab: 2,
                confirmText: '变更',
                tableData: [],
            };
        },
        methods: {
            async getOrderInfo() {
                return getOrderInfo().then(res => {
                    console.log(res.data.list);
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
        }
    };
</script>

<style lang="less" scoped>
    @import '../../../../default';
    .checkPop-title {
        &>span{
            margin-right: 20px;
            cursor: pointer;
            &:hover {
                color: @orange;
            }
        }
        .checkPop-title__chosen {
            color: @orange;
        }
    }
</style>
