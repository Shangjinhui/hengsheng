<template>
  <div
    class="custom page-mh"
    :style="`background:url(${
      serviceinfo.photo && $imgurl + serviceinfo.photo.url
    }) 0 0/cover no-repeat;`"
  >
    <div class="con">
      <p class="title">{{ serviceinfo.title }}</p>
      <a class="comein" :href="serviceinfo.url" target="_blank"> 点击进入 </a>
      <img
        class="code"
        :src="serviceinfo.exp1 && $imgurl + serviceinfo.exp1.url"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      serviceinfo: {},
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/cusservice/initPage",
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.serviceinfo = res.data.serviceinfo;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.custom {
  // height:864px;
  height: 770px;
  // background:url('../assets/images/custom-bg.png') 0 0/cover no-repeat;
  .con {
    width: 1200px;
    margin: 0 auto;
    padding-top: 235px;
    .title {
      font-size: 40px;
      color: #ffffff;
      line-height: 56px;
    }
    .comein {
      display: block;
      width: 170px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      background: #ffa347;
      border-radius: 8px;
      margin-top: 20px;
      font-size: 18px;
      color: #ffffff;

      position: relative;
      top: 0;
      transition: top 0.5s ease;
      &:hover {
        top: -10px;
      }
    }
    .code {
      width: 102px;
      margin-top: 48px;
    }
  }
}
@media (min-width: 1280px) {
  .custom {
    // height:864px;
    height: 770px;
    // background:url('../assets/images/custom-bg.png') 0 0/cover no-repeat;
    .con {
      width: 1200px;
      margin: 0 auto;
      padding-top: 235px;
      .title {
        font-size: 40px;
        color: #ffffff;
        line-height: 56px;
      }
      .comein {
        display: block;
        width: 170px;
        height: 46px;
        line-height: 46px;
        text-align: center;
        background: #ffa347;
        border-radius: 8px;
        margin-top: 20px;
        font-size: 18px;
        color: #ffffff;

        position: relative;
        top: 0;
        transition: top 0.5s ease;
        &:hover {
          top: -10px;
        }
      }
      .code {
        width: 102px;
        margin-top: 48px;
      }
    }
  }
}
</style>