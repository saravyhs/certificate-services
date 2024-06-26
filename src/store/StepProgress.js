import { defineStore } from "pinia";

export const useActiveStore = defineStore("StepProcess", {
  state: () => ({
    stepActive: 1,
  }),
  actions: {
    incrementStep() {
      if (this.stepActive == 3) {
        return;
      }
      this.stepActive++;
    },
    decrementStep() {
      if (this.stepActive == 1) {
        return;
      }
      this.stepActive--;
    },
  },
});
