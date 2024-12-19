<template>
  <!-- <Form ref="childForm"> -->
    <div class="p-2">      
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">សម័យប្រឡង</div>
        <div class="col-sm-4 px-2">
          <input
            type="date"
            class="form-control"
            placeholder="dd-mm-yyyy"
            v-model="examDate"
            @blur="dateValidate"
          />
          <span v-if="this.errors.examDate" class="error">{{ this.errors.examDate }}</span>
        </div>

        <div class="col-sm-2 col-form-label px-2">មណ្ឌលប្រឡង</div>
        <div class="col-sm-4 px-2">
          <input @blur="centerValidate" type="text" class="form-control" v-model="this.applicantOne.examCenter" />
          <span v-if="this.errors.examCenter" class="error">{{ this.errors.examCenter }}</span>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">លេខបន្ទប់</div>
        <div class="col-sm-4 px-2">
          <input @blur="roomValidate" type="text" class="form-control" v-model="this.applicantOne.room" />
          <span v-if="this.errors.room" class="error">{{ this.errors.room }}</span>
        </div>

        <div class="col-sm-2 col-form-label px-2">លេខតុ</div>
        <div class="col-sm-4 px-2">
          <input @blur="seatValidate" type="text" class="form-control" v-model="this.applicantOne.seat" />
          <span v-if="this.errors.seat" class="error">{{ this.errors.seat }}</span>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-sm-2 col-form-label px-2">និន្ទេស</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="this.applicantOne.grade" />
        </div>

        <div class="col-sm-2 col-form-label px-2">លំដាប់ពិន្ទុ</div>
        <div class="col-sm-4 px-2">
          <input type="text" class="form-control" v-model="this.applicantOne.percentile" />
        </div>
        
      </div>
    </div>
  <!-- </Form> -->
</template>

<script>
import { useapplicantList } from "@/store/applicantList";
import { mapState} from "pinia";
import dayjs from "dayjs";

export default {
  data() {
    return {
      examDate: "",
    };
  },
  mounted() {
    this.examDate = this.formatDate(this.applicantOne.examDate);

    this.errors.examDate = null;
    this.errors.examCenter = null;
    this.errors.room = null;
    this.errors.seat = null;
  },
  computed: {
    ...mapState(useapplicantList, ["applicantOne","errors"]),
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },
    dateValidate() {
      if (!this.applicantOne.examDate) {
        this.errors.examDate = "Exam date is required.";
      } else {
        this.errors.examDate = null;
      }
    },
    centerValidate() {
      if (!this.applicantOne.examCenter) {
        this.errors.examCenter = "Exam center is required.";
      } else {
        this.errors.examCenter = null;
      }
    },
    roomValidate() {
      if (!this.applicantOne.room) {
        this.errors.room = "Room is required.";
      } else {
        this.errors.room = null;
      }
    },
    seatValidate() {
      if (!this.applicantOne.seat) {
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