<template>
  <div class="box">
    <div class="nav">
      <div class="title">
        <span class="skip1" @click="toch('/news')">新闻动态</span>
        <span class="skip2" @click="toch(crems.path)" v-if="crems.path">{{
          crems.title
        }}</span>
        <span class="skip3">更多</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    crems: {},
  },
  methods: {
    toch(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style scoped>
.nav {
  height: 48px;
  margin-top: 72px;
  background: #f9fafc;
  display: flex;
  align-items: center;
}
.title {
  width: 1200px;
  margin: 0 auto;
}
.title span {
  margin-right: 29px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.nav .skip1,
.skip2 {
  position: relative;
}
.nav .skip1::after {
  content: "";
  width: 8px;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 8px;
  right: -20px;
  transform: rotate(30deg);
}
.nav .skip1::before {
  content: "";
  width: 8px;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 13px;
  right: -20px;
  transform: rotate(-35deg);
}
.nav .skip2::after {
  content: "";
  width: 8px;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 8px;
  right: -20px;
  transform: rotate(30deg);
}
.nav .skip2::before {
  content: "";
  width: 8px;
  height: 1px;
  background: #ccc;
  position: absolute;
  top: 13px;
  right: -20px;
  transform: rotate(-35deg);
}
@media (min-width: 1280px) {
  .nav {
    height: 48px;
    margin-top: 72px;
    background: #f9fafc;
    display: flex;
    align-items: center;
  }
  .title {
    width: 1200px;
    margin: 0 auto;
  }
  .title span {
    margin-right: 29px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    cursor: pointer;
  }
  .nav .skip1,
  .skip2 {
    position: relative;
  }
  .nav .skip1::after {
    content: "";
    width: 8px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 8px;
    right: -20px;
    transform: rotate(30deg);
  }
  .nav .skip1::before {
    content: "";
    width: 8px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 13px;
    right: -20px;
    transform: rotate(-35deg);
  }
  .nav .skip2::after {
    content: "";
    width: 8px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 8px;
    right: -20px;
    transform: rotate(30deg);
  }
  .nav .skip2::before {
    content: "";
    width: 8px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 13px;
    right: -20px;
    transform: rotate(-35deg);
  }
}
</style>