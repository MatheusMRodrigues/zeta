
const routes = [
  {path: '/', component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SignIn.vue') },
      { path: 'signup', component: () => import('pages/SignUp.vue') },
      { path: 'profilefill', component: () => import('pages/CompleteProfile.vue') },
      { path: 'profilefillform', component: () => import('pages/ProfileFill.vue') }
    ]
  },
  {path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Menu.vue'),
        children: [
          {path: 'today', component: () => import('pages/Today.vue')},
          {path: 'tomorrow', component: () => import('pages/Tomorrow.vue')}
        ] 
      },
      { path: 'feed', component: () => import('pages/Feed.vue') },
      { path: 'favorites', component: () => import('pages/Favorites.vue') },
      { path: 'profile', component: () => import('pages/Profile.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'feed', component: () => import('pages/Feed.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
