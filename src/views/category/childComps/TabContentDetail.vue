<template>
    <goods-list :goods="categoryDetail"></goods-list>
</template>

<script>

import GoodsList from "components/content/goods/GoodsList.vue";

  export default {
    name: "TabContentDetail",
    components: {
      GoodsList
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>