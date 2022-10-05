import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:
        [
            {
                path: "/",
                level: 1,
                icon: "el-icon-house",
                title: "nav.home",
                component: resolve => require(['@/components/Home'], resolve)
            },
            {
                path: "/blog",
                level: 1,
                icon: "el-icon-document",
                title: "nav.blog",
                component: resolve => require(['@/components/Video'], resolve)
            },
            {
                path: "/talk",
                level: 1,
                icon: "el-icon-edit-outline",
                title: "nav.talk",
                component: resolve => require(['@/components/Video'], resolve)
            },
            {
                path: "/image",
                level: 1,
                icon: "el-icon-picture-outline",
                title: "nav.image",
                component: resolve => require(['@/components/Video'], resolve)
            },
            {
                path: "/video",
                level: 1,
                icon: "el-icon-film",
                title: "nav.video",
                component: resolve => require(['@/components/Video'], resolve)
            },
            {
                path: "/video-play",
                level: 2,
                icon: "el-icon-film",
                title: "nav.video",
                name: "VideoPlay",
                component: resolve => require(['@/components/video/VideoPlay'], resolve)
            },
            {
                path: "/about",
                level: 1,
                icon: "el-icon-user",
                title: "nav.about",
                component: resolve => require(['@/components/About'], resolve)
            },
        ]
});