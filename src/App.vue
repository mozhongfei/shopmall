<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar v-show="show"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
  data() {
    return {
      show: true,
      path: ['/home','/category','/cart', '/profile']
    }
  },
  watch: {
    $route(to,from){this.getPath(to,from)}
  },
  methods: {
    getPath(to,from) {
      const aa = this.path.find(e => e == to.path)
        if (aa) {
          this.show = true
        }else{
          this.show = false
        }
    }
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
