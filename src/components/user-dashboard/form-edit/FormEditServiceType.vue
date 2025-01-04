<template>
    <div class="p-2">
      <div class="row">
        <div class="col-sm-2 px-0">
          <div class="form-check">
            <span class="form-check-label" for="serviceType">ប្រភេទសេវា</span>
          </div>
        </div>

        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="serviceType" readonly>
        </div>
      </div>
    </div>
</template>

<script>
import { useapplicantList } from "@/store/applicantList";
import { mapState} from "pinia";

export default {
  data() {
    return {
      serviceType: "",
    };
  },
  mounted() {
    this.serviceType = (this.applicantOne.service === "verify") ? "បញ្ចាក់ភាពត្រឹមត្រូវ" : (this.applicantOne.service === "edit") ? "កែតម្រូវ" : "ទុតិយតា";
  },
  computed: {
    ...mapState(useapplicantList, ["applicantOne"]),
  },
  methods:{
    handleChangeService(){

    }
  }
};
</script>

<style scoped>
div,
input{
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>