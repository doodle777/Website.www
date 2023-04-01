<template>
<div class="dx-home">
    <vue-particles color="#39AFFD" :particlesNumber="30">
    </vue-particles>
    <div class="container-1">
        <div class="content">
            <div class="header">
                <el-avatar :size="160">
                    <img src="../assets/image/avatar.png" />
                </el-avatar>
            </div>
            <div class="jumps" style="display: inline-table;">
                <home-card v-for="jump in jumps" :key="jump.code" :info=jump></home-card>
            </div>
        </div>
    </div>
    <div class="container-2">

    </div>
</div>
</template>

<script>
import HomeService from "../services/HomeService";
import HomeCard from "./home/HomeCard.vue";

export default {
    name: "home",
    components: {},
    mounted() {
        HomeService.methods.getSdo().then((result) => {
            this.dailySun = result.data;
        });

        this.jumps = [{
                code: "blog",
                title: "nav.blog",
                image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            },
            {
                code: "image",
                title: "nav.image",
                image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            },
            {
                code: "video",
                title: "nav.video",
                image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            },
            {
                code: "about",
                title: "nav.about",
                image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
            }
        ]
    },
    data() {
        return {
            dailySun: [],
            jumps: [],
        };
    },
    methods: {},
    components: {
        HomeCard,
    },
};
</script>

<style>
#particles-js {
  height: 100vh !important;
}

.dx-home .container-1 {
    width: 60vw;
    margin: auto;
    vertical-align: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.dx-home .container-1 .content {
    z-index: 1;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.dx-home .container-1 .content .header {
    margin: 50px 0;
}

.dx-home .container-2 {
    background: white;
    height: calc(100vh - 60px);
}

.dx-home .info {
    width: 60vw;
}
</style>
