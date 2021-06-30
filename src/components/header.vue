<template>
  <div
    class="header-out"
    ref="header"
    :class="[{ 'header-fixed': bgType == 2 }]"
  >
    <div class="header-filter"></div>
    <div
      class="header-inner flex-center"
      :style="{
        background:
          bgType == 1
            ? `linear-gradient(313deg, rgba(255, 255, 255, ${opl}) 0%, rgba(255, 255, 255, ${opr}) 100%)`
            : '#fff',
        color: bgType == 1 ? color : '#000',
      }"
    >
      <router-link to="/"
        ><img class="logo cursor" src="@/assets/images/logo.gif" alt=""
      /></router-link>
      <ul class="tabs flex">
        <router-link tag="li" to="/news" :class="[{ on: selected == 0 }]"
          >新闻动态</router-link
        >
        <li :class="[{ on: selected == 1 }]" @click.stop>
          <p @click="showLi2 = !showLi2">产品与解决方案</p>
          <transition-group name="fade">
            <div class="li2-abs flex-top" v-if="showLi2" key="fade1">
              <div class="left">
                <p class="title b">业务领域</p>
                <ul>
                  <li
                    @click="toPath('/business', item.id)"
                    v-for="(item, index) in business"
                    :key="index"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
              <div class="left">
                <p class="title b">行业解决方案</p>
                <ul>
                  <li
                    @click="toPath('/industry', item.id)"
                    v-for="(item, index) in industry"
                    :key="index"
                  >
                    {{ item.title }}
                  </li>
                </ul>
              </div>
            </div>
          </transition-group>
        </li>
        <router-link tag="li" to="/light" :class="[{ on: selected == 2 }]"
          >LIGHT</router-link
        >
        <router-link tag="li" to="/customer" :class="[{ on: selected == 3 }]"
          >客户服务</router-link
        >
        <router-link tag="li" to="/investor" :class="[{ on: selected == 4 }]"
          >投资者关系</router-link
        >
        <li :class="[{ on: selected == 5 }]">
          <a href="https://gongyi.hundsun.com/gy/" target="_blank"
            >企业社会责任</a
          >
        </li>
        <li :class="[{ on: selected == 6 }]" @click.stop>
          <!-- <p @click="showLi7=!showLi7">关于恒生</p> -->
          <span
            class="el-dropdown-link appspan"
            :style="{ color: bgType == 1 ? color : '#000' }"
            popper-class="appbox"
            trigger="click"
            @click="showL22 = !showL22"
          >
            关于恒生
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
            <transition-group name="fade">
              <div class="appdiv" v-if="showL22" key="fade1">
                <div v-for="(item, index) in aboutH" :key="index">
                  <router-link
                    tag="div"
                    :to="{ path: '/about', query: { anch: 'anch' + index } }"
                    >{{ item.name }}</router-link
                  >
                </div>
                <router-link tag="div" to="/contactus">联系我们</router-link>
              </div>
            </transition-group>
          </span>
        </li>
        <router-link tag="li" to="/joinus" :class="[{ on: selected == 7 }]"
          >加入我们</router-link
        >
      </ul>
      <div class="find-out cursor" @click.stop>
        <img
          class="icon"
          src="@/assets/images/h-sousuo.png"
          alt=""
          @click="showFind = !showFind"
        />
        <transition-group name="fade">
          <div class="input flex" v-show="showFind" key="fade2">
            <input
              class="flex1"
              type="text"
              v-model="search"
              placeholder="请输入搜索内容"
              @change="toSearch"
            />
            <img src="@/assets/images/h-sousuo.png" alt="" />
          </div>
        </transition-group>
      </div>
      <a
        class="xt cursor"
        href="https://synergy.hundsun.com/wui/main.jsp"
        target="_blank"
        >协同</a
      >
      <div class="lang cursor">EN</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgType: 1, //1透明2白底
      opl: 0.1, //初始渐变透明左
      opr: 0.1, //初始渐变透明右
      color: "#000", //动态配置初始时的header文字颜色
      selected: -1,
      business: [
        //产品与解决方案下的业务领域
        // {title:'财富管理',id:'1'},
        // {title:'经纪业务',id:'2'},
        // {title:'资产管理',id:'3'},
        // {title:'机构服务',id:'4'},
        // {title:'合规风控',id:'5'},
        // {title:'企业金融',id:'6'},
      ],
      industry: [
        //产品与解决方案下的行业解决方案
        // {title:'证券行业解决方案',id:'7'},
        // {title:'期货行业解决方案',id:'8'},
        // {title:'基金行业解决方案',id:'9'},
        // {title:'保险行业解决方案',id:'11'},
        // {title:'信托&AMC行业解决方案',id:'12'},
        // {title:'银行行业解决方案',id:'13'},
        // {title:'私募行业解决方案',id:'14'},
        // {title:'产业行业解决方案',id:'15'},
        // {title:'金控集团行业解决方案',id:'16'},
        // {title:'基础设施行业解决方案',id:'17'},
      ],
      showLi2: false, //产品与解决方案
      showLi7: false, //关于恒生
      showL22: false,
      aboutH: [
        { name: "关于恒生", path: "" },
        { name: "管理团队", path: "" },
        { name: "发展历程", path: "" },
        { name: "荣誉资质", path: "" },
      ],
      showFind: false,
      search: "",
      //header_hover: false,
    };
  },
  computed: {
    //记录当前页在顶部时文字颜色
    colorinit() {
      return this.$store.state.until.header_color;
    },
  },
  watch: {
    // 监听路由变化处理头部选中状态
    $route(val) {
      //console.log(val,'--------')
      let obj = {
          '/news/product':0,
          '/news/company':0,
          '/news/bazaar':0,
          '/news/world':0,
          '/business':1,
          '/industry':1,
          '/light':2,
          '/customer':3,
          '/investor':4,
          '/investornotice':4,
          '/about':6,
          '/joinus':7
      }
      this.selected = obj[val.path];
      //部分页面头部直接白底占位。其它透明不占位(文字颜色可配置)，滚动变白底黑子
      let path = val.path,
        white = ["/joinus", "/customer", "/lightcon"];
      this.bgType = white.indexOf(path) != -1 ? 2 : 1;
      //if (val.path == "/light") this.header_hover = false;
    },
    colorinit(val) {
      this.color = val;
    },
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeHeader);
    window.removeEventListener("scroll", this.listenScroll);
  },
  mounted() {
    window.addEventListener("click", this.closeHeader);
    //监听滚动处理头部有透明变白
    window.addEventListener("scroll", this.listenScroll);

    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/common/initGuideAndFoot",
        loading: false,
      }).then((res) => {
        //console.log(res);
        if (res.code == 0) {
          this.business = res.data.guide_trades;
          this.industry = res.data.guide_topsolution;
        }
      });
    },
    closeHeader() {
      this.showLi2 = false;
      this.showLi7 = false;
      this.showFind = false;
      this.showL22 = false;
    },
    listenScroll() {
      let h = this.$refs["header"].offsetHeight,
        st = document.body.scrollTop || document.documentElement.scrollTop;
      //console.log(h,st)
      this.opl = st >= h ? 1 : 0.1 + (st / h) * 0.9;
      this.opr = st >= h ? 1 : 0.1 + (st / h) * 0.9;
      //header一半高度的时候变回#000
      this.color = 2 * st >= h ? "#000" : this.colorinit;
      //console.log(this.opl,this.opr)
    },
    toSearch() {
      if (this.$route.path == "/findpage") return;
      window.sessionStorage.setItem("search", this.search);
      this.$router.push({ path: "/findpage" });
      this.search = "";
      this.showFind = false;
    },
    toPath(path, id) {
      this.showLi2 = false;
      //this.header_hover = false;
      let text = this.$route.query.id;
      if (text == id) return;
      this.$router.push({ path, query: { id } });
    },
    // headerHover() {
    //   if (this.$route.path != "/light") {
    //     this.header_hover = true;
    //   }
    // },
    // headerHoverLeave() {
    //   this.header_hover = false;
    // },
  },
};
</script>
<style lang="scss" scoped>
$header: 72px;
// 透明头
.appspan {
  position: relative;
}
.appdiv {
  position: absolute;
  top: 46px;
  left: -25px;
  width: 114px;
  height: 229px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(189, 193, 204, 0.47);
  padding: 15px 0;
}
.appdiv > div {
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 40px;
  text-align: center;
}

