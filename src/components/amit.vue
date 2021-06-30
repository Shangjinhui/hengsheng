<template>
<div class="amit">
  <img class="block" :src="imgs[0][old1]" alt="">
  <img class="block" :src="imgs[1][old2]" alt="">
  <img class="block listimg3" :src="imgs[2][old3]" alt="">
  <img class="block" :src="imgs[3][old4]" alt="">
  <img class="block" :src="imgs[4][old5]" alt="">
  <img class="block" :src="imgs[5][old6]" alt="">
  <!-- 阴影底图 -->
  <img class="base1" src="@/assets/images/picture/base/1.png" alt="">
  <img class="base2" src="@/assets/images/picture/base/2.png" alt="">
  <img class="base3" src="@/assets/images/picture/base/3.png" alt="">
  <img class="base4" src="@/assets/images/picture/base/4.png" alt="">
  <img class="base5" src="@/assets/images/picture/base/5.png" alt="">
  <img class="base6" src="@/assets/images/picture/base/6.png" alt="">
  <!-- 隐藏缓存 -->
  <div class="cache">
    <img class="block" v-for="(item,index) in 19" :key="index+'1'" :src="imgs[0][index]" alt="">
    <img class="block" v-for="(item,index) in 19" :key="index+'2'" :src="imgs[1][index]" alt="">
    <img class="block" v-for="(item,index) in 19" :key="index+'3'" :src="imgs[2][index]" alt="">
    <img class="block" v-for="(item,index) in 19" :key="index+'4'" :src="imgs[3][index]" alt="">
    <img class="block" v-for="(item,index) in 19" :key="index+'5'" :src="imgs[4][index]" alt="">
    <img class="block" v-for="(item,index) in 19" :key="index+'6'" :src="imgs[5][index]" alt="">
  </div>
</div>
</template>

