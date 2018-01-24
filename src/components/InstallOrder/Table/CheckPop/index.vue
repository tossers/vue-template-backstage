<template>
    <div style="display: inline-block">
        <common-popover
            confirmText="变更"
            size="medium"
        >
            <div slot="title" class="checkPop-title">
                <span :class="{'checkPop-title__chosen': currTab===1}" @click="currTab=1">安装信息</span>
                <span :class="{'checkPop-title__chosen': currTab===2}" @click="currTab=2">客户评价</span>
                <span :class="{'checkPop-title__chosen': currTab===3}" @click="currTab=3">附件信息</span>
            </div>
            <div slot="content">
                <checkPop-installInfo v-if="currTab===1"></checkPop-installInfo>
                <checkPop-accessory v-if="currTab===2"></checkPop-accessory>
                <checkPop-comment v-if="currTab===3"></checkPop-comment>
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
    Vue.component('common-Popover', Common.Popover);
    Vue.component('checkPop-installInfo', InstallInfo);
    Vue.component('checkPop-accessory', Accessory);
    Vue.component('checkPop-comment', Comment);
    export default {
        data() {
            return {
                currTab: 1,
            };
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
