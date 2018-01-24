<template>
    <div class="header">
        <h1 v-if="type===2" class="header-title">内勤结算报表</h1>
        <div v-if="type===1" class="header-nav">
            <div
                v-for="{status, name, num} in navList"
                :key="name"
                :class="{'header-nav-chosen': currId === status}"
                @click="handleClick(status)"
            >
                {{name}}<span>{{num}}</span>
            </div>
        </div>
        <div v-if="type!==3" class="header-search">
            <el-input
                size="small"
                :placeholder="placeholder || '输入搜索'"
                clearable>
            </el-input>
            <el-button>搜索</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type', 'placeholder', 'navList', 'title'], //type:1导航，2标题，3个人中心
        data() {
            return {
                currId: ''
            };
        }
    };
</script>

<style lang="less" scoped="">
    @import 'index';
</style>
