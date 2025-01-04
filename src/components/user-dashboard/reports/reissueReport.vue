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
                <div class="header">
                  <h2 style="font-size: 12pt">ព្រះរាជាណាចក្រកម្ពុជា</h2>
                  <h3 style="font-size: 11pt">ជាតិ សាសនា ព្រះមហាក្សត្រ</h3>
                  <h1
                    class="font-tacteing"
                    style="font-family: 'Tacteing'; font-size: 12pt"
                  >
                    ********
                  </h1>
                  <h3 style="font-size: 11pt">
                    ពាក្យសុំវិញ្ញាបនបត្របណ្ដោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ
                  </h3>
                </div>
                <div class="table-container">
                  <div class="table">
                    <table>
                      <tr>
                        <td style="width: 130px; border: none">
                          ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ
                        </td>
                        <td
                          style="
                            width: 290px;
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{
                            this.applicantOne.byUser.firstName +
                            " " +
                            this.applicantOne.byUser.lastName
                          }}
                        </td>
                        <td style="width: 60px; border: none">ភេទៈ</td>
                        <td
                          style="
                            width: 40px;
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          <span
                            v-if="this.applicantOne.byUser.gender === 'female'"
                            >ស្រី</span
                          >
                          <span v-else>ប្រុស</span>
                        </td>
                        <td style="border: none">
                          កើតនៅថ្ងៃទី&nbsp;
                          {{ formatDate(this.applicantOne.byUser.dob) }}
                        </td>
                      </tr>
                      <tr>
                        <td style="border: none">អាសយដ្ឋានបច្បន្ន៖</td>
                        <td
                          style="
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.byUser.address }}
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 100px; border: none">សម័យប្រឡង</td>
                        <td
                          style="
                            text-align: center;
                            width: 250px;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ formatDate(this.applicantOne.examDate) }}
                        </td>
                        <td style="width: 120px; border: none">មណ្ឌលប្រឡង</td>
                        <td
                          colspan="4"
                          style="
                            font-family: Moul Light;
                            padding-left: 20px;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.examCenter }}
                        </td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td style="width: 70px; border: none">បន្ទប់លេខ</td>
                        <td
                          style="
                            text-align: center;

                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.room }}
                        </td>

                        <td
                          style="width: 93px; text-align: center; border: none"
                        >
                          លេខតុ
                        </td>
                        <td style="font-family: Moul Light; border: none">
                          {{ this.applicantOne.seat }}
                        </td>
                        <td style="width: 75px; border: none">និន្ទេស</td>
                        <td
                          style="
                            width: 300px;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.grade }}
                        </td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="text-align: end; border: none">
                          សូមភ្ជាប់មកជាមួយនូវ៖
                        </td>
                        <td style="width: 250px; border: none">
                          &nbsp;-&nbsp;ច្បាប់ថតចម្លងបឋមភូមិ
                        </td>
                        <td style="border: none">១ ច្បាប់</td>
                      </tr>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="text-align: end; border: none"></td>
                        <td style="border: none">
                          &nbsp;-&nbsp;ច្បាប់ថតចម្លងសំបុត្រកំណើត
                        </td>
                        <td style="border: none">១ ច្បាប់</td>
                      </tr>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="border: none"></td>
                        <td style="border: none">&nbsp;-&nbsp;ពាក្យបណ្ដឹង</td>
                        <td style="border: none">១ ច្បាប់</td>
                      </tr>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="border: none"></td>
                        <td style="border: none">
                          &nbsp;-&nbsp;ច្បាប់ថតចម្លងទុតិយភូមិ
                        </td>
                        <td style="border: none">១ ច្បាប់</td>
                      </tr>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="border: none"></td>
                        <td
                          colspan="2"
                          style="text-align: center; border: none"
                        >
                          រាជធានីភ្នំពេញ,ថ្ងៃទី.........ខែ.........ឆ្នាំ...........
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 80px; border: none"></td>
                        <td style="border: none"></td>
                        <td
                          colspan="2"
                          style="
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          ហត្ថលេខា
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="p-4"></div>
                  <div class="underline"></div>
                  <!-- បង្កាន់ដៃ -->
                  <div>
                    បង្កាន់ដៃលេខៈ
                    {{
                      this.applicantOne.receiptNo.toString().padStart(4, "0")
                    }}
                  </div>
                  <div style="font-family: Moul Light" class="header">
                    បង្កាន់ដៃទុតិយតា
                  </div>
                  <div class="table">
                    <table>
                      <tr>
                        <td style="width: 130px; border: none">
                          ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ
                        </td>
                        <td
                          style="
                            width: 290px;
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{
                            this.applicantOne.byUser.firstName +
                            " " +
                            this.applicantOne.byUser.lastName
                          }}
                        </td>
                        <td style="width: 60px; border: none">ភេទៈ</td>
                        <td
                          style="
                            width: 40px;
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          <span
                            v-if="this.applicantOne.byUser.gender === 'female'"
                            >ស្រី</span
                          >
                        </td>
                        <td style="border: none">
                          កើតនៅថ្ងៃទី&nbsp;
                          {{ formatDate(this.applicantOne.byUser.dob) }}
                        </td>
                      </tr>
                      <tr>
                        <td style="border: none">អាសយដ្ឋានបច្បន្ន៖</td>
                        <td
                          style="
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.byUser.address }}
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 100px; border: none">សម័យប្រឡង</td>
                        <td
                          style="
                            text-align: center;
                            width: 250px;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ formatDate(this.applicantOne.examDate) }}
                        </td>
                        <td style="width: 120px; border: none">មណ្ឌលប្រឡង</td>
                        <td
                          colspan="4"
                          style="
                            font-family: Moul Light;
                            padding-left: 20px;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.examCenter }}
                        </td>
                      </tr>
                    </table>

                    <table>
                      <tr>
                        <td style="width: 80px; border: none">បន្ទប់លេខ</td>
                        <td
                          style="
                            text-align: center;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.room }}
                        </td>

                        <td
                          style="width: 93px; text-align: center; border: none"
                        >
                          លេខតុ
                        </td>
                        <td style="font-family: Moul Light; border: none">
                          {{ this.applicantOne.seat }}
                        </td>

                        <td style="width: 75px; border: none">និន្ទេស</td>
                        <td
                          style="
                            width: 300px;
                            font-family: Moul Light;
                            border: none;
                          "
                        >
                          {{ this.applicantOne.grade }}
                        </td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td style="width: 220px; border: none"></td>
                        <td
                          style="width: 200px; text-align: center; border: none"
                        >
                          រាជធានីភ្នំពេញ,ថ្ងៃទី..........ខែ...........ឆ្នាំ..........
                          <br />
                          <p
                            style="
                              font-family: 'Moul Light';
                              font-size: 10pt;
                              padding: 0px;
                              border: none;
                            "
                          >
                            ហត្ថលេខា
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5"></div>
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
    this.value = appUrl + "/" + this.applicantOne._id;
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
<style>
.report-wrap {
  font-family: "Siemreap", sans-serif;
  /* Default font */
  display: flex;
  justify-content: end;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
  min-height: 100vh;
  /* Ensure it takes the full height of the viewport */
  line-height: 0.46cm;
  background-color: #8f0000 !important;
}

