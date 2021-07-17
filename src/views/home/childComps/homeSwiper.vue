<template>
  <Swiper class="home-swiper">
    <swiper-item
      v-for="(item, index) in banners"
      :key="index"
      
    >
      <a :href="item.link">
        <img v-lazy="item.image" alt="" />
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "homeSwiper",
  data() {
    return {};
  },
  props: {
    banners: {
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
.home-swiper {
  height: 166.4px;
  overflow: hidden;
}
/* img[lazy="loading"] {
		width: 100%;
		height: 166.4px;
	} */
</style>
