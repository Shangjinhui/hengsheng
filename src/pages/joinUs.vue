<template>
  <div class="joinus">
    <!-- <img class="bg" src="@/assets/images/join-bg.png" alt="" /> -->
    <a class="society flex-column-center cursor" :href="social" target="_blank">
      <p>社会招聘</p>
      <!-- <img src="@/assets/images/r1.png" alt=""> -->
      <i></i>
    </a>
    <a class="school flex-column-center cursor" :href="school" target="_blank">
      <p>校园招聘</p>
      <!-- <img src="@/assets/images/r2.png" alt=""> -->
      <i></i>
    </a>

  
  </div>
</template>
<script>
export default {
  data() {
    return {
      social: "",
      school: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$fetch({
        url: "index.php/joinus/initPage",
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.social = res.data.joinus.exp1;
          this.school = res.data.joinus.exp2;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>

.joinus {
  // padding: 40px 0 60px;
  position: relative;
  height: 700px;
  background: url(../assets/images/join-bg.png)0 0 / cover;
  margin: 40px 0 60px;
  .bg {
    width: 100%;
    height: 702px;
  }
  .society,
  .school {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 419px;
    font-size: 20px;
    i {
      width: 12px;
      height: 12px;
      margin-top: 8px;
    }
  }
  .society {
    background: linear-gradient(139deg, #000000 0%, #666666 100%);
    left: 817px;
    color: #fff;
    i {
      background: url("../assets/images/r1.png") 0 0 / cover no-repeat;
    }
    &:hover {
      background: linear-gradient(319deg, #fad900 0%, #ffba00 100%);
      color: #333;
      i {
        background: url("../assets/images/r2.png") 0 0 / cover no-repeat;
      }
    }
  }
  .school {
    background: linear-gradient(319deg, #fad900 0%, #ffba00 100%);
    left: 1096.5px;
    color: #333;
    i {
      background: url("../assets/images/r2.png") 0 0 / cover no-repeat;
    }
    &:hover {
      background: linear-gradient(139deg, #000000 0%, #666666 100%);
      color: #fff;
      i {
        background: url("../assets/images/r1.png") 0 0 / cover no-repeat;
      }
    }
  }
}

// @media (min-width: 960px){
//   .joinus {
//   // padding: 40px 0 60px;
//   position: relative;
//   height: 700px;
//   background: url(../assets/images/join-bg.png)0 0 / cover;
//   margin: 40px 0 60px;
//   .bg {
//     width: 100%;
//     height: 702px;
//   }
//   .society,
//   .school {
//     width: 140px;
//     height: 140px;
//     position: absolute;
//     top: 419px;
//     font-size: 20px;
//     i {
//       width: 12px;
//       height: 12px;
//       margin-top: 8px;
//     }
//   }
//   .society {
//     background: linear-gradient(139deg, #000000 0%, #666666 100%);
//     left: 817px;
//     color: #fff;
//     i {
//       background: url("../assets/images/r1.png") 0 0 / cover no-repeat;
//     }
//     &:hover {
//       background: linear-gradient(319deg, #fad900 0%, #ffba00 100%);
//       color: #333;
//       i {
//         background: url("../assets/images/r2.png") 0 0 / cover no-repeat;
//       }
//     }
//   }
//   .school {
//     background: linear-gradient(319deg, #fad900 0%, #ffba00 100%);
//     left: 1097px;
//     color: #333;
//     i {
//       background: url("../assets/images/r2.png") 0 0 / cover no-repeat;
//     }
//     &:hover {
//       background: linear-gradient(139deg, #000000 0%, #666666 100%);
//       color: #fff;
//       i {
//         background: url("../assets/images/r1.png") 0 0 / cover no-repeat;
//       }
//     }
//   }
// }
// }
</style>