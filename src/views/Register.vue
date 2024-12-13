<template>
  <div class="container-fluid bg-primary vh-100">
    <!--  -->
    <div class="content-wrapper pt-5">
      <div class="card card-round">
        <div class="card-body">
          <Form @submit="handleSubmit">
            <h3 class="text-center mb-4">ចុះឈ្មោះប្រើប្រាស់</h3>
            <!-- <div class="container"> -->
              <!-- row1 ================================= -->
              <div class="row mb-2">
                <!-- <div class="row"> -->
                <div for="firstname" class="col-sm-2 col-form-label pe-0">នាមត្រកូល</div>
                <div class="col-sm-4">
                  <Field
                    id="firstname"
                    name="firstname"
                    type="text"
                    class="form-control"
                    :rules="userNameRule"
                    v-model="formData.firstName"
                  />                  
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="firstname" class="error-message" />
                  </div>
                </div> -->

                <!-- <div class="row"> -->
                <div for="lastname" class="col-sm-2 col-form-label pe-0">នាមខ្លួន</div>
                <div class="col-sm-4">                
                  <Field
                    id="lastname"
                    name="lastname"
                    type="text"
                    class="form-control"
                    :rules="userNameRule"
                    v-model="formData.lastName"
                  />
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="lastname" class="error-message" />
                  </div>
                </div> -->
              </div>
              <!-- row2 ================================= -->
              <div class="row mb-2">
                <!-- <div class="row"> -->
                <div for="gender" class="col-sm-2 col-form-label pe-0">ភេទ</div>
                <div class="col-sm-4">                 
                  <Field class="form-select form-select-lg" name="gender" 
                    as="select" v-model="formData.gender">
                    <option disabled value="">ជ្រើសរើសភេទ</option>
                    <option value="male">ប្រុស</option>
                    <option value="female">ស្រី</option>
                  </Field>
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="gender" class="error-message" />
                  </div>
                </div> -->
                
                <!-- <div class="row"> -->
                <div for="dob" class="col-sm-2 col-form-label pe-0">ថ្ងៃខែឆ្នាំកំណើត</div>
                <div class="col-sm-4">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    v-model="formData.dob"
                  />
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="dob" class="error-message" />
                  </div>
                </div> -->
              </div>
              <!-- row3 ================================= -->
              <div class="row mb-2">
                <!-- <div class="row"> -->
                <div for="address" class="col-sm-2 col-form-label pe-0">អាសយដ្ឋាន</div>
                <div class="col-sm-4">
                  <Field class="form-select form-select-lg" name="address" 
                    as="select" v-model="formData.address">
                    <option disabled value="">ជ្រើសរើសភេទ</option>
                    <option value="បន្ទាយមានជ័យ">បន្ទាយមានជ័យ</option>
                    <option value="បាត់ដំបង">បាត់ដំបង</option>
                    <option value="កំពង់ចាម">កំពង់ចាម</option>
                    <option value="កំពង់ឆ្នាំង">កំពង់ឆ្នាំង</option>
                    <option value="កំពង់ស្ពឺ">កំពង់ស្ពឺ</option>
                    <option value="កំពង់ធំ">កំពង់ធំ</option>
                    <option value="កំពត">កំពត</option>
                    <option value="កណ្តាល">កណ្តាល</option>
                    <option value="កោះកុង">កោះកុង</option>
                    <option value="ក្រចេះ">ក្រចេះ</option>
                    <option value="មណ្ឌលគិរី">មណ្ឌលគិរី</option>
                    <option value="ភ្នំពេញ">ភ្នំពេញ</option>
                    <option value="ព្រះវិហារ">ព្រះវិហារ</option>
                    <option value="ព្រៃវែង">ព្រៃវែង</option>
                    <option value="ពោធិ៍សាត់">ពោធិ៍សាត់</option>
                    <option value="រតនគិរី">រតនគិរី</option>
                    <option value="សៀមរាប">សៀមរាប</option>
                    <option value="ព្រះសីហនុ">ព្រះសីហនុ</option>
                    <option value="ស្ទឹងត្រែង">ស្ទឹងត្រែង</option>
                    <option value="ស្វាយរៀង">ស្វាយរៀង</option>
                    <option value="តាកែវ">តាកែវ</option>
                    <option value="កែប">កែប</option>
                    <option value="ប៉ៃលិន">ប៉ៃលិន</option>
                    <option value="ឧត្តរមានជ័យ">ឧត្តរមានជ័យ</option>
                    <option value="ត្បូងឃ្មុំ">ត្បូងឃ្មុំ</option>
                  </Field>
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="address" class="error-message" />
                  </div>
                </div> -->
                
                <!-- <div class="row"> -->
                <div for="phone" class="col-sm-2 col-form-label pe-0">លេខទូរស័ព្ទ</div>
                <div class="col-sm-4">
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    class="form-control"
                    :rules="phoneRule"
                    v-model="formData.phone"
                  />
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="phone" class="error-message" />
                  </div>
                </div> -->
              </div>
              <!-- row4 ================================= -->
              <div class="row mb-2">
                <!-- <div class="row"> -->
                <div for="fullname" class="col-sm-2 col-form-label pe-0">ឈ្មោះអ្នកប្រើប្រាស់</div>
                <div class="col-sm-4">
                <Field
                  id="fullname"
                  name="fullname"
                  type="text"
                  class="form-control"
                  :rules="userNameRule"
                  v-model="formData.username"
                />
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="fullname" class="error-message" />
                  </div>
                </div> -->

                <!-- <div class="row"> -->
                <div for="email" class="col-sm-2 col-form-label pe-0">អ៊ីម៉ែល</div>
                <div class="col-sm-4">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :rules="emailRule"
                    v-model="formData.email"
                  />
                </div>
                <!-- </div>
                <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="email" class="error-message" />
                  </div>
                </div> -->                
              </div>

              <div class="row mb-2">
                <!-- <div class="row mb-2"> -->
                <div for="passwordsignin" class="col-sm-2 col-form-label pe-0 mb-1">ពាក្យសម្ងាត់</div>
                <div class="col-sm-4">
                  <div class="position-relative p-0">
                    <Field
                      id="passwordsignin"
                      name="passwordsignin"
                      :type="passwordFieldType"
                      class="form-control"
                      :rules="passRule"
                      v-model="formData.password"
                    />
                    <div class="show-password" @click="switchPassword">
                      <i class="icon-eye"></i>
                    </div>
                  </div>   
                </div>
              <!-- </div> -->
              <!-- <div class="row mb-2">
                <div class="p-0">
                  <ErrorMessage name="password" class="error-message" />
                </div>
              </div> -->

              <!-- <div class="row"> -->
                <div for="confirmpassword" class="col-sm-2 col-form-label pe-0">
                  ផ្ទៀងពាក្យសម្ងាត់
                </div>
                <div class="col-sm-4">
                  <div class="position-relative p-0">
                    <Field
                      id="confirmpassword"
                      name="confirmpassword"
                      :type="confirmPasswordFieldType"
                      class="form-control"
                      :rules="confirmPassRule"
                      v-model="formData.confirmPassword"
                    />
                    <div class="show-password" @click="switchConfirmPassword">
                      <i class="icon-eye"></i>
                    </div>
                  </div>
                </div>
                <!-- </div> -->
                <!-- <div class="row mb-2">
                  <div class="p-0">
                    <ErrorMessage name="confirmpassword" class="error-message" />
                  </div>
                </div> -->
              </div>
              <!-- =========================================== -->
              
              <div class="row mb-2">
                <div class="form-check">
                  <Field
                    type="checkbox"
                    class="form-check-input"
                    name="agree"
                    id="agree"
                    :rules="agreeRule"
                    v-model="formData.agree"
                  />
                  <div class="form-check-label" for="agree">
                    ខ្ញុំយល់ស្របនឹងល័​ក្ខ​ខណ្ឌ​ផ្សេងៗ
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="p-0">
                  <ErrorMessage name="agree" class="error-message" />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6">
                  <router-link to="/"
                    ><button class="btn btn-danger w-100 fw-bold">
                      បោះបង់
                    </button></router-link
                  >
                </div>
                <div class="col-md-6">
                  <button type="submit" class="btn btn-primary w-100 fw-bold">
                    ចុះឈ្មោះ
                  </button>
                </div>
              </div>
            <!-- </div> -->
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/store/user";
import { mapActions } from "pinia";
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
      confirmPasswordFieldType: "password",
      passwordFieldType: "password",
      formData: {
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        address: "",        
        phone: "",
        username: "",        
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
      },
      userNameRule: Yup.string().required(),
      phoneRule: Yup.string().required(),
      emailRule: Yup.string().required().email(),
      passRule: Yup.string().required().min(8),
      confirmPassRule: Yup.string().required().min(8),
      agreeRule: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["register"]),
    async handleSubmit() {
      const userData = await this.register(
        this.formData.firstName,
        this.formData.lastName,
        this.formData.gender,
        this.formData.dob,
        this.formData.address,
        this.formData.phone,
        this.formData.username,        
        this.formData.email,
        this.formData.password,
        this.formData.confirmPassword
      );
    },
    switchPassword() {
      console.log("pass");
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    switchConfirmPassword() {
      console.log("confirm");
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === "password" ? "text" : "password";
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
.error-message {
  color: red;
}
.content-wrapper {
      width: 740px;
      margin: 0 auto; /*Center the wrapper */
}
</style>