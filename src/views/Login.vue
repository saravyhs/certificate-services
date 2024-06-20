<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div
        class="container container-login animated fadeIn"
        style="display: block"
      >
        <h3 class="text-center">Sign In</h3>
        <form @submit.prevent="handleSubmit">
          <div class="login-form">
            <div class="form-group">
              <label for="username"><b>Username</b></label>
              <input
                id="username"
                name="username"
                type="text"
                class="form-control"
                required=""
                v-model="formData.userName"
              />
            </div>
            <div class="form-group">
              <label for="password"><b>Password</b></label>
              <a href="#" class="link float-end">Forget Password ?</a>
              <div class="position-relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  class="form-control"
                  required=""
                  v-model="formData.password"
                />
                <div class="show-password">
                  <i class="icon-eye"></i>
                </div>
              </div>
            </div>
            <div class="form-group form-action-d-flex mb-3">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberme"
                />
                <label class="custom-control-label m-0" for="rememberme"
                  >Remember Me</label
                >
              </div>
              <button
                type="submit"
                class="btn btn-primary col-md-5 float-end mt-3 mt-sm-0 fw-bold"
              >
                Sign In
              </button>
            </div>
            <div class="login-account">
              <span class="msg">Don't have an account yet ?</span>
              <!-- <a href="#" id="show-signup" class="link">Sign Up</a> -->
              <router-link to="/register">Sign Up</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import userData from "../assets/database/user.json";
export default {
  data() {
    return {
      users: userData,
      formData: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      const user = this.users.find((user) => {
        if (
          user.user_name == this.formData.userName &&
          user.password == this.formData.password
        )
          return user;
      });
      if (!user) {
        console.log("no");
      } else {
        this.$router.push("/user-dashboard");
        //window.
        //console.log(user);
      }
    },
  },
};
</script>