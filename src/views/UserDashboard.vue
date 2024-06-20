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
      <contain-dash />
      <!-- End Contain in Dashboard -->
      <!-- Footer -->
      <foot-dash />
      <!-- End Footer -->
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/user-dashboard/SideBar.vue";
import ContainDash from "@/components/user-dashboard/ContainDash.vue";
import FootDash from "@/components/user-dashboard/FootDash.vue";
import NavHeader from "@/components/user-dashboard/NavHeader.vue";

export default {
  components: {
    SideBar,
    ContainDash,
    FootDash,
    NavHeader,
  },
  //note
};
</script>