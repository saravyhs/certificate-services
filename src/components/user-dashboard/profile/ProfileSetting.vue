<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-sm-4 my-sm-5">
          <div class="d-lg-flex flex-lg-row justify-content-center gap-4">
            <div class="card flex-fill">
              <div class="card-body text-center px-2">
                <div class="avatar avatar-xxl">
                  <img
                    :src="preview == '' ? profileImage : preview"
                    alt="..."
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="mt-2">
                  <label class="btn btn-primary btn-rounded text-light">
                    <input
                      type="file"
                      id="sufile"
                      name="suImage"
                      autocomplete="off"
                      @change="attachimage"
                      class="hidden"
                    />
                    ជ្រើសរើសរូបថត
                  </label>
                </div>

                <div class="mt-2">
                  <div>{{ username }}</div>
                  <div>{{ email }}</div>
                </div>
              </div>
            </div>
            <div class="card flex-fill p-2">
              <h5 class="card-header fw-bold">ព័ត៌មានលំអិតអំពីខ្ញុំ</h5>
              <div class="card-body">
                <form @submit.prevent="updateUser">
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label px-2">នាមត្រកូល</div>
                    <div class="col-sm-4 px-2">
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="formData.firstName"
                      />
                    </div>

                    <div class="col-sm-2 col-form-label px-2">នាមខ្លួន</div>
                    <div class="col-sm-4 px-2">
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="formData.lastName"
                      />
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label px-2">ភេទ</div>
                    <div class="col-sm-4 px-2">
                      <select
                        class="form-select form-select-lg"
                        id="inputGroupSelect01"
                        v-model="formData.gender"
                      >
                        <option disabled value="">ជ្រើសរើសភេទ</option>
                        <option value="male">ប្រុស</option>
                        <option value="female">ស្រី</option>
                      </select>
                    </div>

                    <div class="col-sm-2 col-form-label px-2">ថ្ងៃខែឆ្នាំកំណើត</div>
                    <div class="col-sm-4 px-2">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="dd-mm-yyyy"
                        v-model="formData.dob"
                      />
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col-sm-2 col-form-label px-2">អាសយដ្ឋាន</div>
                    <div class="col-sm-4 px-2">
                      <select
                        class="form-select form-select-lg"
                        v-model="formData.address"
                      >
                        <option disabled value="">ជ្រើសរើសខេត្ត</option>
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
                      </select>
                    </div>

                    <div class="col-sm-2 col-form-label px-2">លេខទូរស័ព្ទ</div>
                    <div class="col-sm-4 px-2">
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.phone"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="float-end">
                        <router-link
                          to="/user-dashboard/profile"
                          class="btn btn-danger btn-rounded me-1"
                        >
                          បោះបង់
                        </router-link>
                        <button
                          type="submit"
                          class="btn btn-primary rounded-pill"
                        >
                          កែប្រែ
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/store/user";
import { mapState, mapActions } from "pinia";
import axios from "axios";
import dayjs from "dayjs";
import router from "@/route";

export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
      },
      username: "",
      email: "",
      preview:"",
      photoUpload: "",
    };
  },
  mounted() {
    this.formData.firstName = this.user.firstName;
    this.formData.lastName = this.user.lastName;
    this.formData.gender = this.user.gender;    
    this.formData.dob = this.formatDate(this.user.dob);
    this.formData.address = this.user.address;
    this.formData.phone = this.user.phone;

    this.username = this.user.username;
    this.email = this.user.email;
  },
  computed: {
    ...mapState(useUsersStore, ["user", "profileImage"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["setUser", "updateProfileImage"]),

    attachimage(e) {
      e.preventDefault();
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
      return files;
    },

    createImage(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target.result;
      };
      reader.readAsDataURL(file);
      this.photoUpload = file;
    },

    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },

    async updateUser() {
      const user = {
        gender: this.formData.gender,
        dob: this.formData.dob,
        address: this.formData.address,
        phone: this.formData.phone,        
      };
      //save user data to db===========================
      const { data } = await axios
        .put(
          `/api/users/${this.user._id}`,
          user,
          {
            headers: {
              Authorization: `Bearer ${
                this.user.token
              }`,
            },
          }
        ).catch((error) => console.log(error));
      //save photo to db=======================================
      if (this.photoUpload != "") {
        const profile = new FormData();
        profile.append("file", this.photoUpload);

        const response = await axios.post(
            `/api/user-profile/${this.user._id}`,
            profile,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${
                  this.user.token
                }`,
              },
            }
          ).catch((error) => console.log(error));
          
          if (response){
            await this.updateProfileImage(this.user._id, this.user.token);
          }
      }
      //show message successfull===============================
      if (data) {
        //seve user data to local storage
        const {token} = this.user;
        data.token = token;
        this.setUser(data);
        //pop up message susscessfull
        this.$swal.fire({
            title: "កែប្រែព័ត៌មាន",
            text: "ព័ត៌មានត្រូវបានកែប្រែដោយជោគជ័យ!",
            icon: "success",
            backdrop: true, // Ensure the backdrop is visible
            allowOutsideClick: false, // Disable clicking outside the popup to dismiss
            allowEscapeKey: false, // Disable the Esc key to dismiss the popup
            allowEnterKey: true, // (Optional) Allow pressing Enter to confirm
          })
          .then(() => {
            router.push("/user-dashboard/profile");
          });
      }
    },
  },
};
</script>

<style scoped>
div,
input,
select {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
h5 {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
}
.hidden {
  display: none;
}
</style>