import { createRouter, createWebHistory } from "vue-router";

//import your components
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import ContainDash from "@/components/user-dashboard/ContainDash.vue";
import ListServices from "@/components/user-dashboard/list-services/ListServices.vue";
import Profile from "@/components/user-dashboard/profile/Profile.vue";
import ProfileSetting from "@/components/user-dashboard/profile/ProfileSetting.vue";
import ServiceDetail from "@/components/user-dashboard/list-services/ServiceDetail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/user-dashboard",
    component: UserDashboard,
    children: [
      {
        path: "",
        name: "ដាក់ពាក្យស្នើសុំ",
        component: ContainDash,
      },
      {
        path: "/user-dashboard/list-services",
        name: "បញ្ជីសេវា",
        component: ListServices,
      },
      {
        path: "/user-dashboard/view-service",
        name: "ព័ត៌មានសេវាលម្អិត",
        component: ServiceDetail,
      },
      {
        path: "/user-dashboard/profile",
        name: "គណនេយ្យ",
        component: Profile,
      },
      {
        path: "/user-dashboard/profile-setting",
        name: "ការកំណត់",
        component: ProfileSetting,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
