import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const Detail = () => import('@/views/detail/Detail')
const login = () => import('@/views/login/login')
const logout = () => import('@/views/login/logout')

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/logout',
    component: logout
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: '/dist',
  routes,
});

export default router;