.appdiv > div:hover {
  color: #0d3dfa;
}
.header-out {
  width: 100%;
  height: $header;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 8;
  border-bottom: 1px solid rgba(2, 18, 67, 0.1);
  .header-filter {
    width: 100%;
    height: $header;
    filter: blur(5px);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 8;
  }
  .header-inner {
    width: 100%;
    height: $header;
    // background: linear-gradient(313deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%);
    // border-bottom:1px solid rgba(2, 18, 67, .2);
    position: absolute;
    left: 0;
    top: 0;
    // position:fixed;
    // left:0;
    // top:0;
    z-index: 9;
    font-size: 14px;
    // color: #333333;
    .logo {
      width: 100px;
      margin-right: 65px;
    }
    .tabs {
      margin-right: 118px;
      & > li {
        line-height: $header;
        // border-top:4px solid rgba(255,255,255,0);
        margin-right: 36px;
        cursor: pointer;
        position: relative;
        // &.on{
        //     border-top:4px solid #396AFF;
        // }
        &.on:after{
          width: 100%;
        }
        &:after {
          content: "";
          width: 0;
          height: 4px;
          background-color: #396aff;
          border-radius: 2px;
          transition: width 0.3s ease;
          position: absolute;
          left: 0;
          top: 0;
        }
        &:hover:after {
          width: 100%;
        }
        .li2-abs {
          width: 600px;
          height: 523px;
          background: #ffffff;
          box-shadow: 0px 0px 8px 0px rgba(189, 193, 204, 0.47);
          padding: 25px 50px;
          position: absolute;
          left: -46px;
          top: calc(100% + 2px);
          .left {
            width: 210px;
            margin-right: 59px;
            .title {
              font-size: 16px;
              color: #333;
              line-height: 1;
              padding: 15px 0;
              border-bottom: 1px solid #d8d8d8;
            }
            ul {
              li {
                font-size: 14px;
                line-height: 24px;
                padding-top: 16px;
                color: #666;
                &:hover {
                  color: #0d3dfa;
                }
              }
            }
          }
        }
      }
    }
    .find-out {
      position: relative;
      .icon {
        width: 18px;
        height: 18px;
        margin-right: 20px;
      }
      .input {
        width: 320px;
        height: 52px;
        background: #ffffff;
        box-shadow: 2px 2px 6px 0px rgba(189, 193, 204, 0.53);
        padding: 0 20px 0 15px;
        position: absolute;
        left: -208px;
        top: 48px;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
    .xt {
      margin-right: 20px;
      font-weight: 600;
    }
    .lang {
      width: 28px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      border: 1px solid #396aff;
      color: #396aff;
    }
    a {
      color: inherit;
    }
  }
}
// 白底头
.header-fixed {
  position: initial;
  .header-filter {
    position: fixed;
  }
  .header-inner {
    position: fixed;
    // background:#fff;
  }
}

@media (min-width: 1280px) {
  $header: 72px;
  // 透明头
  .appspan {
    position: relative;
  }
  .appdiv {
    position: absolute;
    top: 46px;
    left: -25px;
    width: 114px;
    height: 229px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(189, 193, 204, 0.47);
    padding: 15px 0;
  }
  .appdiv > div {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 40px;
    text-align: center;
  }
  .appdiv > div:hover {
    color: #0d3dfa;
  }
  .header-out {
    width: 100%;
    height: $header;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 8;
    border-bottom: 1px solid rgba(2, 18, 67, 0.1);
    .header-filter {
      width: 100%;
      height: $header;
      filter: blur(5px);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 8;
    }
    .header-inner {
      width: 100%;
      height: $header;
      // background: linear-gradient(313deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%);
      // border-bottom:1px solid rgba(2, 18, 67, .2);
      position: absolute;
      left: 0;
      top: 0;
      // position:fixed;
      // left:0;
      // top:0;
      z-index: 9;
      font-size: 14px;
      // color: #333333;
      .logo {
        width: 100px;
        margin-right: 65px;
      }
      .tabs {
        margin-right: 118px;
        & > li {
          line-height: $header;
          // border-top:4px solid rgba(255,255,255,0);
          margin-right: 36px;
          cursor: pointer;
          position: relative;
          // &.on{
          //     border-top:4px solid #396AFF;
          // }
          &.on:after{
            width: 100%;
          }
          &:after {
            content: "";
            width: 0;
            height: 4px;
            background-color: #396aff;
            border-radius: 2px;
            transition: width 0.3s ease;
            position: absolute;
            left: 0;
            top: 0;
          }
          &:hover:after {
            width: 100%;
          }
          .li2-abs {
            width: 600px;
            height: 523px;
            background: #ffffff;
            box-shadow: 0px 0px 8px 0px rgba(189, 193, 204, 0.47);
            padding: 25px 50px;
            position: absolute;
            left: -46px;
            top: calc(100% + 2px);
            .left {
              width: 210px;
              margin-right: 59px;
              .title {
                font-size: 16px;
                color: #333;
                line-height: 1;
                padding: 15px 0;
                border-bottom: 1px solid #d8d8d8;
              }
              ul {
                li {
                  font-size: 14px;
                  line-height: 24px;
                  padding-top: 16px;
                  color: #666;
                  &:hover {
                    color: #0d3dfa;
                  }
                }
              }
            }
          }
        }
      }
      .find-out {
        position: relative;
        .icon {
          width: 18px;
          height: 18px;
          margin-right: 20px;
        }
        .input {
          width: 320px;
          height: 52px;
          background: #ffffff;
          box-shadow: 2px 2px 6px 0px rgba(189, 193, 204, 0.53);
          padding: 0 20px 0 15px;
          position: absolute;
          left: -208px;
          top: 48px;
          img {
            width: 18px;
            height: 18px;
          }
        }
      }
      .xt {
        margin-right: 20px;
        font-weight: 600;
      }
      .lang {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #396aff;
        color: #396aff;
      }
      a {
        color: inherit;
      }
    }
  }
  // 白底头
  .header-fixed {
    position: initial;
    .header-filter {
      position: fixed;
    }
    .header-inner {
      position: fixed;
      // background:#fff;
    }
  }
}
</style>