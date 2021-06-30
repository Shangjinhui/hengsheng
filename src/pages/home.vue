<template>
  <div class="home">
    <start-page :video="video" @getEnd="getEnd"></start-page>
    <div class="box1">
      <div
        class="box1-inner flex flex-wrap"
        :style="{ top: aniStar ? '0' : '450px' }"
      >
        <div
          :to="{ path: '/newsview', query: { id: item.id } }"
          class="son_div"
          v-for="(item, index) in index_news"
          :key="index"
        >
          <div class="image">
            <img :src="item.photo && $imgurl + item.photo.url" alt="" />
          </div>
          <div class="txt ellipsis2" v-html="item.title"></div>
          <div class="link" @click="tolinka(item.url)">
            <img v-if="index == 0" :src="icon_1[0]" alt="" />
            <img v-if="index == 1" :src="icon_1[1]" alt="" />
            <img v-if="index == 2" :src="icon_1[2]" alt="" />
            <span>MORE +</span>
          </div>
        </div>
      </div>
    </div>

    <div class="box2">
      <div class="title">
        正在发生
        <img src="../assets/img01/OCCURRENT.png" alt="" class="" />
      </div>

      <div class="cont">
        <div class="left">
          <div class="sam_txt" v-for="(item, index) in index_cptd" :key="index">
            <div class="h_txt">{{ item.title }}</div>
            <div class="h_txt2" v-html="item.content"></div>
            <div class="h_txt3" @click="torour">MORE +</div>
          </div>
        </div>

        <div class="right">
          <div class="lefr_z" v-if="index_hd[0]">
            <div class="txt">活动</div>
            <div class="image">
              <img :src="$imgurl + index_hd[0].photo.url" alt="" />
            </div>
            <div class="txt_one">{{ index_hd[0].title }}</div>
            <div class="txt_two" v-html="index_hd[0].content"></div>
            <div class="txt_a" @click="torout">MORE +</div>
          </div>

          <div class="lefr_z lefr_r" v-if="index_hssj[0]">
            <div class="txt">恒生世界</div>
            <div class="image">
              <img :src="$imgurl + index_hssj[0].photo.url" alt="" />
            </div>
            <div class="txt_one">{{ index_hssj[0].title }}</div>
            <div class="txt_two">
              {{ index_hssj[0].yearnum }}年{{ index_hssj[0].subtitle }}
            </div>
            <div class="txt_a" @click="torous">MORE +</div>
          </div>
        </div>
      </div>

      <div class="title mar">
        业务领域
        <img src="../assets/img01/BUSINESS.png" alt="" class="" />
      </div>
    </div>

    <div class="box3">
      <my-amit :ind="selected"></my-amit>

      <div class="text" v-if="index_trade[0]">
        <div class="txt">{{ index_trade[selected].title }}</div>
        <div v-html="index_trade[selected].content"></div>

        <div class="imglogo">
          <img
            :src="
              index_trade[selected].exp1 &&
              $imgurl + index_trade[selected].exp1.url
            "
            alt=""
          />
        </div>
      </div>

      <div class="tabs" v-if="index_trade[0]">
        <div
          class="tablist cursor"
          :class="[{ hover: selected == index }]"
          v-for="(item, index) in index_trade"
          :key="index"
          @click="selected = index"
          @mousemove="secuind = index"
          @mouseout="secuind = -1"
        >
          <img
            :src="
              selected == index
                ? item.exp3 && $imgurl + item.exp3.url
                : item.exp2 && $imgurl + item.exp2.url
            "
            alt=""
          />
          <div class="txt">{{ item.title }}</div>
        </div>

        <div class="txt_w">
          <div class="txt_a" @click="toPath(index_trade[selected].id)">
            MORE .
          </div>
        </div>
      </div>
    </div>

    <div class="box4">
      <div class="title">
        行业解决方案
        <img src="../assets/img01/SOLUTION.png" alt="" class="" />
      </div>

      <div class="cont" v-if="index_solution.length > 0">
        <div class="left">
          <div
            class="left_list cursor"
            :class="selected2 == index * 2 ? 'activeL' : ''"
            v-for="(item, index) in index_solution.filter(
              (items, indexs) => indexs % 2 == 0
            )"
            :key="item.id"
            @click="changeBox4Li(index, 'l', item.id)"
          >
            <img
              :src="
                cindex == item.id
                  ? item.exp2 && $imgurl + item.exp2.url
                  : item.photo && $imgurl + item.photo.url
              "
              alt=""
            />
            <div class="bar">{{ item.title }}</div>
          </div>
        </div>

        <div
          class="middle"
          :style="{
            background: `url(${
              $imgurl + index_solution[selected2].exp1.url
            }) 0 0/cover no-repeat`,
          }"
        >
          <div class="txt">{{ index_solution[selected2].title }}</div>
          <div class="txt_list">
            <div
              v-for="(item, indxe) in index_solution[selected2].second"
              :key="indxe"
              @click="tolink(index_solution[selected2].id)"
            >
              {{ item.title }}
            </div>
          </div>
        </div>

        <div class="right">
          <div
            :class="selected2 == index * 2 + 1 ? 'activeR' : ''"
            class="right_list cursor"
            v-for="(item, index) in index_solution.filter(
              (items, indexs) => indexs % 2 == 1
            )"
            :key="item.id"
            @click="changeBox4Li(index, 'r', item.id)"
          >
            <img
              :src="
                cindex == item.id
                  ? item.exp2 && $imgurl + item.exp2.url
                  : item.photo && $imgurl + item.photo.url
              "
              alt=""
            />
            <div class="bar">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="box5">
      <div>
        <div class="title">成为全球领先的金融科技公司</div>
        <router-link tag="div" to="/about" class="txt_a"> 了解更多</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import myAmit from "@/components/amit";
