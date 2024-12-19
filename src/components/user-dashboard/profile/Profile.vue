<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-sm-5 my-sm-5">
          <div class="d-sm-flex flex-sm-row justify-content-center text-center">
            <div class="py-sm-4">
              <div class="avatar avatar-xxl">
                <img
                  :src="profileImage"
                  alt="..."
                  class="avatar-img rounded-circle"
                />
              </div>
            </div>
            <div class="p-sm-4">
              <div>{{ username }}</div>
              <div>{{ email }}</div>
              <div class="p-2">
                <router-link
                  to="/user-dashboard/profile-setting"
                  class="btn btn-primary rounded-pill"
                  >ការកំណត់</router-link
                >
              </div>
            </div>
            <div class="vr d-none d-md-block"></div>
            <div class="text-start p-sm-4">
              <div class="fw-bold">
                សមាជិកភាពៈ ចូលរួមតាំងពី {{ formatDate(user.createdDate) }}
              </div>
              <div>បានស្នើសុំសេវាចំនួន {{ total }} ដង</div>
              <div class="ps-3">-បញ្ជាក់ភាពត្រឹមត្រូវចំនួន {{ verify }} ដង</div>
              <div class="ps-3">-កែតម្រូវចំនួន {{ edit }} ដង</div>
              <div class="ps-3">-ទុតិយតាចំនួន {{ reissue }} ដង</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsersStore } from "@/store/user";
import { mapState } from "pinia";
import dayjs from "dayjs";
import axios from "axios";

export default {
  data() {
    return {
      total: "",
      verify: "",
      edit: "",
      reissue: "",
      username: "",
      email: "",
    };
  },
  computed: {
    ...mapState(useUsersStore, ["user", "profileImage"]),
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("DD-MMMM-YYYY");
    },
  },
  async mounted() {
    //===================loading username and email========
    this.username = this.user.username;
    this.email = this.user.email;
    //=====================loading count ==================
    const { data } = await axios.get(`/api/form/count/${this.user._id}`, {
      headers: {
        Authorization: `Bearer ${this.user.token}`,
      },
    });
    if (data) {
      const countVerify = data.countByCat.find(
        (element) => element._id == "verify"
      );
      const countEdit = data.countByCat.find(
        (element) => element._id == "edit"
      );
      const countReissue = data.countByCat.find(
        (element) => element._id == "reissue"
      );

      this.total = data.countApp;
      this.verify = countVerify != null ? countVerify.count : "0";
      this.edit = countEdit != null ? countEdit.count : "0";
      this.reissue = countReissue != null ? countReissue.count : "0";
    }
  },
};
</script>
