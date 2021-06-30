<template>
  <div>
    <div
      class="top"
      :style="`background:url(${
        topbanner.photo && $imgurl + topbanner.photo.url
      }) center/cover no-repeat;`"
    >
      <div class="input flex">
        <input
          class="flex1"
          type="text"
          ref="input"
          v-model="search"
          placeholder="请输入搜索内容"
          @change="toSearch"
        />
        <img
          class="icon"
          src="@/assets/images/h-sousuo.png"
          alt=""
          @click="toSearch"
        />
      </div>
    </div>
    <div class="crumb">
      <ul class="flex">
        <router-link tag="li" class="cursor" to="/">首页</router-link
        >>
        <li>搜索结果</li>
      </ul>
    </div>

    <div class="con" v-if="list.length > 0">
      <ul>
        <li class="flex-sp" v-for="(item, index) in list" :key="index">
          <p class="flex1 ellipsis1 title">{{ item.title }}</p>
          <p class="time">{{ item.timeline }}</p>
        </li>
      </ul>
      <el-pagination
        :background="true"
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        :page-size="limit"
        :total="total"
        @current-change="changPage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      topbanner: {},
      search: "",
      page: 1,
      limit: 10,
      total: 0,
      list: [],
    };
  },
  mounted() {
    console.log(this.search, "-------");
    this.search = window.sessionStorage.getItem("search") || "";
    window.sessionStorage.removeItem("search");
    this.$refs["input"].focus();

    this.getBanner();
    this.getData();

    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
  },
  methods: {
    getBanner() {
      this.$fetch({
        url: "index.php/search/initPage",
      }).then((res) => {
        if (res.code == 0) {
          this.topbanner = res.data.topbanner;
        }
      });
    },
    getData() {
      if (!this.search) return;
      let data = {
        keyword: this.search,
        pageSize: this.limit,
        pageNo: this.page,
      };
      this.$fetch({
        url: "index.php/search/topsearch",
        type: "post",
        data: this.$qs.stringify(data),
      }).then((res) => {
        if (res.code == 0) {
          this.total = res.data.totalcount;
          this.list = res.data.list;
        }
      });
    },
    toSearch() {
      this.getData();
    },
    changPage(page) {
      this.page = page;
      this.getData();
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  height: 320px;
  padding-top: 155px;
  // background:url('../assets/images/find-bg.png') center/cover no-repeat;
  .input {
    width: 520px;
    height: 52px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 2px 2px 6px 0px rgba(189, 193, 204, 0.53);
    padding: 0 20px 0 15px;
    img {
      width: 18px;
      height: 18px;
    }
  }
}
.crumb {
  height: 48px;
  background: #f9fafc;
  ul {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    font-size: 14px;
    color: #333;
    li {
      padding: 0 12px;
      &:nth-of-type(1) {
        padding-left: 0;
      }
    }
  }
}
.con {
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 39px;
  ul {
    min-height: 480px;
    padding: 24px 0 32px;
    li {
      height: 48px;
      padding: 0 20px 0 38px;
      border-bottom: 1px dashed #e6e6e6;
      position: relative;
      &:before {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-of-type(odd):before {
        background: linear-gradient(315deg, #1e88f0 0%, #4a47ff 100%);
      }
      &:nth-of-type(even):before {
        background: linear-gradient(128deg, #1e88f0 0%, #47abff 100%);
      }
      .title {
        font-size: 16px;
        color: #333;
      }
      .time {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
@media (min-width: 1280px) {
  .top {
    height: 320px;
    padding-top: 155px;
    // background:url('../assets/images/find-bg.png') center/cover no-repeat;
    .input {
      width: 520px;
      height: 52px;
      margin: 0 auto;
      background: #ffffff;
      box-shadow: 2px 2px 6px 0px rgba(189, 193, 204, 0.53);
      padding: 0 20px 0 15px;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
  .crumb {
    height: 48px;
    background: #f9fafc;
    ul {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      font-size: 14px;
      color: #333;
      li {
        padding: 0 12px;
        &:nth-of-type(1) {
          padding-left: 0;
        }
      }
    }
  }
  .con {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 39px;
    ul {
      min-height: 480px;
      padding: 24px 0 32px;
      li {
        height: 48px;
        padding: 0 20px 0 38px;
        border-bottom: 1px dashed #e6e6e6;
        position: relative;
        &:before {
          content: "";
          width: 6px;
          height: 6px;
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-of-type(odd):before {
          background: linear-gradient(315deg, #1e88f0 0%, #4a47ff 100%);
        }
        &:nth-of-type(even):before {
          background: linear-gradient(128deg, #1e88f0 0%, #47abff 100%);
        }
        .title {
          font-size: 16px;
          color: #333;
        }
        .time {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
</style>