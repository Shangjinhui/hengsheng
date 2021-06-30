<template>
  <div class="news">
    <div class="box1">
      <div class="text">
        <div class="txt">新闻动态</div>
        <div class="txt2">News Tendency</div>
      </div>
    </div>
    <div class="box2">
      <div class="flex-sp top">
        <ul class="flex flex1">
          <router-link tag="li" to="/news/product">产品动态</router-link>
          <router-link tag="li" to="/news/company">公司新闻</router-link>
          <router-link tag="li" to="/news/bazaar">市场活动</router-link>
          <router-link tag="li" to="/news/world">恒生世界</router-link>
        </ul>
        <!-- <el-input class="inpt" placeholder="搜索相关资讯" v-model="keyword" @change="search"></el-input> -->
      </div>
      <div class="content">
        <keep-alive v-if="$route.meta.cache">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      keyword: "",
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
  },
  methods: {
    search() {
      // this.$router.push({path:'/',query:{kw:this.keyword}})
    },
    // getdata(){
    //   this.$fetch({
    //     url:"index.php/news/cpdt",
    //     type:"post",
    //     data:this.$qs.stringify({keyword:this.keyword})
    //   }).then((res)=>{
    //     console.log(res,"55555555555555");
    //   })
    // }
  },
};
</script>

<style scoped>
.box1 {
  height: 320px;
  background: url("../assets/img01/news1.png")center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box1 .text {
  text-align: center;
  margin-top: 45px;
}
.box1 .text .txt {
  font-size: 36px;
  font-weight: 400;
  color: #333333;
  padding-bottom: 5px;
}
.box1 .text .txt2 {
  font-size: 16px;
  font-weight: 400;
  color: #999;
  line-height: 20px;
}
.box2 .inpt {
  width: 240px;
  height: 40px;
  position: relative;
}
.box2 .inpt::after {
  content: "";
  background-image: url(../assets/images/h-sousuo.png);
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 15px;
  background-size: cover;
}
.box2 .top {
  width: 1200px;
  margin: 50px auto;
  /* margin: 40px 0; */
}
.box2 .flex1 li {
  margin-right: 92px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
.router-link-active {
  color: #396aff;
}

@media (min-width: 1280px) {
  .box1 {
    height: 320px;
    background: url("../assets/img01/news1.png")center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box1 .text {
    text-align: center;
    margin-top: 45px;
  }
  .box1 .text .txt {
    font-size: 36px;
    font-weight: 400;
    color: #333333;
    padding-bottom: 5px;
  }
  .box1 .text .txt2 {
    font-size: 16px;
    font-weight: 400;
    color: #999;
    line-height: 20px;
  }
  .box2 .inpt {
    width: 240px;
    height: 40px;
    position: relative;
  }
  .box2 .inpt::after {
    content: "";
    background-image: url(../assets/images/h-sousuo.png);
    width: 18px;
    height: 18px;
    position: absolute;
    top: 10px;
    right: 15px;
    background-size: cover;
  }
  .box2 .top {
    width: 1200px;
    margin: 50px auto;
    /* margin: 40px 0; */
  }
  .box2 .flex1 li {
    margin-right: 92px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .router-link-active {
    color: #396aff;
  }
}
</style>