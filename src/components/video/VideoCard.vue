<template>
  <el-card
    class="dx-video-card"
    :body-style="{ padding: '0px' }"
    shadow="hover"
    @click.native="play"
  >
    <img
      :src="info.pic + '@320w_200h_100Q_1c.webp'"
      class="image"
      referrerPolicy="no-referrer"
      alt=""
    />
    <div style="padding: 14px">
      <div class="video-title">
        <span>{{ info.title }}</span>
      </div>

      <div class="video-info">
        <span>
          <i class="el-icon-video-play">{{ "  " + info.play }}</i>
        </span>
        <span>
          <i class="el-icon-s-comment">{{ "  " + info.comment }}</i>
        </span>
        <span>
          <i class="el-icon-date" style="float: right">{{
            "  " + parseDate(info.created)
          }}</i>
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "video-card",
  props: {
    info: {},
  },
  methods: {
    play() {
        this.$router.push({
          name: 'VideoPlay',
          params: {
            info: this.info
          }
        })
    },
    parseDate(timeSeconds) {
      var date = new Date(timeSeconds * 1000);
      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    },
  },
  components: {},
};
</script>

<style>
.dx-video-card {
  width: 320px;
  float: left;
  margin: 20px;
}
.video-title {
  height: 35px;
  /* white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; */
}
.video-info {
  text-align: left;
  font-size: 12px;
  margin-top: 10px;
}
.video-info > span {
  padding-right: 10px;
}

.el-card.is-hover-shadow:hover {
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 30%) !important;
}
</style>
