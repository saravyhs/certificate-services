import { defineStore } from "pinia";
export const useServiceStore = defineStore({
  id: "service",
  state: () => ({
    selectedServiceType: "1", // Initial value
  }),
  actions: {
    setSelectedServiceType(type) {
      this.selectedServiceType = type;
    },
  },
});

// store/serviceStore.js
// import { defineStore } from 'pinia'

// export const useServiceStore = defineStore('service', {
//   state: () => ({
//     selectedServiceType: null
//   }),
//   actions: {
//     setSelectedServiceType(type) {
//       this.selectedServiceType = type
//     },
//     async fetchSelectedServiceType() {
//       try {
//         // Replace this with your actual API call
//         const response = await fetch('/api/getServiceType');
//         const data = await response.json();
//         this.selectedServiceType = data.serviceType;
//       } catch (error) {
//         console.error('Error fetching service type:', error);
//         // Handle error appropriately
//       }
//     }
//   }
// })
