<template>
  <div class="profile">
    <nav-bar class="profile-bar">
      <div slot="left" @click="titleBack" class="back-img">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">个人中心</div></nav-bar
    >
    <profile-login />
    <profile-info />
    <profile-content />
  </div>
</template>
    
<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileInfo from "./childComps/ProfileInfo";
import ProfileContent from "./childComps/ProfileContent";

export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    titleBack() {
      this.$router.back()
  },
  },
  components: {
    NavBar,
    ProfileLogin,
    ProfileInfo,
    ProfileContent,
  },
};
</script>

<style scoped>
.profile-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.back-img img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>
