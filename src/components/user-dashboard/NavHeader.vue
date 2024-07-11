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

          <!-- aria-label="breadcrumb"
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol> -->
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
                  src="@/assets/img/profile.jpg"
                  alt="..."
                  class="avatar-img rounded-circle"
                />
              </div>
              <span class="profile-username">
                <span class="fw-bold">មាស សារ៉ាវី</span>
              </span>
            </a>
            <ul class="dropdown-menu dropdown-user animated fadeIn">
              <div class="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div class="user-box">
                    <div class="avatar-lg">
                      <img
                        src="@/assets/img/profile.jpg"
                        alt="image profile"
                        class="avatar-img rounded"
                      />
                    </div>
                    <div class="u-text">
                      <div>មាស សារ៉ាវី</div>
                      <p class="text-muted">saravy@example.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="dropdown-divider"></div>
                  <router-link
                    to="/user-dashboard/profile"
                    class="dropdown-item list-one-line"
                  >
                    <i class="fas fa-user"></i>
                    <span class="m-1"></span>
                    <div>គណនេយ្យ</div>
                  </router-link>
                  <router-link
                    to="/user-dashboard/profile-setting"
                    class="dropdown-item list-one-line"
                  >
                    <i class="fas fa-cog"></i>
                    <span class="m-1"></span>
                    <div>ការកំណត់</div>
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <router-link to="/" class="dropdown-item list-one-line">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="m-1"></span>
                    <div>ចាកចេញ</div>
                  </router-link>
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
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
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