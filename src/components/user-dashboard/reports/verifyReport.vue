<template>
    <div class="report-warp">

        <div class="report">
            <div class="header">
                <h3 style="font-size: 11pt">
                    ពាក្យសុំបញ្ជាក់ភាពត្រឹមត្រូវ
                </h3>
            </div>
            <div class="table-container">

                <div class="table">
                    <table>
                        <tr>
                            <td style="width: 130px;border:none;">ខ្ញុំបាទ/នាងខ្ញុំឈ្មោះ</td>
                            <td style="
                                 width: 200px;
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
                            <td style="width:300px;border:none"> កើតនៅថ្ងៃទី&nbsp;
                                {{ formatKhmerNum(formatDOB(item.dob)) }}
                            </td>
                        </tr>
                        <tr>
                            <td style="width:200px;border:none">អាសយដ្ឋានបច្បន្ន ៖ &nbsp;</td>
                            <td style="text-align: start; font-family: Moul Light;border:none">
                                {{ item.address }}
                            </td>
                        </tr>

                        <tr>
                            <td style="width: 45px;border:none">សម័យប្រឡង៖ </td>
                            <td style="
                          text-align: justify;
    
                          font-family: Moul Light;border:none
                        ">
                                {{ formatKhmerNum(item.examdate) }}
                            </td>
                            <td style="width: 120px;border:none">មណ្ឌលប្រឡង</td>
                            <td colspan="4" style="font-family: Moul Light; padding-left: 20px;border:none">
                                {{ item.examcenter }}
                            </td>
                            <td style="width: 70px;border:none;">បន្ទប់លេខ</td>
                            <td style="
                          text-align: center;
      
                          font-family: Moul Light;border:none
                        ">
                                {{ formatKhmerNum(item.room) }}
                            </td>

                            <td style="width: 93px; text-align: center;border:none">លេខតុ</td>
                            <td style="width:50px;font-family: Moul Light;border:none">
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

                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td style="width:200mm;border:none;">លេខទូរសព្ទ៖ &nbsp;&nbsp; {{ item.phone }}
                                &ensp; &ensp;សូមធានាថាសញ្ញាបត្រ/វិញ្ញាបនបត្រជារបស់ខ្ញុំបាទ/នាងខ្ញុំពិតប្រាកដមែន។
                            </td>
                        </tr>
                    </table>
                    <table>

                        <tr>
                            <td style="width: 300px;border:none"></td>
                            <td style="border:none"></td>
                            <td colspan="2" style="text-align: center;border: none;">
                                រាជធានីភ្នំពេញ,ថ្ងៃទី {{ formatKhmerNum(getDayKhmer(date)) }} ខែ &nbsp;{{
                                    formatKhmerMonth(getMonthKhmer(date)) }}&nbsp; ឆ្នាំ &nbsp; {{
                                    formatKhmerNum(getYearKhmer(date))

                                }}
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 300px;border:none"></td>
                            <td style="border:none"></td>
                            <td colspan="2" style="text-align: center; font-family: Moul Light;border: none;">

                                <p style="font-family: 'Moul Light'; font-size:10pt; padding: 0px;border:none">
                                    ហត្ថលេខា/ស្នាមមេដៃ
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-family: 'Moul Light'; font-size:10pt;">
                                អ្នកទទួលពាក្យ
                            </td>
                        </tr>

                    </table>


                </div>
                <div class="underline"></div>
                <!-- បង្កាន់ដៃ -->
                <div style="font-family: Moul Light" class="header">បង្កាន់ដៃបញ្ជាក់ភាពត្រឹមត្រូវ</div>
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
                            <td style="border:none"> កើតថ្ងៃទី&nbsp; {{ formatKhmerMonth(date) }}</td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <td style="border: none;">សម័យប្រឡង</td>
                            <td style="font-family: Moul Light;border: none;">{{ formatKhmerNum(item.examdate) }}</td>
                            <td style="width: 50px;border:none">មណ្ឌលប្រឡង</td>
                            <td colspan="4" style="font-family: Moul Light; padding-left: 20px;border: none;">
                                {{ item.examcenter }}
                            </td>

                            <td style="border: none;">បន្ទប់លេខ</td>
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
                            <td style="width: 300px; text-align: center;border: none;">
                                រាជធានីភ្នំពេញ,ថ្ងៃទី {{ formatKhmerNum(getDayKhmer(date)) }} ខែ &nbsp;{{
                                    formatKhmerMonth(getMonthKhmer(date)) }}&nbsp; ឆ្នាំ &nbsp; {{
                                    formatKhmerNum(getYearKhmer(date))
                                }}
                                <br />
                                <p style="font-family: 'Moul Light'; font-size:10pt; padding: 0px;border:none">
                                    អ្នកទទួលពាក្យ
                                </p>
                            </td>
                            <td style="width: 300px; text-align: center;border: none;">
                                រាជធានីភ្នំពេញ,ថ្ងៃទី {{ formatKhmerNum(getDayKhmer(date)) }} ខែ &nbsp;{{
                                    formatKhmerMonth(getMonthKhmer(date)) }}&nbsp; ឆ្នាំ &nbsp; {{
                                    formatKhmerNum(getYearKhmer(date))
                                }}
                                <br />
                                <p style="font-family: 'Moul Light'; font-size:10pt; padding: 0px;border:none">
                                    ហត្ថលេខា/ស្នាមមេដៃ

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
import { computed, onMounted, ref} from 'vue';
import { formatKhmerNum, formatKhmerMonth, getDayKhmer, getMonthKhmer, getYearKhmer } from '@/utils/khmerUtils'; // Adjust path as per your project structure
import router from "@/route";
const applicantStore = useApplicantStore();
const { joinedData } = storeToRefs(applicantStore)
const date = new Date()

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
    padding-top: 1cm;
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
    padding-top: 500px;
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
        padding-top: 1cm;
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

    .underline {
        border-bottom: dotted;
        line-height: 0.1em;
        margin: 300px 0;
        padding-top: 500px;
    }
}
</style>