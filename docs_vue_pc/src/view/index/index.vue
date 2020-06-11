<template>
  <div>
    <el-carousel :interval="3000">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="navbar">
    <div class="container">
            <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">主页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
            </el-menu>
            </div>
            </div>
    <div class="container">


      <div class="www">测试正文内容</div>
      <div class="www">测试正文内容</div>
      <div class="www">测试正文内容</div>

      <div class="www" style="height:300px">测试正文内容</div>
      <div class="www">测试正文内容</div>
      <div class="www">测试正文内容</div>
            <div class="www" style="height:300px">测试正文内容</div>
      <div class="www">测试正文内容</div>
            <div class="www" style="height:300px">测试正文内容</div><div class="www">测试正文内容</div>
      <div class="www">测试正文内容</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "1",
      isCollapse: true
    };
  },
  created() {},
  methods: {
    // 切换导航栏选中
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    // 侧边栏切换
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.navbar{
    position: sticky;
    top: 0;
    background: #545c64;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

