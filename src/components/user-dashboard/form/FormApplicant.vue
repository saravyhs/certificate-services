<template>
  <form>
    <h6 class="card-header fw-bold px-0">ព័ត៌មានផ្ទាល់ខ្លួន</h6>
    <div class="p-2">      
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">នាមត្រកូល</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="perData.firstName" readonly/>
        </div>

        <div class="col-sm-2 col-form-label px-2">នាមខ្លួន</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="perData.lastName" readonly/>
        </div>        
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">ភេទ</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="perData.gender" readonly/>
        </div>

        <div class="col-sm-2 col-form-label px-2">ថ្ងៃខែឆ្នាំកំណើត</div>
        <div class="col-sm-4 px-2">
          <input
            type="date"
            class="form-control"
            placeholder="dd-mm-yyyy"
            v-model="perData.dob"
            readonly
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">អាសយដ្ឋាន</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="perData.address" readonly/>
        </div>

        <div class="col-sm-2 col-form-label px-2">លេខទូរស័ព្ទ</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="perData.phone" readonly/>
        </div>
      </div>
    </div>
    <h6 class="card-header fw-bold px-0">ព័ត៌មានសញ្ញាបត្រ</h6>
    <div class="p-2">      
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">សម័យប្រឡង</div>
        <div class="col-sm-4 px-2">
          <input
            type="date"
            class="form-control"
            placeholder="dd-mm-yyyy"
            name="oldDob"
            v-model="certData.examDate"
          />
        </div>

        <div class="col-sm-2 col-form-label px-2">មណ្ឌលប្រឡង</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="certData.examCenter" />
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">លេខបន្ទប់</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="certData.room" />
        </div>

        <div class="col-sm-2 col-form-label px-2">លេខតុ</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="certData.seat" />
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">និន្ទេស</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="certData.grade" />
        </div>

        <div class="col-sm-2 col-form-label px-2">លំដាប់ពិន្ទុ</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="certData.percentile" />
        </div>
        
      </div>
    </div>
  </form>
</template>

<script>
import { useApplicant } from "@/store/applicant";
import { useUsersStore } from "@/store/user";
import { mapState, mapActions } from "pinia";
import dayjs from "dayjs";

export default {
  data() {
    return {
      perData: {
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        address: "",
        phone: "",
      },
      certData: {
        examDate: "",
        examCenter: "",
        room: "",
        seat: "",
        grade: "",
        percentile: "",        
      },
    };
  },
  mounted() {
    this.perData.firstName = this.user.firstName;
    this.perData.lastName = this.user.lastName;
    this.perData.gender = (this.user.gender == "male" ? "ប្រុស": "ស្រី");    
    this.perData.dob = this.formatDate(this.user.dob);
    this.perData.address = this.user.address;
    this.perData.phone = this.user.phone;

    this.certData = this.appData;
  },
  unmounted() {
    this.setApplicant(this.certData);
  },
  computed: {
    ...mapState(useApplicant, ["appData"]),
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setApplicant"]),
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },
  },
};
</script>

<style scoped>
div,
input,
select {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
</style>