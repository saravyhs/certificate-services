<!-- create by pharen -->
<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body">
          <!-- <div class=able-responsive"> -->
          <div class="table-responsive">
            <table class="table table-dark-gray align-middle table-hover p-1">
              <thead>
                <tr>
                  <th class="head-font fw-bold no-padding">ល.រ</th>
                  <th class="head-font fw-bold no-padding">លេខបង្កាន់ដៃ</th>
                  <th class="head-font fw-bold no-padding">គោត្តនាម និងនាម</th>
                  <th class="head-font fw-bold no-padding">ប្រភេទសេវា</th>
                  <th class="head-font fw-bold no-padding">កាលបរិច្ឆេទ</th>
                  <th class="head-font fw-bold no-padding">ស្ថានភាព</th>
                  <th class="head-font fw-bold no-padding">សកម្មភាព</th>
                  <th class="head-font fw-bold no-padding">បោះពុម្ភ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in this.formData" :key="index">
                  <td class="no-padding">{{ index + 1 }}</td>
                  <td class="no-padding">
                    {{ item.receiptNo.toString().padStart(4, "0") }}
                  </td>
                  <td class="no-padding">
                    {{ item.byUser.firstName + " " + item.byUser.lastName }}
                  </td>
                  <td class="no-padding">
                    <span v-if="item.service === 'verify'"
                      >បញ្ជាក់ភាពត្រឹមត្រូវ</span
                    >
                    <span v-else-if="item.service === 'reissue'">ទុតិយតា</span>
                    <span v-else-if="item.service === 'edit'">កែតម្រូវ</span>
                  </td>
                  <td class="no-padding">
                    {{ formatDate(item.createdDate) }}
                  </td>
                  <td class="no-padding">
                    <span
                      v-if="item.status === 1"
                      class="badge bg-primary p-2"
                      style="width: 6rem"
                      >ដាក់ពាក្យ</span
                    >
                    <span
                      v-else-if="item.status === 2"
                      class="badge bg-danger p-2"
                      style="width: 6rem"
                      >កំពុងធ្វើ</span
                    >
                    <span
                      v-else-if="item.status === 3"
                      class="badge bg-success p-2"
                      style="width: 6rem"
                      >រួចរាល់</span
                    >
                  </td>
                  <td class="no-padding">
                    <!-- <div class="container"> -->
                    <router-link to="/user-dashboard/view-service">
                      <button
                        type="button"
                        class="btn btn-xs btn-outline-secondary"
                        @click="goViewForm(item._id)"
                      >
                        <font-awesome-icon icon="fas fa-eye" />
                      </button>
                    </router-link>
                    <span class="m-1"></span>
                    <button
                      type="button"
                      class="btn btn-xs btn-outline-secondary"
                      @click="goUpdateForm(item._id)"
                      v-if="item.status == 1"
                    >
                      <font-awesome-icon icon="fas fa-edit" />
                    </button>
                    <span class="m-1"></span>
                    <button
                      type="button"
                      class="btn btn-xs btn-outline-secondary"
                      @click="deleteForm(item._id)"
                      v-if="item.status == 1"
                    >
                      <font-awesome-icon icon="fas fa-trash" />
                    </button>
                    <!-- </div> -->
                  </td>
                  <td class="no-padding">
                    <button
                      type="button"
                      @click="goReport(item._id, item.service)"
                      name="btnprint"
                      class="btn btn-xs btn-outline-secondary"
                    >
                      <font-awesome-icon icon="fas fa-print" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useapplicantList } from "@/store/applicantList";
import { usefileAttach } from "@/store/fileAttach";
import { useUsersStore } from "@/store/user";
import { mapState, mapActions } from "pinia";
import router from "@/route";
import dayjs from "dayjs";
import axios from "axios";
//const apiBaseUrl = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      formData: [],
    };
  },
  async mounted() {
    await this.getApplicant();
    this.formData = this.applicants;
  },
  computed: {
    ...mapState(useapplicantList, ["applicants", "applicantOne"]),
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useapplicantList, ["getApplicant", "getApplicantOne"]),
    ...mapActions(usefileAttach, ["getFiles"]),
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("DD-MM-YYYY");
    },
    async deleteForm(formId) {
      const result = await this.$swal.fire({
        title: "តើពិតជាចង់លុបមែនឬទេ?",
        text: "ពាក្យស្នើសុំដែលបានលុបហើយមិនអាចទាញយកមកវិញបានទេ!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(`/api/form/${formId}`, {
            headers: {
              Authorization: `Bearer ${this.user.token}`,
            },
          });
          this.$swal.fire({
            title: "លុបពាក្យស្នើសុំ!",
            text: "ពាក្យស្នើសុំរបស់លោកអ្នកត្រូវបានលុបដោយជោគជ័យ។",
            icon: "success",
          });
          // Remove the item from the local list
          if (data.acknowledged) {
            this.formData = this.formData.filter((form) => form._id !== formId);
          }
        } catch (error) {
          console.log("Error deleting item:", error);
          // Show error message
          this.$swal.fire("Error!", "Failed to delete the item.", "error");
        }
      }
    },
    async goUpdateForm(formId) {
      await this.getApplicantOne(formId);
      await this.getFiles(formId);
      router.push("/user-dashboard/edit-service");
    },
    async goViewForm(formId) {
      await this.getApplicantOne(formId);
      await this.getFiles(formId);
      router.push("/user-dashboard/view-service");
    },
    async goReport(formId, service) {
      await this.getApplicantOne(formId);
      if (service == "verify") {
        router.push("/user-dashboard/print-verify");
      } else if (service == "edit") {
        router.push("/user-dashboard/print-edit");
      } else {
        router.push("/user-dashboard/print-reissue");
      }
    },
  },
};
</script>

<style scoped>
table,
tr,
td,
th {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}

table {
  table-layout: auto; /* Ensures the table adjusts based on content */
  width: auto; /* Makes the table fit content width */
}

th,
td {
  /* border: 1px solid #ccc; */
  /* padding: 10px; */
  white-space: nowrap; /* Prevents wrapping of text */
}

.no-padding {
  padding: 15px !important;
}

.head-font {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>
