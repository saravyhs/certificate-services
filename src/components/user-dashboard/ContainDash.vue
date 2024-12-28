<template>
  <div class="container">
    <div class="page-inner">
      <div class="d-flex align-items-left flex-column flex-md-row pt-2 pb-4">
        <step-bar />
      </div>
      <div class="card card-round">
        <div class="card-body p-lg-5 mx-lg-5">
          <form-applicant v-if="stepActive == 1" />
          <form-service v-if="stepActive == 2" />
          <form-doc v-if="stepActive == 3" />
          <!-- <div class="container overflow-hidden"> -->
          <div class="row pt-2">
            <div class="col-12">
              <div class="float-end">
                <button
                  class="btn btn-danger btn-rounded me-1"
                  @click="clearForm"
                  v-if="stepActive == 1 || stepActive == 2"
                >
                  សម្អាត
                </button>
                <button
                  class="btn btn-primary"
                  :class="stepActive == 2 ? 'round-left' : 'btn-rounded'"
                  @click="decrementStep"
                  v-if="stepActive == 2 || stepActive == 3"
                >
                  ត្រឡប់
                </button>
                <button
                  class="btn btn-primary"
                  :class="
                    stepActive == 2 || stepActive == 3
                      ? 'round-right ms-1'
                      : 'btn-rounded'
                  "
                  @click="incrementStep"
                  v-if="stepActive == 1 || stepActive == 2"
                >
                  បន្ទាប់
                </button>
                <button
                  class="btn btn-primary btn-rounded ms-1"
                  @click="saveApplicant"
                  v-if="stepActive == 3"
                >
                  រក្សាទុក
                </button>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepBar from "./StepBar.vue";
import FormApplicant from "./form/FormApplicant.vue";
import FormService from "./form/FormService.vue";
import FormDoc from "./form/FormDoc.vue";
import { useActiveStore } from "@/store/StepProgress";
import { useApplicant } from "@/store/applicant";
import { useUsersStore } from "@/store/user";
import { mapActions, mapState } from "pinia";
import axios from "axios";
import router from "@/route";
//const apiBaseUrl = import.meta.env.VITE_API_URL;

export default {
  components: {
    StepBar,
    FormApplicant,
    FormService,
    FormDoc,
  },
  computed: {
    ...mapState(useActiveStore, ["stepActive"]),
    ...mapState(useApplicant, [
      "appData",
      "verifyData",
      "editData",
      "filesAttach",
    ]),
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useActiveStore, ["incrementStep", "decrementStep"]),
    //...mapActions(useApplicant, ["resetState"]),
    clearForm() {
      if (this.stepActive == 1) {
        this.appData.examDate = "";
        this.appData.examCenter = "";
        this.appData.room = "";
        this.appData.seat = "";
        this.appData.grade = "";
        this.appData.percentile = "";
      }
      if (this.stepActive == 2) {
        this.verifyData.verifyByCertType = "diploma";

        this.editData.is_name = null;
        this.editData.old_name = "";
        this.editData.new_name = "";
        this.editData.is_gender = null;
        this.editData.old_gender = "";
        this.editData.new_gender = "";
        this.editData.is_dob = null;
        this.editData.old_dob = "";
        this.editData.new_dob = "";
        this.editData.is_pob = null;
        this.editData.old_pob = "";
        this.editData.new_pob = "";
        this.editData.is_father = null;
        this.editData.old_father = "";
        this.editData.new_father = "";
        this.editData.is_mother = null;
        this.editData.old_mother = "";
        this.editData.new_mother = "";
      }
    },
    async saveApplicant() {
      //save form data to db===================
      let applicant;
      if (this.appData.service == "verify") {
        applicant = {
          ...this.appData,
          verify: this.verifyData,
        };
      } else if (this.appData.service == "edit") {
        applicant = {
          ...this.appData,
          edit: this.editData,
        };
      } else {
        applicant = {
          ...this.appData,
        };
      }

      const { data } = await axios.post(
        `/api/form/${this.user._id}`,
        applicant,
        {
          headers: {
            Authorization: `Bearer ${this.user.token}`,
          },
        }
      );
      //save files attach db==================
      if (this.filesAttach.length > 0) {
        const formData = new FormData();
        // Append each file to the FormData object
        this.filesAttach.forEach((file) => {
          formData.append("files", file);
        });
        const response = await axios
          .post(`/api/file-attach/${this.user._id}/${data._id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.user.token}`,
            },
          })
          .catch((error) => console.log(error));
      }
      //show message successfull===============================
      if (data) {
        //clear data in store
        const store = useApplicant();
        store.$reset();
        const StepProgress = useActiveStore();
        StepProgress.$reset();
        //pop up message susscessfull
        this.$swal
          .fire({
            title: "រក្សាទុកព័ត៌មាន",
            text: "លោកអ្នកបានដាក់ពាក្យស្នើសុំសេវា ដោយជោគជ័យ!",
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

<style scoped>
.round-left {
  border-radius: 20px 0 0 20px;
}
.round-right {
  border-radius: 0 20px 20px 0;
}
</style>
