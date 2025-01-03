<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body">
          <!-- Section to be converted to PDF -->
          <div id="pdf-content">
            <div class="report-warp">
              <div class="report">
                <div>
                  បង្កាន់ដៃលេខៈ
                  {{ this.applicantOne.receiptNo.toString().padStart(4, "0") }}
                </div>
                <div class="row">
                  <div class="col text-center">
                    <h5>ពាក្យសុំបញ្ជាក់ភាពត្រឹមត្រូវ</h5>
                  </div>
                </div>
                <!-- =========================================================== -->
                <div class="pt-2">
                  ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{
                    this.applicantOne.byUser.firstName +
                    " " +
                    this.applicantOne.byUser.lastName
                  }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ភេទៈ&nbsp;&nbsp;<span
                    v-if="this.applicantOne.byUser.gender === 'female'"
                    >ស្រី</span
                  >
                  <span v-else>ប្រុស</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  កើតនៅថ្ងៃទី&nbsp;&nbsp;{{
                    formatDate(this.applicantOne.byUser.dob)
                  }}
                </div>
                <!-- ========================================================= -->
                <div class="pt-3">
                  អាសយដ្ឋានបច្បន្ន៖&nbsp;&nbsp;{{
                    this.applicantOne.byUser.address
                  }}
                </div>
                <!-- =============================================================== -->
                <div class="pt-3">
                  សម័យប្រឡង៖&nbsp;&nbsp;
                  {{
                    formatDate(this.applicantOne.examDate)
                  }}&nbsp;&nbsp;&nbsp;&nbsp; មណ្ឌលប្រឡង&nbsp;&nbsp;
                  {{ this.applicantOne.examCenter }}&nbsp;&nbsp;&nbsp;&nbsp;
                  បន្ទប់លេខ&nbsp;&nbsp;
                  {{ this.applicantOne.room }}&nbsp;&nbsp;&nbsp;&nbsp;
                  លេខតុ&nbsp;&nbsp;
                  {{ this.applicantOne.seat }}&nbsp;&nbsp;&nbsp;&nbsp;
                  និន្ទេស&nbsp;&nbsp;
                  {{ this.applicantOne.grade }}
                </div>
                <!-- =========================================================== -->
                <div class="pt-3">
                  លេខទូរសព្ទ៖ &nbsp;&nbsp;
                  {{ this.applicantOne.byUser.phone }}
                  &ensp;&ensp;
                  សូមធានាថាសញ្ញាបត្រ/វិញ្ញាបនបត្រជារបស់ខ្ញុំបាទ/នាងខ្ញុំពិតប្រាកដមែន។
                </div>
                <!-- ========================================================== -->
                <div class="pt-3">
                  <div style="margin-left: 450px">
                    រាជធានីភ្នំពេញ,ថ្ងៃទី...........ខែ...........ឆ្នាំ...........
                  </div>
                  <div class="pt-2" style="margin-left: 500px">
                    ហត្ថលេខា/ស្នាមមេដៃ
                  </div>
                  <div>អ្នកទទួលពាក្យ</div>
                </div>
                <div class="pt-5 mt-10"></div>
                <div class="underline"></div>
                <div>
                  បង្កាន់ដៃលេខៈ
                  {{ this.applicantOne.receiptNo.toString().padStart(4, "0") }}
                </div>
                <!-- ========================================================= -->
                <div class="row">
                  <div class="col text-center">
                    <h5>បង្កាន់ដៃបញ្ជាក់ភាពត្រឹមត្រូវ</h5>
                  </div>
                </div>
                <!-- ==================================================== -->
                <div class="pt-2">
                  ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {{
                    this.applicantOne.byUser.firstName +
                    " " +
                    this.applicantOne.byUser.lastName
                  }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ភេទៈ&nbsp;&nbsp;<span
                    v-if="this.applicantOne.byUser.gender === 'female'"
                    >ស្រី</span
                  >
                  <span v-else>ប្រុស</span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  កើតនៅថ្ងៃទី&nbsp;&nbsp;{{
                    formatDate(this.applicantOne.byUser.dob)
                  }}
                </div>
                <!-- =================================================== -->
                <div class="pt-3">
                  សម័យប្រឡង៖&nbsp;&nbsp;
                  {{
                    formatDate(this.applicantOne.examDate)
                  }}&nbsp;&nbsp;&nbsp;&nbsp; មណ្ឌលប្រឡង&nbsp;&nbsp;
                  {{ this.applicantOne.examCenter }}&nbsp;&nbsp;&nbsp;&nbsp;
                  បន្ទប់លេខ&nbsp;&nbsp;
                  {{ this.applicantOne.room }}&nbsp;&nbsp;&nbsp;&nbsp;
                  លេខតុ&nbsp;&nbsp;
                  {{ this.applicantOne.seat }}&nbsp;&nbsp;&nbsp;&nbsp;
                  និន្ទេស&nbsp;&nbsp;
                  {{ this.applicantOne.grade }}
                </div>
                <!-- ================================================ -->
                <div class="pt-3">
                  &nbsp;&nbsp;&nbsp;&nbsp;រាជធានីភ្នំពេញ,ថ្ងៃទី...........ខែ........ឆ្នាំ.........
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  រាជធានីភ្នំពេញ,ថ្ងៃទី...........ខែ.........ឆ្នាំ..........
                </div>
                <div class="pt-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  អ្នកទទួលពាក្យ
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ហត្ថលេខា/ស្នាមមេដៃ
                </div>
              </div>
            </div>

            <div class="pt-5 ps-2">
              <qrcode-vue
                :value="value"
                :size="size"
                level="H"
                render-as="svg"
              />
            </div>
            <!-- <router-link :to="value"> go to status </router-link> -->
          </div>
          <!-- Button to generate PDF -->
          <div class="row">
            <div class="col text-end">
              <router-link
                to="/user-dashboard/list-services"
                class="btn btn-danger btn-rounded me-1"
              >
                ត្រឡប់ក្រោយ
              </router-link>
              <button
                class="btn btn-primary btn-rounded ms-1"
                @click="generatePDF"
              >
                ទាញយកជា PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import { mapState } from "pinia";
import { useapplicantList } from "@/store/applicantList";
import html2pdf from "html2pdf.js";
import dayjs from "dayjs";
const appUrl = import.meta.env.VITE_URL;

export default {
  data() {
    return {
      value: "",
      size: 150,
    };
  },
  components: {
    QrcodeVue,
  },
  mounted() {
    this.value = appUrl + "/qr-code/" + this.applicantOne._id;
  },
  computed: {
    ...mapState(useapplicantList, ["applicantOne"]),
  },
  methods: {
    generatePDF() {
      // Select the HTML element to be converted
      const element = document.getElementById("pdf-content");

      // Configure options for html2pdf
      const options = {
        margin: 5,
        filename: "component.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Generate and save the PDF
      html2pdf().set(options).from(element).save();
    },
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("DD-MM-YYYY");
    },
  },
};
</script>
<style scoped>
div,
table,
tr,
td {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}

.report-wrap {
  /* font-family: "Siemreap", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  line-height: 0.46cm;
  background-color: #8f0000 !important; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh;
  line-height: 0.46cm; */
  height: 1000px;
  border: 1px solid black;
}

.report {
  width: 210mm;
  /* A5 landscape width */
  height: 148mm;
  /* A5 landscape height */
  padding-left: 3mm;
  padding-right: 3mm;
  padding-top: 1cm;
  line-height: 0.47cm;
  color: #000 !important;
}
</style>
