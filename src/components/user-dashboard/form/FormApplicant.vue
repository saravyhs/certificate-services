<template>
  <form>
    <h6 class="fw-bold px-0">ព័ត៌មានផ្ទាល់ខ្លួន</h6>
    <hr class="hr mt-0" />
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
    <h6 class="fw-bold px-0">ព័ត៌មានសញ្ញាបត្រ</h6>
    <hr class="hr mt-0" />
    <div class="p-2">      
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">សម័យប្រឡង <span class="error">*</span></div>        
        <div class="col-sm-4 px-2">
          <input
            type="date"
            class="form-control"
            placeholder="dd-mm-yyyy"
            v-model="certData.examDate"
            @blur="dateValidate"
          />
          <span v-if="this.errors.examDate" class="error">{{ this.errors.examDate }}</span>
        </div>

        <div class="col-sm-2 col-form-label px-2">មណ្ឌលប្រឡង  <span class="error">*</span></div>
        <div class="col-sm-4 px-2">
          <input
            type="text" 
            class="form-control" 
            v-model="certData.examCenter" 
            @blur="centerValidate"/>
          <span v-if="this.errors.examCenter" class="error">{{ this.errors.examCenter }}</span>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">លេខបន្ទប់  <span class="error">*</span></div>
        <div class="col-sm-4 px-2">
          <input 
            type="text" 
            class="form-control" 
            v-model="certData.room" 
            @blur="roomValidate"/>
          <span v-if="this.errors.room" class="error">{{ this.errors.room }}</span>
        </div>

        <div class="col-sm-2 col-form-label px-2">លេខតុ  <span class="error">*</span></div>
        <div class="col-sm-4 px-2">
          <input 
            type="text" 
            class="form-control" 
            v-model="certData.seat" 
            @blur="seatValidate"/>
          <span v-if="this.errors.seat" class="error">{{ this.errors.seat }}</span>
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
    ...mapState(useApplicant, ["appData","errors"]),
    ...mapState(useUsersStore, ["user"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setApplicant"]),
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },
    dateValidate() {
      if (!this.appData.examDate) {
        this.errors.examDate = "Exam date is required.";
      } else {
        this.errors.examDate = null;
      }
    },
    centerValidate() {
      if (!this.appData.examCenter) {
        this.errors.examCenter = "Exam center is required.";
      } else {
        this.errors.examCenter = null;
      }
    },
    roomValidate() {
      if (!this.appData.room) {
        this.errors.room = "Room is required.";
      } else {
        this.errors.room = null;
      }
    },
    seatValidate() {
      if (!this.appData.seat) {
        this.errors.seat = "Seat is required.";
      } else {
        this.errors.seat = null;
      }
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
.error {
  color: red;
  font-size: 0.9em;
}
</style>