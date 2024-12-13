<template>
  <!-- <form> -->
  <div class="row table-responsive">
    <!-- <div class="container text-center table-responsive"> -->
    <table class="table-borderless">
      <thead>
        <tr>
          <th scope="col" class="text-center fw-bold">ស្នើកែ</th>
          <th scope="col" class="text-center fw-bold">ព័ត៌មាន</th>
          <th scope="col" class="text-center fw-bold">ក្នុងវិញ្ញាបនបត្រចាស់</th>
          <th scope="col" class="text-center fw-bold">ក្នុងវិញ្ញាបនបត្រថ្មី</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.is_name"
              name="agree"
              id="chkName"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span> ឈ្មោះសិស្ស</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldName"
              v-model="formData.old_name"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newName"
              v-model="formData.new_name"
            />
          </td>
        </tr>
        <!--========================== Gender ============ -->

        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.is_gender"
              name="agree"
              id="agree"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span class=""> ភេទ</span>
          </td>
          <td class="p-1">
            <select
              class="form-select form-select-lg"
              id="inputGroupSelect01"
              v-model="formData.old_gender"
            >
              <option selected disabled value="">ជ្រើសរើសភេទ</option>
              <option value="male">ប្រុស</option>
              <option value="female">ស្រី</option>
            </select>
          </td>
          <td class="p-1">
            <select
              class="form-select form-select-lg"
              id="inputGroupSelect01"
              v-model="formData.new_gender"
            >
              <option selected disabled value="">ជ្រើសរើសភេទ</option>
              <option value="male">ប្រុស</option>
              <option value="female">ស្រី</option>
            </select>
          </td>
        </tr>
        <!--========================== Gender ============ -->
        <!-- ----------------------------------Date Of Birth -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="formData.is_dob"
              name="agree"
              id="agree"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span class=""> ថ្ងៃខែឆ្នាំកំណើត</span>
          </td>
          <td class="p-1">
            <input
              type="date"
              class="form-control"
              placeholder="dd-mm-yyyy"
              name="oldDob"
              v-model="formData.old_dob"
            />
          </td>
          <td class="p-1">
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              class="form-control"
              name="newDob"
              v-model="formData.new_dob"
            />
          </td>
        </tr>
        <!-- ===================Place of Birth ============ -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="formData.is_pob"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span class=""> ទីកន្លែងកំណើត</span>
          </td>

          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="formData.old_pob"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="formData.new_pob"
            />
          </td>
        </tr>
        <!-- ======================end place of birth================== -->
        <!-- ============================Father name=================== -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="formData.is_father"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span class=""> ឈ្មោះឪពុក</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="formData.old_father"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="formData.new_father"
            />
          </td>
        </tr>
        <!-- ===================End Father ========================================= -->
        <!-- =====================Mother Name ==================== -->
        <tr>
          <td class="text-center">
            <input
              type="checkbox"
              class="form-check-input"
              name="agree"
              id="agree"
              v-model="formData.is_mother"
            />
          </td>
          <td class="p-1" style="white-space: nowrap">
            <span class=""> ឈ្មោះម្ដាយ</span>
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="oldDob"
              v-model="formData.old_mother"
            />
          </td>
          <td class="p-1">
            <input
              type="text"
              class="form-control"
              name="newDob"
              v-model="formData.new_mother"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <!-- </div> -->
  </div>
  <!-- </form> -->
</template>

<script>
import { useApplicant } from "@/store/applicant";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      formData: {
        is_name: "",
        old_name: "",
        new_name: "",
        is_gender: "",
        old_gender: "",
        new_gender: "",
        is_dob: "",
        old_dob: "",
        new_dob: "",
        is_pob: "",
        old_pob: "",
        new_pob: "",
        is_father: "",
        old_father: "",
        new_father: "",
        is_mother: "",
        old_mother: "",
        new_mother: "",
      },
    };
  },
  mounted() {
    this.formData = this.editData;
    //console.log(this.formData);
  },
  unmounted() {
    this.setEdit(this.formData);
    //console.log(this.editData);
  },
  computed: {
    ...mapState(useApplicant, ["editData"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setEdit"]),
  },
};
</script>


<style scoped>
table,
tr,
td,
th,
input,
select {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>