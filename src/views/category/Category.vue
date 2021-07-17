<template>
  <div id="Category">
    <nav-bar class="category-bar">
      <div slot="left" @click="titleBack" class="back-img">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">商品分类</div></nav-bar
    >
    <div class="content">
      <category-title
        class="classifyTitle"
        @getCategoryContent="getCategoryContent"
      />
      <category-content
        class="classifyContent"
        :content-list="contentList"
        :categoryDetail="categoryDetail"
        ref="content"
      >
      </category-content>
    </div>
  </div>
</template>
    
<script>
import NavBar from "components/common/navbar/NavBar";

import CategoryTitle from "./childComps/CategoryTitle";
import CategoryContent from "./childComps/CategoryContent";

import { getSubcategory, getCategoryDetail } from "network/category";
import { tabControlMixin } from "@/common/mixin";
import { POP, SELL, NEW } from "@/common/const";

export default {
  name: "Category",
  data() {
    return {
      contentList: [],
      miniWall: "",
      categoryDetail: {
        pop: [],
        new: [],
        sell: [],
      },
    };
  },
  mixins: [tabControlMixin],
  methods: {
    titleBack() {
      this.$router.back();
    },
    getCategoryContent(item) {
      this.miniWall = item.miniWallkey;
      getSubcategory(item.maitKey).then((res) => {
        this.contentList = res.data.list;
        this.$refs.content.$emit("backTop");
        // console.log(this.contentList)
      });
      this._getCategoryDetail(POP);
      this._getCategoryDetail(SELL);
      this._getCategoryDetail(NEW);
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.miniWall;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryDetail[type] = res;
        // console.log( this.categoryDetail);
      });
    },
  },
  components: {
    NavBar,
    CategoryTitle,
    CategoryContent,
  },
};
</script>

<style scoped>
.category-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}

.content {
  display: flex;
}
.classifyTitle {
  width: 30%;
}
.classifyContent {
  width: 70%;
}
.back-img img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
