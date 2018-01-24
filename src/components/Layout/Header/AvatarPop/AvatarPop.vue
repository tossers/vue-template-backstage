<template>
    <el-popover
        placement="bottom-end"
        width="100"
        trigger="hover"
        popper-class="header-avatarPop"
    >
        <div class="header-avatarPop-content">
            <span @click="">个人中心</span>
            <span @click="">退出登录</span>
        </div>
        <slot slot="reference"></slot>
    </el-popover>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style lang="less">
   @import "AvatarPop";
</style>
