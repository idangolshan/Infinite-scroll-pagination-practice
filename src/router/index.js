import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  const admins = ['SbbazknQxvNGR3c9J5w32bDci9H22'];

  Router.beforeEach((to,from,next)=> {
    const user = JSON.parse(localStorage.getItem('practice'));
    const adminPage = to.name.startsWith('admin');
    const admin = admins.includes(user);



    if(!user && to.meta.auth) {
      next('/');
    } else if (user && adminPage && !admin) {
      next('/flex');
    }  else next();
  })

  return Router
}
