// src/store/useApplicantStore.js
import { defineStore } from "pinia";
import { useUsersStore } from "@/store/user";
import axios from "axios";

export const useApplicantStore = defineStore("applicantStore", {
  state: () => ({
    applicants: [],
  }),
  actions: {
    async getApplicant() {
      try {
        const userStore = useUsersStore();
        const { data } = await axios.get(
          `/api/form/by-user/${
            userStore.user._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${
                userStore.user.token
              }`,
            },
          }
        );
        this.applicants = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
