<template>
  <div class="newslist">
    <my-nav :crems="crems"></my-nav>
    <div class="content">
      <ul class="cont">
        <li v-for="(item, index) in list" :key="index" @click="tolink(item.id)">
          <div class="left" v-if="item.photo">
            <img :src="$imgurl + item.photo.url" alt="" />
          </div>
          <div class="right">
            <p class="ellipsis1">{{ item.title }}</p>
            <p class="ellipsis2" v-html="$until.removeImg(item.content)"></p>
            <p>{{ item.timeline }}</p>
          </div>
        </li>
      </ul>
      <div class="btn" @click="change" v-if="total >= pageNo * pageSize">
        查看更多
      </div>
    </div>
  </div>
</template>

<script>
import myNav from "@/components/newsnav";
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      total: 0,
      list: [],
      ctype: 0,
      cid: 41,
      crems: {},
    };
  },
  components: {
    myNav,
  },
  mounted() {
    this.ctype = this.$route.query.ctype;
    this.cid = this.$route.query.cid;
    if (this.$route.query.crems)
      this.crems = JSON.parse(this.$route.query.crems);
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/news/gsxwpage",
        type: "post",
        data: this.$qs.stringify({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          ctype: this.ctype,
          cid: this.cid,
        }),
      }).then((res) => {
        let list = this.list;
        this.total = res.data.totalCount;
        this.list = [...list, ...res.data.list];
      });
    },
    change() {
      if (this.pageNo * this.pageSize < this.total) {
        this.pageNo++;
        this.getData();
      }
    },
    tolink(id) {
      // console.log(id);
      this.$router.push({ path: "/newsview", query: { id: id } });
    },
  },
};
</script>

<style scoped>
.cont {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 800px;
}
.cont li:nth-child(1) {
  margin-top: 36px;
}
.cont li {
  display: flex;
  margin-bottom: 36px;
  cursor: pointer;
}
.cont .left img {
  width: 210px;
  height: 140px;
  margin-right: 24px;
}
.cont .right {
  /* width: 556px; */
  flex: 1;
}
.cont .right p:nth-child(1) {
  font-size: 20px;
  color: #333333;
  font-weight: 600;
}
.cont .right p:nth-child(2) {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin: 15px 0 20px 0;
}
.cont .right p:nth-child(3) {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  margin-top: 37px;
}
.btn {
  width: 120px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #396aff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 56px;
  color: #396aff;
  transition: all 0.3s linear;
}
.btn:hover {
  color: #fff;
  background: #396aff;
  transition: all 0.3s linear;
}
@media (min-width: 1280px) {
  .cont {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 800px;
  }
  .cont li:nth-child(1) {
    margin-top: 36px;
  }
  .cont li {
    display: flex;
    margin-bottom: 36px;
    cursor: pointer;
  }
  .cont .left img {
    width: 210px;
    height: 140px;
    margin-right: 24px;
  }
  .cont .right {
    /* width: 556px; */
    flex: 1;
  }
  .cont .right p:nth-child(1) {
    font-size: 20px;
    color: #333333;
    font-weight: 600;
  }
  .cont .right p:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    margin: 15px 0 20px 0;
  }
  .cont .right p:nth-child(3) {
    font-size: 16px;
    font-weight: 400;
    color: #999999;
    margin-top: 37px;
  }
  .btn {
    width: 120px;
    height: 40px;
    margin: 0 auto;
    border: 1px solid #396aff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 56px;
    color: #396aff;
    transition: all 0.3s linear;
  }
  .btn:hover {
    color: #fff;
    background: #396aff;
    transition: all 0.3s linear;
  }
}
</style>