<template>
  <router-link tag="div" to="/leavemsg" class="liuyan-out flex-center cursor">
    <p>在线留言</p>
  </router-link>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.liuyan-out {
  width: 36px;
  height: 86px;
  background: url("../assets/images/fixed-msg-bg.png") 0 0/100% 100% no-repeat;
  position: fixed;
  right: 28px;
  bottom: 28px;
  z-index: 9;
  p {
    width: 20px;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
  }
}
@media screen{
  .liuyan-out{
    width: 46px;
    height: 101px;
  }
}
// @media (min-width:1280px){
//   .liuyan-out {
//   width: 36px;
//   height: 86px;
//   background: url("../assets/images/fixed-msg-bg.png") 0 0/100% 100% no-repeat;
//   position: fixed;
//   right: 28px;
//   bottom: 28px;
//   z-index: 9;
//   p {
//     width: 20px;
//     font-size: 12px;
//     color: #ffffff;
//     text-align: center;
//   }
// }
// }
</style>