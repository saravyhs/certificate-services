<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div class="card card-round">
        <div class="card-body">
          <Form @submit="handleSubmit">
            <div class="container">
              <div class="text-center">
                <img
                  src="@/assets/img/bootstrap-logo@3x.png"
                  alt="moeys logo"
                  height="100"
                />
              </div>
              <h3 class="text-center">ចូលប្រព័ន្ធ</h3>
              <div class="row">
                <div for="email" class="p-0 mb-1">អាស័យដ្ឋានអ៊ីម៉ែល</div>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  class="form-control"
                  :rules="emailRule"
                  v-model="formData.email"
                />
              </div>
              <div class="row mb-2">
                <div class="p-0">
                  <ErrorMessage name="email" class="error-message" />
                </div>
              </div>
              <div class="row">
                <div for="password" class="p-0 mb-1">ពាក្យសម្ងាត់</div>
                <div class="position-relative p-0">
                  <Field
                    id="password"
                    :type="passwordFieldType"
                    name="password"
                    class="form-control"
                    :rules="passwordRule"
                    v-model="formData.password"
                  />
                  <div class="show-password" @click="switchPassword">
                    <i :class="eyeType"></i>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="p-0">
                  <ErrorMessage name="password" class="error-message" />
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
                <div class="col p-0 text-center">
                  មិនទាន់ចុះឈ្មោះប្រើប្រាស់?
                  <router-link to="/register" class="p-0"
                    >ចុះឈ្មោះទីនេះ</router-link
                  >
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/store/user";
import { mapState, mapActions } from "pinia";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      //users: userData,
      passwordFieldType: "password",
      eyeType: "fas fa-eye-slash",
      formData: {
        email: "",
        password: "",
      },
      emailRule: Yup.string().required().email(),
      passwordRule: Yup.string().required(),
    };
  },
  computed: {
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["login"]),
    async handleSubmit() {
      const userData = await this.login(
        this.formData.email,
        this.formData.password
      );
    },
    switchPassword() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      this.eyeType = this.eyeType === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash";
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
.error-message {
  color: red;
}
</style>