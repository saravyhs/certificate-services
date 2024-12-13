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
