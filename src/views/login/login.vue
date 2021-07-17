<template>
  <div class="login">
    <nav-bar class="login-bar">
      <div slot="left" @click="titleBack" class="back-img">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center">账号登录</div>
    </nav-bar>

    <img src="~assets/img/profile/shop1.jpg" alt="" class="image">

    <van-form @submit="onSubmit" class="formmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#ff8198"
          >登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    titleBack() {
      this.$router.back();
    },
    onSubmit(values) {
      console.log('submit', values);
      this.$router.push('/home')
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.back-img img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.login-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.formmit{
    margin-top: 20px;
}
.image{
    width: 100%;
}
</style>
