import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let routes = [
  {
    path:'/',
    name:'layout',
    component: () => import('../views/Layout'),
    redirect:'/home',
    children:[
      {
        path:'home',
        name:'home',
        component: () => import('../views/Home'),

      },
      {
        path:'user',
        name:'user',
        component: () => import('../views/User')
      },
      {
        path:'mall',
        name:'mall',
        component: () => import('../views/Mall')
      },
    ]
  }

]

const router = new VueRouter({
  mode:'hash',
  routes
});

export default router;