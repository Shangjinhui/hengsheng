<template>
  <div class="about">
    <div
      class="box1 wow fadeInUp"
      ref="anch0"
      :style="`background-image:url(${tab1.photo && $imgurl + tab1.photo.url})`"
    >
      <div class="text">
        <div class="txt">关于恒生</div>
        <div class="img">
          <img src="../assets/img01/ABOUT HUNDSUN.png" alt="" />
        </div>
        <div class="txt_b" v-html="tab1.content"></div>
      </div>
    </div>

    <div class="box2 wow fadeInUp" ref="anch1">
      <div class="title">
        管理团队
        <img src="../assets/img01/Management team.png" alt="" />
      </div>
      <div class="accordion">
        <div
          class="sam"
          :class="curindex == index ? 'big' : ''"
          v-for="(item, index) in tab2"
          :key="index"
          @click="asscli(index)"
        >
          <div class="name">
            <div class="top">{{ item.title }}</div>
            <div class="bottom">{{ item.subtitle }}</div>
          </div>
          <div class="blk">
            <img :src="$imgurl + item.photo.url" alt="" />
          </div>
          <div class="text" v-show="curindex == index">
            <div class="txt_w" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="box3 wow fadeInUp" ref="anch2">
      <img class="bg" src="../assets/img01/ab3-bg.png" alt="" />

      <div class="title">
        发展历程
        <img src="../assets/img01/title2.png" alt="" />
      </div>
      <div class="cont">
        <div class="top">
          <div class="top-inner" :style="{ left: -lc_l * 8.07292 + 'vw' }">
            <div class="wheel-out" v-for="(item, index) in tab3" :key="index">
              <div
                class="wheel cursor"
                :class="[{ on: lc_selected == index }]"
                @click="changeLc(index)"
              >
                <p>{{ item.year }}年</p>
                <img
                  v-if="lc_selected == index"
                  src="../assets/img01/che1.png"
                  alt=""
                />
                <div v-else>
                  <img class="default" src="../assets/img01/che.png" alt="" />
                  <img class="hover" src="../assets/img01/ches.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="bot" v-if="tab3.length > 0">
          <div v-for="(item, index) in tab3[lc_selected].list" :key="index">
            <p v-html="item.content"></p>
          </div>
        </div> -->

        <div class="about">
          <div class="swiper-container">
            <div class="swiper-wrapper bot">
              <div
                class="swiper-slide"
                v-for="(item, index) in tab3[lc_selected].list"
                :key="index"
              >
                <p v-html="item.content"></p>
              </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </div>
        </div>
      </div>
      <div class="mle"></div>
    </div>

    <div
      class="box4"
      :style="`background-image:url(${
        tab4_1.photo && $imgurl + tab4_1.photo.url
      })`"
    >
      <div class="bott">
        <div class="therr mop wow fadeInUp">
          <div class="txt">{{ tab4_2[0] && tab4_2[0].title }}</div>
          <div class="txtb">{{ tab4_2[0] && tab4_2[0].content }}</div>
        </div>

        <div class="therr mop wow fadeInUp">
          <div class="txt">{{ tab4_2[1] && tab4_2[1].title }}</div>
          <div class="txtb">{{ tab4_2[1] && tab4_2[1].content }}</div>
        </div>

        <div class="therr wow fadeInUp">
          <div class="txt">{{ tab4_2[2] && tab4_2[2].title }}</div>
          <div class="txt_f">
            <div
              v-for="(item, index) in tab4_2[2] && tab4_2[2].explode"
              :key="index"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box5 wow fadeInUp" ref="anch3">
      <div class="title">
        荣誉资质
        <img src="../assets/img01/title3.png" alt="" />
      </div>

      <div class="content">
        <div class="top">
          <div class="top_1 wow fadeInUp">
            <div class="txt" v-html="tab5[0] && tab5[0].title"></div>
            <div class="text" v-html="tab5[0] && tab5[0].content"></div>
            <div class="img">
              <img src="../assets/img01/ab5-1.png" alt="" />
            </div>
          </div>
          <div class="top_2 wow fadeInUp">
            <div class="txt" v-html="tab5[1] && tab5[1].title"></div>
            <div class="text" v-html="tab5[1] && tab5[1].content"></div>
            <div class="img">
              <img src="../assets/img01/ab5-2.2.png" alt="" />
            </div>
          </div>
          <div class="top_3 wow fadeInUp">
            <div class="txt" v-html="tab5[2] && tab5[2].title"></div>
            <div class="text" v-html="tab5[2] && tab5[2].content"></div>
            <div class="img">
              <img src="../assets/img01/ab5-3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom_1 wow fadeInUp">
            <div class="txt" v-html="tab5[3] && tab5[3].title"></div>
            <div class="text" v-html="tab5[3] && tab5[3].content"></div>
            <div class="img">
              <img src="../assets/img01/ab5-4.png" alt="" />
            </div>
          </div>
          <div class="bottom_2 wow fadeInUp">
            <div class="txt" v-html="tab5[4] && tab5[4].title"></div>
            <div class="text" v-html="tab5[4] && tab5[4].content"></div>
            <div class="img">
              <img src="../assets/img01/ab5-5.png" alt="" />
            </div>
          </div>
          <div class="bottom_3 wow fadeInUp">
            <div class="txt" v-html="tab5[5] && tab5[5].title"></div>
            <div class="img">
              <img src="../assets/img01/ab5-6.png" alt="" />
              <img src="../assets/img01/ab5-8.png" alt="" />
            </div>
          </div>
          <div class="bottom_4 wow fadeInUp">
            <div class="txt" v-html="tab5[6] && tab5[6].title"></div>
            <div class="img">
              <img src="../assets/img01/ab5-7.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let WOW = require("wowjs");
import Swiper from "swiper";
export default {
  name: "About",
  data() {
    return {
      curindex: 0,
      lc_selected: 0, //当前选中的
      lc_l: 0, //上次最左边的下标
      tab1: [],
      //管理团队
      tab2: [],
      tab3: [
        {
          list: [],
        },
      ],
      tab4_1: [],
      tab4_2: [],
      tab5: [],
      swiper: null,
    };
  },
  methods: {
    asscli(index) {
      clearInterval(this.timer);
      this.curindex = index;
      this.initSwiper();
    },
    initSwiper() {
      this.timer = setInterval(() => {
        this.curindex++;
        if (this.curindex > 4) {
          this.curindex = 0;
        }
      }, 3500);
    },
    changeLc(index) {
      let lc_l = this.lc_l,
        len = this.tab3.length;
      //console.log(index,len,lc_l)
      if (index - lc_l > 3) {
        this.lc_l = len - lc_l - 7 >= index - lc_l - 3 ? index - 3 : len - 7;
      } else if (index - lc_l < 3) {
        this.lc_l = index > 3 ? lc_l - (3 - (index - lc_l)) : 0;
      }
      this.lc_selected = index;
      this.$nextTick(() => {
        this.swiper.slideTo(0, 0, false);
        this.initSwipers();
      });
    },
    //数据请求
    getdata() {
      this.$fetch({
        url: "index.php/about/initPage",
        type: "get",
      }).then((res) => {
        this.tab1 = res.data.tab1;
        this.tab2 = res.data.tab2;
        this.tab4_1 = res.data.tab4_1;
        this.tab4_2 = res.data.tab4_2;
        this.tab5 = res.data.tab5;
        this.tab3 = res.data.tab3;
        this.$nextTick(() => {
          let wow = new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          }).init();
          this.initSwipers();
        });
      });
    },
    initSwipers() {
      if (this.swiper) this.swiper.destroy(false);
      this.swiper = new Swiper(".swiper-container", {
        slidesPerView: 3, //显示个数
        // centeredSlides: true,
        centeredSlidesBounds: true,
        // 如果需要分页器
        pagination: ".swiper-pagination",
        // 如果需要前进后退按钮
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        centeredSlidesBounds: true,
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        // 如果需要自动切换海报
        // autoplay: {
        //   delay: 1000,//时间 毫秒
        //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        // },
      });
    },
  },
  watch: {
    $route(val, oldval) {
      //console.log(val,oldval)
      if (val.query.anch != oldval.query.anch) {
        let dom = val.query.anch;
        if (dom) this.$until.scrollAnch(this.$refs[dom]);
      }
    },
  },
  mounted() {
    let dom = this.$route.query.anch;
    if (dom) this.$until.scrollAnch(this.$refs[dom]);
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
    this.initSwiper();
    //管理团队自动播放
    this.getdata();
  },

  //跳转其他路由清除定时器：
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style scoped>
.box1 {
  height: 768px;
  background: url("../assets/img01/ab1-bg.png");
  background-size: cover;
  position: relative;
}
.box1 .text {
  position: absolute;
  top: 235px;
  left: 376px;
  width: 670px;
  overflow: hidden;
}
.box1 .txt {
  font-size: 36px;
  font-weight: 400;
  color: #333333;
}
.box1 .img {
  width: 292px;
  height: 42px;
  margin: 20px 0 30px;
}
.box1 .txt_b {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 28px;
}
.box2 {
  height: 730px;
}
.box2 .title {
  width: 162px;
  padding: 122px 0 50px 0;
  margin: 0 auto;
  position: relative;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
}
.box2 .title img {
  width: 624px;
  height: 50px;
  position: absolute;
  bottom: 60px;
  left: calc(50% - 312px);
  z-index: -1;
}
.box2 .accordion {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
}
.box2 .sam {
  width: 218px;
  height: 404px;
  position: relative;
  transition: all 0.3s linear;
  cursor: pointer;
}
.box2 .big {
  width: 328px;
  height: 404px;
  background-image: url("../assets/img01/ab2-bg.png") !important;
  /* transition: all 0.3s linear; */
}
.box2 .sam:nth-child(1) {
  background: linear-gradient(315deg, #6d8dca 0%, #adc7f7 100%);
}
.box2 .sam:nth-child(2) {
  background: linear-gradient(315deg, #506ea8 0%, #90aee6 100%);
}
.box2 .sam:nth-child(3) {
  background: linear-gradient(315deg, #0d2a61 0%, #7898d6 100%);
}
.box2 .sam:nth-child(4) {
  background: linear-gradient(315deg, #0a1c40 0%, #5274b5 100%);
}
.box2 .sam:nth-child(5) {
  background: linear-gradient(315deg, #071737 0%, #33538d 100%);
}
.box2 .name {
  margin: 42px 0 0 24px;
  color: #fff;
}
.box2 .blk img {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 218px;
  height: 309px;
}
.box2 .name .top {
  font-size: 22px;
}
.box2 .name .bottom {
  font-size: 14px;
}
.box2 .sam .text {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 142px;
  background: linear-gradient(90deg, rgba(56, 115, 255, 0) 0%, #0d3dfa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.box2 .sam .text .txt_w {
  width: 280px;
  font-size: 12px;
  color: #ffffff;
  line-height: 22px;
}
.box3 {
  height: 613px;
  background: linear-gradient(
    177deg,
    rgba(234, 240, 245, 0.2) 0%,
    rgba(239, 245, 250, 0.2) 62%,
    #eef4f9 100%
  );
  position: relative;
}
.box3 .bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;
}
.box3 .title {
  width: 160px;
  margin: 0 auto;
  padding-top: 127px;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  position: relative;
}
.box3 .title img {
  width: 264px;
  height: 50px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-53%);
  z-index: -1;
}
.box3 .cont {
  width: 1085px;
  margin: 0 auto;
  margin-top: 97px;
  overflow: hidden;
}
.box3 .mle {
  width: 100%;
  height: 1px;
  background: #eee;
  position: absolute;
  left: 0;
  top: 315px;
  z-index: -1;
}
.box3 .bot {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: fit-content;
}
.box3 .bot div {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
  width: 272px !important;
  height: 126px;
  background: #ffffff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  text-indent: 2em;
  padding: 15px 9px 0 13px;
  margin-right: 40px;
  position: relative;
  overflow: auto;
}
.box3 .bot div::after {
  content: "";
  position: absolute;
  top: 25px;
  left: 20px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #2266ff;
}
.box3 .top {
  width: 100%;
  padding-top: 10px;
  overflow: hidden;
  /* display: flex; */
  /* justify-content: space-between; */
  margin-left: -44px;
}
.box3 .top .top-inner {
  width: max-content;
  display: flex;
  position: relative;
  left: 0;
  transition: all 0.3s ease;
}
.box3 .top .wheel-out {
  width: 155px;
}
.box3 .top .wheel {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box3 .top .wheel img {
  width: 34px;
  height: 34px;
}
.box3 .top .wheel-out img.hover {
  display: none;
}
.box3 .top .wheel-out:hover img.default {
  display: none;
}
.box3 .top .wheel-out:hover img.hover {
  display: block;
}
.box3 .top .wheel p {
  font-size: 14px;
  font-weight: 400;
  color: #9c9c9c;
}
.box3 .top .wheel.on {
  position: relative;
  top: -10px;
}
.box3 .top .wheel.on img {
  width: 42px;
  height: 42px;
}
.box3 .top .wheel.on p {
  font-size: 20px;
  font-weight: 400;
  color: #333;
}
/* =================================== */
.box4 {
  height: 620px;
  background: url("../assets/img01/ab4-bg.png");
  background-size: cover;
  display: flex;
  align-items: flex-end;
}
.box4 .bott {
  width: 100%;
  height: 230px;
  background: rgba(72, 75, 255, 0.8);
  display: flex;
  justify-content: center;
}
.box4 .therr {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.box4 .txt {
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  position: relative;
}
.box4 .txt::after {
  content: "";
  position: absolute;
  top: 45px;
  left: calc(50% - 10px);
  width: 20px;
  height: 2px;
  background: #ffffff;
}
.box4 .txtb {
  font-size: 22px;
  height: 71px;
}
.box4 .therr:nth-child(2) {
  border-right: 1px solid rgba(150, 195, 255, 0.26);
  border-left: 1px solid rgba(150, 195, 255, 0.26);
}
.box4 .therr .txt_f {
  width: 264px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.box4 .txt_f div {
  width: 80px;
  height: 28px;
  background: hsla(0, 0%, 100%, 0.08);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 14px;
}
.box5 {
  height: 850px;
}
.box5 .title {
  width: 160px;
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  margin: 0 auto;
  padding: 100px 0 60px 0;
  position: relative;
}
.box5 .title img {
  width: 264px;
  height: 50px;
  position: absolute;
  bottom: 70px;
  left: calc(50% - 132px);
  z-index: -1;
}
.box5 .content {
  width: 1200px;
  margin: 0 auto;
}
.box5 .top,
.box5 .bottom {
  display: flex;
}
.box5 .top_1 {
  width: 298px;
  height: 256px;
  background: #e6edf5;
}
.box5 .top_1 .img img {
  width: 53px;
  height: 56px;
}
.box5 .top_2 {
  width: 616px;
  background: url("../assets/img01/ab5-2.png");
}
.box5 .top_2 .img img {
  width: 174px;
  height: 38px;
}
.box5 .top_3 {
  width: 286px;
  height: 256px;
  color: #fff;
  background: linear-gradient(180deg, #4874ff 0%, #4e3bff 100%);
}
.box5 .top_3 .text {
  color: #fff;
}
.box5 .top_3 .img img {
  width: 112px;
  height: 50px;
}
.box5 .bottom_1 {
  width: 238px;
  height: 256px;
  color: #fff;
  background: linear-gradient(180deg, #9559fc 0%, #6248ff 100%);
}
.box5 .bottom_1 .text {
  color: #fff;
}
.box5 .bottom_1 .img img {
  width: 128px;
  height: 25px;
}
.box5 .bottom_2 {
  width: 476px;
  height: 256px;
  background: #f9fcff;
}
.box5 .bottom_2 .img img {
  width: 151px;
  height: 36px;
}
.box5 .bottom_3 {
  width: 243px;
  height: 256px;
  background: #e6edf5;
}
.box5 .bottom_3 .img img,
.box5 .bottom_4 .img img {
  width: 88px;
  height: 128px;
  margin-right: 8px;
}
.box5 .bottom_4 {
  width: 243px;
  height: 256px;
  background: #eff5fb;
}
.box5 .txt {
  margin: 24px 0 0 24px;
  font-size: 22px;
  font-weight: 400;
}
.box5 .bottom_4 .txt,
.box5 .bottom_3 .txt {
  font-size: 18px;
}
.box5 .text {
  margin: 8px 35px 0 24px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 25px;
}
.top > div,
.bottom > div {
  position: relative;
}
.box5 .img {
  position: absolute;
  display: flex;
  left: 24px;
  bottom: 20px;
}
.box5 .img img {
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px #396aff;
  background: #396aff;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
@media (min-width: 1280px) {
  /* .box1 {
    height: 768px;
    background: url("../assets/img01/ab1-bg.png");
    background-size: cover;
    position: relative;
  }
  .box1 .text {
    position: absolute;
    top: 235px;
    left: 376px;
    width: 670px;
    overflow: hidden;
  }
  .box1 .txt {
    font-size: 36px;
    font-weight: 400;
    color: #333333;
  }
  .box1 .img {
    width: 292px;
    height: 42px;
    margin: 20px 0 30px;
  }
  .box1 .txt_b {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 28px;
  } */
  .box2 {
    height: 730px;
  }
  .box2 .title {
    width: 162px;
    padding: 122px 0 50px 0;
    margin: 0 auto;
    position: relative;
    font-size: 36px;
    font-weight: 400;
    color: #000000;
  }
  .box2 .title img {
    width: 624px;
    height: 50px;
    position: absolute;
    bottom: 60px;
    left: calc(50% - 312px);
    z-index: -1;
  }
  .box2 .accordion {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    /* justify-content: space-between; */
  }
  .box2 .sam {
    width: 218px;
    height: 404px;
    position: relative;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .box2 .big {
    width: 328px;
    height: 404px;
    background-image: url("../assets/img01/ab2-bg.png") !important;
    /* transition: all 0.3s linear; */
  }
  .box2 .sam:nth-child(1) {
    background: linear-gradient(315deg, #6d8dca 0%, #adc7f7 100%);
  }
  .box2 .sam:nth-child(2) {
    background: linear-gradient(315deg, #506ea8 0%, #90aee6 100%);
  }
  .box2 .sam:nth-child(3) {
    background: linear-gradient(315deg, #0d2a61 0%, #7898d6 100%);
  }
  .box2 .sam:nth-child(4) {
    background: linear-gradient(315deg, #0a1c40 0%, #5274b5 100%);
  }
  .box2 .sam:nth-child(5) {
    background: linear-gradient(315deg, #071737 0%, #33538d 100%);
  }
  .box2 .name {
    margin: 42px 0 0 24px;
    color: #fff;
  }
  .box2 .blk img {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 218px;
    height: 309px;
  }
  .box2 .name .top {
    font-size: 22px;
  }
  .box2 .name .bottom {
    font-size: 14px;
  }
  .box2 .sam .text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 142px;
    background: linear-gradient(90deg, rgba(56, 115, 255, 0) 0%, #0d3dfa 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box2 .sam .text .txt_w {
    width: 280px;
    font-size: 12px;
    color: #ffffff;
    line-height: 22px;
  }
  .box3 {
    height: 613px;
    background: linear-gradient(
      177deg,
      rgba(234, 240, 245, 0.2) 0%,
      rgba(239, 245, 250, 0.2) 62%,
      #eef4f9 100%
    );
    position: relative;
  }
  .box3 .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
  }
  .box3 .title {
    width: 160px;
    margin: 0 auto;
    padding-top: 127px;
    font-size: 36px;
    font-weight: 400;
    color: #000000;
    position: relative;
  }
  .box3 .title img {
    width: 264px;
    height: 50px;
    position: absolute;
    bottom: 15px;
    left: 50%;
  transform: translateX(-53%);
    z-index: -1;
  }
  .box3 .cont {
    width: 1085px;
    margin: 0 auto;
    margin-top: 97px;
    overflow: hidden;
  }
  .box3 .mle {
    width: 100%;
    height: 1px;
    background: #eee;
    position: absolute;
    left: 0;
    top: 315px;
    z-index: -1;
  }
  .box3 .bot {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    width: fit-content;
  }
  .box3 .bot div {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 26px;
    width: 272px !important;
    height: 126px;
    background: #ffffff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
    text-indent: 2em;
    padding: 15px 9px 0 13px;
    margin-right: 40px;
    position: relative;
    overflow: auto;
  }
  .box3 .bot div::after {
    content: "";
    position: absolute;
    top: 25px;
    left: 20px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #2266ff;
  }
  .box3 .top {
    width: 100%;
    padding-top: 10px;
    overflow: hidden;
    /* display: flex; */
    /* justify-content: space-between; */
    margin-left: -44px;
  }
  .box3 .top .top-inner {
    width: max-content;
    display: flex;
    position: relative;
    left: 0;
    transition: all 0.3s ease;
  }
  .box3 .top .wheel-out {
    width: 155px;
  }
  .box3 .top .wheel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box3 .top .wheel img {
    width: 34px;
    height: 34px;
  }
  .box3 .top .wheel-out img.hover {
    display: none;
  }
  .box3 .top .wheel-out:hover img.default {
    display: none;
  }
  .box3 .top .wheel-out:hover img.hover {
    display: block;
  }
  .box3 .top .wheel p {
    font-size: 14px;
    font-weight: 400;
    color: #9c9c9c;
  }
  .box3 .top .wheel.on {
    position: relative;
    top: -10px;
  }
  .box3 .top .wheel.on img {
    width: 42px;
    height: 42px;
  }
  .box3 .top .wheel.on p {
    font-size: 20px;
    font-weight: 400;
    color: #333;
  }
  /* =================================== */
  .box4 {
    height: 620px;
    background: url("../assets/img01/ab4-bg.png");
    background-size: cover;
    display: flex;
    align-items: flex-end;
  }
  .box4 .bott {
    width: 100%;
    height: 230px;
    background: rgba(72, 75, 255, 0.8);
    display: flex;
    justify-content: center;
  }
  .box4 .therr {
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .box4 .txt {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    position: relative;
  }
  .box4 .txt::after {
    content: "";
    position: absolute;
    top: 45px;
    left: calc(50% - 10px);
    width: 20px;
    height: 2px;
    background: #ffffff;
  }
  .box4 .txtb {
    font-size: 22px;
    height: 71px;
  }
  .box4 .therr:nth-child(2) {
    border-right: 1px solid rgba(150, 195, 255, 0.26);
    border-left: 1px solid rgba(150, 195, 255, 0.26);
  }
  .box4 .therr .txt_f {
    width: 264px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .box4 .txt_f div {
    width: 80px;
    height: 28px;
    background: hsla(0, 0%, 100%, 0.08);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .box5 {
    height: 850px;
  }
  .box5 .title {
    width: 160px;
    font-size: 36px;
    font-weight: 400;
    color: #000000;
    margin: 0 auto;
    padding: 100px 0 60px 0;
    position: relative;
  }
  .box5 .title img {
    width: 264px;
    height: 50px;
    position: absolute;
    bottom: 70px;
    left: calc(50% - 132px);
    z-index: -1;
  }
  .box5 .content {
    width: 1200px;
    margin: 0 auto;
  }
  .box5 .top,
  .box5 .bottom {
    display: flex;
  }
  .box5 .top_1 {
    width: 298px;
    height: 256px;
    background: #e6edf5;
  }
  .box5 .top_1 .img img {
    width: 53px;
    height: 56px;
  }
  .box5 .top_2 {
    width: 616px;
    background: url("../assets/img01/ab5-2.png");
  }
  .box5 .top_2 .img img {
    width: 174px;
    height: 38px;
  }
  .box5 .top_3 {
    width: 286px;
    height: 256px;
    color: #fff;
    background: linear-gradient(180deg, #4874ff 0%, #4e3bff 100%);
  }
  .box5 .top_3 .text {
    color: #fff;
  }
  .box5 .top_3 .img img {
    width: 112px;
    height: 50px;
  }
  .box5 .bottom_1 {
    width: 238px;
    height: 256px;
    color: #fff;
    background: linear-gradient(180deg, #9559fc 0%, #6248ff 100%);
  }
  .box5 .bottom_1 .text {
    color: #fff;
  }
  .box5 .bottom_1 .img img {
    width: 128px;
    height: 25px;
  }
  .box5 .bottom_2 {
    width: 476px;
    height: 256px;
    background: #f9fcff;
  }
  .box5 .bottom_2 .img img {
    width: 151px;
    height: 36px;
  }
  .box5 .bottom_3 {
    width: 243px;
    height: 256px;
    background: #e6edf5;
  }
  .box5 .bottom_3 .img img,
  .box5 .bottom_4 .img img {
    width: 88px;
    height: 128px;
    margin-right: 8px;
  }
  .box5 .bottom_4 {
    width: 243px;
    height: 256px;
    background: #eff5fb;
  }
  .box5 .txt {
    margin: 24px 0 0 24px;
    font-size: 22px;
    font-weight: 400;
  }
  .box5 .bottom_4 .txt,
  .box5 .bottom_3 .txt {
    font-size: 18px;
  }
  .box5 .text {
    margin: 8px 35px 0 24px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 25px;
  }
  .top > div,
  .bottom > div {
    position: relative;
  }
  .box5 .img {
    position: absolute;
    display: flex;
    left: 24px;
    bottom: 20px;
  }
  .box5 .img img {
    width: 100%;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px #396aff;
    background: #396aff;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>