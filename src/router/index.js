import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/store' },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/support',
    name: 'Support',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Support.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/Community.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user/:uid',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/user_view',
    name: 'UserView',
    component: () => import('../views/User_view.vue')
  },
  {
    path: '/user_collections',
    name: 'UserCollections',
    component: () => import('../views/User_collections.vue'),
    redirect: '/user_collections_comments',
    children: [
      {
        path: '/user_collections_comments',
        name: 'UserCollectionsComments',
        component: () => import('../views/User_collections_comments')
      },
      {
        path: '/user_collections_shots',
        name: 'UserCollectionsShots',
        component: () => import('../views/User_collections_shots')
      }
    ]
  },
  {
    path: '/user_games',
    name: 'UserGames',
    component: () => import('../views/User_games.vue')
  },
  {
    path: '/user_wishlist',
    name: 'UserWishlist',
    component: () => import('../views/User_wishlist.vue')
  },
  {
    path: '/user_edit',
    name: 'UserEdit',
    component: () => import('../views/User_edit.vue'),
    redirect: '/user_edit_general',
    children: [
      {
        path: '/user_edit_general',
        name: 'UserEditGeneral',
        component: () => import('../views/User_edit_general.vue')
      },
      {
        path: '/user_edit_account',
        name: 'UserEditAccount',
        component: () => import('../views/User_edit_account.vue')
      },
      {
        path: '/user_edit_safety',
        name: 'UserEditSafety',
        component: () => import('../views/User_edit_safety.vue')
      }
    ]
  },
  {
    path: '/developer/:uid',
    name: 'Developer',
    component: () => import('../views/Developer')
  },
  {
    path: '/developer_detail',
    name: 'DeveloperDetail',
    component: () => import('../views/Developer_detail'),
    redirect: '/developer_detail_store',
    children: [
      {
        path: '/developer_detail_package',
        name: 'DeveloperDetailPackage',
        component: () => import('../views/Developer_detail_package')
      },
      {
        path: '/developer_detail_store',
        name: 'DeveloperDetailStore',
        component: () => import('../views/Developer_detail_store')
      },
      {
        path: '/developer_detail_dlc',
        name: 'DeveloperDetailDLC',
        component: () => import('../views/Developer_detail_dlc')
      }
    ]
  },
  {
    path: '/developer_finance',
    name: 'DeveloperFinance',
    component: () => import('../views/Developer_finance')
  },
  {
    path: '/single_game/:sid',
    name: 'Single_game',
    component: () => import('../views/Single_game.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/racing',
    name: 'Racing',
    component: () => import('../views/Racing.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/register_email',
    name: 'Register_email',
    component: () => import('../views/Register_email.vue')
  },
  {
    path: '/support_developer',
    name: 'Support_developer',
    component: () => import('../views/Support_developer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // if not login and enter these path, continue
//   if (to.path === '/login' || to.path === '/store') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   // if not login and enter these path, to login
//   if (!tokenStr) {
//     // this.$message.error('Please log in first!')
//     return next('login')
//   }
//   next()
// })

export default router
// const originalPush = VueRouter.prototype.push
//
// VueRouter.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
