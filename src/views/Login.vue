<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div class="card card-round">
        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            <div class="container">
              <div class="text-center">
                <img
                  src="@/assets/img/bootstrap-logo@3x.png"
                  alt="moeys logo"
                  height="100"
                />
              </div>
              <h3 class="text-center">ចូលប្រព័ន្ធ</h3>
              <div class="row mb-2">
                <div for="username" class="p-0 mb-1">ឈ្មោះអ្នកប្រើប្រាស់</div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  class="form-control"
                  required=""
                  v-model="formData.userName"
                />
              </div>
              <div class="row mb-4">
                <div for="password" class="p-0 mb-1">ពាក្យសម្ងាត់</div>
                <div class="position-relative p-0">
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
              <div class="row mb-4">
                <button
                  type="submit"
                  class="btn btn-primary col-12 float-end mt-3 mt-sm-0 fw-bold"
                >
                  ចូលប្រើប្រាស់
                </button>
              </div>
              <div class="row">
                <div class="col p-0 text-left">
                  <router-link to="/register" class="p-0"
                    ><div>ចុះឈ្មោះប្រើប្រាស់</div></router-link
                  >
                </div>
                <div class="col p-0 text-end">
                  <router-link to="/register" class="p-0"
                    ><div>ភ្លេចពាក្យសម្ងាត់</div></router-link
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
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
        console.log("login not successful.");
      } else {
        this.$router.push("/user-dashboard");
      }
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
h3 {
  font-family: "Kantumruy Pro", sans-serif;
}
</style>