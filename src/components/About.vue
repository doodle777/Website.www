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
        男<el-divider direction="vertical"/>
        28岁<el-divider direction="vertical"/>
        3年<el-divider direction="vertical"/>
        151****6286<el-divider direction="vertical"/>
        duanxu@outlook.com<el-divider direction="vertical"/>
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
          <div
            v-for="desc in prj.description"
            :key="desc"
            style="white-space: pre-wrap"
          >
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
      education: [
        {
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
      work: [
        {
          date: "2018年7月- 今",
          company: "华为",
          subject: "Java软件开发工程师",
        },
      ],
      project: [
        {
          name: "软件作战平台",
          description: [
            "       软件作战平台，是一个端到端的测试能力管理系统。集成了测试用例管理、测试计划管理、测试用例执行、手机拨测、界面自动化等能力。主要支撑运营商服务交付降成本，" +
              "具备通信计费、短信、移动流量、5G消息等测试能力。由于运营商网络的特殊性，用户机房是逻辑隔离的，因此项目采用了云地的架构。" +
              "云端部署于华为云，地端部署于客户机房，云地通信使用API Gateway单向通信。",

            "       项目基于Spring Cloud微服务框架构建，使用Redis用于分布式Session共享及缓存管理。其中测试用例管理相关能力使用Java技术栈，界面自动化能力使用Selenuim构建。",
          ],
        },
        {
          name: "集成营销管理",
          description: [
            "       集成营销管理主要业务是支撑消费者业务营销活动。分为营销活动管理中心、营销服务管理中心、月清月结系统、资源置换系统。管理并跟踪活动申请、预算管理、活动执行、验收、结算、报表等一些列流程。",

            "       项目基于Jalor框架（基于Spring Cloud封装）构建。使用Redis、Activiti、Oracle等能力。我在项目组主要负责一些管理工作，带着约20名合作方员工开发维护该项目。负责需求澄清、任务拆分、进度跟踪、上线交付等。",
          ],
        },
      ],
      evaluation:
        "       本人兴趣爱好广泛，工作上主要技术栈为后端开发，在前端也有一定的涉猎。在项目组的时候，主要负责疑难问题的攻关，乐于分享，会在项目组内将解决问题的过程分享出来相互学习。" +
        "在职期间获得2019年度南研所优秀新员工和GTS全球优秀新员工" +
        "同时在工作之外喜欢游戏和天文，在多种类型和题材的游戏上有一定的理解。经常会和朋友一起外出拍摄星空。爱工作，享受生活。",
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

.about-title > i {
  font-size: 20px;
  font-weight: bold;
}

.about-title .el-divider--horizontal {
  margin: 5px 0 10px 0 !important;
}
</style>
