<template>
<!-- @open="handleOpen"
    @close="handleClose" -->
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"

    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>后台管理系统</h3>
    <el-menu-item
      v-for="menu in noChildren"
      :key="menu.path"
      :index="menu.path"
      @click="toPath(menu)"
    >
      <i :class="'el-icon-' + menu.meta.icon"></i>
      <span slot="title">{{menu.meta.label}}</span>
    </el-menu-item>
    <el-submenu
      v-for="menu in  hasChildren"
      :index="menu.path"
      :key="menu.path"
    >
      <template slot="title">
        <div @click="changeColor" >
          <i :class="'el-icon-' + menu.meta.icon"></i>
          <span slot="title" :style="isColor ? 'color:#ffd04b;':'color:#fff;' ">{{menu.meta.label}}</span>
        </div>
      </template>
      <el-menu-item-group v-for="child in menu.children" :key="child.path">

        <el-menu-item :index="child.path">
          <i :class="'el-icon-' + child.meta.icon"></i>
          {{child.meta.label}}
          </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      isCollapse: false,
      isColor: false,
      menu: [
        {
          path: "/",
          name: "home",
          meta: {
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
          },
        },
        {
          path: "/mall",
          name: "mall",
          meta: {
            label: "商品管理",
            icon: "s-shop",
            url: "MallManage/MallManage",
          },
        },
        {
          path: "/user",
          name: "user",
          meta: {
            label: "用户管理",
            icon: "user",
            url: "UserManage/UserManage",
          },
        },
        {
          path:'/order',
          meta: {
            label: "其他",
            icon: "location",
          },
          children: [
            {
              path: "/pege1",
              name: "pege1",
              meta: {
                label: "页面1",
                icon: "setting",
                url: "Other/PageOne",
              },
            },
            {
              path: "/pege2",
              name: "pege2",
              meta: {
                label: "页面2",
                icon: "setting",
                url: "Other/PageTwo",
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // 路由跳转
    toPath(menu){
      this.$router.push({
        name:menu.name
      })
    },
    // 改变有children路由的字体颜色
    changeColor(){
      this.isColor = !this.isColor;
      // console.log(this.isColor);
    }

  },
  computed:{
    noChildren(){
      return this.menu.filter(item => !item.children);
    },
    hasChildren(){
      return this.menu.filter(item => item.children);
    }
  }
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  border: none;
}
.el-menu-vertical-demo h3{
  padding-left: 20px;
  color: #fff;
}
</style>