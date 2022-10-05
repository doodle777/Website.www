<template>
  <el-container>
    <el-aside width="0" id="dx-sidebar">
      <div id="dx-button" align="left">
        <el-button
          type="text"
          circle
          v-bind:class="{
            'hamburger hamburger--slider is-active': sidebarToggle,
          }"
          @click="sidebarToggleFun"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span> </span
        ></el-button>
      </div>
      <div id="dx-button-menu">
        <el-menu
          default-active="1"
          :router="true"
          :collapse="true"
          v-if="!sidebarToggle"
        >
          <el-menu-item
            v-for="menu in Router.options.routes"
            :key="menu.path"
            :index="menu.path"
          >
            <i :class="menu.icon"></i>
            <span slot="title">{{ $t(menu.title) }}</span>
          </el-menu-item>
        </el-menu>
      </div>

      <div id="dx-bar">
        <el-drawer
          title="Title"
          :visible.sync="sidebarToggle"
          direction="ltr"
          :show-close="false"
          :with-header="false"
          :modal="false"
        >
          <div id="dx-logo">
            <img src="../assets/image/avatar.png" />
          </div>
          <div id="dx-menu">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              :router="true"
            >
              <el-menu-item
                v-for="menu in Router.options.routes"
                :key="menu.path"
                :index="menu.path"
              >
                <i :class="menu.icon"></i>
                <span slot="title">{{ $t(menu.title) }}</span>
              </el-menu-item>
            </el-menu>
          </div>
          <div id="dx-link"></div>
        </el-drawer>
      </div>
    </el-aside>

    <el-container id="dx-content">
      <el-main id="dx-main">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div id="dx-footer">
          <div>
            <el-link
              type="primary"
              :underline="false"
              rel="noopener"
              href="https://beian.miit.gov.cn/"
              target="_blank"
              >苏ICP备2021004572号</el-link
            >
          </div>
          <div>
            © 1993-2021 Duan Xu | Powered by
            <el-link
              type="primary"
              :underline="false"
              rel="noopener"
              href="https://www.aliyun.com/"
              target="_blank"
              >Aliyun</el-link
            >
            &
            <el-link
              type="primary"
              :underline="false"
              rel="noopener"
              href="https://gitee.com/"
              target="_blank"
              >Gitee</el-link
            >
          </div>
        </div>
      </el-footer>
    </el-container>
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
#dx-sidebar {
  /* width: 300px; */
  height: 100%;
}
#dx-button {
  /* padding: 10px 0 0 10px; */
  position: absolute;
  z-index: 3000;
  line-height: 0;
}
#dx-button-menu {
  z-index: 2000;
  position: fixed;
  margin-top: 48px;
}
#dx-button-menu .el-menu {
  background-color: transparent;
}
#dx-bar div {
  display: inline-block;
}
#dx-logo {
  height: 150px;
  width: 150px;
  margin: 50px;
  vertical-align: middle;
}
#dx-logo img {
  height: 100%;
  width: 100%;
  margin: auto;
}
#dx-content {
  height: 100%;
  width: 100%;
  position: fixed;
  margin: -8px;
}

#dx-footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
  vertical-align: bottom;
}

.el-button {
  height: 48px;
  width: 48px;
  border: 0 !important;
  padding: 0 !important;
}
.el-button:hover {
  background-color: #e5f1fd !important;
}
.el-drawer {
  width: 300px !important;
}
.el-menu {
  width: 300px;
  border-right: 0 !important;
}
.el-menu li {
  width: 150px;
  float: left;
  display: block;
}
.el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}

.el-menu--collapse {
  width: 48px !important;
}
.el-menu--collapse li {
  width: 48px;
}
.el-menu--collapse .el-tooltip {
  padding: 0 14px !important;
}

.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #0078e7;
}

.hamburger-box {
  width: 25px;
  height: 18px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 25px;
  height: 2px;
  background-color: #0078e7;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -8px;
}
.hamburger-inner::after {
  bottom: -8px;
}

/*
   * Slider
   */
.hamburger--slider .hamburger-inner {
  top: 2px;
}
.hamburger--slider .hamburger-inner::before {
  top: 10px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}
.hamburger--slider .hamburger-inner::after {
  top: 20px;
}

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--slider.is-active .hamburger-inner::before {
  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
  opacity: 0;
}
.hamburger--slider.is-active .hamburger-inner::after {
  transform: translate3d(0, -20px, 0) rotate(-90deg);
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* width: 80%; */
  /* margin: auto; */
}
</style>
