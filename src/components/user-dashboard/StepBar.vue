<template>
  <div class="container m-0">
    <div class="row">
      <div class="col-12 p-0 mt-1 mb-2">
        <ul class="progressbar">
          <li
            id="step1"
            :class="
              stepActive == 1 || stepActive == 2 || stepActive == 3
                ? 'active'
                : ''
            "
          >
            ព័ត៌មានអ្នកស្នើសុំ
          </li>
          <li
            id="step2"
            :class="stepActive == 2 || stepActive == 3 ? 'active' : ''"
          >
            ព័ត៌មានសេវា
          </li>
          <li id="step3" :class="stepActive == 3 ? 'active' : ''">
            ឯកសារភ្ជាប់
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useActiveStore } from "@/store/StepProgress";
import { mapState } from "pinia";
export default {
  computed: {
    ...mapState(useActiveStore, ["stepActive"]),
  },
};
</script>

<style scoped>
.progressbar li {
  list-style-type: none;
  float: left;
  width: 25%;
  position: relative;
  text-align: center;
}
/* .progressbar {
  counter-reset: step;
} */
#step1::before {
  content: "១";
}
#step2::before {
  content: "២";
}
#step3::before {
  content: "៣";
}
.progressbar li:before {
  /* content: counter(step); */
  /* counter-increment: step; */
  width: 40px;
  height: 40px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 35px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #979797;
  top: 20px;
  left: -50%;
  z-index: -1;
}
/* .progressbar li:first-child:after {
  content: none;
} */
.progressbar li.active {
  color: #3074fd;
}
.progressbar li.active:after {
  background: #3074fd;
}
.progressbar li.active:before {
  border-color: #3074fd;
  background: #3074fd;
  color: white;
}
</style>