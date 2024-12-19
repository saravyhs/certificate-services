<template>
  <div class="login bg-primary">
    <div class="wrapper wrapper-login">
      <div class="card card-round">
        <div class="card-body">
          <Form @submit="handleSubmit">            
            <div class="container">
              <h3 class="text-center mb-4">ចុះឈ្មោះប្រើប្រាស់</h3>
              <!-- row1 ================================= -->
              <div class="row mb-1">
                <div for="firstname" class="col-sm-6 col-form-label p-0 px-2">នាមត្រកូល <span class="star">*</span>
                  <Field
                    id="firstname"
                    name="firstname"
                    type="text"
                    class="form-control"
                    :rules="firstName"
                    v-model="formData.firstName"
                  />  
                  <ErrorMessage name="firstname" class="error-message" />                
                </div>

                <div for="lastname" class="col-sm-6 col-form-label p-0 px-2">នាមខ្លួន <span class="star">*</span>
                  <Field
                    id="lastname"
                    name="lastname"
                    type="text"
                    class="form-control"
                    :rules="lastName"
                    v-model="formData.lastName"
                  />
                  <ErrorMessage name="lastname" class="error-message" />
                </div>                
              </div>
              <!-- row2 ================================= -->
              <div class="row mb-1">
                <div for="gender" class="col-sm-6 col-form-label p-0 px-2">ភេទ <span class="star">*</span>
                  <Field class="form-select form-select-lg" name="gender" 
                    as="select" v-model="formData.gender" :rules="gender" style="font-size: 16px;">
                    <option disabled value="">ជ្រើសរើសភេទ</option>
                    <option value="male">ប្រុស</option>
                    <option value="female">ស្រី</option>
                  </Field>
                  <ErrorMessage name="gender" class="error-message" />
                </div>

                <div for="dob" class="col-sm-6 col-form-label p-0 px-2">ថ្ងៃខែឆ្នាំកំណើត <span class="star">*</span>
                  <Field
                    type="date"
                    name="dob"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    :rules="dob"
                    v-model="formData.dob"
                  />
                  <ErrorMessage name="dob" class="error-message" />
                </div>
              </div>
              <!-- row3 ================================= -->
              <div class="row mb-1">
                <div for="address" class="col-sm-6 col-form-label p-0 px-2">អាសយដ្ឋាន
                  <Field class="form-select form-select-lg" name="address" 
                    as="select" v-model="formData.address" style="font-size: 16px;">
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

                <div for="phone" class="col-sm-6 col-form-label p-0 px-2">លេខទូរស័ព្ទ
                  <Field
                    id="phone"
                    name="phone"
                    type="text"
                    class="form-control"
                    v-model="formData.phone"
                  />
                </div>
              </div>
              <!-- row4 ================================= -->
              <div class="row mb-1">
                <div for="fullname" class="col-sm-6 col-form-label p-0 px-2">ឈ្មោះអ្នកប្រើប្រាស់ <span class="star">*</span>
                <Field
                  id="fullname"
                  name="fullname"
                  type="text"
                  class="form-control"
                  :rules="userNameRule"
                  v-model="formData.username"
                />
                <ErrorMessage name="fullname" class="error-message" />
                </div>

                <div for="email" class="col-sm-6 col-form-label p-0 px-2">អ៊ីម៉ែល <span class="star">*</span>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :rules="emailRule"
                    v-model="formData.email"
                  />
                  <ErrorMessage name="email" class="error-message" />
                </div>               
              </div>

              <div class="row mb-1">
                <div for="passwordsignin" class="col-sm-6 col-form-label p-0 px-2">ពាក្យសម្ងាត់ <span class="star">*</span>
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
                      <i :class="eyeType"></i>
                    </div>                    
                  </div> 
                  <ErrorMessage name="passwordsignin" class="error-message" />  
                </div>
                
                <div for="confirmpassword" class="col-sm-6 col-form-label p-0 px-2">
                  ផ្ទៀងពាក្យសម្ងាត់ <span class="star">*</span>
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
                      <i :class="eyeConfirmType"></i>
                    </div>                                        
                  </div>
                  <ErrorMessage name="confirmpassword" class="error-message" />                   
                </div>
              </div>
              <!-- =========================================== -->              
              <div class="row mb-1">
                <div class="form-check px-2">
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
              <div class="row">
                <div class="p-0">
                  <ErrorMessage name="agree" class="error-message" />
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-md-6 p-2">
                  <router-link to="/"
                    ><button class="btn btn-danger w-100 fw-bold">
                      បោះបង់
                    </button></router-link
                  >
                </div>
                <div class="col-md-6 p-2">
                  <button type="submit" class="btn btn-primary w-100 fw-bold">
                    ចុះឈ្មោះ
                  </button>
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
      eyeType: "fas fa-eye-slash",
      eyeConfirmType: "fas fa-eye-slash",
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
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      gender: Yup.string().required(),
      dob: Yup.string().required(),

      userNameRule: Yup.string().required(),
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
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
      this.eyeType = this.eyeType === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash";
    },
    switchConfirmPassword() {
      console.log("confirm");
      this.confirmPasswordFieldType = this.confirmPasswordFieldType === "password" ? "text" : "password";
      this.eyeConfirmType = this.eyeConfirmType === "fas fa-eye-slash" ? "fas fa-eye" : "fas fa-eye-slash";
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
      width: 800px;
      margin: 0 auto; /*Center the wrapper */
}
.star {
  color: red;
  font-size: 0.9em;
}
</style>