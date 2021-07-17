import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from 'fastclick'
import 'vant/lib/index.css';
import { NoticeBar, SubmitBar, Checkbox, Toast, Card, SwipeCell, Button, Dialog, Lazyload, Grid, GridItem, Form, Field  } from "vant";

Vue.use(NoticeBar);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(Toast);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Dialog);
Vue.use(Lazyload, {
  loading: require('./assets/img/home/jia.gif'),
  preload: 1.3,
});

Vue.config.productionTip = false;
// 注册全局事件总线
Vue.prototype.$bus = new Vue();

FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
