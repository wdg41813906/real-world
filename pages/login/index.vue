<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">
              Need an account?</nuxt-link
            >
            <nuxt-link v-else to="/login"> Have an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <!-- <li>That email is already taken</li> -->
            <template v-for="(errItem, errName) in errors">
              <li v-for="(errmasage, index) in errItem" :key="index">
                {{ errName }} {{ errmasage }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onsubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "@/utils/request";
import { login, register } from "@/api/user";
//仅在客户端加载js-cookie包
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: "LoginIndex",
  computed: {
    isLogin() {
      // console.log(this.$route.name)
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      middleware: "notAuthenticated",
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    //      async onSubmit(){
    //           //提交比哦啊单请求登录
    //           const {data}= await request({
    //               methods:'POST',
    //               url:'/api/users/login'
    //           })
    //           console.log(data)
    //       }
    //   }
    async onsubmit() {
      try {
        //   const {data} =await login({user:this.user})
        const { data } = this.isLogin
          ? await login({ user: this.user })
          : await register({ user: this.user });
        // console.log(data);
        //保存用户登录状态
        this.$store.commit("setUser", data.user);
        // console.log(data);
        //为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set("user", data.user);
        this.$router.push("/");
      } catch (error) {
        // console.dir(error);
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style></style>