.report {
  width: 210mm;
  /* A5 landscape width */
  height: 148mm;
  /* A5 landscape height */
  padding-left: 3mm;
  padding-right: 3mm;
  line-height: 0.47cm;
  color: #000 !important;
}

.header {
  text-align: center;
  /* Header font */
}

.header h2,
.header h3 {
  font-weight: normal;
  font-family: "Moul Light";
  margin: 0;
}

.header .font-tacteing {
  font-family: "Tacteing", sans-serif;
  /* Tacteing font */
  font-size: 12pt;
}

.table-container {
  width: 100%;
  /* Enable horizontal scrolling if necessary */
  color: #000 !important;
}

.table {
  width: 100%;
  margin-top: 10px;
  border: none;
  background-color: #fff;
  color: #000 !important;
}

.table table {
  width: 100%;
  border-collapse: collapse;
  border: none;
  border-style: none;
  background-color: #fff;
  color: #000 !important;
  /* Remove border styles */
}

tr,
th,
td {
  border: none;
  border-style: none;
  background-color: #fff;
  color: #000 !important;
}

.table th,
.table td .table tr {
  font-size: 8.5pt;
  border: none;
  color: #000;
}

.underline {
  border-bottom: dotted;
  line-height: 0.1em;
  margin: 10px 0;
  padding-top: 26px;
}

/* Print-specific styles */
@media print {
  body {
    font-size: 9px;
    padding: 0%;
    width: 210mm;
    height: 148mm;
  }

  @page {
    padding-left: 0.3cm;
    padding-top: 0.3cm;
    padding-right: 0.3cm;
    font-size: 9pt;
  }

  .report {
    /* Ensure full width for printing */
    /* Allow content to expand vertically */
    padding: 0px;
    border: none;
    /* No border for printing */
    box-shadow: none;
    /* No shadow for printing */
    /* Always start a new page for each .report */
  }

  .header {
    font-size: 12pt;
    /* Adjust header font size for printing */
  }

  .table th,
  .table td {
    font-size: 8.5pt;
    /* Adjust table cell font size for printing */
    margin: 0px;
    padding: 0px;
    border: none;
  }
}
</style>
