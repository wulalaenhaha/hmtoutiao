<template>
  <el-container class="home-container">
    <!-- 将width变成动态属性  根据collapse的值决定是否收起   collapse值是true的时候
          侧边栏收起 width=64px   否则  width=200px
     -->
    <el-aside class="my-aside" :width="collapse?'64px':'200px'">
      <div class="logo" :class="{collapse:collapse}"></div>
        <!-- 侧边栏 --> 
       <el-col :span="12">
          <!-- 
            default-active   默认激活的菜单样式，通过指定的菜单项的index的值
            active-text-color  激活时的字体颜色
            collapse   导航菜单的折叠  false ：展开   true：收起
            router模式会在激活导航时以 index 作为 path 进行路由跳转
           -->
          <el-menu
            style="border-right:none"
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#002033"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="collapse"
            :collapse-transition="false"
            router
          >
          <!-- el-submenu  有下一级菜单的容器 -->
          <!-- el-menu-item   没有下一级菜单的额容器 -->
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/article">
              <i class="el-icon-document"></i>
              <span slot="title">内容管理</span>
            </el-menu-item>
            <el-menu-item index="/image">
              <i class="el-icon-picture"></i>
              <span slot="title">素材管理</span>
            </el-menu-item>
            <el-menu-item index="/publish">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">发布文章</span>
            </el-menu-item>
            <el-menu-item index="comment">
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title">评论管理</span>
            </el-menu-item>
            <el-menu-item index="/fans">
              <i class="el-icon-present"></i>
              <span slot="title">粉丝管理</span>
            </el-menu-item>
            <el-menu-item index="/setting">
              <i class="el-icon-setting"></i>
              <span slot="title">个人设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      
    </el-aside>
    <el-container>
      <el-header class="my-header">
        <!-- toggleMenu  点击图标，切换菜单（点击图标，控制侧边栏的展开与收起 -->
        <span class="el-icon-s-fold" @click="toggleMenu"></span>
        <span class="text">江苏传智播客科技教育有限公司</span>
        <el-dropdown style="float:right">
          <span class="el-dropdown-link">
            <img style="vertical-align:middle" width="30" height="30" src="../../assets/images/avatar.jpg" alt="">
            <b  style="vertical-align:middle;padding-left:5px">小黑</b>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- 组件要加图标，直接提供icon属性 -->
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-lock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      
      <el-main>
        <!-- 二级路由显示的位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        data() {
            return {
              // 设置折叠的值为展开
                collapse:false
            }
        },
        methods: {
            toggleMenu(){
              // 对collapse的值取反，进行点击切换
              this.collapse= ! this.collapse
            }
        },
    };
</script>

<style lang="less" scoped>
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .my-aside {
    background-color: #002033;
    .logo {
      width: 100%;
      height: 60px;
      //
      background: #024 url(../../assets/images/logo_admin.png) no-repeat center /140px auto;
    }
    .collapse{
      background-image: url(../../assets/images/logo_admin_01.png) ;
      background-size: 36px auto;
    }
  }
  .my-header {
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    .el-icon-s-fold {
      font-size: 26px;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
  }
}
</style>

