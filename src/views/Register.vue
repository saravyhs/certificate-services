<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div
        class="container container-signup animated fadeIn"
        style="display: block"
      >
        <h3 class="text-center">Sign Up</h3>
        <form @submit.prevent="handleSubmit">
          <div class="login-form">
            <div class="form-group">
              <label for="fullname"><b>Fullname</b></label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                class="form-control"
                required=""
                v-model="formData.userName"
              />
            </div>
            <div class="form-group">
              <label for="email"><b>Email</b></label>
              <input
                id="email"
                name="email"
                type="email"
                class="form-control"
                required=""
                v-model="formData.email"
              />
            </div>
            <div class="form-group">
              <label for="passwordsignin"><b>Password</b></label>
              <div class="position-relative">
                <input
                  id="passwordsignin"
                  name="passwordsignin"
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
            <div class="form-group">
              <label for="confirmpassword"><b>Confirm Password</b></label>
              <div class="position-relative">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  class="form-control"
                  required=""
                />
                <div class="show-password">
                  <i class="icon-eye"></i>
                </div>
              </div>
            </div>
            <div class="row form-sub m-0">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="agree"
                  id="agree"
                />
                <label class="form-check-label" for="agree"
                  >I Agree the terms and conditions.</label
                >
              </div>
            </div>
            <div class="row form-action">
              <div class="col-md-6">
                <!-- <a
                  href="#"
                  id="show-signin"
                  class="btn btn-danger btn-link w-100 fw-bold"
                  >Cancel</a
                > -->
                <router-link
                  to="/login"
                  class="btn btn-danger btn-link w-100 fw-bold"
                  >Cancel</router-link
                >
              </div>
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary w-100 fw-bold">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
    },
  },
};
</script>