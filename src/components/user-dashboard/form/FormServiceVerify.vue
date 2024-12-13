<template>
  <div class="row">
    <div class="col-sm-6 text-sm-end">
      <div class="form-check">
        <span class="form-check-label">ប្រភេទសញ្ញាបត្រ</span>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="diploma"
          id="diploma"
          value="diploma"
          checked
          v-model="formData.verifyByCertType"
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
          v-model="formData.verifyByCertType"
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
          v-model="formData.verifyByCertType"
        />
        <span class="form-check-label" for="flexRadioDefault2">
          វិញ្ញាបនបត្របញ្ចប់ការសិក្សាថ្នាក់ទី១២
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useApplicant } from "@/store/applicant";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      formData: {
        verifyByCertType: "",
      },
    };
  },
  mounted() {
    this.formData = this.verifyData;
    //console.log(this.formData);
  },
  unmounted() {
    this.setVerify(this.formData);
    //console.log(this.formData);
  },
  computed: {
    ...mapState(useApplicant, ["verifyData"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setVerify"]),
  },
};
</script>