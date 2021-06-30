<template>
  <div>
    <div class="top" :style="`background: url(${topbanner.photo&&($imgurl+topbanner.photo.url)}) center/cover no-repeat;`">
      <p class="title">{{topbanner.title}}</p>
      <p class="desc">{{topbanner.entitle}}</p>
    </div>
    <div class="tabs">
      <ul class="flex">
        <li class="cursor" :class="[{on:selected==item.id}]" v-for="(item, index) in tabs" :key="index" @click="changeTabs(item.id)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="main-out">
      <div class="main flex-top">
        <div class="left cursor">
          <ul class="ul1">
            <li class="li1" :class="[{on:l_select==index}]" v-for="(item, index) in left" :key="index">
              <p @click="toAnch(item.id,index)" v-html="item.title"></p>
              <ul class="ul2" v-if="item.third">
                <li
                  class="li2"
                  v-for="(item2, index2) in item.third"
                  :key="index2"
                >
                  <p @click="toAnch(item2.id,index)" v-html="item2.title"></p>
                  <ul class="ul3" v-if="item2.list">
                    <li
                      class="li3"
                      v-for="(item3, index3) in item2.list"
                      :key="index3"
                    >
                      <p @click="toAnch(item3.id,index)" v-html="item3.title"></p>
                    </li>
                  </ul>
                </li>
              </ul>
              <!-- 没有二级直接三级 -->
              <ul class="ul2" v-else-if="item.list">
                <li class="li2">
                  <ul class="ul3">
                    <li
                      class="li3"
                      v-for="(item3, index3) in item.list"
                      :key="index3"
                    >
                      <p @click="toAnch(item3.id,index)" v-html="item3.title"></p>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li v-for="(item,index) in list" :key="index" :ref="'anch'+item.id">
              <div class="header-h" :ref="'anch'+item.id"></div>
              <p class="title b">{{item.title}}</p>
              <p class="desc" v-html="item.content"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      topbanner:{},
      tabs: [
        // { name: "证券" },
        // { name: "期货" },
        // { name: "银行" },
        // { name: "产业" },
        // { name: "基金" },
        // { name: "信托&AMC" },
        // { name: "保险" },
        // { name: "金控集团" },
        // { name: "私募" },
        // { name: "基础设施" },
      ],
      selected:0,
      left: [
        // {
        //   name: "投资管理能力建设",
        //   list: [
        //     {
        //       name: "标准化投资管理能力",
        //       list: [
        //         { name: "投资研究管理系统" },
        //         { name: "投资决策管理系统" },
        //         { name: "投资交易管理系统" },
        //         { name: "投资绩效评估与风险管理系统" },
        //       ],
        //     },
        //     { name: "非标另类资产管理能力" },
        //     { name: "衍生品运用管理能力" },
        //   ],
        // },
        // { name: "风险管理能力建设" },
        // { name: "产品管理能力建设" },
        // { name: "运营管理能力建设" },
        // { name: "保险资管业务" },
        // { name: "财产险解决方案" },
      ],
      l_select:0,
      list:[],
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");

    this.id = this.$route.query.id;
    this.selected = this.$route.query.id;
    this.getData();
  },
  methods:{
    getData(){
        this.$fetch({
            url: "index.php/trades/initTradeSolutions",
            type:'post',
            data:this.$qs.stringify({id:this.id})
        }).then((res) => {
            console.log(res);
            if (res.code == 0) {
                this.topbanner = res.data.topbanner;
                this.tabs = res.data.topsolutions;
                this.left = res.data.second;
                this.list = res.data.totalrows;
            }
        });
    },
    changeTabs(id){
      if(this.selected == id) return;
      this.selected = id;
      this.id = id;
      this.getData();
      this.$router.push({path:'/industry',query:{id}})
    },
    toAnch(id,ind){
      this.l_select = ind;
      let dom = this.$refs['anch'+id];
      if(dom) this.$until.scrollAnch(dom[0]);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 320px;
  padding-top: 155px;
  // background: url("../assets/images/bus-bg.png") center/cover no-repeat;
  padding-top: 154px;
  text-align: center;
  .title {
    font-size: 34px;
    color: #333;
    line-height: 40px;
  }
  .desc {
    font-size: 16px;
    color: #999;
    line-height: 20px;
    margin-top: 10px;
  }
}
.tabs {
  background: rgb(252,253,253);
  font-size: 14px;
  color: #333333;
  ul{
    width:1200px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    .on{
      color:#396AFF;
    }
  }
}
.main-out{
  min-height:calc(100vh - 770px);
  background: url('../assets/images/industry.png') right bottom/100% auto no-repeat;
}
.main {
  padding-top: 23px;
  width: 1200px;
  margin: 0 auto;
  .left {
    width: 280px;
    padding: 22px 10px 28px 23px;
    background: linear-gradient(270deg, rgba(255, 255, 255, .31) 0%, rgba(220, 231, 237, .31) 100%);
    font-size: 14px;
    line-height: 18px;
    position: sticky;
    top: 72px;
    p{
      border-left: 1px solid rgba(0,0,0,0);
      margin: 18px 0 18px -1px;
    }
    p:hover {
      color: #396aff;
      border-left:1px solid #396aff;
    }
    .ul1 {
      border-left: 1px solid #979797;
      .li1 {
        &.on>p{
          color: #396aff;
          border-left:1px solid #396aff;
        }
        & > p {
          padding-left:23px;
        }
        .ul2 {
          .li2 {
            & > p {
              padding-left:43px;
            }
            .ul3{
              .li3{
                & > p {
                  padding-left:63px;
                }
              }
            }
          }
        }
      }
    }
  }
  .right{
    padding:20px 0 60px;
    width:733px;
    margin-left:77px;
    ul{
      li{
        margin-bottom:50px;
        .title{
          font-size: 16px;
          color: #333333;
          line-height: 24px;
          margin-bottom:12px;
          padding-left:19px;
          position: relative;
          &:before{
            content: '';
            width: 5px;
            height: 5px;
            border:2px transparent solid;
            border-image:linear-gradient(to right, rgba(30, 136, 240, 1), rgba(74, 71, 255, 1)) 1 1;
            position:absolute;
            left:0;
            top:7px;
          }
        }
        .desc{
          font-size: 14px;
          color: #333;
          line-height: 28px;
        }
      }
    }
  }
}
@media (min-width:1280px){
  .top {
  height: 320px;
  padding-top: 155px;
  // background: url("../assets/images/bus-bg.png") center/cover no-repeat;
  padding-top: 154px;
  text-align: center;
  .title {
    font-size: 34px;
    color: #333;
    line-height: 40px;
  }
  .desc {
    font-size: 16px;
    color: #999;
    line-height: 20px;
  }
}
.tabs {
  background: rgb(252,253,253);
  font-size: 14px;
  color: #333333;
  ul{
    width:1200px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    .on{
      color:#396AFF;
    }
  }
}
.main-out{
  min-height:calc(100vh - 770px);
  background: url('../assets/images/industry.png') right bottom/100% auto no-repeat;
}
.main {
  padding-top: 23px;
  width: 1200px;
  margin: 0 auto;
  .left {
    width: 280px;
    padding: 22px 10px 28px 23px;
    background: linear-gradient(270deg, rgba(255, 255, 255, .31) 0%, rgba(220, 231, 237, .31) 100%);
    font-size: 14px;
    line-height: 18px;
    position: sticky;
    top: 72px;
    p{
      border-left: 1px solid rgba(0,0,0,0);
      margin: 18px 0 18px -1px;
    }
    p:hover {
      color: #396aff;
      border-left:1px solid #396aff;
    }
    .ul1 {
      border-left: 1px solid #979797;
      .li1 {
        &.on>p{
          color: #396aff;
          border-left:1px solid #396aff;
        }
        & > p {
          padding-left:23px;
        }
        .ul2 {
          .li2 {
            & > p {
              padding-left:43px;
            }
            .ul3{
              .li3{
                & > p {
                  padding-left:63px;
                }
              }
            }
          }
        }
      }
    }
  }
  .right{
    padding:20px 0 60px;
    width:733px;
    margin-left:77px;
    ul{
      li{
        margin-bottom:50px;
        .title{
          font-size: 16px;
          color: #333333;
          line-height: 24px;
          margin-bottom:12px;
          padding-left:19px;
          position: relative;
          &:before{
            content: '';
            width: 5px;
            height: 5px;
            border:2px transparent solid;
            border-image:linear-gradient(to right, rgba(30, 136, 240, 1), rgba(74, 71, 255, 1)) 1 1;
            position:absolute;
            left:0;
            top:7px;
          }
        }
        .desc{
          font-size: 14px;
          color: #333;
          line-height: 28px;
        }
      }
    }
  }
}
}

</style>