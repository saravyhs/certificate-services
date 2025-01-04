<template>
    <div class="p-2">
      <div class="row">
        <div class="col-sm-2 px-0">

        </div>
        <div class="col-sm-auto px-0">
          <div class="form-check">
            <span class="form-check-label">ប្រភេទសញ្ញាបត្រ</span>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="diploma"
              id="diploma"
              value="diploma"
              v-model="this.applicantOne.verify.verifyByCertType"
            />
            <span class="form-check-label" for="flexRadioDefault2">
              សញ្ញាបត្រទុតិយភូមិ
            </span>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="temp_cert"
              id="temp_cert"
              value="temp_cert"
              v-model="this.applicantOne.verify.verifyByCertType"
            />
            <span class="form-check-label" for="flexRadioDefault2">
              វិញ្ញាបនបត្របណ្ដោះអាសន្ន
            </span>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="graduate_cert"
              id="graduate_cert"
              value="graduate_cert"
              v-model="this.applicantOne.verify.verifyByCertType"
            />
            <span class="form-check-label" for="flexRadioDefault2">
              វិញ្ញាបនបត្របញ្ចប់ការសិក្សាថ្នាក់ទី១២
            </span>
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
};
</script>