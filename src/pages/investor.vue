<template>
  <div>
    <div
      class="top"
      :style="`background:url(${
        topbanner.photo && $imgurl + topbanner.photo.url
      }) center/cover no-repeat;`"
    >
      <p class="title">{{ topbanner.title }}</p>
      <a class="email flex-center cursor" :href="topbanner.url" target="_blank">
        <p>{{ topbanner.entitle }}</p>
        <img src="@/assets/images/r3.png" alt="" />
      </a>
    </div>
    <div class="block-out" v-for="(item, index) in classList" :key="index">
      <div class="block">
        <p class="title b">{{ item.title }}</p>
        <div class="con">
          <ul class="flex-sp flex-wrap">
            <li
              class="flex-sp cursor"
              v-for="(item2, index2) in item.list"
              :key="index2"
              @click="dPdf(item2.files.url)"
            >
              <p class="desc flex1 ellipsis1">{{ item2.title }}</p>
              <p class="time">{{ item2.timeline }}</p>
            </li>
          </ul>
          <router-link
            :to="{
              path: '/investornotice',
              query: { title: encodeURI(item.title), id: item.id },
            }"
            class="more flex-end cursor"
          >
            <!-- <img src="@/assets/images/r3.png" alt=""> -->
            <i></i>
            <p>MORE +</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topbanner: {},
      classList: [],
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
        url:
          "index.php/invest/initPage                                                                               ",
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.topbanner = res.data.topbanner;
          this.classList = res.data.investtypes;
        }
      });
    },
    dPdf(url) {
      window.open(this.$imgurl + url);
    },
  },
};
</script>
<style lang="scss" scoped>

.page-mh > div > div:nth-child(3) {
  background: url(../assets/img01/bg-bbt.png)center top / cover no-repeat;
}
.page-mh > div > div:nth-child(3) i{
background: url("../assets/images/r4.png") 0 0 / cover no-repeat!important;
}
.page-mh > div > div:nth-child(3) .block .con .more p{
   color: #8851c6!important;
}
.top {
  height: 320px;
  padding-top: 143px;
  // background:url('../assets/images/touzi-bg.png') center/cover no-repeat;
  .title {
    font-size: 36px;
    color: #333333;
    line-height: 40px;
    text-align: center;
  }
  .email {
    width: 316px;
    height: 40px;
    margin: 20px auto;
    position: relative;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 32%,
        #ffffff 50%,
        #ffffff 65%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &:before,
    &:after {
      content: "";
      width: 217px;
      height: 1px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    &:before {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(57, 106, 255, 0.44)
      );
      top: 0;
    }
    &:after {
      background: linear-gradient(
        to right,
        rgba(57, 106, 255, 0.44),
        rgba(255, 255, 255, 0)
      );
      bottom: 0;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #333;
      text-align: center;
    }
    img {
      width: 12px;
      height: 12px;
      margin-left: 12px;
    }
  }
}

.block {
  width: 1200px;
  margin: 0 auto;
  padding: 64px 0;
  .title {
    font-size: 28px;
    color: #333333;
    line-height: 30px;
    text-align: center;
  }
  .con {
    margin-top: 40px;
    li {
      width: 570px;
      height: 48px;
      border-bottom: 1px dashed #e6e6e6;
      &:hover {
        .desc,
        .time {
          color: #396aff;
        }
      }
      .desc {
        font-size: 16px;
        color: #333333;
        line-height: 22px;
      }
      .time {
        font-size: 14px;
        color: #999999;
        line-height: 20px;
      }
    }

    .more {
      margin-top: 20px;
      // img{
      //     width: 16px;
      //     height: 16px;
      //     margin-right:4px;
      // }
      i {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        background: url("../assets/images/r3.png") 0 0 / cover no-repeat;
      }
      p {
        font-size: 11px;
        line-height: 12px;
        color: #396aff;
      }
      // .col396AFF{color: #396AFF;}
      // .col8851C6{color: #8851C6;}
      // &:hover {
        // i {
        //   background: url("../assets/images/r4.png") 0 0 / cover no-repeat;
        // }
        // p {
        //   color: #8851c6;
        // }
      // }
    }
  }
}
@media (min-width: 1280px) {
  .top {
    height: 320px;
    padding-top: 143px;
    // background:url('../assets/images/touzi-bg.png') center/cover no-repeat;
    .title {
      font-size: 36px;
      color: #333333;
      line-height: 40px;
      text-align: center;
    }
    .email {
      width: 316px;
      height: 40px;
      margin: 20px auto;
      position: relative;
      &:hover {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 32%,
          #ffffff 50%,
          #ffffff 65%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &:before,
      &:after {
        content: "";
        width: 217px;
        height: 1px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      &:before {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(57, 106, 255, 0.44)
        );
        top: 0;
      }
      &:after {
        background: linear-gradient(
          to right,
          rgba(57, 106, 255, 0.44),
          rgba(255, 255, 255, 0)
        );
        bottom: 0;
      }
      p {
        line-height: 40px;
        font-size: 14px;
        color: #333;
        text-align: center;
      }
      img {
        width: 12px;
        height: 12px;
        margin-left: 12px;
      }
    }
  }

  .block {
    width: 1200px;
    margin: 0 auto;
    padding: 64px 0;
    .title {
      font-size: 28px;
      color: #333333;
      line-height: 30px;
      text-align: center;
    }
    .con {
      margin-top: 40px;
      li {
        width: 570px;
        height: 48px;
        border-bottom: 1px dashed #e6e6e6;
        &:hover {
          .desc,
          .time {
            color: #396aff;
          }
        }
        .desc {
          font-size: 16px;
          color: #333333;
          line-height: 22px;
        }
        .time {
          font-size: 14px;
          color: #999999;
          line-height: 20px;
        }
      }

      .more {
        margin-top: 20px;
        // img{
        //     width: 16px;
        //     height: 16px;
        //     margin-right:4px;
        // }
        i {
          width: 16px;
          height: 16px;
          margin-right: 4px;
          background: url("../assets/images/r3.png") 0 0 / cover no-repeat;
        }
        p {
          font-size: 11px;
          line-height: 12px;
          color: #396aff;
        }
        // .col396AFF{color: #396AFF;}
        // .col8851C6{color: #8851C6;}
        // &:hover {
          // i {
          //   background: url("../assets/images/r4.png") 0 0 / cover no-repeat;
          // }
          // p {
          //   color: #8851c6;
          // }
        // }
      }
    }
  }
}
</style>