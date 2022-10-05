<template>
  <div id="dx-video">
    <video-card v-for="video in videos" :key="video.aid" :info=video></video-card>
  </div>
</template>

<script>
import VideoServiceVue from "../services/VideoService.vue";
import VideoCard from "./video/VideoCard.vue";

export default {
  name: "videos",
  mounted() {
    VideoServiceVue.methods.getVideoList().then((result) => {
      this.videos = result.data;
    });
  },
  data() {
    return {
      videos: [],
    };
  },
  components: {
    VideoCard,
  },
};
</script>

<style>
</style>
