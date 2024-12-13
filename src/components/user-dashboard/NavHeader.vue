<template>
  <div class="main-header header-shadow">
    <div class="main-header-logo">
      <!-- Logo Header -->
      <div class="logo-header" data-background-color="blue">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/kaiadmin/logo_light.svg"
            alt="navbar brand"
            class="navbar-brand"
            height="20"
          />
        </a>
        <div class="nav-toggle">
          <button class="btn btn-toggle toggle-sidebar">
            <i class="gg-menu-right"></i>
          </button>
          <button class="btn btn-toggle sidenav-toggler">
            <i class="gg-menu-left"></i>
          </button>
        </div>
        <button class="topbar-toggler more">
          <i class="gg-more-vertical-alt"></i>
        </button>
      </div>
      <!-- End Logo Header -->
    </div>
    <!-- Navbar Header -->
    <nav
      class="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom"
    >
      <div class="container-fluid">
        <nav
          class="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex"
        >
          <div class="text-part">{{ currentRoute }}</div>
        </nav>

        <ul class="navbar-nav topbar-nav ms-md-auto align-items-center">
          <li class="nav-item topbar-user dropdown hidden-caret">
            <a
              class="dropdown-toggle profile-pic"
              data-bs-toggle="dropdown"
              href="#"
              aria-expanded="false"
            >
              <div class="avatar-sm">
                <img
                  :src="profileImage"
                  alt="..."
                  class="avatar-img rounded-circle"
                />
              </div>
              <span class="profile-username">
                <span class="fw-bold">{{ username }}</span>
              </span>
            </a>
            <ul class="dropdown-menu dropdown-user animated fadeIn">
              <div class="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div class="user-box">
                    <div class="avatar-lg">
                      <img
                        :src="profileImage"
                        alt="..."
                        class="avatar-img rounded"
                      />
                    </div>
                    <div class="u-text">
                      <div>
                        {{ username }}
                      </div>
                      <p class="text-muted">
                        {{ email }}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown-divider"></div>
                  <router-link
                    to="/user-dashboard/profile"
                    class="dropdown-item list-one-line"
                  >
                    <!-- <i class="fas fa-user"></i> -->
                    <font-awesome-icon icon="fas fa-user"/>
                    <span class="m-1"></span>
                    <div>គណនី</div>
                  </router-link>
                  <router-link
                    to="/user-dashboard/profile-setting"
                    class="dropdown-item list-one-line"
                  >
                    <!-- <i class="fas fa-cog"></i> -->
                    <font-awesome-icon icon="fas fa-cog"/>
                    <span class="m-1"></span>
                    <div>ការកំណត់</div>
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <button @click="logout()" class="dropdown-item list-one-line">
                    <!-- <i class="fas fa-sign-out-alt"></i> -->
                    <font-awesome-icon icon="fas fa-sign-out-alt"/>
                    <span class="m-1"></span>
                    <div>ចាកចេញ</div>
                  </button>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>

<script>
import { useUsersStore } from "@/store/user";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      username: "",
      email: "",
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    ...mapState(useUsersStore, ["user", "profileImage"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["logout"]),
  },
  mounted() {
    this.username = this.user.username;
    this.email = this.user.email;
  },
};
</script>

<style scoped>
div,
span,
p {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #3074fd;
}
.header-shadow {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
}
.list-one-line * {
  display: inline-block;
}
</style>