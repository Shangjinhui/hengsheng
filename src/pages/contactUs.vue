<template>
  <div>
    <div
      class="top"
      :style="`background:url(${
        topbanner.photo && $imgurl + topbanner.photo.url
      }) center/cover no-repeat;`"
    >
      <p class="title">{{ topbanner.title }}</p>
      <p class="desc">{{ topbanner.entitle }}</p>
    </div>
    <div class="main">
      <div class="main-inner">
        <div class="block" v-for="(item, index) in block1" :key="index">
          <p class="title b">{{ item.title }}</p>
          <p class="subtitle">{{ item.subtitle }}</p>
          <ul class="flex-top flex-wrap hq">
            <li v-for="(item2, index2) in item.attrlist" :key="index2">
              <p>{{ item2.title }}</p>
            </li>
          </ul>
        </div>

        <div class="block">
          <p class="title b">分公司</p>
          <ul class="flex-top flex-wrap">
            <li v-for="(item, index) in block2" :key="index">
              <p class="s-title b">{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
              <p v-for="(item2, index2) in item.attrlist" :key="index2">
                {{ item2.title }}
              </p>
            </li>
          </ul>
        </div>
        <div class="block">
          <p class="title b">子公司</p>
          <ul class="flex-top flex-wrap">
            <li v-for="(item, index) in block3" :key="index">
              <p>{{ item.title }}</p>
              <p>{{ item.subtitle }}</p>
              <p v-for="(item2, index2) in item.attrlist" :key="index2">
                {{ item2.title }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topbanner: {
        // title:'联系我们',
        // entitle:'Contact Us',
      },
      block1: [],
      block2: [],
      block3: [],
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/contactus/initPage",
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.topbanner = res.data.topbanner;
          this.block1 = res.data.comptypes[0].complist;
          this.block2 = res.data.comptypes[1].complist;
          this.block3 = res.data.comptypes[2].complist;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  height: 320px;
  padding-top: 155px;
  // background:url('../assets/images/bus-bg.png') center/cover no-repeat;
  padding-top: 154px;
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
  .main-inner {
    width: 1200px;
    margin: 0 auto;
    .block {
      margin-bottom: 60px;
      .title {
        font-size: 16px;
        color: #000000;
        line-height: 22px;
        margin-bottom: 14px;
      }
      .subtitle {
        font-size: 14px;
        color: #999999;
        line-height: 20px;
        margin-bottom: 2px;
      }
      ul {
        &.hq li {
          margin-bottom: 0;
        }
        li {
          width: 32%;
          margin-right: 2%;
          // margin-bottom: 36px;
          &:nth-of-type(3n + 3) {
            margin-right: 0;
          }
          p {
            font-size: 14px;
            color: #999999;
            line-height: 20px;
            margin-bottom: 2px;
          }
          .s-title {
            color: #000000;
          }
        }
      }
    }
  }
}

@media (min-width: 1280px) {
  .top {
    height: 320px;
    padding-top: 155px;
    // background:url('../assets/images/bus-bg.png') center/cover no-repeat;
    padding-top: 154px;
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
    .main-inner {
      width: 1200px;
      margin: 0 auto;
      .block {
        margin-bottom: 60px;
        .title {
          font-size: 16px;
          color: #000000;
          line-height: 22px;
          margin-bottom: 14px;
        }
        .subtitle {
          font-size: 14px;
          color: #999999;
          line-height: 20px;
          margin-bottom: 2px;
        }
        ul {
          &.hq li {
            margin-bottom: 0;
          }
          li {
            width: 32%;
            margin-right: 2%;
            // margin-bottom: 36px;
            &:nth-of-type(3n + 3) {
              margin-right: 0;
            }
            p {
              font-size: 14px;
              color: #999999;
              line-height: 20px;
              margin-bottom: 2px;
            }
            .s-title {
              color: #000000;
            }
          }
        }
      }
    }
  }
}
</style>