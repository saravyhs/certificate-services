<template>
  <div class="container">
    <div class="page-inner">
      <div
        class="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4"
      >
        <step-bar />
      </div>
      <div class="card card-round">
        <div class="card-body p-5 ms-5 me-5">
          <form-applicant v-if="stepActive == 1" />
          <form-service v-if="stepActive == 2" />
          <form-doc v-if="stepActive == 3" />
          <div class="row">
            <div class="col-md-12">
              <div class="float-end">
                <button class="btn btn-primary" @click="decrementStep">
                  previous-step
                </button>
                <button class="btn btn-primary" @click="incrementStep">
                  next-step
                </button>
              </div>
            </div>
          </div>
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
import { mapActions, mapState } from "pinia";

export default {
  components: {
    StepBar,
    FormApplicant,
    FormService,
    FormDoc,
  },
  computed: {
    ...mapState(useActiveStore, ["stepActive"]),
  },
  methods: {
    ...mapActions(useActiveStore, ["incrementStep", "decrementStep"]),
  },
};
</script>

<style scoped>
</style>