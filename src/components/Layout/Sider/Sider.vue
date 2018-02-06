<template>
    <div class="sider">
        <div class="sider-logo ">
            <span><img src="~assets/logo.png" alt=""></span>
            <span>Logo</span>
        </div>
        <el-menu
            :default-active="defaultMenu"
            :router="false"
            @select="handleSelect"
        >
            <el-menu-item
                v-for="{name, icon, router} in menus"
                :key="router"
                :index="router">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="'#icon--'+icon"></use>
                </svg>
                {{name}}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import config from '../../../utils/config';

    export default {
        data() {
            return {
                menus: config.menus,
                defaultMenu: this.$route.path,
            };
        },
        methods: {
            handleSelect (index, indexPath) {
                if (window.location.hash.indexOf(index) < 0) {
                    this.$router.push(index);
                }
            },
        },
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
                this.defaultMenu = to.path;
            }
        }
    };
</script>
<style lang="less" scoped>
    @import "Sider";
</style>
