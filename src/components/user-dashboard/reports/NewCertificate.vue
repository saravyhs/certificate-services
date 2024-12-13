<template>
  <div class="report-warp">

    <div class="report">
      <div class="header">
        <h2 style="font-size: 12pt">ព្រះរាជាណាចក្រកម្ពុជា</h2>
        <h3 style="font-size: 11pt">ជាតិ សាសនា ព្រះមហាក្សត្រ</h3>
        <h1 class="font-tacteing" style="font-family: 'Tacteing'; font-size: 12pt">
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
              <td style="width: 130px;border:none;">ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ</td>
              <td style="
                    width: 290px;
                    text-align: center;
                    font-family: Moul Light;border:none
                  ">
                {{ item.name }}

              </td>
              <td style="width: 60px;border:none">ភេទៈ</td>
              <td style="
                    width: 40px;
                    text-align: center;
                    font-family: Moul Light;border:none
                  ">
                <span v-if="item.gender === 'female'">ស្រី</span>
                <span v-else>ប្រុស</span>
              </td>
              <td style="border:none"> កើតនៅថ្ងៃទី&nbsp;
                {{ formatKhmerNum(formatDOB(item.dob)) }}
              </td>
            </tr>
            <tr>
              <td style="border:none">កើតនៅរាជធានី-ខេត្ត</td>
              <td style="text-align: center; font-family: Moul Light;border:none">
                {{ item.address }}
              </td>
            </tr>
            <tr>
              <td style="width: 100px">ឪពុកឈ្មោះ</td>
              <td style="
                    text-align: center;
                    width: 250px;
                    font-family: Moul Light;border:none
                  ">
                {{ item.fatherName }}
              </td>
              <td style="width: 70px;border:none">ម្ដាយឈ្មោះ</td>
              <td colspan="4" style="font-family: Moul Light; padding-left: 20px;border:none">
                {{ item.motherName }}
              </td>
            </tr>
            <tr>
              <td style="width: 100px;border:none">សម័យប្រឡង</td>
              <td style="
                    text-align: center;
                    width: 250px;
                    font-family: Moul Light;border:none
                  ">
                {{ formatKhmerNum(item.examdate) }}
              </td>
              <td style="width: 70px;border:none">មណ្ឌលប្រឡង</td>
              <td colspan="4" style="font-family: Moul Light; padding-left: 20px;border:none">
                {{ item.examcenter }}
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td style="width: 70px;border:none;">បន្ទប់លេខ</td>
              <td style="
                    text-align: center;

                    font-family: Moul Light;border:none
                  ">
                {{ formatKhmerNum(item.room) }}
              </td>

              <td style="width: 93px; text-align: center;border:none">លេខតុ</td>
              <td style="font-family: Moul Light;border:none">
                {{ formatKhmerNum(item.seat) }}
              </td>
              <td style="width: 75px;border:none">និន្ទេស</td>
              <td style="width: 300px; font-family: Moul Light;border:none">
                {{ item.gread }}
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td style="width: 300px;border:none"></td>
              <td style="text-align: end;border:none">សូមភ្ជាប់មកជាមួយនូវ៖</td>
              <td style="border:none">&nbsp;-&nbsp;ច្បាប់ថតចម្លងបឋមភូមិ</td>
              <td style="border:none">១ ច្បាប់</td>
            </tr>
            <tr>
              <td style="width: 300px;border:none"></td>
              <td style="text-align: end;border:none"></td>
              <td style="border:none">&nbsp;-&nbsp;ច្បាប់ថតចម្លងសំបុត្រកំណើត</td>
              <td style="border:none">១ ច្បាប់</td>
            </tr>
            <tr>
              <td style="width: 300px;border:none"></td>
              <td style="border:none"></td>
              <td style="border:none">&nbsp;-&nbsp;ពាក្យបណ្ដឹង</td>
              <td style="border:none">១ ច្បាប់</td>
            </tr>
            <tr>
              <td style="width: 300px;border: none;"></td>
              <td style="border: none;"></td>
              <td style="border: none;">&nbsp;-&nbsp;ច្បាប់ថតចម្លងទុតិយភូមិ</td>
              <td style="border:none">១ ច្បាប់</td>
            </tr>
            <tr>
              <td style="width: 300px;border:none"></td>
              <td style="border:none"></td>
              <td colspan="2" style="text-align: center;border: none;">
                រាជធានីភ្នំពេញ,ថ្ងៃទី ១០ ខែ តុលា ឆ្នាំ២០២២៤
              </td>
            </tr>
            <tr>
              <td style="width: 300px;border:none"></td>
              <td style="border:none"></td>
              <td colspan="2" style="text-align: center; font-family: Moul Light;border: none;">
                ហត្ថលេខា
              </td>
            </tr>
          </table>
        </div>
        <div class="underline"></div>
        <!-- បង្កាន់ដៃ -->
        <div style="font-family: Moul Light" class="header">បង្កាន់ដៃ</div>
        <div class="table">
          <table>
            <tr>
              <td style="width: 140px;border:none">ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ</td>
              <td style="text-align: center; font-family: Moul Light;border:none">
                {{ item.name }}
              </td>
              <td style="width: 50px;border: none;">ភេទ</td>
              <td style="font-family: Moul Light;border: none;">
                <span v-if="item.gender === 'male'">ប្រុស</span>
                <span v-else>ស្រី</span>
              </td>
              <td style="border:none"> កើតថ្ងៃទី&nbsp; {{ formatKhmerMonth(item.dob) }}</td>
            </tr>
          </table>

          <table>
            <tr>
              <td style="width: 130px;border: none;">សម័យប្រឡង</td>
              <td style="font-family: Moul Light;border: none;">{{ formatKhmerNum(item.examdate) }}</td>
              <td style="width: 50px;border:none">មណ្ឌលប្រឡង</td>
              <td colspan="4" style="font-family: Moul Light; padding-left: 20px;border: none;">
                {{ item.examcenter }}
              </td>
            </tr>
            <tr>
              <td style="width: 80px;border: none;">បន្ទប់លេខ</td>
              <td style="
                    text-align: center;
                    font-family: Moul Light;border: none;
                  ">
                {{ formatKhmerNum(item.room) }}
              </td>

              <td style="width: 93px; text-align: center;border:none">លេខតុ</td>
              <td style="font-family: Moul Light;border:none">
                {{ formatKhmerNum(item.seat) }}
              </td>

              <td style="width: 75px;border:none">និន្ទេស</td>
              <td style="width: 300px; font-family: Moul Light;border:none">
                {{ item.gread }}
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td style="width: 160mm;border: none;"></td>
              <td style="width: 250px; text-align: center;border: none;">
                រាជធានីភ្នំពេញ,ថ្ងៃទី ១០ ខែ មករា ឆ្នាំ ២០២៤
                <br />
                <p style="font-family: 'Moul Light'; font-size:10pt; padding: 0px;border:none">
                  ហត្ថលេខា
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script setup>
import { useApplicantStore } from "@/store/applicantStore.js"
import { mapState, mapActions, storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue';
import { formatKhmerNum, formatKhmerMonth } from '@/utils/khmerUtils'; // Adjust path as per your project structure
import router from "@/route";
const applicantStore = useApplicantStore();
const { joinedData } = storeToRefs(applicantStore)

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  itemData: {
    type: Object,
    required: true
  }
});

const item = props.itemData
onMounted(() => {
  window.print()
});

const formatDOB = (dob) => {
  if (!dob) return ""; // Handle case where DOB is not available

  const date = new Date(dob);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  return formattedDate;
};
function showData() {
  alert(JSON.stringify(applicants))
}
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
  font-family: 'Moul Light';
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
