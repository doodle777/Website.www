<template>
<div id="dx-video-player" v-if="this.videoInfo">
    <iframe :src="getUrl(this.videoInfo)" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="height: 100%; width: 100%">
    </iframe>
</div>
</template>

<script>
export default {
    name: "video-play",
    props: {
        info: {},
    },
    data() {
        return {
            videoInfo: this.info || this.$route.params.info,
        };
    },
    methods: {
        getUrl(info) {
            return (
                "//player.bilibili.com/player.html" +
                "?aid=" + info.aid +
                "&bvid=" + info.bvid +
                "&page=1&high_quality=1&danmaku=1"
            );
        },
    },
    components: {},
};
</script>

<style>
#dx-video-player {
    height: 800px;
    width: 1200px;
}
</style>
