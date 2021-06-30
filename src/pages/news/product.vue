<template>
  <!-- 产品动态 -->
  <div class="product">
    <div class="content wow fadeInUp">
      <div class="left" @click="torou(latestNewsO.id)">
        <img
          :src="latestNewsO.photo && $imgurl + latestNewsO.photo.url"
          alt=""
        />
        <div class="cont">{{ latestNewsO.title }}</div>
      </div>
      <div class="right">
        <div
          class="text"
          @click="torou(item.id)"
          v-for="(item, index) in latestNews"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <p v-html="$until.removeImg(item.content)"></p>
          <p>{{ item.timeline }}</p>
        </div>
      </div>
    </div>
  <div class="box2_big">
    <div class="box2 wow fadeInUp" data-wow-delay='0.2s'>
      <div
        @click="torou(item.id)"
        class="imgtitle"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="img1">
          <img :src="item.photo && $imgurl + item.photo.url" alt="" />
        </div>
        <p class="img2 ellipsis1">{{ item.title }}</p>
        <p class="img3" v-html="$until.removeImg(item.content)"></p>
        <p class="img4">{{ item.timeline }}</p>
      </div>
    </div>
     <div class="btn" @click="change(ctype, cid)">查看更多</div>
    </div>

   
  </div>
</template>

<script>
let WOW = require("wowjs");
export default {
  data() {
    return {
      latestNewsO: {},
      latestNews: [],
      list: [],
      pageNo: 1,
      pageSize: 6,
      total: 0,
      cid: 0,
      ctype: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/news/cpdt",
        type: "post",
        data: this.$qs.stringify({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
        }),
      }).then((res) => {
        this.total = res.data.totalCount;
        this.latestNewsO = res.data.latestNews[0];
        this.latestNews = res.data.latestNews.slice(1);
        let list = this.list;
        this.list = [...list, ...res.data.list];
        this.cid = res.data.cid;
        this.ctype = res.data.ctype;

         this.$nextTick(() => {
          let wow = new WOW.WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
          }).init();
        });
      });
    },
    change(ctype, cid) {
      this.$router.push({
        path: "/newslist",
        query: {
          ctype: ctype,
          cid: cid,
          crems: JSON.stringify({ title: "产品动态", path: "/news/product" }),
        },
      });
    },
    torou(id) {
      this.$router.push({
        path: "/newsview",
        query: {
          id,
          crems: JSON.stringify({ title: "产品动态", path: "/news/product" }),
        },
      });
    },
  },
};
</script>

<style scoped>
.box2_big{
  width: 100%;
  background: #F9FAFB;
  padding-top: 50px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
}
.content .left {
  width: 747px;
  height: 498px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.content .left:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.content .left img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.content .left .cont {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 72px;
  background: linear-gradient(
    327deg,
    rgba(57, 106, 255, 0.33) 0%,
    #396aff 100%
  );
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 20px;
  color: #ffffff;
}
.content .right {
  width: 453px;
  height: 498px;
  background: linear-gradient(
    298deg,
    hsl(0, 0%, 100%, 0.31) 0%,
    hsl(219, 28%, 90%, 0.31) 100%
  );
}
.right .text {
  padding: 36px 36px 0;
  cursor: pointer;
}
.right .text p:nth-child(1) {
  font-size: 20px;
  color: #333333;
  font-weight: 600;
}
.right .text p:nth-child(2) {
  width: 381px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 22px;
  margin: 12px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.right .text p:nth-child(3) {
  font-size: 14px;
  font-weight: 400;
  color: #999999;
}

.box2 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box2 .imgtitle {
  border: 1px solid #e6e6e6;
  margin-bottom: 36px;
  /* margin-right: 15px; */
  cursor: pointer;
}

.box2 .imgtitle p {
  padding-left: 12px;
}
.box2 .imgtitle .img1 {
  width: 376px;
  height: 250px;
  overflow: hidden;
}
.box2 .imgtitle .img1:hover img {
  transform: scale(1.1);
  transition: all 0.3s linear;
}
.box2 .imgtitle .img1 img {
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
}
.box2 .imgtitle .img2 {
  width: 352px;
  height: 25px;
  font-size: 18px;
  color: #333333;
  margin: 18px 0 8px 0;
  font-weight: 600;
}
.box2 .imgtitle .img3 {
  width: 375px;
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 22px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.box2 .imgtitle .img4 {
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  margin: 9px 0 16px 0;
}
.foot {
  width: 1200px;
  height: 75px;
  background: linear-gradient(
    313deg,
    rgba(225, 240, 255, 0.18) 0%,
    #eff7ff 100%
  );
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot span {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}
.btn {
  width: 120px;
  height: 40px;
  border: 1px solid #396aff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #396aff;
  transition: all linear 0.3s;
  cursor: pointer;
}
.btn:hover {
  background: #396aff;
  color: #fff;
  transition: all linear 0.3s;
}
@media (min-width: 1280px) {
  .box2_big{
  width: 100%;
  background: #F9FAFB;
  padding-top: 50px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  .content {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  }
  .content .left {
    width: 747px;
    height: 498px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }
  .content .left:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .content .left img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .content .left .cont {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 72px;
    background: linear-gradient(
      327deg,
      rgba(57, 106, 255, 0.33) 0%,
      #396aff 100%
    );
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 20px;
    color: #ffffff;
  }
  .content .right {
    width: 453px;
    height: 498px;
    background: linear-gradient(
      298deg,
      hsl(0, 0%, 100%, 0.31) 0%,
      hsl(219, 28%, 90%, 0.31) 100%
    );
  }
  .right .text {
    padding: 36px 36px 0;
    cursor: pointer;
  }
  .right .text p:nth-child(1) {
    font-size: 20px;
    color: #333333;
    font-weight: 600;
  }
  .right .text p:nth-child(2) {
    width: 381px;
    height: 44px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    margin: 12px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .right .text p:nth-child(3) {
    font-size: 14px;
    font-weight: 400;
    color: #999999;
  }

  .box2 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .box2 .imgtitle {
    border: 1px solid #e6e6e6;
    margin-bottom: 36px;
    /* margin-right: 15px; */
    cursor: pointer;
  }

  .box2 .imgtitle p {
    padding-left: 12px;
  }
  .box2 .imgtitle .img1 {
    width: 376px;
    height: 250px;
    overflow: hidden;
  }
  .box2 .imgtitle .img1:hover img {
    transform: scale(1.1);
    transition: all 0.3s linear;
  }
  .box2 .imgtitle .img1 img {
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
  }
  .box2 .imgtitle .img2 {
    width: 352px;
    height: 25px;
    font-size: 18px;
    color: #333333;
    margin: 18px 0 8px 0;
    font-weight: 600;
  }
  .box2 .imgtitle .img3 {
    width: 375px;
    height: 44px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .box2 .imgtitle .img4 {
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    margin: 9px 0 16px 0;
  }
  .foot {
    width: 1200px;
    height: 75px;
    background: linear-gradient(
      313deg,
      rgba(225, 240, 255, 0.18) 0%,
      #eff7ff 100%
    );
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .foot span {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }
  .btn {
    width: 120px;
    height: 40px;
    border: 1px solid #396aff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: #396aff;
    transition: all linear 0.3s;
    cursor: pointer;
  }
  .btn:hover {
    background: #396aff;
    color: #fff;
    transition: all linear 0.3s;
  }
}
</style>