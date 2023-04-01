<template>
<div id="about">
    <div id="about-header">
        <div id="about-logo">
            <img src="../assets/image/avatar.png" />
        </div>
    </div>
    <div id="about-baseinfo">
        <div>段旭</div>
        <div>
            男
            <el-divider direction="vertical" />
            28岁
            <el-divider direction="vertical" />
            3年
            <el-divider direction="vertical" />
            151****6286
            <el-divider direction="vertical" />
            duanxu@outlook.com
            <el-divider direction="vertical" />
            Java开发工程师
        </div>
    </div>
    <div id="about-education">
        <div class="about-title">
            <i class="el-icon-edit">教育背景</i>
            <el-divider></el-divider>
        </div>

        <el-table :data="education" :show-header="false" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="school" label="学校" width="180">
            </el-table-column>
            <el-table-column prop="degree" label="学历"> </el-table-column>
            <el-table-column prop="subject" label="专业"> </el-table-column>
        </el-table>
    </div>
    <div id="about-work">
        <div class="about-title">
            <i class="el-icon-edit">工作经历</i>
            <el-divider></el-divider>
        </div>
        <el-table :data="work" :show-header="false" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="company" label="公司" width="180">
            </el-table-column>
            <el-table-column prop="subject" label="专业"> </el-table-column>
        </el-table>
        <ul>
            <li v-for="prj in project" :key="prj.name">
                <h4 style="margin: 15px 0 5px 0">{{ prj.name }}</h4>
                <div v-for="desc in prj.description" :key="desc" style="white-space: pre-wrap">
                    {{ desc }}
                </div>
            </li>
        </ul>
    </div>
    <div id="about-evaluation">
        <div class="about-title">
            <i class="el-icon-edit">个人评价</i>
            <el-divider></el-divider>
        </div>
        <div style="white-space: pre-wrap">{{ evaluation }}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "about",
    components: {},
    data() {
        return {
            education: [{
                    date: "2011年9月-2015年6月",
                    school: "常州大学",
                    degree: "本科",
                    subject: "电子科学与技术",
                },
                {
                    date: "2015年9月-2018年6月",
                    school: "东南大学",
                    degree: "硕士",
                    subject: "计算机科学与技术",
                },
            ],
            work: [{
                date: "2018年7月- 今",
                company: "华为",
                subject: "Java软件开发工程师",
            }, ],
            project: [{
                    name: "软件作战平台",
                    description: [],
                },
                {
                    name: "集成营销管理",
                    description: [],
                },
            ],
            evaluation: ""
        };
    },
};
</script>

<style>
#about {
    width: 800px;
    margin: auto;
    text-align: left;
    background: white;
    padding: 50px;
}

#about-logo {
    height: 100px;
    width: 100px;
    margin: auto;
    vertical-align: middle;
    box-shadow: 5px 5px 5px cornflowerblue;
}

#about-logo img {
    height: 100%;
    width: 100%;
    margin: auto;
}

#about-baseinfo {
    text-align: center;
}

.el-table {
    position: unset !important;
}

.el-table td {
    border-bottom: 0px !important;
}

.about-title {
    margin: 30px 0 0 0;
}

.about-title>i {
    font-size: 20px;
    font-weight: bold;
}

.about-title .el-divider--horizontal {
    margin: 5px 0 10px 0 !important;
}
</style>
