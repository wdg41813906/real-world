/**
 * Nuxt.js配置文件
*/

export default {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            //清楚Nuxt.js基于pages目录生成的路由表规则
            routes.splice(0)
            routes.push(...[
                {
                    path: '/',
                    //   component:resolve(__dirname,'pages/layout/index.vue')
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            path: '',//默认子路有
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/')
                        },
                        {
                            path: '/login',//默认子路有
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/register',//默认子路有
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/profile/:username',//默认子路有
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/')
                        },
                        {
                            path: '/settings',//默认子路有
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/')
                        },
                        {
                            path: '/editor',//默认子路有
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/')
                        },
                        {
                            path: '/article/:slug',//默认子路有
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/')
                        }
                    ]
                }
            ])
            // routes.push({
            //   name: 'custom',
            //   path: '*',
            //   component: resolve(__dirname, 'pages/404.vue')
            // })
            // console.log(routes)
        }
    },
    //注册插件
    pluginsL: ['~/plugins/request.js', '~/plugins/dayjs.js']

}