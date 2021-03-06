import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter);
import home from "../components/home";

const routes = [{
        path: '/login',
        name: "login",
        meta: {
            title: '登录'
        },
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/',
        redirect: '/selection', //设置默认指向的路径
        component: home,
        meta: {
            title: '首页'
        },
        children: [
            //排序模块
            {
                path: 'selection',
                component: () => import('../components/sort/selection'),
                meta: {
                    title: '选择排序'
                }
            }, {
                path: 'insertion',
                component: () => import('../components/sort/insertion'),
                meta: {
                    title: '插入排序'
                }
            }, {
                path: 'shell',
                component: () => import('../components/sort/shell'),
                meta: {
                    title: '希尔排序'
                }
            }, {
                path: 'merge',
                component: () => import('../components/sort/merge'),
                meta: {
                    title: '归并排序'
                }
            }, {
                path: 'bubble',
                component: () => import('../components/sort/bubble'),
                meta: {
                    title: '冒泡排序'
                }
            }, {
                path: 'mergeBU',
                component: () => import('../components/sort/mergeBU'),
                meta: {
                    title: '自底向上的归并排序'
                }
            }, {
                path: 'quick',
                component: () => import('../components/sort/quick'),
                meta: {
                    title: '快速排序'
                }
            }, {
                path: 'quick3way',
                component: () => import('../components/sort/quick3way'),
                meta: {
                    title: '三分快速排序'
                }
            }, {
                path: 'heap',
                component: () => import('../components/sort/heap'),
                meta: {
                    title: '堆排序'
                }
            }
            //查找模块
            , {
                path: 'SequentialSearch',
                component: () => import('../components/search/SequentialSearch'),
                meta: {
                    title: '顺序查找'
                }
            }, {
                path: 'BinarySearch',
                component: () => import('../components/search/BinarySearch'),
                meta: {
                    title: '二分查找'
                }
            }, {
                path: 'BST',
                component: () => import('../components/search/BST'),
                meta: {
                    title: '二叉查找树'
                }
            }
        ]
    }

]
let router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title + "-动画算法"
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router