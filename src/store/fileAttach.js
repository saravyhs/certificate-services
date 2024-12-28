// src/store/useapplicantList.js
import { defineStore } from "pinia";
import { useUsersStore } from "@/store/user";
import axios from "axios";
//const apiBaseUrl = import.meta.env.VITE_API_URL;

export const usefileAttach = defineStore("fileAttach", {
  state: () => ({
    files: [],
    files_delete: [],
    files_upload: [],
  }),
  actions: {
    setFileDelete(id) {
      this.files_delete.push(id);
    },
    removeAllFileDelete() {
      this.files_delete = [];
    },
    setFileUpload(files) {
      this.files_upload = files;
    },
    removeAllFileUpload() {
      this.files_upload = [];
    },
    async getFiles(formId) {
      try {
        const userStore = useUsersStore();
        //get files information from database
        const { data } = await axios.get(
          `/file-attach/files/${userStore.user._id}/${formId}`,
          {
            headers: {
              Authorization: `Bearer ${userStore.user.token}`,
            },
          }
        );
        this.files = data;

        //get file image from directory in server
        if (this.files.length > 0) {
          for (let index = 0; index < this.files.length; index++) {
            const response = await axios.get(
              `/file-attach/${userStore.user._id}/${this.files[index]._id}`,
              {
                responseType: "blob",
                headers: {
                  Authorization: `Bearer ${userStore.user.token}`,
                },
              }
            );
            //add new attachs field to files object
            if (response.data) {
              this.files[index].attachs = URL.createObjectURL(response.data);
            }
          }
        }
        //console.log(this.files);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
});
