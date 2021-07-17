<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: .8rem 0 1.6rem;
  border-bottom: .8rem solid #eee;
}
.recommend-item{
  flex: 1;

}
.recommend-item img{
  width: 80%;
  height: auto;
  margin-bottom: 0.6rem;
}
</style>
