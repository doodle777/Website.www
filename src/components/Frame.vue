<template>
<el-container>
    <el-main>
        <router-view></router-view>
    </el-main>
    <el-footer>
        <div id="dx-footer">
            <div>
                <el-link type="primary" :underline="false" rel="noopener" href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2021004572号</el-link>
            </div>
            <div>
                © 1993-2021 Duan Xu | Powered by
                <el-link type="primary" :underline="false" rel="noopener" href="https://www.aliyun.com/" target="_blank">Aliyun</el-link>
                &
                <el-link type="primary" :underline="false" rel="noopener" href="https://gitee.com/" target="_blank">Gitee</el-link>
            </div>
        </div>
    </el-footer>
</el-container>
</template>

<script>
import Router from "../route.js";

export default {
    name: "frame",
    components: {},
    data() {
        return {
            sidebarToggle: false,
            memo: "",
            Router: Router,
        };
    },
    methods: {
        sidebarToggleFun() {
            this.sidebarToggle = !this.sidebarToggle;
        },
    },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background: #1a222c;
}

.el-main {
  padding: 0 !important;
}
</style>
