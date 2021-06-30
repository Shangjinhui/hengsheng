<template>
  <div class="view">
    <my-nav :crems="crems"></my-nav>
    <div class="content">
      <div class="box1">
        <div class="txt1">{{ rs.title }}</div>
        <div class="txt2">
          <span>{{ rs.timeline }}</span>
          <span>{{ rs.source }}</span>
          <span>浏览量{{ rs.pviews }}次</span>
        </div>
        <div class="txt3" v-html="rs.content"></div>
      </div>
      <div class="foot">
        <div class="left">
          <div v-if="rs.prev_id" @click="toOther(rs.prev_id)">
            <span class="last">上一篇</span>
            <span>{{ rs.prev_title }}</span>
          </div>
          <div v-if="rs.next_id" @click="toOther(rs.next_id)">
            <span class="next">下一篇</span>
            <span>{{ rs.next_title }}</span>
          </div>
        </div>

        <div class="right" @click="route">
          返回列表
          <img src="../assets/img01/fk.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myNav from "@/components/newsnav";
export default {
  components: {
    myNav,
  },
  data() {
    return {
      goods_id: 58,
      rs: {},
      crems: {},
    };
  },
  mounted() {
    // console.log(JSON.parse(this.$route.query.crems))
    this.goods_id = this.$route.query.id;
    this.getdata();
    if (this.$route.query.crems)
      this.crems = JSON.parse(this.$route.query.crems);
  },
  methods: {
    getdata() {
      this.$fetch({
        url: "index.php/news/info",
        type: "post",
        data: this.$qs.stringify({ id: this.goods_id }),
      }).then((res) => {
        console.log(res);
        this.rs = res.data.rs;
      });
    },
    toOther(id) {
      this.goods_id = id;
      this.getdata();
      this.$router.push({ path: "/newsview", query: { id } });
    },
    route() {
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>

<style scoped>
.box1 {
  min-height: 500px;
}
.box1 .txt1 {
  font-size: 28px;
  color: #333333;
  margin-top: 60px;
  font-weight: 600;
}
.box1 .txt2 {
  margin: 20px 0;
  position: relative;
}
.box1 .txt2::after {
  content: "";
  width: 800px;
  height: 1px;
  background: #d8d8d8;
  opacity: 0.8;
  position: absolute;
  bottom: -15px;
  left: 0;
}
.box1 .txt2 span {
  font-size: 16px;
}
.box1 .txt2 span:nth-child(2) {
  margin: 0 12px;
}
.box1 .txt3 {
  margin-top: 50px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 25px;
}
.content {
  width: 800px;
  margin: 0 auto;
}
.foot {
  width: 800px;
  margin: 40px 0;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: center;
  color: #396aff;
  cursor: pointer;
}
.right img {
  width: 15px;
  height: 12px;
  margin-left: 12px;
  margin-right: 37px;
}
.left > div {
  margin: 14px;
}
.left > div:hover span {
  color: #396aff;
}
.left span {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
}
.last,
.next {
  margin-right: 15px;
  cursor: pointer;
}
@media (min-width: 1280px) {
  .box1 {
    min-height: 500px;
  }
  .box1 .txt1 {
    font-size: 28px;
    color: #333333;
    margin-top: 60px;
    font-weight: 600;
  }
  .box1 .txt2 {
    margin: 20px 0;
    position: relative;
  }
  .box1 .txt2::after {
    content: "";
    width: 800px;
    height: 1px;
    background: #d8d8d8;
    opacity: 0.8;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
  .box1 .txt2 span {
    font-size: 16px;
  }
  .box1 .txt2 span:nth-child(2) {
    margin: 0 12px;
  }
  .box1 .txt3 {
    margin-top: 50px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 25px;
  }
  .content {
    width: 800px;
    margin: 0 auto;
  }
  .foot {
    width: 800px;
    margin: 40px 0;
    background: #f7f7f7;
    display: flex;
    justify-content: space-between;
  }
  .right {
    display: flex;
    align-items: center;
    color: #396aff;
    cursor: pointer;
  }
  .right img {
    width: 15px;
    height: 12px;
    margin-left: 12px;
    margin-right: 37px;
  }
  .left > div {
    margin: 14px;
  }
  .left > div:hover span {
    color: #396aff;
  }
  .left span {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .last,
  .next {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
<style>
.view .content .box1 .txt3 img {
  max-width: 800px !important;
}
.view .content .box1 .txt3 {
  color: #000;
}
</style>