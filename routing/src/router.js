import VueRouter from "vue-router";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

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
    }
  ]
})

export default router;