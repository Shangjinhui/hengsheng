<template>
  <!-- 市场活动 -->
  <div class="box">
    <div
      @click="tocli(banner.photo.id, banner.url)"
      class="image wow fadeInUp"
      :style="`background-image:url(${
        banner.photo && $imgurl + banner.photo.url
      })`"
    >
      <!-- <div class="txt">
        <div>{{header.intro}}</div>
        <div>{{header.tags}}</div>
      </div> -->
    </div>
    <div class="sambox">
      <div class="cont" v-if="list.length > 0">
        <div
          @click="tocli(item.id, item.url)"
          class="conb wow fadeInUp"
          :data-wow-delay="`${index * 0.3}s`"
          v-for="(item, index) in list"
          :key="index"
        >
          <img :src="item.photo && $imgurl + item.photo.url" alt="" />
          <div class="imgdiv" v-html="item.title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let WOW = require("wowjs");
export default {
  data() {
    return {
      banner: {},
      //标题
      header: {},
      //底部图片
      list: [],
      pageNo: "1",
      pageSize: "3",
    };
  },
  mounted() {
    this.getdatas();
  },
  methods: {
    getdatas() {
      this.$fetch({
        url: "index.php/news/schd",
        type: "post",
        data: this.$qs.stringify({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        }),
      }).then((res) => {
        this.banner = res.data.banner;
        this.header = res.data.header;
        this.list = res.data.list;
        this.pageNo = res.data.pageNo;
        this.pageSize = res.data.pageSize;

        this.$nextTick(() => {
          let wow = new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          }).init();
        });
      });
    },
    //跳转
    tocli(id, url) {
      if (url) {
        window.open(url);
      } else {
        this.$router.push({
          path: "/newsview",
          query: {
            id,
            crems: JSON.stringify({ title: "市场活动", path: "/news/bazaar" }),
          },
        });
      }
    },
  },
};
</script>

<style scoped>
.box .image {
  width: 1200px;
  height: 526px;
  margin: 0 auto 50px auto;
  background: url("../../assets/img01/news_bg.png");
  cursor: pointer;
  background-size: cover;
}
.box .image {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}
.box .image .txt div:nth-child(1) {
  font-size: 40px;
  font-weight: bold;
}
.box .image .txt div:nth-child(2) {
  font-size: 32px;
  color: #ffffff;
  margin-top: 36px;
}
.sambox {
  width: 100%;
  /* height: 380px; */
  background: #f6f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sambox .cont {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0 80px 0;
}
.sambox .conb {
  width: 376px;
  height: 250px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.sambox .conb:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.sambox .conb img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.sambox .imgdiv {
  width: 376px;
  height: 48px;
  line-height: 48px;
  background: linear-gradient(
    327deg,
    rgba(57, 106, 255, 0.33) 0%,
    #396aff 100%
  );
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 20px;
  font-size: 16px;
  color: #ffffff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
@media (min-width: 1280px) {
  .box .image {
    width: 1200px;
    height: 526px;
    margin: 0 auto 50px auto;
    background: url("../../assets/img01/news_bg.png");
    cursor: pointer;
    background-size: cover;
  }
  .box .image {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  .box .image .txt div:nth-child(1) {
    font-size: 40px;
    font-weight: bold;
  }
  .box .image .txt div:nth-child(2) {
    font-size: 32px;
    color: #ffffff;
    margin-top: 36px;
  }
  .sambox {
    width: 100%;
    /* height: 380px; */
    background: #f6f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sambox .cont {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0 80px 0;
  }
  .sambox .conb {
    width: 376px;
    height: 250px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .sambox .conb:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .sambox .conb img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .sambox .imgdiv {
    width: 376px;
    height: 48px;
    line-height: 48px;
    background: linear-gradient(
      327deg,
      rgba(57, 106, 255, 0.33) 0%,
      #396aff 100%
    );
    position: absolute;
    left: 0;
    bottom: 0;
    padding-left: 20px;
    font-size: 16px;
    color: #ffffff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
</style>