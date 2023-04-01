<template>
<el-card class="dx-home-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="play">
    <img :src="info.image" class="image" referrerPolicy="no-referrer" alt="" />
    <div style="padding: 14px">
        <div class="title">
            <span>{{ $t(info.title) }}</span>
        </div>

    </div>
</el-card>
</template>

<script>
export default {
    name: "home-card",
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
.dx-home-card {
    width: 250px;
    float: left;
    margin: 25px;
}

.dx-home-card .image {
    width: 250px;
    height: 300px;
    display: block;
}

.dx-home-card .title {
    height: 35px;
}

.el-card.is-hover-shadow:hover {
    box-shadow: 0 10px 20px 0 #FFFFFF !important;
    cursor: pointer;
}
</style>
