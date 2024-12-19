<template>
    <div class="p-2">
      <div class="row">
        <div class="col-sm-2">

        </div>
        <div class="col-sm-10 px-2">
          <div class="row table-responsive m-0">
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
                      v-model="this.applicantOne.edit.is_name"
                      name="agree"
                      id="chkName"
                      @click="checkName"
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
                      v-model="this.applicantOne.edit.old_name"
                      :readonly="!this.applicantOne.edit.is_name"
                    />
                  </td>
                  <td class="p-1">
                    <input
                      type="text"
                      class="form-control"
                      name="newName"
                      v-model="this.applicantOne.edit.new_name"
                      :readonly="!this.applicantOne.edit.is_name"
                    />
                  </td>
                </tr>
                <!--========================== Gender ============ -->
                <tr>
                  <td class="text-center">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="this.applicantOne.edit.is_gender"
                      name="agree"
                      id="agree"
                      @click="checkGender"
                    />
                  </td>
                  <td class="p-1" style="white-space: nowrap">
                    <span class=""> ភេទ</span>
                  </td>
                  <td class="p-1">
                    <select
                      class="form-select form-select-lg"
                      id="inputGroupSelect01"
                      v-model="this.applicantOne.edit.old_gender"
                      :disabled="!this.applicantOne.edit.is_gender"
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
                      v-model="this.applicantOne.edit.new_gender"
                      :disabled="!this.applicantOne.edit.is_gender"
                    >
                      <option selected disabled value="">ជ្រើសរើសភេទ</option>
                      <option value="male">ប្រុស</option>
                      <option value="female">ស្រី</option>
                    </select>
                  </td>
                </tr>
                <!--========================== Date Of Birth ============ -->
                <tr>
                  <td class="text-center">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="this.applicantOne.edit.is_dob"
                      @click="checkDob"
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
                      v-model="this.applicantOne.edit.old_dob"
                      :readonly="!this.applicantOne.edit.is_dob"
                    />
                  </td>
                  <td class="p-1">
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      class="form-control"
                      name="newDob"
                      v-model="this.applicantOne.edit.new_dob"
                      :readonly="!this.applicantOne.edit.is_dob"
                    />
                  </td>
                </tr>
                <!-- ===================Place of Birth ============ -->
                <tr>
                  <td class="text-center">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="this.applicantOne.edit.is_pob"
                      @click="checkPob"
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
                      v-model="this.applicantOne.edit.old_pob"
                      :readonly="!this.applicantOne.edit.is_pob"
                    />
                  </td>
                  <td class="p-1">
                    <input
                      type="text"
                      class="form-control"
                      name="newDob"
                      v-model="this.applicantOne.edit.new_pob"
                      :readonly="!this.applicantOne.edit.is_pob"
                    />
                  </td>
                </tr>
                <!-- ============================Father name=================== -->
                <tr>
                  <td class="text-center">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="this.applicantOne.edit.is_father"
                      @click="checkFather"
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
                      v-model="this.applicantOne.edit.old_father"
                      :readonly="!this.applicantOne.edit.is_father"
                    />
                  </td>
                  <td class="p-1">
                    <input
                      type="text"
                      class="form-control"
                      name="newDob"
                      v-model="this.applicantOne.edit.new_father"
                      :readonly="!this.applicantOne.edit.is_father"
                    />
                  </td>
                </tr>
                <!-- =====================Mother Name ==================== -->
                <tr>
                  <td class="text-center">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="this.applicantOne.edit.is_mother"
                      @click="checkMother"
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
                      v-model="this.applicantOne.edit.old_mother"
                      :readonly="!this.applicantOne.edit.is_mother"
                    />
                  </td>
                  <td class="p-1">
                    <input
                      type="text"
                      class="form-control"
                      name="newDob"
                      v-model="this.applicantOne.edit.new_mother"
                      :readonly="!this.applicantOne.edit.is_mother"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>          

        </div>
      </div>
    </div>  
</template>

<script>
import { useapplicantList } from "@/store/applicantList";
import { mapState } from "pinia";

export default {
  data() {
    return {
      
    };
  },  
  computed: {
    ...mapState(useapplicantList, ["applicantOne"]),
  },  
  methods: {
    checkName(){
      this.applicantOne.edit.old_name = "";
      this.applicantOne.edit.new_name = "";
    },
    checkGender(){
      this.applicantOne.edit.old_gender = "";
      this.applicantOne.edit.new_gender = "";
    },
    checkDob(){
      this.applicantOne.edit.old_dob = "";
      this.applicantOne.edit.new_dob = "";
    },
    checkPob(){
      this.applicantOne.edit.old_pob = "";
      this.applicantOne.edit.new_pob = "";
    },
    checkFather(){
      this.applicantOne.edit.old_father = "";
      this.applicantOne.edit.new_father = "";
    },
    checkMother(){
      this.applicantOne.edit.old_mother = "";
      this.applicantOne.edit.new_mother = "";
    }
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