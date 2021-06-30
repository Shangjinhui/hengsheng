<template>
  <div>
    
    <div class="top" :style="`background:url(${topbanner.photo&&$imgurl+topbanner.photo.url})top center/cover no-repeat`">
      <p class="che">在线留言</p>
      <p class="eng">Customer Service</p>
    </div>
    <div class="flex-top-center">
      <div class="con">
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>公司名称</p>
          </div>
          <el-input type="text" v-model="title" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>行业类型</p>
          </div>
          <el-input type="text" v-model="comptype" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>公司地址</p>
          </div>
          <el-input type="text" v-model="compaddr" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>联系人姓名</p>
          </div>
          <el-input type="text" v-model="username" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>联系电话</p>
          </div>
          <el-input type="text" v-model="telphone" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>邮箱</p>
          </div>
          <el-input type="text" v-model="email" />
        </div>
        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>需求描述</p>
          </div>
          <el-input
            type="textarea"
            :maxlength="5000"
            :show-word-limit="true"
            v-model="content"
          />
        </div>

        <div class="form flex-top">
          <div class="label flex-end">
            <span>*</span>
            <p>验证码</p>
          </div>
          <el-input class="code-input" type="text" v-model="code" />
          <div class="code" ref="code"></div>
          <p class="change cursor" @click="changeCode">看不清换一张</p>
        </div>

        <div class="btn flex no-select">
          <div class="confirm cursor" @click="Confirm">提交需求</div>
          <div class="reset cursor" @click="Cancle">重新填写</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      username: "",
      email: "",
      telphone: "",
      comptype: "",
      compaddr: "",
      content: "",
      code: "",
      topbanner:"",
      verifyCode: null,
    };
  },
  mounted() {
    //获取到配置的头部颜色，听过store监听动态改变
    this.$store.commit("until/SET_COLOR", "#000");
    this.initCode();
    this.getdata()
  },
  methods: {
    initCode() {
      let dom = this.$refs["code"];
      this.verifyCode = new this.$until.GVerify(dom);
    },
    changeCode() {
      this.verifyCode.refresh();
    },
    Confirm() {
      let {
        title,
        username,
        email,
        telphone,
        comptype,
        compaddr,
        content,
      } = this;
      if (
        !title ||
        !username ||
        !email ||
        !telphone ||
        !comptype ||
        !compaddr ||
        !content
      ) {
        this.$message({ message: "请填写完整信息！", type: "warning" });
        return;
      }
      let verify = this.verifyCode.validate(this.code);
      if (!verify) {
        this.$message({ message: "验证码输入错误！", type: "warning" });
        return;
      }

      let data = {
        title,
        username,
        email,
        telphone,
        comptype,
        compaddr,
        content,
      };
      this.$fetch({
        url: "index.php/feedback/sendpost",
        type: "post",
        data: this.$qs.stringify(data),
      }).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.$message({ message: "提交成功", type: "success" });
          this.Cancle();
        }
      });
    },
    Cancle() {
      this.title = "";
      this.username = "";
      this.email = "";
      this.telphone = "";
      this.comptype = "";
      this.compaddr = "";
      this.content = "";
    },
    getdata(){
       this.$fetch({
         url:"index.php/feedback/initPage",
         type:"get"
       }).then((res)=>{
         this.topbanner=res.data.topbanner
       })
    }
  },

};
</script>
<style lang="scss" scoped>
.top {
  height: 320px;
  // background: url("../assets/images/find-bg.png") center/cover no-repeat;
  padding-top: 153px;
  text-align: center;
  background-size: cover!important;
  width: 100%;
  .che {
    font-size: 36px;
    line-height: 1;
    color: #333;
  }
  .eng {
    font-size: 16px;
    color: #999;
    margin-top: 8px;
  }
}
.con {
  padding: 45px 0 72px;
  .form {
    margin-bottom: 24px;
    font-size: 14px;
    color: #333;
    .label {
      width: 100px;
      height: 32px;
      margin-right: 16px;
      span {
        font-size: 18px;
        position: relative;
        top: 5px;
        color: #ff3030;
        margin-right: 5px;
      }
    }
    .el-input,
    .el-input /deep/.el-input__inner {
      width: 540px;
      height: 32px;
    }
    .el-textarea,
    .el-textarea /deep/.el-textarea__inner {
      width: 540px;
      height: 200px;
      resize: none;
      padding-bottom: 20px;
    }

    .code-input,
    .code-input /deep/.el-input__inner {
      width: 166px;
      height: 32px;
    }
    .code {
      width: 104px;
      height: 32px;
      border: 1px solid #d9d9d9;
      margin-left: 8px;
    }
    .change {
      font-size: 14px;
      color: #333;
      line-height: 32px;
      margin-left: 8px;
    }
  }
  .btn {
    margin-top: 40px;
    padding-left: 116px;
    font-size: 14px;
    text-align: center;
    .confirm {
      width: 120px;
      height: 40px;
      line-height: 40px;
      background: #396aff;
      color: #fff;
      margin-right: 16px;
    }
    .reset {
      width: 120px;
      height: 40px;
      line-height: 40px;
      background: #ffffff;
      border: 1px solid #d9d9d9;
      color: #333;
    }
  }
}
@media (min-width: 750px) {
  .top {
    height: 320px;
    // background: url("../assets/images/find-bg.png") center/cover no-repeat;
    padding-top: 153px;
     background-size: cover!important;
    text-align: center;
    width: 100%;
    .che {
      font-size: 36px;
      line-height: 1;
      color: #333;
    }
    .eng {
      font-size: 16px;
      color: #999;
      margin-top: 8px;
    }
  }
  .con {
    padding: 45px 0 72px;
    .form {
      margin-bottom: 24px;
      font-size: 14px;
      color: #333;
      .label {
        width: 100px;
        height: 32px;
        margin-right: 16px;
        span {
          font-size: 18px;
          position: relative;
          top: 5px;
          color: #ff3030;
          margin-right: 5px;
        }
      }
      .el-input,
      .el-input /deep/.el-input__inner {
        width: 540px;
        height: 32px;
      }
      .el-textarea,
      .el-textarea /deep/.el-textarea__inner {
        width: 540px;
        height: 200px;
        resize: none;
        padding-bottom: 20px;
      }

      .code-input,
      .code-input /deep/.el-input__inner {
        width: 166px;
        height: 32px;
      }
      .code {
        width: 104px;
        height: 32px;
        border: 1px solid #d9d9d9;
        margin-left: 8px;
      }
      .change {
        font-size: 14px;
        color: #333;
        line-height: 32px;
        margin-left: 8px;
      }
    }
    .btn {
      margin-top: 40px;
      padding-left: 116px;
      font-size: 14px;
      text-align: center;
      .confirm {
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: #396aff;
        color: #fff;
        margin-right: 16px;
      }
      .reset {
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: #ffffff;
        border: 1px solid #d9d9d9;
        color: #333;
      }
    }
  }
}
</style>