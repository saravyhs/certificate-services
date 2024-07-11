// src/store/useApplicantStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useApplicantStore = defineStore({
  id: "applicantStore",
  state: () => ({
    applicants: [],
    serviceTake: [],
    services: [],
    joinedData: [],
    error: null,
  }),
  actions: {
    async fetchApplicant() {
      try {
        const applicantsResponse = await axios.get(
          "/src/assets/database/applicant.json"
        );
        const serviceTakeResponse = await axios.get(
          "/src/assets/database/service_take.json"
        );
        const servicesResponse = await axios.get(
          "/src/assets/database/services.json"
        );

        this.applicants = applicantsResponse.data;
        this.serviceTake = serviceTakeResponse.data;
        this.services = servicesResponse.data;
        console.log(this.services);

        this.joinData(); // Call join operation after data fetch

        console.log("Joined data:", this.joinedData);
      } catch (error) {
        this.error = error.message;
        console.error("Error fetching data:", error);
      }
    },
    joinData() {
      this.joinedData = this.serviceTake.map((service) => {
        const applicant = this.applicants.find(
          (app) => app.id === service.app_id
        );
        const serviceInfo = this.services.find((s) => s.id === service.serv_id);
        return {
          ...applicant,
          ...service,
          ...serviceInfo,
        };
      });
    },
  },
});
