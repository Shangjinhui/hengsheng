<template>
  <div>
    <img
      class="top-banner"
      :src="tabs[selected] && $imgurl + tabs[selected].exp1.url"
      alt=""
    />
    <div class="tabs">
      <ul class="flex">
        <li
          class="cursor b"
          v-for="(item, index) in tabs"
          :key="index"
          :class="[{ on: selected == index }]"
          @click="changeTabs(index)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>

    <div class="main flex-top">
      <div class="side">
        <ul>
          <li
            class="cursor"
            v-for="(item, index) in sides"
            :key="index"
            :class="[{ 'on b': selected_side == index }]"
            @click="clickSide(item.id, index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div class="con">
        <!-- 介绍 -->
        <div class="block" v-if="detail.content">
          <div class="header-h" ref="anch1"></div>
          <p class="title b icon">{{ sides[0].name }}</p>
          <p class="desc" v-html="detail.content"></p>
        </div>
        <!-- 功能全景图 -->
        <div class="block" v-if="detail.photo">
          <div class="header-h" ref="anch2"></div>
          <p class="title b icon">功能全景图</p>
          <img
            class="img"
            :src="detail.photo && $imgurl + detail.photo.url"
            alt=""
          />
        </div>
        <!-- 核心产品 -->
        <div
          class="block"
          v-if="detail.coreproducts && detail.coreproducts.length > 0"
        >
          <div class="header-h" ref="anch3"></div>
          <p class="title b icon">核心产品</p>
          <ul class="core">
            <li v-for="(item, index) in detail.coreproducts" :key="index">
              <p class="title b">{{ item.title }}</p>
              <p class="desc" v-html="item.content"></p>
            </li>
          </ul>
        </div>
        <!-- 产品价值 -->
        <div class="block" v-if="detail.con2">
          <div class="header-h" ref="anch4"></div>
          <p class="title b icon">产品价值</p>
          <p class="desc" v-html="detail.con2"></p>
        </div>
        <!-- 客户案例 -->
        <div class="block" v-if="detail.cases && detail.cases.length > 0">
          <div class="header-h" ref="anch5"></div>
          <p class="title b icon">客户案例</p>
          <ul class="core">
            <li v-for="(item, index) in detail.cases" :key="index">
              <p class="title b">{{ item.title }}</p>
              <p class="desc" v-html="item.content"></p>
            </li>
          </ul>
        </div>
        <!-- 扩展一 -->
        <div class="block" v-if="detail.con3">
          <p class="title b icon" v-if="detail.exp3">{{ detail.exp3 }}</p>
          <p class="desc" v-html="detail.con3"></p>
        </div>
        <!-- 扩展二 -->
        <div class="block" v-if="detail.con4">
          <p class="title b icon" v-if="detail.exp4">{{ detail.exp4 }}</p>
          <p class="desc" v-html="detail.con4"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        // { name: "前端" },
        // { name: "微服务" },
        // { name: "低延时" },
        // { name: "效能" },
        // { name: "低码" },
        // { name: "数据库" },
        // { name: "大数据" },
        // { name: "人工智能" },
        // { name: "区块链" },
        // { name: "分布式" },
      ],
      selected: 0,
      id: "",
      sides: [
        // {name:'微服务Light-JRES介绍'},
        // {name:'功能全景图'},
        // {name:'核心产品'},
        // {name:'产品价值'},
        // {name:'客户案列'},
      ],
      selected_side: 0,

      detail: {},
    };
  },
  mounted() {
    this.selected = this.$route.query.ind || 0;
    this.id = this.$route.query.id;

    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/lightapi/initSecPage",
        type: "post",
        data: this.$qs.stringify({ id: this.id }),
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.tabs = res.data.list;

          let detail = res.data.lightinfo,
            sides = [];
          if (detail.content)
            sides.push({ name: detail.title + detail.entitle + "介绍", id: 1 });
          if (detail.photo) sides.push({ name: "功能全景图", id: 2 });
          if (detail.coreproducts && detail.coreproducts.length > 0)
            sides.push({ name: "核心产品", id: 3 });
          if (detail.con2) sides.push({ name: "产品价值", id: 4 });
          if (detail.cases && detail.cases.length > 0)
            sides.push({ name: "客户案列", id: 5 });
          this.sides = sides;
          this.detail = detail;
        }
      });
    },
    changeTabs(ind) {
      if (this.selected == ind) return;
      this.selected = ind;
      this.id = this.tabs[ind].id;
      this.getData();
      this.$router.push({
        path: "/lightcon",
        query: { ind, id: this.tabs[ind].id },
      });
    },
    clickSide(id, ind) {
      this.selected_side = ind;
      let dom = this.$refs["anch" + id];
      if (dom) this.$until.scrollAnch(dom);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-banner {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.tabs {
  width: 100%;
  background: #fafdfb;
  font-size: 14px;
  color: #333;
  ul {
    width: 1200px;
    min-height: 56px;
    line-height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      &.on {
        color: #246cff;
      }
    }
  }
}
.main {
  width: 1200px;
  margin: 50px auto 0;
  .side {
    width: 270px;
    padding-bottom: 100px;
    position: sticky;
    top: 100px;
    ul {
      li {
        font-size: 14px;
        color: #333333;
        line-height: 18px;
        padding-left: 24px;
        margin-bottom: 20px;
        position: relative;
        &:before {
          content: "";
          width: 10px;
          height: 2px;
          background: #a6a6a6;
          position: absolute;
          left: 6px;
          top: 8px;
        }
        &.on,
        &:hover {
          color: #396aff;
          &:before {
            width: 16px;
            background: #246cff;
            left: 0;
          }
        }
      }
    }
  }
  .con {
    width: 733px;
    padding-bottom: 100px;
    .block {
      margin-bottom: 80px;
    }
    .title {
      font-size: 20px;
      color: #000;
      line-height: 25px;
      margin-bottom: 40px;
      display: inline-block;
      position: relative;
      &.icon {
        &:after {
          content: "";
          width: 11px;
          height: 2px;
          background: linear-gradient(270deg, #1e88f0 0%, #4a47ff 100%);
          position: absolute;
          right: -14px;
          bottom: 0;
        }
      }
    }
    .desc {
      font-size: 14px;
      font-weight: 400;
      color: #000;
      line-height: 28px;
    }
    .img {
      max-width: 100%;
    }
    .core {
      li {
        margin-bottom: 50px;
        .title {
          font-size: 16px;
          color: #000;
          line-height: 24px;
          margin-bottom: 12px;
          padding-left: 19px;
          position: relative;
          &:before {
            content: "";
            width: 5px;
            height: 5px;
            border: 2px transparent solid;
            border-image: linear-gradient(
                to right,
                rgba(30, 136, 240, 1),
                rgba(74, 71, 255, 1)
              )
              1 1;
            position: absolute;
            left: 0;
            top: 7px;
          }
        }
        .desc {
          font-size: 14px;
          color: #000;
          line-height: 28px;
        }
      }
    }
  }
}

@media (min-width:1280px){
  .top-banner {
  width: 100%;
  height: 320px;
  object-fit: cover;
}
.tabs {
  width: 100%;
  background: #fafdfb;
  font-size: 14px;
  color: #333;
  ul {
    width: 1200px;
    min-height: 56px;
    line-height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      &.on {
        color: #246cff;
      }
    }
  }
}
.main {
  width: 1200px;
  margin: 50px auto 0;
  .side {
    width: 270px;
    padding-bottom: 100px;
    position: sticky;
    top: 100px;
    ul {
      li {
        font-size: 14px;
        color: #333333;
        line-height: 18px;
        padding-left: 24px;
        margin-bottom: 20px;
        position: relative;
        &:before {
          content: "";
          width: 10px;
          height: 2px;
          background: #a6a6a6;
          position: absolute;
          left: 6px;
          top: 8px;
        }
        &.on,
        &:hover {
          color: #396aff;
          &:before {
            width: 16px;
            background: #246cff;
            left: 0;
          }
        }
      }
    }
  }
  .con {
    width: 733px;
    padding-bottom: 100px;
    .block {
      margin-bottom: 80px;
    }
    .title {
      font-size: 20px;
      color: #000;
      line-height: 25px;
      margin-bottom: 40px;
      display: inline-block;
      position: relative;
      &.icon {
        &:after {
          content: "";
          width: 11px;
          height: 2px;
          background: linear-gradient(270deg, #1e88f0 0%, #4a47ff 100%);
          position: absolute;
          right: -14px;
          bottom: 0;
        }
      }
    }
    .desc {
      font-size: 14px;
      font-weight: 400;
      color: #000;
      line-height: 28px;
    }
    .img {
      max-width: 100%;
    }
    .core {
      li {
        margin-bottom: 50px;
        .title {
          font-size: 16px;
          color: #000;
          line-height: 24px;
          margin-bottom: 12px;
          padding-left: 19px;
          position: relative;
          &:before {
            content: "";
            width: 5px;
            height: 5px;
            border: 2px transparent solid;
            border-image: linear-gradient(
                to right,
                rgba(30, 136, 240, 1),
                rgba(74, 71, 255, 1)
              )
              1 1;
            position: absolute;
            left: 0;
            top: 7px;
          }
        }
        .desc {
          font-size: 14px;
          color: #000;
          line-height: 28px;
        }
      }
    }
  }
}
}
</style>