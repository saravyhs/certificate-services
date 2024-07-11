<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div class="card card-round">
        <div class="card-body">
          <form @submit.prevent="handleSubmit">
            <h3 class="text-center mb-4">ចុះឈ្មោះប្រើប្រាស់</h3>
            <div class="container">
              <div class="row mb-2">
                <div for="fullname" class="p-0 mb-1">ឈ្មោះអ្នកប្រើប្រាស់</div>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  class="form-control"
                  required=""
                  v-model="formData.userName"
                />
              </div>
              <div class="row mb-2">
                <div for="phone" class="p-0 mb-1">លេខទូរស័ព្ទ</div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  class="form-control"
                  required=""
                  v-model="formData.phone"
                />
              </div>
              <div class="row mb-2">
                <div for="email" class="p-0 mb-1">អ៊ីម៉ែល</div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  required=""
                  v-model="formData.email"
                />
              </div>
              <div class="row mb-2">
                <div for="passwordsignin" class="p-0 mb-1">ពាក្យសម្ងាត់</div>
                <div class="position-relative p-0">
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
              <div class="row mb-2">
                <div for="confirmpassword" class="p-0 mb-1">
                  ផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់
                </div>
                <div class="position-relative p-0">
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
              <div class="row my-4">
                <div class="form-check p-0">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    name="agree"
                    id="agree"
                  />
                  <div class="form-check-label" for="agree">
                    ខ្ញុំយល់ស្របនឹងល័​ក្ខ​ខណ្ឌ​ផ្សេងៗ
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 ps-0">
                  <router-link to="/"
                    ><button class="btn btn-danger w-100 fw-bold">
                      បោះបង់
                    </button></router-link
                  >
                </div>
                <div class="col-md-6 pe-0">
                  <button type="submit" class="btn btn-primary w-100 fw-bold">
                    ចុះឈ្មោះ
                  </button>
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

<style scoped>
div,
button {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
h3 {
  font-family: "Kantumruy Pro", sans-serif;
}
</style>