import startPage from "@/components/startPage";
export default {
  components: {
    myAmit,
    startPage,
  },
  data() {
    return {
      //头部三个
      index_news: [],
      //正在发生左边
      index_cptd: [],
      //活动
      index_hd: [],
      //恒生世界
      index_hssj: [],
      //业务领域
      index_trade: [],
      //行业解决方案
      index_solution: [],
      secuind: 0,
      curindex: -1,
      curin: -1,
      curins: -1,
      info: "",
      icon_1: [
        require("@/assets/img01/b1-s1.png"),
        require("@/assets/img01/b1-s2.png"),
        require("@/assets/img01/b1-s3.png"),
      ],
      selected: 0,
      //行业解决方案
      list: [
        {
          title: "证券",
          icon: require("@/assets/img01/b4-1.png"),
          c_title: "证券",
          c_bg: require("@/assets/img01/b4-bg1.png"),
          c_list: [
            { title: "公募基金整体解决方案" },
            { title: "资管与投资解决方案" },
            { title: "财富管理解决方案" },
            { title: "机构服务解决方案" },
            { title: "风险管理与合规解决方案" },
            { title: "业务中台解决方案" },
            { title: "技术中台解决方案" },
            { title: "数据中台解决方案" },
            { title: "云基础解决方案" },
          ],
        },
        {
          title: "银行",
          icon: require("@/assets/img01/b4-2.png"),
          c_title: "银行",
          // c_bg:require(''),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "期货",
          icon: require("@/assets/img01/b4-3.png"),
          c_title: "期货",
          // c_bg:require(''),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "产业",
          icon: require("@/assets/img01/b4-4.png"),
          c_title: "产业",
          // c_bg:require(''),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "基金",
          icon: require("@/assets/img01/b4-5.png"),
          c_title: "基金",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "私募",
          icon: require("@/assets/img01/b4-6.png"),
          c_title: "私募",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "保险",
          icon: require("@/assets/img01/b4-7.png"),
          c_title: "保险",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "金控集团",
          icon: require("@/assets/img01/b4-8.png"),
          c_title: "金控集团",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "信托&AMC",
          icon: require("@/assets/img01/b4-9.png"),
          c_title: "信托&AMC",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
        {
          title: "基础设施",
          icon: require("@/assets/img01/b4-10.png"),
          c_title: "基础设施",
          // c_bg: require("@/assets/img01/b4-bg.png"),
          c_list: [{ title: "保险11111" }],
        },
      ],
      selected2: 0,
      // block1动画开始
      aniStar: false,
      // 网站开场视频
      video: "",
      cindex: 0,
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
    // this.getEnd();
    this.getdata();
  },
  methods: {
    getEnd() {
      this.aniStar = false;
      if (!window.sessionStorage.getItem("start")) return;
      let timer = setTimeout(() => {
        this.aniStar = true;
        clearTimeout(timer);
      }, 0);
    },

    //数据请求
    getdata() {
      this.$fetch({
        url: "index.php/welcome/index",
        type: "get",
      }).then((res) => {
        this.index_news = res.data.index_news;
        this.index_cptd = res.data.index_cptd;
        this.index_hd = res.data.index_hd;
        this.index_hssj = res.data.index_hssj;
        this.index_trade = res.data.index_trade;
        this.index_solution = res.data.index_solution;
        this.video = this.$imgurl + res.data.video.files.url;
        this.getEnd();     
      });
    },

    torou(id) {
      this.$router.push({ path: "/newsview", query: { id } });
    },
    torour() {
      this.$router.push({ path: "/news/product" });
    },
    torout() {
      this.$router.push({ path: "/news/bazaar" });
    },
    torous() {
      this.$router.push({ path: "/news/world" });
    },
    toPath(id) {
      this.$router.push({ path: "/business", query: { id } });
    },
    tolink(id) {
      this.$router.push({ path: "/industry", query: { id } });
    },
    changeBox4Li(index, type, key) {
      this.selected2 = type == "l" ? index * 2 : index * 2 + 1;
      this.cindex = key;
    },
    tolinka(url) {
      window.open(url);
    },
  },
};
</script>
<style>
.home .box3 .text > div p {
  margin-bottom: 12px;
}
</style>
<style lang="scss" scoped>
$header: 72px;
.box1 {
  width: 100%;
  height: 750px;
  padding-top: $header;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img01/b1-bg.png");
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}
.box1 .box1-inner {
  width: 1092px;
  margin: 0 auto;
  position: relative;
  transition: top 2.5s ease;
}
.box1 .son_div {
  margin-right: 36px;
}
.box1 .son_div:nth-of-type(3n + 3) {
  margin-right: 0;
}
.box1 .link {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.box1 .link span {
  font-size: 11px;
  font-weight: 500;
}
.box1 .son_div:nth-child(1) .link span {
  color: #8851c6;
}
.box1 .son_div:nth-child(2) .link span {
  color: #396aff;
}
.box1 .son_div:nth-child(3) .link span {
  color: #fdb51f;
}
.box1 .link img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.box1 .txt {
  font-size: 18px;
  height: 48px;
  font-weight: bold;
  color: #333333;
  margin: 32px 0 16px 0;
  line-height: 24px;
  width: 328px;
}
.box1 .image {
  width: 340px;
  height: 346px;
  cursor: pointer;
  overflow: hidden;
}
.box1 .image:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.box1 .image img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.box2 {
  width: 100%;
  height: 1073px;
  background: linear-gradient(161deg, #ffffff 0%, #ebeef0 100%);
}
.box2 .title {
  width: 160px;
  margin: 0 auto;
  padding: 138px 0 50px;
  font-size: 36px;
  font-weight: 400;
  color: #333333;
  line-height: 50px;
  letter-spacing: 4px;
  position: relative;
}
.box2 .title img {
  width: 634px;
  height: 75px;
  position: absolute;
  bottom: 60px;
  left: calc(50% - 317px);
}
.box2 .cont {
  display: flex;
  justify-content: center;
}
.box2 .cont .left {
  width: 464px;
  height: 585px;
  background: linear-gradient(
    298deg,
    rgba(255, 255, 255, 0.31),
    rgba(233, 228, 237, 0.31)
  );
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box2 .cont .right {
  width: 783px;
  height: 585px;
  background: linear-gradient(
    273deg,
    rgba(255, 255, 255, 0.301) 0%,
    hsla(219, 28%, 90%, 0.308) 100%
  );
  display: flex;
}
.box2 .sam_txt {
  width: 392px;
  margin-bottom: 36px;
}
.box2 .h_txt {
  height: 28px;
  font-size: 20px;
  color: #333333;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
}
.box2 .h_txt2 {
  height: 66px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 24px;
  margin: 11px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.box2 .h_txt3 {
  font-size: 11px;
  color: #8851c6;
  display: inline-block;
  cursor: pointer;
}
.box2 .left .sam_txt:nth-child(1) {
  margin-top: 68px;
}
.box2 .lefr_z {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}
.box2 .lefr_r {
  padding-right: 50px;
}
.box2 .lefr_z .image {
  width: 317px;
  height: 359px;
  cursor: pointer;
  overflow: hidden;
}
.box2 .lefr_z .image:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.box2 .lefr_z .image img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.box2 .lefr_z .txt {
  margin: 37px 0 16px 0;
  font-size: 28px;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
}
.box2 .lefr_z .txt_one {
  font-size: 18px;
  margin: 19px 0 10px 0;
  color: #333333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-weight: 600;
  cursor: pointer;
}
.box2 .lefr_z .txt_two {
  width: 255px;
  height: 14px;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #333333;
  // display: -webkit-box;
  // -webkit-box-orient: vertical;
  // -webkit-line-clamp: 1;
  // overflow: hidden;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;


}
.box2 .lefr_z .txt_a {
  font-size: 11px;
  color: #396aff;
  width: fit-content;
  cursor: pointer;
}
.box2 .right .lefr_z:nth-child(2) .txt_a {
  color: #fdb51f;
}
.box2 .mar {
  margin-top: 137px;
  padding: 0;
  position: relative;
}
.box2 .mar img {
  position: absolute;
  bottom: 10px;
  left: calc(50% - 243.5px);
  width: 487px;
}
.box3 {
  width: 100%;
  height: 685px;
  background-image: url(../assets/img01/index-bg.png);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  background-size: cover;
}
.box3 .imglogo img {
  position: absolute;
  top: -70px;
  left: 162px;
  max-height: 103px;
  max-width: 240px;
}
.box3 .text {
  width: 324px;
  color: #fff;
  position: absolute;
  top: 137px;
  right: 436px;
}
.box3 .text > div {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 25px;
}
.box3 .text .txt {
  font-size: 32px;
  line-height: 42px;
}
.box3 .tabs .txt_w {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: -86px;
  right: 80px;
}

.box3 .tabs .txt_a {
  font-size: 12px;
  color: #06d3da;
  text-align: right;
  width: fit-content;
  cursor: pointer;
}
.box3 .tabs {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 3;
}
.box3 .tablist {
  width: 200px;
  height: 140px;
  border: 1px solid #8c99f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  position: relative;
}
.box3 .tablist::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/img01/b3-tabs.png");
  opacity: 0;
  transition: all 0.5s linear;
  z-index: -1;
}
.box3 .tablist:hover::after {
  opacity: 1;
}
.box3 .tablist:hover .txt {
  color: #4d3ddf;
  font-weight: 600;
}
.box3 .tablist.hover {
  background: url("../assets/img01/b3-tabs.png");
}
.box3 .tablist.hover .txt {
  color: #4d3ddf;
  font-weight: 600;
}
.box3 .tablist img {
  width: 24px;
  height: 24px;
}
.box3 .tablist .txt {
  margin-top: 12px;
  font-size: 16px;
}
.box4 {
  width: 100%;
  height: 1030px;
  background: rgb(240, 242, 246);
}
.box4 .title {
  width: 240px;
  height: 50px;
  font-size: 36px;
  margin: 0 auto 55px;
  font-weight: 400;
  color: #000000;
  padding: 138px 0 64px 0;
  position: relative;
}
.box4 .title img {
  width: 503px;
  height: 75px;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 251.5px);
}
.box4 .cont {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box4 .cont .left_list,
.box4 .cont .right_list {
  width: 250px;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.5s linear;
  background-color: hsla(0, 0%, 0%, 0);
}
.box4 .cont .left_list img,
.box4 .cont .right_list img {
  width: 66px;
  height: 66px;
  margin-bottom: 10px;
}

.box4 .cont .left_list:hover {
  background: url(../assets/img01/b4-left.png);
  background-size: cover;
}
.box4 .cont .right_list:hover {
  background: url(../assets/img01/b4-right.png);
  background-size: cover;
}
.box4 .cont .left_list:hover::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 136px;
  background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
  left: 0;
}
.box4 .cont .right_list:hover::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 136px;
  background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
  right: 0;
}
.box4 .cont .activeL {
  background: url(../assets/img01/b4-left.png);
  background-size: cover;
  position: relative;
}
.box4 .cont .activeL::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 136px;
  background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
  left: 0;
}
.box4 .cont .activeR {
  background: url(../assets/img01/b4-right.png);
  background-size: cover;
  position: relative;
}
.box4 .cont .activeR::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 136px;
  background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
  right: 0;
}

.box4 .cont .left_list .bar,
.box4 .cont .right_list .bar {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}

.box5 {
  width: 100%;
  height: 200px;
  background: #06d3da;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img01/b5-bg.png");
}
.box5 .title {
  font-size: 28px;
  color: #ffffff;
  margin: 0 auto;
  letter-spacing: 5px;
}
.box5 .txt_a:hover {
  background: #fff;
  color: #3890ff;
  transition: all 0.3s linear;
}
.box5 .txt_a {
  width: 102px;
  height: 32px;
  margin: 16px auto 0;
  text-align: center;
  line-height: 32px;
  border: 1px solid #fff;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  transition: all 0.3s linear;
  cursor: pointer;
}
.box4 .middle {
  width: 699px;
  height: 675px;
}
.box4 .middle .txt {
  font-size: 28px;
  color: #333333;
  margin: 40px;
  font-weight: 600;
}
.box4 .middle .txt_list div {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 20px;
  margin-left: 40px;
  cursor: pointer;
}
@media (min-width: 1280px) {
  $header: 72px;
  .box1 {
    width: 100%;
    height: 750px;
    padding-top: $header;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img01/b1-bg.png");
    background-size: cover;
    background-position: center center;
    overflow: hidden;
  }
  .box1 .box1-inner {
    width: 1092px;
    margin: 0 auto;
    position: relative;
    transition: top 2.5s ease;
  }
  .box1 .son_div {
    margin-right: 36px;
  }
  .box1 .son_div:nth-of-type(3n + 3) {
    margin-right: 0;
  }
  .box1 .link {
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
  }
  .box1 .link span {
    font-size: 11px;
    font-weight: 500;
  }
  .box1 .son_div:nth-child(1) .link span {
    color: #8851c6;
  }
  .box1 .son_div:nth-child(2) .link span {
    color: #396aff;
  }
  .box1 .son_div:nth-child(3) .link span {
    color: #fdb51f;
  }
  .box1 .link img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .box1 .txt {
    font-size: 18px;
    height: 48px;
    font-weight: bold;
    color: #333333;
    margin: 32px 0 16px 0;
    line-height: 24px;
    width: 328px;
  }
  .box1 .image {
    width: 340px;
    height: 346px;
    cursor: pointer;
    overflow: hidden;
  }
  .box1 .image:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .box1 .image img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .box2 {
    width: 100%;
    height: 1073px;
    background: linear-gradient(161deg, #ffffff 0%, #ebeef0 100%);
  }
  .box2 .title {
    width: 160px;
    margin: 0 auto;
    padding: 138px 0 50px;
    font-size: 36px;
    font-weight: 400;
    color: #333333;
    line-height: 50px;
    letter-spacing: 4px;
    position: relative;
  }
  .box2 .title img {
    width: 634px;
    height: 75px;
    position: absolute;
    bottom: 60px;
    left: calc(50% - 317px);
  }
  .box2 .cont {
    display: flex;
    justify-content: center;
  }
  .box2 .cont .left {
    width: 464px;
    height: 585px;
    background: linear-gradient(
      298deg,
      rgba(255, 255, 255, 0.31),
      rgba(233, 228, 237, 0.31)
    );
    margin-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box2 .cont .right {
    width: 783px;
    height: 585px;
    background: linear-gradient(
      273deg,
      rgba(255, 255, 255, 0.301) 0%,
      hsla(219, 28%, 90%, 0.308) 100%
    );
    display: flex;
  }
  .box2 .sam_txt {
    width: 392px;
    margin-bottom: 36px;
  }
  .box2 .h_txt {
    height: 28px;
    font-size: 20px;
    color: #333333;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;
  }
  .box2 .h_txt2 {
    height: 66px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
    margin: 11px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .box2 .h_txt3 {
    font-size: 11px;
    color: #8851c6;
    display: inline-block;
    cursor: pointer;
  }
  .box2 .left .sam_txt:nth-child(1) {
    margin-top: 68px;
  }
  .box2 .lefr_z {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
  .box2 .lefr_r {
    padding-right: 50px;
  }
  .box2 .lefr_z .image {
    width: 317px;
    height: 359px;
    cursor: pointer;
    overflow: hidden;
  }
  .box2 .lefr_z .image:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .box2 .lefr_z .image img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .box2 .lefr_z .txt {
    margin: 37px 0 16px 0;
    font-size: 28px;
    color: #333333;
    font-weight: 600;
    cursor: pointer;
  }
  .box2 .lefr_z .txt_one {
    font-size: 18px;
    margin: 19px 0 10px 0;
    color: #333333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-weight: 600;
    cursor: pointer;
  }
  .box2 .lefr_z .txt_two {
    width: 255px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px;
    font-weight: 400;
    color: #333333;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    // overflow: hidden;
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .box2 .lefr_z .txt_a {
    font-size: 11px;
    color: #396aff;
    width: fit-content;
    cursor: pointer;
  }
  .box2 .right .lefr_z:nth-child(2) .txt_a {
    color: #fdb51f;
  }
  .box2 .mar {
    margin-top: 137px;
    padding: 0;
    position: relative;
  }
  .box2 .mar img {
    position: absolute;
    bottom: 10px;
    left: calc(50% - 243.5px);
    width: 487px;
  }
  // .box3 {
  //   width: 100%;
  //   height: 685px;
  //   background-image: url(../assets/img01/index-bg.png);
  //   display: flex;
  //   justify-content: center;
  //   align-items: flex-end;
  //   position: relative;
  //   background-size: cover;
  // }
  // .box3 .imglogo img {
  //   position: absolute;
  //   top: -70px;
  //   left: 145px;
  //   max-height: 80px;
  //   max-width: 250px;
  // }
  // .box3 .text {
  //   width: 324px;
  //   color: #fff;
  //   position: absolute;
  //   top: 137px;
  //   right: 436px;
  // }
  // .box3 .text > div {
  //   font-size: 14px;
  //   font-weight: 400;
  //   line-height: 20px;
  //   margin-bottom: 25px;
  // }
  // .box3 .text .txt {
  //   font-size: 32px;
  //   line-height: 42px;
  // }
  // .box3 .text .txt_w{
  //   display: flex;
  //   justify-content: flex-end;
  // }

  // .box3 .text .txt_a {
  //   font-size: 12px;
  //   color: #06d3da;
  //   text-align: right;
  //   width: fit-content;
  //   cursor: pointer;

  // }
  // .box3 .tabs {
  //   display: flex;
  //   justify-content: space-between;
  //   position: relative;
  //   z-index: 3;
  // }
  // .box3 .tablist {
  //   width: 200px;
  //   height: 140px;
  //   border: 1px solid #8c99f3;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   color: #fff;
  //   cursor: pointer;
  //   position: relative;
  // }
  // .box3 .tablist::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: url("../assets/img01/b3-tabs.png");
  //   opacity: 0;
  //   transition: all 0.5s linear;
  //   z-index: -1;
  // }
  // .box3 .tablist:hover::after {
  //   opacity: 1;
  // }
  // .box3 .tablist:hover .txt {
  //   color: #4d3ddf;
  //   font-weight: 600;
  // }
  // .box3 .tablist.hover {
  //   background: url("../assets/img01/b3-tabs.png");
  // }
  // .box3 .tablist.hover .txt {
  //   color: #4d3ddf;
  //   font-weight: 600;
  // }
  // .box3 .tablist img {
  //   width: 24px;
  //   height: 24px;
  // }
  // .box3 .tablist .txt {
  //   margin-top: 12px;
  //   font-size: 16px;
  // }
  .box4 {
    width: 100%;
    height: 1030px;
    background: rgb(240, 242, 246);
  }
  .box4 .title {
    width: 240px;
    height: 50px;
    font-size: 36px;
    margin: 0 auto 55px;
    font-weight: 400;
    color: #000000;
    padding: 138px 0 64px 0;
    position: relative;
  }
  .box4 .title img {
    width: 503px;
    height: 75px;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 251.5px);
  }
  .box4 .cont {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .box4 .cont .left_list,
  .box4 .cont .right_list {
    width: 250px;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: all 0.5s linear;
    background-color: hsla(0, 0%, 0%, 0);
  }
  .box4 .cont .left_list img,
  .box4 .cont .right_list img {
    width: 66px;
    height: 66px;
    margin-bottom: 10px;
  }

  .box4 .cont .left_list:hover {
    background: url(../assets/img01/b4-left.png);
    background-size: cover;
  }
  .box4 .cont .right_list:hover {
    background: url(../assets/img01/b4-right.png);
    background-size: cover;
  }
  .box4 .cont .left_list:hover::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 136px;
    background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
    left: 0;
  }
  .box4 .cont .right_list:hover::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 136px;
    background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
    right: 0;
  }
  .box4 .cont .activeL {
    background: url(../assets/img01/b4-left.png);
    background-size: cover;
    position: relative;
  }
  .box4 .cont .activeL::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 136px;
    background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
    left: 0;
  }
  .box4 .cont .activeR {
    background: url(../assets/img01/b4-right.png);
    background-size: cover;
    position: relative;
  }
  .box4 .cont .activeR::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 136px;
    background: linear-gradient(288deg, #64baff 0%, #3484ff 100%);
    right: 0;
  }

  .box4 .cont .left_list .bar,
  .box4 .cont .right_list .bar {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }

  .box5 {
    width: 100%;
    height: 200px;
    background: #06d3da;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/img01/b5-bg.png");
  }
  .box5 .title {
    font-size: 28px;
    color: #ffffff;
    margin: 0 auto;
    letter-spacing: 5px;
  }
  .box5 .txt_a:hover {
    background: #fff;
    color: #3890ff;
    transition: all 0.3s linear;
  }
  .box5 .txt_a {
    width: 102px;
    height: 32px;
    margin: 16px auto 0;
    text-align: center;
    line-height: 32px;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .box4 .middle {
    width: 699px;
    height: 675px;
  }
  .box4 .middle .txt {
    font-size: 28px;
    color: #333333;
    margin: 40px;
    font-weight: 600;
  }
  .box4 .middle .txt_list div {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 20px;
    margin-left: 40px;
    cursor: pointer;
  }
}
</style>
