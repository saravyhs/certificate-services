import { defineStore } from "pinia";
import axios from "axios";
import router from "@/route";
import swal from "sweetalert2";

export const useUsersStore = defineStore("user", {
  state: () => ({
    user: "",
    profileImage: "https://avatar.iran.liara.run/public/boy?username=Ash", // Default image
  }),
  actions: {
    setUser(data) {
      this.user = data;
    },
    async updateProfileImage(userId, token) {
      try {
        const response = await axios.get(
          `/api/user-profile/${userId}`,
          {
            responseType: "blob",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.profileImage = URL.createObjectURL(response.data);
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", error.response);
          this.errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
          // Request was made but no response received
          console.error("Error request:", error.request);
          this.errorMessage = "No response from server.";
        } else {
          // Something else caused an error
          console.error("Error message:", error.message);
          this.errorMessage = "An unexpected error occurred.";
        }
      }
      
    },
    async login(userEmail, userPassword) {
      try {
        const { data } = await axios.post("/api/auth/login", {
          email: userEmail,
          password: userPassword,
        });

        if (data.email) {
          this.setUser(data);
          await this.updateProfileImage(data._id, data.token);
          router.push("/user-dashboard");
        }
      } catch (error) {
        if (error.response.status == 401) {
          // Handle Unauthorized error
          swal.fire({
            icon: "error",
            title: "Unauthorized",
            text: "អាស័យដ្ឋានអ៊ីម៉ែល ឬពាក្យសម្ងាត់ដែលលោកអ្នកបានបញ្ចូលមិនត្រឹមត្រូវទេ!",
          });
        } else {
          // Handle other errors
          swal.fire({
            icon: "error",
            title: "Unauthorized",
            text: "Something went wrong. Please try again later.",
          });
        }
        return;
      }
    },
    async register(firstName, lastName, gender, dob, address, phone, username, email, password, confirmPassword) {
      try {
        const { data } = await axios.post("/api/auth/signup", {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          dob: dob,
          address: address,
          phone: phone,
          username: username,          
          email: email,
          password: password,
          confirmedPassword: confirmPassword,
        });

        if (data.email) {
          swal
            .fire({
              icon: "success",
              title: "ចុះឈ្មោះអ្នកប្រើប្រាស់",
              text: "ព័ត៌មានរបស់អ្នក ត្រូវបានចុះឈ្មោះដោយជោគជ័យ",
            })
            .then(() => {
              this.setUser(data);
              router.push("/user-dashboard");
            });
        }
      } catch (error) {
        swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Something went wrong. Please try again later.",
        });
        return;
      }
    },

    logout() {
      this.user = null;
      this.profileImage= "https://avatar.iran.liara.run/public/boy?username=Ash", // Default image
      router.push("/");
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user", // Key in localStorage
        storage: localStorage, // Or sessionStorage
      },
    ],
  },
});
