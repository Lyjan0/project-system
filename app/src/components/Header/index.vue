<template>
  <div class="header">
    <div class="left">
      <el-button size="mini" icon="el-icon-s-unfold" @click="changeCollapse"></el-button>
      <h3>首页</h3>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <div class="img">
          <img :src="userImg" alt="">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      userImg:require('../../assets/images/bai.jpeg'),
    }
  },
  methods:{
    changeCollapse(){
      this.$store.commit('CHANGECOLLAPSE');
      console.log(this.$store.state.aside.isCollapse);
    }
  }
};
</script>

<style lang="less" scoped>
.header{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#fff;

  .left{
    display: flex;
    align-items: center;
    h3{
      margin-left: 20px;
    }
  }
  .right{
    .img{
      width: 30px;
      height: 30px;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin-right: 20px;
      }
      // background-image: url('../../assets/images/bai.jpeg');
    }
  }
}
</style>