<template>
    <div class="layout">
        <el-container>
            <el-aside>
                <yixing-sider></yixing-sider>
            </el-aside>
            <el-container>
                <el-header>
                    <yixing-header></yixing-header>
                </el-header>
                <el-main>
                    <slot>nothing</slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Sider from './Sider/Sider.vue';
    import Header from './Header/Header.vue';
    import {mapActions} from 'vuex';

    Vue.component('yixing-sider', Sider);
    Vue.component('yixing-header', Header);
    export default {
        data() {
            return {};
        },
        beforeMount() {
            this.getUserInfo();
        },
        methods: {
            ...mapActions(['getUserInfo'])
        }
    };
</script>

<style lang="less" scoped>
    @import './Layout';
</style>
