<template>
  <div class="wrapper">
    <!-- Sidebar -->
    <side-bar />
    <!-- End Sidebar -->
    <div class="main-panel">
      <!-- Header Dashboard-->
      <nav-header />
      <!-- End Header Dashboard-->
      <!-- Contain in Dashboard -->
      <!-- <contain-dash /> -->
      <router-view />
      <!-- End Contain in Dashboard -->
      <!-- Footer -->
      <foot-dash />
      <!-- End Footer -->
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/user-dashboard/SideBar.vue";
//import ContainDash from "@/components/user-dashboard/ContainDash.vue";
import FootDash from "@/components/user-dashboard/FootDash.vue";
import NavHeader from "@/components/user-dashboard/NavHeader.vue";

export default {
  components: {
    SideBar,
    //ContainDash,
    FootDash,
    NavHeader,
  },
  mounted() {
    // Create script element for kaiadmin.min.js
    const script = document.createElement("script");
    script.src = "../src/assets/js/kaiadmin.min.js"; // Adjust path if necessary
    document.body.appendChild(script);
  },
};
</script>