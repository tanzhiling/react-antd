export default  [{
    key: 'home',
    path: '/home',
    icon: 'home',
    title: '首页',
}, {
    key: 'goods',
    path: '/goodsManage',
    icon: 'shopping-cart',
    title: '商品管理',
    list: [{
            key: 'goods_up',
            path: '/goodsManage',
            title: '上架商品',
        },
        {
            key: 'goods_down',
            path: '/goodsManage',
            title: '下架商品',
        }
    ]
}, {
    key: 'order',
    path: '/orderManage',
    icon: 'switcher',
    title: '订单管理',
}, {
    key: 'member',
    path: '/member',
    icon: 'team',
    title: '客户管理',
}, {
    key: 'system',
    path: '/system',
    icon: 'setting',
    title: '系统管理',
}, {
    key: 'user',
    path: '/user',
    icon: 'user',
    title: '个人设置',
    list: [{
            key: 'user_center',
            path: '/goods',
            title: '个人中心',
        },
        {
            key: 'user_password',
            path: '/goods',
            title: '修改密码',
        }
    ]
}, {
    key: 'message',
    path: '/message',
    icon: 'message',
    title: '站内信息',
},]