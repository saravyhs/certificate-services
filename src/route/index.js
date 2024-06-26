import { createRouter, createWebHistory } from "vue-router";

//import your components
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import ContainDash from "@/components/user-dashboard/ContainDash.vue";
import ListServices from "@/components/user-dashboard/list-services/ListServices.vue";

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
        name: "ContainDash",
        component: ContainDash,
      },
      {
        path: "/user-dashboard/list-services",
        name: "ListServices",
        component: ListServices,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
