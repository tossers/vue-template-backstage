<template>
    <el-card>
        <!--<img src="./assets/header/bag.png" alt=""/>-->
        <!--<span class="divider"/>-->
        <!--<img src="./assets/header/bell.png" alt=""/>-->
        <!--<span class="divider"/>-->
        <span>{{`${userInfo.user_name}您好，${date}`}}</span>
        <div>
            <AvatarPop>
                <div class="avatar">
                    <!--<img src="~assets/avatar.png" alt=""/>-->
                    <img :src="userInfo.avatar" alt=""/>
                    <span>{{userInfo.user_name}}</span>
                    <i class="el-icon-arrow-down"></i>
                </div>
            </AvatarPop>
        </div>
    </el-card>
</template>

<script>
    import Vue from 'vue';
    import AvatarPop from './AvatarPop/AvatarPop.vue';
    import {mapState} from 'vuex';
    Vue.component('AvatarPop', AvatarPop);
    export default {
        data() {
            return {
                date: '00:00:00',
            };
        },
        beforeMount() {
            this.counter();
        },
        methods: {
            counter() {
                const format = window.d3.timeFormat('%Y-%m-%d %H:%M');
                this.date = format(new Date());
                setInterval(() => {
                    this.date = format(new Date());
                }, 30000);
            }
        },
        computed: {
            ...mapState(['userInfo']),
        }
    };
</script>

<style lang="less" scoped>
    @import "Header";
</style>

