<template>
    <div>
        <common-popover
            confirmText="保存"
            size="small"
        >
            <span slot="title">新建售后订单</span>
            <div slot="content" style="padding: 0 100px;">
                <common-orderForm></common-orderForm>
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

</style>
