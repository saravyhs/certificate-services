// src/store/useapplicantList.js
import { defineStore } from "pinia";
import { useUsersStore } from "@/store/user";
import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_URL;

export const useapplicantList = defineStore("applicantList", {
  state: () => ({
    applicants: [],
    applicantOne: "",
    //variable for handle form validation
    errors: {
      examDate: null,
      examCenter: null,
      room: null,
      seat: null,
    },
  }),
  actions: {
    async getApplicant() {
      try {
        const userStore = useUsersStore();
        const { data } = await axios.get(
          `${apiBaseUrl}/form/by-user/${userStore.user._id}`,
          {
            headers: {
              Authorization: `Bearer ${userStore.user.token}`,
            },
          }
        );
        this.applicants = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async getApplicantOne(formId) {
      try {
        const userStore = useUsersStore();
        const { data } = await axios.get(`${apiBaseUrl}/form/${formId}`, {
          headers: {
            Authorization: `Bearer ${userStore.user.token}`,
          },
        });
        this.applicantOne = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
