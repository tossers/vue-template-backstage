<template>
    <div id="app">
        <yixing-layout>
            <router-view/>
        </yixing-layout>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Layout from './components/Layout/Layout.vue';

    Vue.component('yixing-layout', Layout);
    export default {
        name: 'app'
    };
</script>

<style lang="less">
    @import "default";
    html, body, #app {
        margin: 0;
        height: 100%;
        overflow: auto;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 16px;
        min-width: 1200px;
    }
</style>

