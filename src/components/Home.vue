<template>
  <div id="home">
    <el-carousel :interval="4000" type="card" height="256px" width="500px">
      <el-carousel-item v-for="item in dailySun" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import HomeService from "../services/HomeService";

export default {
  name: "home",
  components: {},
  mounted() {
    HomeService.methods.getSdo().then((result) => {
      this.dailySun = result.data;
    });
  },
  data() {
    return {
      dailySun: [],
    };
  },
  methods: {},
};
</script>

<style>
/* @import "../assets/css/star.css"; */
</style>
