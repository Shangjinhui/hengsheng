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
    <div class="block">
      <p class="title">{{ title }}</p>
      <div class="con">
        <div class="con-inner">
          <ul class="flex-sp flex-wrap">
            <li
              class="flex-sp cursor"
              v-for="(item, index) in list"
              :key="index"
              @click="dPdf(item.files.url)"
            >
              <p class="desc flex1 ellipsis1">{{ item.title }}</p>
              <p class="time">{{ item.timeline }}</p>
            </li>
          </ul>
        </div>

        <div class="swiper flex-center flex-wrap cursor">
          <i
            :class="[{ on: index + 1 == page }]"
            v-for="(item, index) in Math.ceil(total / limit)"
            :key="index"
            @click="changePage(index)"
          ></i>
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
      title: "",
      list: [],
      page: 1,
      limit: 22,
      total: 0,
      topbanner: {},
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");

    this.title = decodeURI(this.$route.query.title);
    this.id = this.$route.query.id;
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/invest/initPageByTypeid",
        type: "post",
        data: this.$qs.stringify({
          id: this.id,
          pageNo: this.page,
          pageSize: this.limit,
        }),
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.total = res.data.totalCount;
          this.list = res.data.list;
          this.topbanner = res.data.topbanner;
        }
      });
    },
    changePage(index) {
      if (this.page == index + 1) return;
      this.page = index + 1;
      this.getData();
    },
    dPdf(url) {
      window.open(this.$imgurl + url);
    },
  },
};
</script>
<style lang="scss" scoped>
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
  padding: 64px 0 60px;
  .title {
    font-size: 28px;
    color: #333333;
    line-height: 30px;
    text-align: center;
  }
  .con {
    margin-top: 40px;
    .con-inner {
      min-height: 528px;
      ul {
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
      }
    }

    .swiper {
      margin-top: 30px;
      i {
        width: 8px;
        height: 8px;
        background: #e9e9e9;
        margin-right: 12px;
        &.on {
          background: #396aff;
        }
      }
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
    padding: 64px 0 60px;
    .title {
      font-size: 28px;
      color: #333333;
      line-height: 30px;
      text-align: center;
    }
    .con {
      margin-top: 40px;
      .con-inner {
        min-height: 528px;
        ul {
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
        }
      }

      .swiper {
        margin-top: 30px;
        i {
          width: 8px;
          height: 8px;
          background: #e9e9e9;
          margin-right: 12px;
          &.on {
            background: #396aff;
          }
        }
      }
    }
  }
}
</style>