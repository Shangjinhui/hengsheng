<template>
  <!-- 公司新闻 -->
  <div class="company" v-if="gsxwtypes.length > 0">
    <div v-for="(item, index) in gsxwtypes" :key="index" class="wow fadeInUp" :data-wow-delay='`${index * 0.3}s`'>
      <div class="box">
        <div class="title">{{ item.title }}</div>
        <div class="bot" @click="tolist(item.id, item.cid)">
          <img :src="[index == 1 ? img02 : img01]" alt="" />
          <span>MORE +</span>
        </div>
      </div>
      <div class="box2">
        <div
          class="imgtitle"
          @click="tocli(item2.id)"
          v-for="(item2, index2) in item.list"
          :key="index2"
        >
          <div class="img1" v-if="item2.photo">
            <img :src="$imgurl + item2.photo.url" alt="" />
          </div>
          <p class="img2">{{ item2.title }}</p>
          <p class="img3" v-html="$until.removeImg(item2.content)"></p>
          <p class="img4">{{ item2.timeline }}</p>
        </div>
      </div>
    </div>

    <div class="foot">
      <div>
        <img src="../../assets/img01/footlog.png" alt="" />
        <span>媒体联络：hs.pr@hundsun.com</span>
      </div>
    </div>
  </div>
</template>

<script>
let WOW = require("wowjs");
export default {
  data() {
    return {
      gsxwtypes: [],
      img01: require("@/assets/img01/b1-s2.png"),
      img02: require("@/assets/img01/b1-s1.png"),
      flg: true,
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      this.$fetch({
        url: "index.php/news/gsxwlimit",
        type: "get",
      }).then((res) => {
        this.gsxwtypes = res.data.gsxwtypes;

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

    tocli(id) {
      this.$router.push({
        path: "/newsview",
        query: {
          id,
          crems: JSON.stringify({ title: "公司新闻", path: "/news/company" }),
        },
      });
    },
    tolist(ctype, cid) {
      this.$router.push({
        path: "/newslist",
        query: {
          ctype: ctype,
          cid: cid,
          crems: JSON.stringify({ title: "公司新闻", path: "/news/company" }),
        },
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 1200px;
  margin: 50px auto 20px;
  display: flex;
  justify-content: space-between;
}
.box .title {
  font-size: 28px;
  color: #333333;
  font-weight: 600;
}
.box .bot {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.company > div:nth-child(2) .box .bot span {
  color: #8851c6;
}

.box .bot img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.box .bot span {
  font-size: 11px;
  color: #396aff;
}
.box .cont {
  width: 1200px;
  margin: 0 auto;
}
.box2 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box2 .imgtitle {
  border: 1px solid #e6e6e6;
}
.box2 .imgtitle p {
  padding: 0 12px;
}
.box2 .imgtitle .img1 {
  width: 376px;
  height: 250px;
  cursor: pointer;
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
  overflow: hidden;
}
.box2 .imgtitle .img3 {
  width: 380px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 20px;
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
.foot > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 1280px) {
  .box {
    width: 1200px;
    margin: 50px auto 20px;
    display: flex;
    justify-content: space-between;
  }
  .box .title {
    font-size: 28px;
    color: #333333;
    font-weight: 600;
  }
  .box .bot {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .company > div:nth-child(2) .box .bot span {
    color: #8851c6;
  }

  .box .bot img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .box .bot span {
    font-size: 11px;
    color: #396aff;
  }
  .box .cont {
    width: 1200px;
    margin: 0 auto;
  }
  .box2 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .box2 .imgtitle {
    border: 1px solid #e6e6e6;
  }
  .box2 .imgtitle p {
    padding: 0 12px;
  }
  .box2 .imgtitle .img1 {
    width: 376px;
    height: 250px;
    cursor: pointer;
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
    overflow: hidden;
  }
  .box2 .imgtitle .img3 {
    width: 380px;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 20px;
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
  .foot > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>