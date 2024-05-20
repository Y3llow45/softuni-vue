import VueRouter from "vue-router";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFound from './components/NotFound';
import ProtectedPage from './components/ProtectedPage';
import userStore from "./store";

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/edit/:id',
      component: AboutPage
    },
    {
      path: '/protected',
      component: ProtectedPage,
      beforeEnter: (to, from, next) => {
        const redirectUrl = userStore.user ? undefined : '/'
        next(redirectUrl)
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default router;