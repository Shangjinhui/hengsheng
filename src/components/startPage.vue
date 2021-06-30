<template>
  <div class="start-video" v-if="startShow">
    <video ref="video" :src="video" autoplay muted></video>
    <div class="esc">Esc退出</div>
  </div>
</template>

<script>
export default {
  props: {
    video: "",
  },
  data() {
    return {
      // video:require('@/assets/images/home.mp4'),
      startShow: true,
    };
  },
  watch: {
    startShow(val) {
      val
        ? window.addEventListener("keydown", this.listenEnter)
        : window.removeEventListener("keydown", this.listenEnter);
    },
  },
  beforeMount() {
    this.startShow = window.sessionStorage.getItem("start") ? false : true;
    if (this.startShow) {
      this.$nextTick(() => {
        let dom = this.$refs["video"];
        dom.addEventListener(
          "ended",
          () => {
            //结束
            this.startShow = false;
            window.sessionStorage.setItem("start", 1);
            this.$emit("getEnd");
          },
          false
        );
      });
    }
    //监听esc
    window.addEventListener("keydown", this.listenEnter);
  },
  methods: {
    listenEnter(e) {
      // console.log(e)
      if (e.keyCode == 27) {
        this.startShow = false;
        window.sessionStorage.setItem("start", 1);
        this.$emit("getEnd");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.start-video {
  width: 100vw;
  height: 100vh;
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .esc {
    width: 80px;
    line-height: 36px;
    background: rgba(0, 0, 0, 0.3);
    text-align: center;
    letter-spacing: 1px;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    position: absolute;
    left: 20px;
    top: 20px;
  }
}
@media (min-width: 1280px) {
  .start-video {
    width: 100vw;
    height: 100vh;
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .esc {
      width: 80px;
      line-height: 36px;
      background: rgba(0, 0, 0, 0.3);
      text-align: center;
      letter-spacing: 1px;
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
      position: absolute;
      left: 20px;
      top: 20px;
    }
  }
}
</style>