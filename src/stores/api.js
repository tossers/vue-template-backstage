import axios from 'axios';

//获取用户信息
export async function getUserInfo() {
    return axios('http://userInfo.com');
}

//获取订单管理列表
export async function getSellOrderList() {
    return axios('http://sellOrderList.com');
}

//获取订单详情
export async function getOrderInfo() {
    return axios('http://orderInfo.com');
}

//获取安装单列表
export async function getInstallOrderList() {
    return axios('http://installOrderList.com');
}
