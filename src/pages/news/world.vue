<template>
  <!-- 恒生世界 -->
  <div class="world">
    <div class="box1 wow fadeInUp">
      <div class="imgae">
        <img
          :src="topinfo.photo && $imgurl + topinfo.photo.url"
          @click="download(topinfo.files.url)"
          alt=""
        />
      </div>
      <img class="imgae2" src="" alt="" />
      <div class="title">
        <div class="left">
          <p>{{ topinfo.yearnum }}年 {{ topinfo.subtitle }}</p>
          <p>{{ topinfo.title }}</p>
        </div>
      </div>

      <div class="neslist">
        <ul>
          <li
            v-for="(item, index) in topinfo.list"
            :key="index"
            @click="tolink(item.id)"
          >
            <p>{{ item.title }}</p>
            <p v-html="$until.removeImg(item.content)"></p>
          </li>
        </ul>
      </div>
      <img class="img_un" src="../../assets/img01/unimpressive.png" alt="" />
    </div>

    <div class="box2 wow fadeInUp" data-wow-delay="0.3s">
      <div class="top">
        <div class="title">历年恒生世界</div>
        <div class="cont">
          <!-- 单行展示 -->
          <div class="year-out">
            <ul class="year flex" :style="{ left: -year_l * 4.94792 + 'vw' }">
              <li
                class="cursor"
                :class="[{ on: index == year_selected }]"
                v-for="(item, index) in yearlist"
                :key="index"
                @click="chooseYear(index)"
              >
                {{ item.yearnum }}
              </li>
            </ul>
          </div>

          <div
            class="all cursor"
            :class="[{ on: -1 == year_selected }]"
            @click="chooseAll"
          >
            全部年份
          </div>
        </div>
      </div>
      <div class="bottom">
        <div
          class="image"
          v-for="(item, index) in list"
          :key="index"
          @click="downlist(item.files.url)"
        >
          <img :src="item.photo && $imgurl + item.photo.url" alt="" />
          <div class="txt">{{ item.yearnum }} {{ item.subtitle }}</div>
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
      year_selected: -1,
      year_l: 0,
      // show_all_year: false,
      //页码
      pageNo: 1,
      //页数
      pageSize: 6,
      //恒生世界数据
      topinfo: {},
      //年份
      yearlist: [],
      //对应年份数据
      list: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    chooseAll() {
      this.year_selected = -1;
      this.getdata();
    },
    chooseYear(index) {
      let year_l = this.year_l,
        len = this.yearlist.length;
      //console.log(index,len,lc_l)
      if (index - year_l > 3) {
        this.year_l =
          len - year_l - 7 >= index - year_l - 3 ? index - 3 : len - 7;
      } else if (index - year_l < 3) {
        this.year_l = index > 3 ? year_l - (3 - (index - year_l)) : 0;
      }
      this.year_selected = index;
      this.getdata();
    },
    //最近期刊数据请求
    getdata() {
      let year =
        this.yearlist[this.year_selected] &&
        this.yearlist[this.year_selected].yearnum;
      this.$fetch({
        url: "index.php/news/hssj",
        type: "post",
        data: this.$qs.stringify({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          year,
        }),
      }).then((res) => {
        this.topinfo = res.data.topinfo;
        this.yearlist = res.data.yearlist;
        this.list = res.data.list;

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
    //最新期刊pdf下载
    download(url) {
      //       let a = document.createElement("a");
      //       let event = new MouseEvent("click");
      //       a.href = this.$imgurl+url;
      //       a.dispatchEvent(event);
      window.open(this.$imgurl + url);
    },
    downlist(url) {
      //       console.log(url);
      //       let a = document.createElement("a");
      //       let event = new MouseEvent("click");
      //       a.href = this.$imgurl+url;
      //       a.dispatchEvent(event);
      window.open(this.$imgurl + url);
    },

    tolink(id) {
      this.$router.push({ path: "/newsview", query: { id: id } });
    },
  },
};
</script>

<style scoped>
.box1 {
  width: 1200px;
  height: 356px;
  background: #f6f7fa;
  margin: 120px auto 0;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.img_un {
  position: absolute;
  top: -65px;
  right: 0px;
  width: 720px;
  height: 57px;
  z-index: -1;
}
.box1 .imgae {
  position: absolute;
  left: 36px;
  bottom: 36px;
  width: 350px;
  height: 398px;
  cursor: pointer;
  overflow: hidden;
}
.box1 .imgae img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.box1 .imgae:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.box1 .title {
  position: absolute;
  top: -75px;
  left: 420px;
}
.box1 .title p:nth-child(1) {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}
.box1 .title p:nth-child(2) {
  font-size: 36px;
  color: #333333;
  font-weight: 600;
}
.neslist {
  width: 606px;
  margin-right: 146px;
  padding: 36px 0;
}
.neslist li {
  margin-bottom: 24px;
  cursor: pointer;
}
.neslist li p:nth-child(1) {
  font-size: 18px;
  color: #000;
  margin-bottom: 8px;
  position: relative;
}
.neslist li p:nth-child(1)::after {
  content: "";
  position: absolute;
  top: 10px;
  left: -25px;
  width: 6px;
  height: 6px;
  background: linear-gradient(315deg, #1e88f0 0%, #4a47ff 100%);
}
.neslist li p:nth-child(2) {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box2 {
  width: 1200px;
  margin: 40px auto;
  min-height: 500px;
}
.box2 .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
}
.box2 .cont {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box2 .year-out {
  width: 665px;
  overflow: hidden;
}
.box2 .year-out .year {
  width: max-content;
  transition: all 0.3s ease;
  position: relative;
  left: 0;
}
.box2 .year-all {
  width: 665px;
}
.box2 .year-out li,
.box2 .year-all li {
  width: 95px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 10px;
}
.box2 .year-out li {
  margin: 0;
}
.box2 .year-out li.on,
.box2 .year-all li.on {
  color: #396aff;
}
.box2 .title {
  font-size: 28px;
  color: #333333;
  font-weight: 600;
}
.box2 .all {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.box2 .all.on {
  color: #396aff;
}
.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.bottom::after {
  content: "";
  width: 30%;
}
.bottom .image {
  width: 350px;
  height: 400px;
  margin-bottom: 60px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.bottom .image:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.bottom .image img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}

.bottom .txt {
  width: 351px;
  height: 49px;
  background: linear-gradient(
    313deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  padding-left: 26px;
  line-height: 49px;
}
@media (min-width: 1280px) {
  .box1 {
    width: 1200px;
    height: 356px;
    background: #f6f7fa;
    margin: 120px auto 0;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .img_un {
    position: absolute;
    top: -65px;
    right: 0px;
    width: 720px;
    height: 57px;
    z-index: -1;
  }
  .box1 .imgae {
    position: absolute;
    left: 36px;
    bottom: 36px;
    width: 350px;
    height: 398px;
    cursor: pointer;
    overflow: hidden;
  }
  .box1 .imgae img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .box1 .imgae:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .box1 .title {
    position: absolute;
    top: -75px;
    left: 420px;
  }
  .box1 .title p:nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }
  .box1 .title p:nth-child(2) {
    font-size: 36px;
    color: #333333;
    font-weight: 600;
  }
  .neslist {
    width: 606px;
    margin-right: 146px;
    padding: 36px 0;
  }
  .neslist li {
    margin-bottom: 24px;
    cursor: pointer;
  }
  .neslist li p:nth-child(1) {
    font-size: 18px;
    color: #000;
    margin-bottom: 8px;
    position: relative;
  }
  .neslist li p:nth-child(1)::after {
    content: "";
    position: absolute;
    top: 10px;
    left: -25px;
    width: 6px;
    height: 6px;
    background: linear-gradient(315deg, #1e88f0 0%, #4a47ff 100%);
  }
  .neslist li p:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .box2 {
    width: 1200px;
    margin: 40px auto;
    min-height: 500px;
  }
  .box2 .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
  }
  .box2 .cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box2 .year-out {
    width: 665px;
    overflow: hidden;
  }
  .box2 .year-out .year {
    width: max-content;
    transition: all 0.3s ease;
    position: relative;
    left: 0;
  }
  .box2 .year-all {
    width: 665px;
  }
  .box2 .year-out li,
  .box2 .year-all li {
    width: 95px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 10px;
  }
  .box2 .year-out li {
    margin: 0;
  }
  .box2 .year-out li.on,
  .box2 .year-all li.on {
    color: #396aff;
  }
  .box2 .title {
    font-size: 28px;
    color: #333333;
    font-weight: 600;
  }
  .box2 .all {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .box2 .all.on {
    color: #396aff;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .bottom::after {
    content: "";
    width: 30%;
  }
  .bottom .image {
    width: 350px;
    height: 400px;
    margin-bottom: 60px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .bottom .image:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .bottom .image img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }

  .bottom .txt {
    width: 351px;
    height: 49px;
    background: linear-gradient(
      313deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    padding-left: 26px;
    line-height: 49px;
  }
}
</style>