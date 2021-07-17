<template>
  <div class="logout">
    <h1>登录</h1>
    <van-button round block type="info" native-type="submit" color="#09bb07" @click="toLogin"
      >微信登录</van-button
    >
    <div class="login-other">
      <h3>其他登录方式</h3>
      <ul class="login-other-list">
        <li @click="toLogin">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/170831_68b918b6ikh668e8gibeg48bk82l3_90x90.png"
            alt=""
          />
          <p>QQ登录</p>
        </li>
        <li @click="toLogin">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/170831_1078gd17460490lak5g7edbhah17i_90x90.png"
            alt=""
          />
          <p>免密登录</p>
        </li>
        <li @click="toLogin">
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/170831_136567k82ideakd452d8db8ca27ak_90x90.png"
            alt=""
          />
          <p>账号登录</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "logout",
  data() {
    return {};
  },
  methods: {
      toLogin() {
          this.$router.push('/login')
      }
  },
  components: {},
};
</script>

<style scoped>
.logout h1 {
  text-align: center;
  margin: 75px 0 50px;
  font-size: 41px;
  font-weight: 500;
  letter-spacing: 0.02rem;
}
.logout {
  width: 84%;
  margin: 0 auto;
  padding-bottom: 1rem;
  text-align: center;
}
.login-other {
  margin-top: 75px;
}
.login-other::before {
  content: "";
  display: block;
  border-bottom: 1px solid #000;
  width: 20px;
  margin: 0 auto;
}
.login-other h3 {
  margin: 40px 0 15px;
  color: #aaa;
  font-weight: 500;
}
.login-other-list {
  display: flex;
  padding: 25px 0;
  color: #5e5e5e;
}
.login-other-list li {
  flex: 1;
  position: relative;
  text-align: center;
}
.login-other-list li img{
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
}
</style>