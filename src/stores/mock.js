import Mock from 'mockjs';

const {Random, mock} = Mock;
const navList = [
    {num: '', name: '全部', status: 'all'},
    {num: '88', name: '待付款', status: 'payment'},
    {num: '17', name: '待发货', status: 'fahuo'},
    {num: '1', name: '已发货', status: 'shipped'},
    {num: '1', name: '退换货', status: 'tuihuan'},
    {num: '', name: '已完成', status: 'completed'},
    {num: '', name: '已关闭', status: 'closed'}
];
// Mock响应模板

mock('http://userInfo.com', {
    userInfo: {
        user_name: '@cname',
        avatar: Random.image()
    },
});

mock('http://sellOrderList.com', {
    'list|15': [{
        'id|+1': 88,
        'orderId': () => Random.date('T'),
        'buyer': '@cname',
        'payDate': () => Random.datetime('yyyy-MM-dd HH:mm'),
        'appointDate': () => Random.datetime('yyyy-MM-dd HH:mm'),
        'status': () => Random.integer(0, 5), //0未分配1部分分配2已分配3取消4退货5换货
    }],
    navList,
});

mock('http://orderInfo.com', {
    'list|3': [{
        'product': {
            name: 'FTXX335RCNW / RXX335RCN 1.5匹3级能效变频X系列壁挂式冷暖空调白',
            attrs: [{
                attrs_name: '型号',
                attrs_types: ['FTXX335RCNW_1.5匹'],
            }]
        },
        'amount': () => Random.integer(2, 5),
        'distributed': () => Random.integer(1, 2),
    }],
});

mock('http://installOrderList.com', {
    'list|15': [{
        'id|+1': 88,
        'orderId': () => Random.date('T'),
        'installOrderId': () => Random.date('T'),
        'client': '@cname',
        'installDate': () => Random.datetime('yyyy-MM-dd'),
        'phone': () => Random.integer(13266700000, 13366700000),
        'company': '广州优微家机电设备安装有限公司',
        'team': 'A4安装队',
        'type': () => Random.integer(0, 3),     //0送装1送货2物流3自提
        'createTime': () => Random.datetime('yyyy-MM-dd HH:mm'),
        'status': () => Random.integer(0, 3),   //0受理中1已指派2已完成3作废
    }],
    navList,
});
