
const routes = [
  { path: '/flex', name:'flex', meta:{auth:true} ,component: () => import('pages/flex.vue') },
  { path: '/courses', name:'admin-courses',meta:{auth:true}, component: () => import('pages/courses.vue') },
  { path: '/admin', name:'admin-back',meta:{auth:true}, component: () => import('pages/AdminPage.vue') },
  { path: '/connect', name:'connect',meta:{auth:true}, component: () => import('pages/ComponentsConection'), },
  { path: '/feed', name:'feed',meta:{auth:false}, component: () => import('pages/feed'), },
  { path: '/feed-two', name:'feed',meta:{auth:false}, component: () => import('pages/feedTwo'), },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name:'functions',meta:{auth:false}, component: () => import('pages/Index.vue') },
      { path: '/firestore', name:'firestore',meta:{auth:true}, component: () => import('pages/Firestore.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
