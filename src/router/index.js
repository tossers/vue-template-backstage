import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import SellOrder from 'components/SellOrder';
import InstallOrder from 'components/InstallOrder';
import Report from 'components/Report';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/sellOrder'
        }, {
            path: '/sellOrder',
            name: 'SellOrder',
            component: SellOrder
        }, {
            path: '/installOrder',
            name: 'InstallOrder',
            component: InstallOrder
        }, {
            path: '/Report',
            name: 'Report',
            component: Report
        }
    ]
});
