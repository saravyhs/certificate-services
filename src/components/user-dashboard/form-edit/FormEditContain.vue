<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-lg-5 mx-lg-5">
          <form @submit.prevent="updateForm">
            <h6 class="fw-bold px-0">ព័ត៌មានសញ្ញាបត្រ</h6>
            <hr class="hr mt-0" />
            <FormEditCertInfor />
            <h6 class="fw-bold px-0">ព័ត៌មានសេវា</h6>
            <hr class="hr mt-0" />
            <FormEditServiceType />
            <FormEditServiceVerify
              v-if="this.applicantOne.service === 'verify'"
            />
            <FormEditServiceEdit
              v-else-if="this.applicantOne.service === 'edit'"
            />
            <h6 class="fw-bold px-0">ឯកសារភ្ជាប់</h6>
            <hr class="hr mt-0" />
            <FormEditDocVerify v-if="this.applicantOne.service === 'verify'" />
            <FormEditDocEdit v-else-if="this.applicantOne.service === 'edit'" />
            <FormEditDocReissue
              v-else-if="this.applicantOne.service === 'reissue'"
            />
            <div class="row pt-2">
              <div class="col-12">
                <div class="float-end">
                  <router-link
                    to="/user-dashboard/list-services"
                    class="btn btn-danger btn-rounded me-1"
                  >
                    បោះបង់
                  </router-link>
                  <button
                    type="submit"
                    class="btn btn-primary btn-rounded ms-1"
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
</template>

<script>
import FormEditCertInfor from "./FormEditCertInfor.vue";
import FormEditDocEdit from "./FormEditDocEdit.vue";
import FormEditDocReissue from "./FormEditDocReissue.vue";
import FormEditDocVerify from "./FormEditDocVerify.vue";
import FormEditServiceEdit from "./FormEditServiceEdit.vue";
import FormEditServiceType from "./FormEditServiceType.vue";
import FormEditServiceVerify from "./FormEditServiceVerify.vue";
import { useapplicantList } from "@/store/applicantList";
import { useUsersStore } from "@/store/user";
import { usefileAttach } from "@/store/fileAttach";
import { mapState } from "pinia";
import router from "@/route";
import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_URL;

export default {
  components: {
    FormEditCertInfor,
    FormEditServiceType,
    FormEditServiceVerify,
    FormEditServiceEdit,
    FormEditDocVerify,
    FormEditDocEdit,
    FormEditDocReissue,
  },
  computed: {
    ...mapState(useapplicantList, ["applicantOne", "errors"]),
    ...mapState(useUsersStore, ["user"]),
    ...mapState(usefileAttach, ["files_delete", "files_upload"]),
  },
  methods: {
    async updateForm() {
      //check form validation
      if (
        this.applicantOne.examDate == "" ||
        this.applicantOne.examCenter == "" ||
        this.applicantOne.room == "" ||
        this.applicantOne.seat == ""
      ) {
        this.errors.examDate =
          this.applicantOne.examDate == "" ? "Exam date is required." : null;
        this.errors.examCenter =
          this.applicantOne.examCenter == ""
            ? "Exam center is required."
            : null;
        this.errors.room =
          this.applicantOne.room == "" ? "Room is required." : null;
        this.errors.seat =
          this.applicantOne.seat == "" ? "Seat is required." : null;
        return;
      }
      const form = {
        examDate: this.applicantOne.examDate,
        examCenter: this.applicantOne.examCenter,
        room: this.applicantOne.room,
        seat: this.applicantOne.seat,
        grade: this.applicantOne.grade,
        percentile: this.applicantOne.percentile,
        service: this.applicantOne.service,
      };
      if (this.applicantOne.service == "verify") {
        form.verify = {
          verifyByCertType: this.applicantOne.verify.verifyByCertType,
        };
      } else if (this.applicantOne.service == "edit") {
        form.edit = {
          is_name: this.applicantOne.edit.is_name,
          old_name: this.applicantOne.edit.old_name,
          new_name: this.applicantOne.edit.new_name,
          is_gender: this.applicantOne.edit.is_gender,
          old_gender: this.applicantOne.edit.old_gender,
          new_gender: this.applicantOne.edit.new_gender,
          is_dob: this.applicantOne.edit.is_dob,
          old_dob: this.applicantOne.edit.old_dob,
          new_dob: this.applicantOne.edit.new_dob,
          is_pob: this.applicantOne.edit.is_pob,
          old_pob: this.applicantOne.edit.old_pob,
          new_pob: this.applicantOne.edit.new_pob,
          is_father: this.applicantOne.edit.is_father,
          old_father: this.applicantOne.edit.old_father,
          new_father: this.applicantOne.edit.new_father,
          is_mother: this.applicantOne.edit.is_mother,
          old_mother: this.applicantOne.edit.old_mother,
          new_mother: this.applicantOne.edit.new_mother,
        };
      }
      //update user data to db===========================
      const { data } = await axios
        .put(`${apiBaseUrl}/form/${this.applicantOne._id}`, form, {
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
        })
        .catch((error) => console.log(error));
      // delete file attach from database and file directory
      if (this.files_delete.length > 0) {
        for (let index = 0; index < this.files_delete.length; index++) {
          await axios
            .delete(
              `${apiBaseUrl}/file-attach/${this.user._id}/${this.files_delete[index]}`,
              {
                headers: {
                  Authorization: `Bearer ${this.user.token}`,
                },
              }
            )
            .catch((error) => console.log(error));
        }
      }
      // upload new file attach if exist======================
      if (this.files_upload.length > 0) {
        const formData = new FormData();
        // Append each file to the FormData object
        this.files_upload.forEach((file) => {
          formData.append("files", file);
        });
        const response = await axios
          .post(
            `${apiBaseUrl}/file-attach/${this.user._id}/${this.applicantOne._id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${this.user.token}`,
              },
            }
          )
          .catch((error) => console.log(error));
      }
      //show message successfull===============================
      if (data) {
        this.$swal
          .fire({
            title: "កែប្រែព័ត៌មាន",
            text: "ព័ត៌មានត្រូវបានកែប្រែដោយជោគជ័យ!",
            icon: "success",
            backdrop: true, // Ensure the backdrop is visible
            allowOutsideClick: false, // Disable clicking outside the popup to dismiss
            allowEscapeKey: false, // Disable the Esc key to dismiss the popup
            allowEnterKey: true, // (Optional) Allow pressing Enter to confirm
          })
          .then(() => {
            router.push("/user-dashboard/list-services");
          });
      }
    },
  },
};
</script>
