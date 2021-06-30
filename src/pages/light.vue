<template>
  <div>
    <div class="top">
      <img class="poster" :src="poster && $imgurl + poster" alt="" />
      <img
        class="play cursor"
        src="@/assets/images/play.png"
        alt=""
        @click="playVideo"
      />
    </div>
    <div
      class="block1"
      :style="`background:url(${
        block1.bg && $imgurl + block1.bg
      }) center/cover no-repeat;`"
    >
      <div class="con">
        <div
          class="title"
          :style="{
            background: `url(${
              block1.t_bg && $imgurl + block1.t_bg
            }) center/contain no-repeat`,
          }"
        >
          <p>{{ block1.title }}</p>
        </div>
        <ul class="flex flex-wrap">
          <li
            v-for="(item, index) in block1.list"
            :key="index"
            class="wow fadeInUp"
            :data-wow-delay="`${index * 0.5}` + 's'"
          >
            <img class="icon" :src="$imgurl + item.url" alt="" />
            <p class="desc">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="block2"
      :style="`background:url(${
        block2.bg && $imgurl + block2.bg
      }) center/cover no-repeat ;`"
    >
      <div class="con">
        <div
          class="title"
          :style="{
            background: `url(${
              block2.t_bg && $imgurl + block2.t_bg
            }) center/contain no-repeat`,
          }"
        >
          <p>{{ block2.title }}</p>
        </div>
        <ul class="flex flex-wrap">
          <router-link
            tag="li"
            :to="{ path: '/lightcon', query: { ind: index, id: item.id } }"
            class="cursor wow fadeInUp"
            v-for="(item, index) in block2.list"
            :key="index"
            :data-wow-delay="`${index * 0.4}` + 's'"
          >
            <div class="filter"></div>
            <div class="li-con flex-column-center">
              <p class="che">{{ item.title }}</p>
              <p class="eng">{{ item.entitle }}</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <div
      class="block3"
      :style="`background:url(${
        block3.bg && $imgurl + block3.bg
      })  center/cover no-repeat;`"
    >
      <div class="c-con">
        <img
          class="c-big"
          :src="block3.c_img && $imgurl + block3.c_img"
          alt=""
        />
        <div
          class="abs1"
          v-for="(item, index) in block3.list.slice(0, 3)"
          :key="index"
        >
          <div class="title b">{{ item.title }}</div>
          <div class="desc">{{ item.content }}</div>
        </div>
      </div>
    </div>
    <div
      class="block4"
      :style="`background:url(${
        block4.exp2 && $imgurl + block4.exp2.url
      }) center/cover no-repeat;`"
    >
      <div class="con wow fadeInUp" data-wow-delay=".2s">
        <img
          class="title"
          :src="block4.photo && $imgurl + block4.photo.url"
          alt=""
        />
        <p class="desc" v-html="block4.content"></p>
      </div>
    </div>

    <div class="video" v-show="showVideo">
      <img
        class="close cursor"
        src="@/assets/images/close.png"
        alt=""
        @click="closeVideo"
      />
      <video ref="video" :src="video && $imgurl + video" controls></video>
    </div>
  </div>
</template>
<script>
let WOW = require("wowjs");
export default {
  data() {
    return {
      poster: "",
      video: "",
      showVideo: false,
      block1: {
        title: "",
        t_bg: "",
        bg: "",
        list: [],
      },
      block2: {
        title: "",
        t_bg: "",
        bg: "",
        list: [],
      },
      block3: {
        bg: "",
        c_img: "",
        list: [],
      },
      block4: {},
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#fff");

    //监听视频结束
    let video = this.$refs["video"];
    video.addEventListener(
      "ended",
      () => {
        //结束
        console.log("播放结束");
        this.showVideo = false;
      },
      false
    );

    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/lightapi/initLightIndex",
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.poster = res.data.banner.photo.url;
          this.video = res.data.banner.files.url;
          this.block1.list = res.data.tab2.photo;
          this.block1.title = res.data.tab2.title;
          this.block1.t_bg = res.data.tab2.exp1[0].url;
          this.block1.bg = res.data.tab2.exp2[0].url;

          this.block2.list = res.data.tab3;
          this.block2.title = res.data.tab3_0.title;
          this.block2.t_bg = res.data.tab3_0.exp1.url;
          this.block2.bg = res.data.tab3_0.photo.url;

          this.block3.bg = res.data.tab4_1.photo.url;
          this.block3.c_img = res.data.tab4_1.exp1.url;
          this.block3.list = res.data.tab4_2;
          this.block4 = res.data.tab5;

          this.$nextTick(() => {
            let wow = new WOW.WOW({
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: true,
              live: true,
            }).init();
          });
        }
      });
    },

    playVideo() {
      this.showVideo = true;
      let video = this.$refs["video"];
      video.play();
    },
    closeVideo() {
      this.showVideo = false;
      let video = this.$refs["video"];
      video.pause();
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  height: 803px;
  position: relative;
  .poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .play {
    width: 84px;
    height: 84px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.block1 {
  // background:url('../assets/images/img1.jpg') center/100% auto repeat-y;
  min-height: 770px;
  // background: #2C3C6B;
  padding: 103px 0 60px;
  .con {
    width: 1385px;
    margin: 0 auto;
    .title {
      height: 74px;
      padding-top: 24px;
      font-size: 36px;
      color: #ffffff;
      line-height: 50px;
      letter-spacing: 4px;
      text-align: center;
    }
    ul {
      margin-top: 40px;
      li {
        margin-right: 39px;
        margin-bottom: 20px;
        &:nth-of-type(4n + 4) {
          margin-right: 0;
        }
        .icon {
          width: 317px;
          height: 305px;
          object-fit: cover;
        }
        .desc {
          margin: 8px auto 0;
          width: 226px;
          height: 140px;
          font-size: 20px;
          color: #ffffff;
          line-height: 28px;
          overflow: hidden;
        }
      }
    }
  }
}
.block2 {
  min-height: 630px;
  // background: url('../assets/images/img2.jpg') center/100% auto repeat-y;
  padding: 100px 0 60px;
  .con {
    width: 1160px;
    margin: 0 auto;
    .title {
      height: 74px;
      padding-top: 24px;
      font-size: 36px;
      color: #ffffff;
      line-height: 50px;
      letter-spacing: 4px;
      text-align: center;
    }
    ul {
      margin-top: 60px;
      text-align: center;
      li {
        margin-right: 30px;
        margin-bottom: 30px;
        &:nth-of-type(5n + 5) {
          margin-right: 0;
        }
        width: 208px;
        height: 132px;
        position: relative;
        top: 0;
        transition: all 0.3s ease;
        &:hover {
          top: -10px;
          box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.5),
            0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
          .li-con {
            border: 2px solid;
            border-image: linear-gradient(
                225deg,
                rgba(255, 255, 255, 0.46),
                rgba(29, 43, 80, 0)
              )
              1 1;
            color: #fff;
          }
        }
        .filter {
          width: 100%;
          height: 100%;
          filter: blur(6px);
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
        }
        .li-con {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            221deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          box-shadow: 0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
          border: 1px solid;
          border-image: linear-gradient(
              225deg,
              rgba(255, 255, 255, 0.46),
              rgba(29, 43, 80, 0)
            )
            1 1;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          color: #b1c6ff;
          .che {
            font-size: 20px;
            line-height: 44px;
          }
          .eng {
            font-size: 14px;
            line-height: 36px;
          }
        }
      }
    }
  }
}
.block3 {
  height: 622px;
  // background:url('../assets/images/l-b3-bg.png') no-repeat;
  position: relative;
  .c-con {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 75px;
    .c-big {
      width: 475px;
    }
    .abs1 {
      width: 227px;
      position: absolute;
      &:nth-of-type(1) {
        left: -266px;
        top: 157px;
      }
      &:nth-of-type(2) {
        left: -266px;
        top: 346px;
      }
      &:nth-of-type(3) {
        left: 523px;
        top: 242px;
      }
      .title {
        font-size: 20px;
        color: #ffffff;
        line-height: 30px;
        text-align: center;
      }
      .desc {
        margin-top: 12px;
        width: 227px;
        padding: 14px 19px;
        background: linear-gradient(
          221deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        box-shadow: 0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
        border: 1px solid;
        border-image: linear-gradient(
            225deg,
            rgba(255, 255, 255, 0.46),
            rgba(29, 43, 80, 0)
          )
          1 1;

        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);
        line-height: 22px;
      }
    }
  }
}
.block4 {
  height: 359px;
  // background:url('../assets/images/img3.png') center/100% auto repeat-y;
  .con {
    width: 1200px;
    margin: 0 auto;
    padding-top: 100px;
    .title {
      height: 39px;
      margin: 0 auto;
    }
    .desc {
      margin-top: 64px;
      font-size: 16px;
      color: #b1c6ff;
      line-height: 28px;
      text-align: center;
    }
  }
}
.video {
  width: 100vw;
  height: 100vh;
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  .close {
    background: #fff;
    padding: 10px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 1;
  }
  video {
    width: 100%;
    height: 100%;
  }
}

@media (min-width: 1280px) {
  .top {
    // height: 803px;
    // position: relative;
    .poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .play {
      width: 84px;
      height: 84px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .block1 {
    // background:url('../assets/images/img1.jpg') center/100% auto repeat-y;
    min-height: 770px;
    // background: #2C3C6B;
    padding: 103px 0 60px;
    .con {
      width: 1385px;
      margin: 0 auto;
      .title {
        height: 74px;
        padding-top: 24px;
        font-size: 36px;
        color: #ffffff;
        line-height: 50px;
        letter-spacing: 4px;
        text-align: center;
      }
      ul {
        margin-top: 40px;
        li {
          margin-right: 39px;
          margin-bottom: 20px;
          &:nth-of-type(4n + 4) {
            margin-right: 0;
          }
          .icon {
            width: 317px;
            height: 305px;
            object-fit: cover;
          }
          .desc {
            margin: 8px auto 0;
            width: 226px;
            height: 140px;
            font-size: 20px;
            color: #ffffff;
            line-height: 28px;
            overflow: hidden;
          }
        }
      }
    }
  }
  .block2 {
    min-height: 630px;
    // background: url('../assets/images/img2.jpg') center/100% auto repeat-y;
    padding: 100px 0 60px;
    .con {
      width: 1160px;
      margin: 0 auto;
      .title {
        height: 74px;
        padding-top: 24px;
        font-size: 36px;
        color: #ffffff;
        line-height: 50px;
        letter-spacing: 4px;
        text-align: center;
      }
      ul {
        margin-top: 60px;
        text-align: center;
        li {
          margin-right: 30px;
          margin-bottom: 30px;
          &:nth-of-type(5n + 5) {
            margin-right: 0;
          }
          width: 208px;
          height: 132px;
          position: relative;
          top: 0;
          transition: all 0.3s ease;
          &:hover {
            top: -10px;
            box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.5),
              0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
            .li-con {
              border: 2px solid;
              border-image: linear-gradient(
                  225deg,
                  rgba(255, 255, 255, 0.46),
                  rgba(29, 43, 80, 0)
                )
                1 1;
              color: #fff;
            }
          }
          .filter {
            width: 100%;
            height: 100%;
            filter: blur(6px);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
          }
          .li-con {
            width: 100%;
            height: 100%;
            background: linear-gradient(
              221deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0) 100%
            );
            box-shadow: 0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
            border: 1px solid;
            border-image: linear-gradient(
                225deg,
                rgba(255, 255, 255, 0.46),
                rgba(29, 43, 80, 0)
              )
              1 1;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            color: #b1c6ff;
            .che {
              font-size: 20px;
              line-height: 44px;
            }
            .eng {
              font-size: 14px;
              line-height: 36px;
            }
          }
        }
      }
    }
  }
  .block3 {
    height: 622px;
    // background:url('../assets/images/l-b3-bg.png') no-repeat;
    position: relative;
    .c-con {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 75px;
      .c-big {
        width: 475px;
      }
      .abs1 {
        width: 227px;
        position: absolute;
        &:nth-of-type(1) {
          left: -266px;
          top: 157px;
        }
        &:nth-of-type(2) {
          left: -266px;
          top: 346px;
        }
        &:nth-of-type(3) {
          left: 523px;
          top: 242px;
        }
        .title {
          font-size: 20px;
          color: #ffffff;
          line-height: 30px;
          text-align: center;
        }
        .desc {
          margin-top: 12px;
          width: 227px;
          padding: 14px 19px;
          background: linear-gradient(
            221deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          box-shadow: 0px 1px 45px 0px rgba(46, 75, 180, 0.42) inset;
          border: 1px solid;
          border-image: linear-gradient(
              225deg,
              rgba(255, 255, 255, 0.46),
              rgba(29, 43, 80, 0)
            )
            1 1;

          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 22px;
        }
      }
    }
  }
  .block4 {
    height: 359px;
    // background:url('../assets/images/img3.png') center/100% auto repeat-y;
    .con {
      width: 1200px;
      margin: 0 auto;
      padding-top: 100px;
      .title {
        height: 39px;
        margin: 0 auto;
      }
      .desc {
        margin-top: 64px;
        font-size: 16px;
        color: #b1c6ff;
        line-height: 28px;
        text-align: center;
      }
    }
  }
  .video {
    width: 100vw;
    height: 100vh;
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    .close {
      background: #fff;
      padding: 10px;
      width: 30px;
      border-radius: 50%;
      position: absolute;
      right: 40px;
      top: 40px;
      z-index: 1;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>