<script>
export default {
  props:{
    ind:0
  },
  data() {
    return {
      timer:null,
      //每个20帧
      imgs:[
        [
          require('@/assets/images/picture/01img/1.png'),
          require('@/assets/images/picture/01img/2.png'),
          require('@/assets/images/picture/01img/3.png'),
          require('@/assets/images/picture/01img/4.png'),
          require('@/assets/images/picture/01img/5.png'),
          require('@/assets/images/picture/01img/6.png'),
          require('@/assets/images/picture/01img/7.png'),
          require('@/assets/images/picture/01img/8.png'),
          require('@/assets/images/picture/01img/9.png'),
          require('@/assets/images/picture/01img/10.png'),
          require('@/assets/images/picture/01img/11.png'),
          require('@/assets/images/picture/01img/12.png'),
          require('@/assets/images/picture/01img/13.png'),
          require('@/assets/images/picture/01img/14.png'),
          require('@/assets/images/picture/01img/15.png'),
          require('@/assets/images/picture/01img/16.png'),
          require('@/assets/images/picture/01img/17.png'),
          require('@/assets/images/picture/01img/18.png'),
          require('@/assets/images/picture/01img/19.png'),
          require('@/assets/images/picture/01img/20.png'),
        ],
        [
          require('@/assets/images/picture/02img/1.png'),
          require('@/assets/images/picture/02img/2.png'),
          require('@/assets/images/picture/02img/3.png'),
          require('@/assets/images/picture/02img/4.png'),
          require('@/assets/images/picture/02img/5.png'),
          require('@/assets/images/picture/02img/6.png'),
          require('@/assets/images/picture/02img/7.png'),
          require('@/assets/images/picture/02img/8.png'),
          require('@/assets/images/picture/02img/9.png'),
          require('@/assets/images/picture/02img/10.png'),
          require('@/assets/images/picture/02img/11.png'),
          require('@/assets/images/picture/02img/12.png'),
          require('@/assets/images/picture/02img/13.png'),
          require('@/assets/images/picture/02img/14.png'),
          require('@/assets/images/picture/02img/15.png'),
          require('@/assets/images/picture/02img/16.png'),
          require('@/assets/images/picture/02img/17.png'),
          require('@/assets/images/picture/02img/18.png'),
          require('@/assets/images/picture/02img/19.png'),
          require('@/assets/images/picture/02img/20.png'),
        ],
        [
          require('@/assets/images/picture/03img/1.png'),
          require('@/assets/images/picture/03img/2.png'),
          require('@/assets/images/picture/03img/3.png'),
          require('@/assets/images/picture/03img/4.png'),
          require('@/assets/images/picture/03img/5.png'),
          require('@/assets/images/picture/03img/6.png'),
          require('@/assets/images/picture/03img/7.png'),
          require('@/assets/images/picture/03img/8.png'),
          require('@/assets/images/picture/03img/9.png'),
          require('@/assets/images/picture/03img/10.png'),
          require('@/assets/images/picture/03img/11.png'),
          require('@/assets/images/picture/03img/12.png'),
          require('@/assets/images/picture/03img/13.png'),
          require('@/assets/images/picture/03img/14.png'),
          require('@/assets/images/picture/03img/15.png'),
          require('@/assets/images/picture/03img/16.png'),
          require('@/assets/images/picture/03img/17.png'),
          require('@/assets/images/picture/03img/18.png'),
          require('@/assets/images/picture/03img/19.png'),
          require('@/assets/images/picture/03img/20.png'),
        ],
        [
          require('@/assets/images/picture/04img/1.png'),
          require('@/assets/images/picture/04img/2.png'),
          require('@/assets/images/picture/04img/3.png'),
          require('@/assets/images/picture/04img/4.png'),
          require('@/assets/images/picture/04img/5.png'),
          require('@/assets/images/picture/04img/6.png'),
          require('@/assets/images/picture/04img/7.png'),
          require('@/assets/images/picture/04img/8.png'),
          require('@/assets/images/picture/04img/9.png'),
          require('@/assets/images/picture/04img/10.png'),
          require('@/assets/images/picture/04img/11.png'),
          require('@/assets/images/picture/04img/12.png'),
          require('@/assets/images/picture/04img/13.png'),
          require('@/assets/images/picture/04img/14.png'),
          require('@/assets/images/picture/04img/15.png'),
          require('@/assets/images/picture/04img/16.png'),
          require('@/assets/images/picture/04img/17.png'),
          require('@/assets/images/picture/04img/18.png'),
          require('@/assets/images/picture/04img/19.png'),
          require('@/assets/images/picture/04img/20.png'),
        ],
        [
          require('@/assets/images/picture/05img/1.png'),
          require('@/assets/images/picture/05img/2.png'),
          require('@/assets/images/picture/05img/3.png'),
          require('@/assets/images/picture/05img/4.png'),
          require('@/assets/images/picture/05img/5.png'),
          require('@/assets/images/picture/05img/6.png'),
          require('@/assets/images/picture/05img/7.png'),
          require('@/assets/images/picture/05img/8.png'),
          require('@/assets/images/picture/05img/9.png'),
          require('@/assets/images/picture/05img/10.png'),
          require('@/assets/images/picture/05img/11.png'),
          require('@/assets/images/picture/05img/12.png'),
          require('@/assets/images/picture/05img/13.png'),
          require('@/assets/images/picture/05img/14.png'),
          require('@/assets/images/picture/05img/15.png'),
          require('@/assets/images/picture/05img/16.png'),
          require('@/assets/images/picture/05img/17.png'),
          require('@/assets/images/picture/05img/18.png'),
          require('@/assets/images/picture/05img/19.png'),
          require('@/assets/images/picture/05img/20.png'),
        ],
        [
          require('@/assets/images/picture/06img/1.png'),
          require('@/assets/images/picture/06img/2.png'),
          require('@/assets/images/picture/06img/3.png'),
          require('@/assets/images/picture/06img/4.png'),
          require('@/assets/images/picture/06img/5.png'),
          require('@/assets/images/picture/06img/6.png'),
          require('@/assets/images/picture/06img/7.png'),
          require('@/assets/images/picture/06img/8.png'),
          require('@/assets/images/picture/06img/9.png'),
          require('@/assets/images/picture/06img/10.png'),
          require('@/assets/images/picture/06img/11.png'),
          require('@/assets/images/picture/06img/12.png'),
          require('@/assets/images/picture/06img/13.png'),
          require('@/assets/images/picture/06img/14.png'),
          require('@/assets/images/picture/06img/15.png'),
          require('@/assets/images/picture/06img/16.png'),
          require('@/assets/images/picture/06img/17.png'),
          require('@/assets/images/picture/06img/18.png'),
          require('@/assets/images/picture/06img/19.png'),
          require('@/assets/images/picture/06img/20.png'),
        ],
      ],
      // 这次结束的
      frame1:19,
      frame2:0,
      frame3:0,
      frame4:19,
      frame5:0,
      frame6:0,
      // 上次结束的
      old1:19,
      old2:0,
      old3:0,
      old4:19,
      old5:0,
      old6:0,
    };
  },
  watch:{
    ind(val,old){
      // console.log(val,old,'-------')
      let obj = [
        {frame1:19,frame2:0,frame3:0,frame4:19,frame5:0,frame6:0,},
        {frame1:0,frame2:19,frame3:0,frame4:0,frame5:19,frame6:0,},
        {frame1:0,frame2:0,frame3:0,frame4:19,frame5:19,frame6:0,},
        {frame1:19,frame2:0,frame3:19,frame4:0,frame5:0,frame6:0,},
        {frame1:0,frame2:19,frame3:0,frame4:0,frame5:0,frame6:19,},
        {frame1:0,frame2:0,frame3:19,frame4:19,frame5:0,frame6:0,},
      ]
      this.frame1 = obj[val]['frame1'];
      this.frame2 = obj[val]['frame2'];
      this.frame3 = obj[val]['frame3'];
      this.frame4 = obj[val]['frame4'];
      this.frame5 = obj[val]['frame5'];
      this.frame6 = obj[val]['frame6'];

      this.old1 = obj[old]['frame1'];
      this.old2 = obj[old]['frame2'];
      this.old3 = obj[old]['frame3'];
      this.old4 = obj[old]['frame4'];
      this.old5 = obj[old]['frame5'];
      this.old6 = obj[old]['frame6'];

      this.animation();
    }
  },
  methods: {
    animation(){
      window.cancelAnimationFrame(this.timer);
      let step = (timestamp, elapsed) => {
          if (elapsed > 1000 / 20) {          //1秒20帧
              elapsed = 0
              //TO DO SOMETHING
              // if(this.reversal){
              //     if(this.frame>=15){
              //         this.reversal = false;
              //     }
              //     this.frame++;
              // }else{
              //     if(this.frame<=1){
              //         this.reversal = true;
              //     }
              //     this.frame--;
              // }
              if(this.old1>this.frame1) this.old1--;
              if(this.old1<this.frame1) this.old1++;
              if(this.old2>this.frame2) this.old2--;
              if(this.old2<this.frame2) this.old2++;
              if(this.old3>this.frame3) this.old3--;
              if(this.old3<this.frame3) this.old3++;
              if(this.old4>this.frame4) this.old4--;
              if(this.old4<this.frame4) this.old4++;
              if(this.old5>this.frame5) this.old5--;
              if(this.old5<this.frame5) this.old5++;
              if(this.old6>this.frame6) this.old6--;
              if(this.old6<this.frame6) this.old6++;
          }
          
          this.timer = window.requestAnimationFrame(
              _timestamp => step(_timestamp, elapsed + _timestamp - timestamp)
          )
      }
      this.timer = window.requestAnimationFrame(timestamp => step(timestamp, 0))
    },
  },
};
</script>
<style lang="scss" scoped>
.amit{
  width:760px;
  height:635px;
  position: absolute;
  left:237px;
  top:-56px;
  .block{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index: 2;
  }
  .listimg3{
  left: 115px;
}
  .base1,.base2,.base3,.base4,.base5,.base6{
    position:absolute;
    z-index: 1;
  }
  .base1{
    width:92px;
    left:0;
    top: 506px;
  }
  .base2{
    width: 284px;
    left: 124px;
    top: 380px;
  }
  .base3{
    width: 172px;
    top: 110px;
    left: 387px;
  }
  .base4{
    width: 107px;
    top: 277px;
    left: 425px;
  }
  .base5{
    width: 149px;
    left: 528px;
    top: 382px;
  }
  .base6{
    top: 281px;
    width: 108px;
    left: 650px;
  }


  .cache{
    display:none;
  }
}
</style>
