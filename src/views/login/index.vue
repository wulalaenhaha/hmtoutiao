<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单登陆 -->
      <el-form ref="loginForm" :rules="loginRules" :model="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placehoder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="mobile">
          <el-input style="width:60%" v-model="loginForm.code" placehoder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox style v-mode="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login()" style="width:100%" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑  把value拿出来进行手机号的格式校验
      if (/^1[3-9]\d{9}/.test(value)) {
        callback();
      } else {
        callback(new Error("手机号验证不正确"));
      }
    };
    return {
      // 表单数据对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 表单验证规则对象
      loginRules: {
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "请输入6位有效数字", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      // validate   对整个表单进行验证
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交登录请求  axios 是基于promise封装的  post() fa返回值是一个promise对象
          // alert('成功')
          this.$http
          .post("http://ttapi.research.itcast.cn/mp/v1_0/authorizations", this.loginForm)
          .then((res) => {
            //   res是相应对象   包含后台返回的数据
            // 1.跳转到首页
            // TODO（待完成）2.保存用户的信息，用来判断登陆的状态
            // console.log(res.data);
            // sessionStorage 是一个BOM 对象，也是一全局对象，作用：保存数据
            // 是由保质期的，当股权牛逼浏览器的时候就失效提供了4个接口
            // sessionStorage.setItem(key,value)  存储value字符串数据
            // sessionStorage.getItem(key)    获取数据
            // sessionStorage.removeItem(key)  删除数据
            // sessionStorage.clear()           清空数据
            // res.data是响应主体{message：“ok”，data：{...}}  
            // res.data.data是响应主体里边的data:{.....}
            window.sessionStorage.setItem('hmtoutiao',JSON.stringify(res.data.data))
            this.$router.push('/')
            
          })
          .catch(()=> {
            //   提示
            this.$message.error('手机号或验证码错误')
          });
        } else {
          alert("失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  /* cover 铺满容器 多余的裁剪 contain 在容器内完全显示图片 
        北京图定位/背景尺寸
    */
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;
}
.login-box {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  img {
    display: block;
    width: 200px;
    margin: 10px auto;
  }
}
</style>

