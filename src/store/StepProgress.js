import { defineStore } from "pinia";
import { useApplicant } from "@/store/applicant";

export const useActiveStore = defineStore("StepProcess", {
  state: () => ({
    stepActive: 1,
  }),
  actions: {
    incrementStep() {
      if (this.stepActive == 3) {
        return;
      }
      //check validation for form 1
      if(this.stepActive == 1){
        const useApp = useApplicant();
        if(useApp.appData.examDate == "" ||
            useApp.appData.examCenter == "" ||
            useApp.appData.room == "" ||
            useApp.appData.seat == ""
        ){
          useApp.errors.examDate = useApp.appData.examDate == ""? "Date is required." : null;
          useApp.errors.examCenter = useApp.appData.examCenter == ""? "Exam center is required." : null;
          useApp.errors.room = useApp.appData.room == ""? "Room is required." : null;
          useApp.errors.seat = useApp.appData.seat == ""? "Seat is required." : null;
          return;
        }
        else{
          useApp.errors.examDate = null;
          useApp.errors.examCenter = null;
          useApp.errors.room = null;
          useApp.errors.seat = null;
        }
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
