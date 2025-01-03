import { createRouter, createWebHistory } from "vue-router";

//import your components
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import ContainDash from "@/components/user-dashboard/ContainDash.vue";
import ListServices from "@/components/user-dashboard/list-services/ListServices.vue";
import Profile from "@/components/user-dashboard/profile/Profile.vue";
import ProfileSetting from "@/components/user-dashboard/profile/ProfileSetting.vue";
import FormView from "@/components/user-dashboard/form-view/FormView.vue";
//------------------report------------------------------
import reissueReport from "@/components/user-dashboard/reports/reissueReport.vue";
import verifyReport from "@/components/user-dashboard/reports/verifyReport.vue";
import editReport from "@/components/user-dashboard/reports/editReport.vue";
import FormEditContain from "@/components/user-dashboard/form-edit/FormEditContain.vue";
import ReceiptStatus from "@/components/user-dashboard/reports/ReceiptStatus.vue";
//--------------------------------------------------------

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  {
    path: "/qr-code/:id",
    component: ReceiptStatus,
    props: true,
  },
  {
    path: "/user-dashboard",
    component: UserDashboard,
    children: [
      {
        path: "/user-dashboard",
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
        component: FormView,
      },
      {
        path: "/user-dashboard/edit-service",
        name: "កែប្រែព័ត៌មានសេវា",
        component: FormEditContain,
      },
      {
        path: "/user-dashboard/print-verify",
        name: "បង្កាន់ដៃបញ្ជាក់ភាពត្រឹមត្រូវ",
        component: verifyReport,
      },
      {
        path: "/user-dashboard/print-edit",
        name: "បង្កាន់ដៃកែតម្រូវ",
        component: editReport,
      },
      {
        path: "/user-dashboard/print-reissue",
        name: "បង្កាន់ដៃទុតិយតា",
        component: reissueReport,
      },
      {
        path: "/user-dashboard/profile",
        name: "គណនី",
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
