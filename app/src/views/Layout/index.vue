<template>
  <el-container style="height: 100%;">
  <el-aside width="auto">
    <CommonAside />
  </el-aside>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import CommonAside from '../../components/CommonAside';
import Header from '../../components/Header';
export default {
  name:'Layout',
  components:{
    CommonAside,
    Header
  }
}
</script>

<style lang='less' scoped>
.el-header{
  background-color: #333;
}
.el-main{
  padding: 0;
}
.el-aside{
  background-color: #545c64;
}
</style>