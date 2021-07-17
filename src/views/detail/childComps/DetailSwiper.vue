<template>
    <Swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img v-lazy="item" alt="" />
      </swiper-item>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
