<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.back-top{
    position: absolute;
    bottom: 49px;
    right: 0;
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.back-top img{
    width: 100%;
    height: 100%;
}
</style>
