<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <!-- Logo Header -->
      <div class="logo-header" data-background-color="blue">
        <router-link to="/" class="logo logo-text">
          <img
            src="@/assets/img/bootstrap-logo@3x.png"
            alt="navbar brand"
            class="navbar-brand"
            height="40"
          />
          <!-- <p>នាយកដ្ឋានកិច្ចការប្រឡង</p> -->
        </router-link>
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

    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <li class="nav-item">
            <router-link to="/user-dashboard" class="nav-link">
              <i class="fas fa-file-word"></i>
              <p>ដាក់ពាក្យស្នើសុំ</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user-dashboard/list-services" class="nav-link">
              <i class="fas fa-list"></i>
              <p>បញ្ជីសេវា</p>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="fas fa-print"></i>
              <p>បោះពុម្ពបង្កាន់ដៃ</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              <i class="fas fa-user"></i>
              <p>គណនេយ្យ</p>
            </a>
          </li>
        </ul>
        <!-- <ul class="nav nav-secondary">
          <li class="nav-item">
            <a
              data-bs-toggle="collapse"
              href="#dashboard"
              class="collapsed"
              aria-expanded="false"
            >
              <i class="fas fa-file-word"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#base">
              <i class="fas fa-list"></i>
              <p>Base</p>
            </a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#sidebarLayouts">
              <i class="fas fa-print"></i>
              <p>Sidebar Layouts</p>
            </a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#forms">
              <i class="fas fa-user"></i>
              <p>Forms</p>
            </a>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>
<style>
.sidebar {
  background-color: #3074fd;
  color: #ffffff !important;
}

.nav-link p {
  color: white;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: 400 !important;
  font-size: 16px !important;
  text-decoration: none;
}

.nav-link {
  display: flex;
  align-items: center;
  color: white !important;
  /* Ensure white color for the entire link */
  text-decoration: none;
  /* Remove underline from links */
}

.nav-link i {
  color: #fff !important;
}

.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.logo-text {
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Kantumruy Pro", sans-serif;
  font-weight: 500 !important;
  font-size: 16px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
  /* Add transition for smoother hover effect */
}

.logo-text p {
  margin: 0;
  font-family: "Koulen", sans-serif;
  font-weight: 500 !important;
  font-size: 16px !important;
  color: #fff;
  transition: color 0.3s ease;
  /*
    /* Ensure no default margin on p */
}

.gg-menu {
  color: #ffffff;
}

.logo:hover {
  background-color: #fff;
  color: #3074fd;
}

.logo-text:hover p {
  color: #3074fd;
}

.nav-link:hover {
  /* Change text color on hover */
  background-color: #fff;

  /* Change background color on hover */
  cursor: pointer;
}
</style>