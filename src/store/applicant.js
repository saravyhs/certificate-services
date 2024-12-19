import { defineStore } from "pinia";

export const useApplicant = defineStore("applicant", {
  state: () => ({
    appData: {      
      examDate: "",
      examCenter: "",
      room: "",
      seat: "",
      grade: "",
      percentile: "",
      service: "",
    },
    verifyData: {
      verifyByCertType: "diploma",
    },
    editData: {
      is_name: null,
      old_name: "",
      new_name: "",
      is_gender: null,
      old_gender: "",
      new_gender: "",
      is_dob: null,
      old_dob: "",
      new_dob: "",
      is_pob: null,
      old_pob: "",
      new_pob: "",
      is_father: null,
      old_father: "",
      new_father: "",
      is_mother: null,
      old_mother: "",
      new_mother: "",
    },
    filesAttach: [],  
    //variable for handle form validation
    errors: {
      examDate: null,
      examCenter: null,
      room: null,
      seat: null,
    },
  }),
  actions: {
    setApplicant(appData) {
      this.appData = appData;
    },
    setService(service) {
      this.appData.service = service;
    },
    setVerify(formData) {
      this.verifyData = formData;
    },
    setEdit(formData) {
      this.editData = formData;
    },
    setFilesAttach(files){
      this.filesAttach = files;
    },
  },
});
