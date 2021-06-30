import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        // 首页
        {
            path: '/',
            name: 'home',
            component: () =>
                import ('@/pages/home'),
            meta: {
                cache: true,
            }

        },
        // 搜索结果页
        {
            path: '/findpage',
            name: 'findPage',
            component: () =>
                import ('@/pages/findPage'),
            meta: {
                cache: false,
            }

        },
        // 在线留言
        {
            path: '/leavemsg',
            name: 'leaveMsg',
            component: () =>
                import ('@/pages/leaveMsg'),
            meta: {
                cache: true,
            }

        },

        //关于恒生
        {
            path: "/about",
            name: "about",
            component: () =>
                import ('@/pages/about'),
            mate: {
                cache: true
            }
        },

        // 加入我们
        {
            path: '/joinus',
            name: 'joinUs',
            component: () =>
                import ('@/pages/joinUs'),
            meta: {
                cache: true,
            }

        },
        // 投资者关系
        {
            path: '/investor',
            name: 'investor',
            component: () =>
                import ('@/pages/investor'),
            meta: {
                cache: true,
            }

        },
        // 投资者关系-更多页
        {
            path: '/investornotice',
            name: 'investorNotice',
            component: () =>
                import ('@/pages/investorNotice'),
            meta: {
                cache: false,
            }

        },
        // 客户服务
        {
            path: '/customer',
            name: 'customer',
            component: () =>
                import ('@/pages/customer'),
            meta: {
                cache: true,
            }
        },
        // Light
        {
            path: '/light',
            name: 'light',
            component: () =>
                import ('@/pages/light'),
            meta: {
                cache: false,
            }
        },
        // Light二级页
        {
            path: '/lightcon',
            name: 'lightcon',
            component: () =>
                import ('@/pages/lightCon'),
            meta: {
                cache: false,
            }
        },
        // 产品与解决方案-业务领域
        {
            path: '/business',
            name: 'business',
            component: () =>
                import ('@/pages/business'),
            meta: {
                cache: false,
            }
        },
        // 产品与解决方案-行业解决方案
        {
            path: '/industry',
            name: 'industry',
            component: () =>
                import ('@/pages/industry'),
            meta: {
                cache: false,
            }
        },
        //新闻动态
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('@/pages/news'),
            meta: {
                cache: true,
            },
            redirect: '/news/product',
            children: [
                //产品动态
                {
                    path: '/news/product',
                    name: 'product',
                    component: () =>
                        import ('@/pages/news/product'),
                    meta: {
                        cache: false,
                    }
                },
                //公司新闻
                {
                    path: '/news/company',
                    name: 'company',
                    component: () =>
                        import ('@/pages/news/company'),
                    meta: {
                        cache: false,
                    }
                },
                //市场活动
                {
                    path: '/news/bazaar',
                    name: 'bazaar',
                    component: () =>
                        import ('@/pages/news/bazaar'),
                    meta: {
                        cache: false,
                    }
                },
                //恒生世界
                {
                    path: '/news/world',
                    name: 'world',
                    component: () =>
                        import ('@/pages/news/world'),
                    meta: {
                        cache: false,
                    }
                }
            ]
        },
        //新闻列表
        {
            path: '/newslist',
            name: 'newslist',
            component: () =>
                import ('@/pages/newslist'),
            meta: {
                cache: false,
            }
        },
        //新闻详情
        {
            path: '/newsview',
            name: 'newsview',
            component: () =>
                import ('@/pages/newsview'),
            meta: {
                cache: false,
            }
        },
        //联系我们
        {
            path: '/contactus',
            name: 'contactUs',
            component: () =>
                import ('@/pages/contactUs'),
            meta: {
                cache: true,
            }
        }
    ]
})
export default router