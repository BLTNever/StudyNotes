const menu = [
    {
        id: '10000',
        name: '资料管理',
        icon: '',
        children: [
            {
                id: '11000',
                name: '商品主档',
                icon: '',
                route: '/goods/master'
            },
            {
                id: '12000',
                name: '商品批量分档',
                icon: '',
                route: '/goods/grading'
            },
            {
                id: '13000',
                name: '商品生命状态管理',
                icon: '',
                route: '/goods/state'
            }
        ]
    },
    {
        id: '30000',
        name: '类目管理',
        icon: '',
        route: '/category/index',
    },
    {
        id: '40000',
        name: '品牌管理',
        icon: '',
        route: '/brand/index',
    },
    {
        id: '50000',
        name: 'PLU编码规则',
        icon: '',
        route: '/plu/index',
    },
    {
        id: '60000',
        name: '商品价签模版管理',
        icon: '',
        route: '/priceTag/index',
    },
    // {
    //     id: '20000',
    //     name: 'redux',
    //     icon: '',
    //     children: [
    //         {
    //             id: '21000',
    //             name: '页面111',
    //             icon: '',
    //             route: '/reduxpage/index'
    //         }
    //     ]
    // },
]

export default menu
