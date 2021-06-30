<template>
  <div>
    <div
      class="top"
      :style="`background: url(${
        topbanner.photo && $imgurl + topbanner.photo.url
      }) center/cover no-repeat;`"
    >
      <p class="title">{{ topbanner.title }}</p>
      <p class="desc">{{ topbanner.entitle }}</p>
    </div>
    <div class="main">
      <div class="con flex">
        <div
          class="left"
          :style="`background:url(${
            detail.photo && $imgurl + detail.photo.url
          }) center/cover no-repeat;`"
        >
          <p class="title">{{ detail.title }}</p>
          <p class="desc" v-html="detail.content"></p>
          <a
            class="download"
            :href="detail.files && $imgurl + detail.files.url"
            target="_blank"
            rel="noopener noreferrer"
            >下载产品手册</a
          >
        </div>
        <div class="right">
          <p class="title b">产品与解决方案</p>
          <div class="ul cursor">
            <ul>
              <li
                v-for="(item, index) in right"
                :key="index"
                @mouseenter="selected = index"
              >
                {{ item.title }}
              </li>
            </ul>
            <i class="line" :style="{ top: h_top * selected + unit_top }"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      topbanner: {},
      detail: {},
      right: [
        { name: "投研一体化解决方案" },
        { name: "投资研究" },
        { name: "投资交易" },
        { name: "外场投资" },
        { name: "合规中心" },
        { name: "宽途终端" },
      ],
      selected: 0,
      unit_top:'',
      h_top:0,
    };
  },
  watch: {
    $route(val, oldval) {
      //console.log(val,oldval)
      if (val.query.id != oldval.query.id) {
        this.id = val.query.id;
        this.getData();
      }
    },
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
    this.id = this.$route.query.id;
    this.getData();

    this.watchPage();
    window.addEventListener('resize',this.watchPage)
  },
  methods: {
    watchPage(){
      let w = document.documentElement.offsetWidth;
      this.h_top = w<1280?'2.60417':'50';
      this.unit_top = w<1280?'vw':'px';
    },
    getData() {
      this.$fetch({
        url: "index.php/trades/getTrades",
        type: "post",
        data: this.$qs.stringify({ id: this.id }),
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.topbanner = res.data.topbanner;
          this.right = res.data.resolution;
          this.detail = res.data.currenttrade;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 320px;
  // background:url('../assets/images/bus-bg.png') center/cover no-repeat;
  padding-top: 163px;
  text-align: center;
  .title {
    font-size: 34px;
    color: #333;
    line-height: 40px;
  }
  .desc {
    font-size: 16px;
    color: #999;
    line-height: 20px;
  }
}
.main {
  padding: 50px 0 70px;
  .con {
    width: 1200px;
    height: 464px;
    margin: 0 auto;
    .left {
      width: 925px;
      height: 100%;
      // background:url('../assets/images/bus1.png') center/cover no-repeat;
      padding: 60px 0 0 64px;
      position: relative;
      .title {
        font-size: 20px;
        color: #333333;
        line-height: 28px;
        font-weight: 600;
      }
      .desc {
        width: 434px;
        font-size: 14px;
        color: #333333;
        line-height: 32px;
        margin-top: 19px;
      }
      .download {
        width: 116px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #396aff;
        font-size: 14px;
        color: #396aff;
        line-height: 40px;
        text-align: center;
        position: absolute;
        left: 64px;
        bottom: 60px;
      }
    }
    .right {
      width: 280px;
      height: 100%;
      background: linear-gradient(329deg, #00bddf 0%, #4054ff 100%);
      // filter: blur(20px);
      padding: 60px 0 0 48px;
      .title {
        font-size: 20px;
        color: #ffffff;
        line-height: 28px;
      }
      .ul {
        position: relative;
        ul {
          font-size: 14px;
          line-height: 18px;
          color: #ffffff;
          border-left: 2px solid #d8d8d8;
          margin-top: 32px;
          li {
            padding-left: 20px;
            margin-bottom: 32px;
          }
        }
        .line {
          width: 4px;
          height: 18px;
          background: #ffffff;
          position: absolute;
          left: -1px;
          top: 0;
          transition: all 0.3s ease;
        }
      }
    }
  }
}
@media (min-width: 1280px) {
  .top {
    height: 320px;
    // background:url('../assets/images/bus-bg.png') center/cover no-repeat;
    padding-top: 163px;
    text-align: center;
    .title {
      font-size: 34px;
      color: #333;
      line-height: 40px;
    }
    .desc {
      font-size: 16px;
      color: #999;
      line-height: 20px;
    }
  }
  .main {
    padding: 50px 0 70px;
    .con {
      width: 1200px;
      height: 464px;
      margin: 0 auto;
      .left {
        width: 925px;
        height: 100%;
        // background:url('../assets/images/bus1.png') center/cover no-repeat;
        padding: 60px 0 0 64px;
        position: relative;
        .title {
          font-size: 20px;
          color: #333333;
          line-height: 28px;
          font-weight: 600;
        }
        .desc {
          width: 434px;
          font-size: 14px;
          color: #333333;
          line-height: 32px;
          margin-top: 19px;
        }
        .download {
          width: 116px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #396aff;
          font-size: 14px;
          color: #396aff;
          line-height: 40px;
          text-align: center;
          position: absolute;
          left: 64px;
          bottom: 60px;
        }
      }
      .right {
        width: 280px;
        height: 100%;
        background: linear-gradient(329deg, #00bddf 0%, #4054ff 100%);
        // filter: blur(20px);
        padding: 60px 0 0 48px;
        .title {
          font-size: 20px;
          color: #ffffff;
          line-height: 28px;
        }
        .ul {
          position: relative;
          ul {
            font-size: 14px;
            line-height: 18px;
            color: #ffffff;
            border-left: 2px solid #d8d8d8;
            margin-top: 32px;
            li {
              padding-left: 20px;
              margin-bottom: 32px;
            }
          }
          .line {
            width: 4px;
            height: 18px;
            background: #ffffff;
            position: absolute;
            left: -1px;
            top: 0;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
}
</style>