<template>
  <div class="container">
    <div class="page-inner">
      <div class="card card-round mt-3">
        <div class="card-body p-lg-5 mx-lg-5">
          <form @submit.prevent="updateForm">
            <h6 class="fw-bold px-0">ព័ត៌មានសញ្ញាបត្រ</h6>
            <hr class="hr mt-0" />
            <!-- ======================Certificate Information================ -->
            <div class="p-2">      
              <div class="row my-2">
                <div class="col-sm-2 px-2">សម័យប្រឡង</div>
                <div class="col-sm-4 px-2">{{examDate}}</div>

                <div class="col-sm-2 px-2">មណ្ឌលប្រឡង</div>
                <div class="col-sm-4 px-2">{{this.applicantOne.examCenter}}</div>
              </div>
              <div class="row my-2">
                <div class="col-sm-2 px-2">លេខបន្ទប់</div>
                <div class="col-sm-4 px-2">{{this.applicantOne.room}}</div>

                <div class="col-sm-2 px-2">លេខតុ</div>
                <div class="col-sm-4 px-2">{{this.applicantOne.seat}}</div>
              </div>
              <div class="row my-2">
                <div class="col-sm-2 px-2">និន្ទេស</div>
                <div class="col-sm-4 px-2">{{this.applicantOne.grade}}</div>

                <div class="col-sm-2 px-2">លំដាប់ពិន្ទុ</div>
                <div class="col-sm-4 px-2">{{this.applicantOne.percentile}}</div>
                
              </div>
            </div>
            <!-- ====================================================== -->
            <h6 class="fw-bold px-0">ព័ត៌មានសេវា</h6>
            <hr class="hr mt-0" />
            <!-- =====================service Information============== -->
            <div class="p-2">
              <div class="row">
                <div class="col-sm-2 px-2">                  
                    ប្រភេទសេវា                  
                </div>
                <div class="col-sm-4 px-2">
                  {{this.applicantOne.service == "verify" ? "បញ្ជាក់ភាពត្រឹមត្រូវ"
                    :this.applicantOne.service == "edit" ? "កែតម្រូវ":"ទុតិយតា"}}
                </div>
              </div>
            </div>

            <div class="p-2" v-if="this.applicantOne.service == 'verify'">
              <div class="row">
                <div class="col-sm-2 px-2">                  
                    ប្រភេទសញ្ញាបត្រ                 
                </div>
                <div class="col-sm-4 px-2">
                  {{this.applicantOne.verify.verifyByCertType == "diploma" ? "សញ្ញាបត្រទុតិយភូមិ" 
                    : this.applicantOne.verify.verifyByCertType == "temp_cert" ? "វិញ្ញាបនបត្របណ្ដោះអាសន្ន" 
                    : "វិញ្ញាបនបត្របញ្ចប់ការសិក្សាថ្នាក់ទី១២"}}
                </div>
              </div>
            </div>


            <div class="p-2" v-if="this.applicantOne.service == 'edit'">
              <div class="row">
                <div class="col-4 px-2 text-center fw-bold">
                  ស្នើកែព័ត៌មាន
                </div>
                <div class="col-4 px-2 text-center fw-bold">                  
                  ក្នុងវិញ្ញាបនបត្រចាស់                 
                </div>
                <div class="col-4 px-2 text-center fw-bold">
                  ក្នុងវិញ្ញាបនបត្រថ្មី
                </div>
              </div>
              <!-- ======================name================== -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_name == true">
                <div class="col-4 px-2 text-center">
                  ឈ្មោះសិស្ស
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_name}}                 
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_name}} 
                </div>
              </div>
              <!-- ====================gender============ -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_gender == true">
                <div class="col-4 px-2 text-center">
                  ភេទ
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_gender}}                  
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_gender}} 
                </div>
              </div>
              <!-- ========================dob================= -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_dob == true">
                <div class="col-4 px-2 text-center">
                  ថ្ងៃខែឆ្នាំកំណើត
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_dob}}                  
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_dob}} 
                </div>
              </div>
              <!-- ==========================pob================== -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_pob == true">
                <div class="col-4 px-2 text-center">
                  ទីកន្លែងកំណើត
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_pob}}                  
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_pob}} 
                </div>
              </div>
              <!-- ==========================father================== -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_father == true">
                <div class="col-4 px-2 text-center">
                  ឈ្មោះឪពុក
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_father}}                  
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_father}} 
                </div>
              </div>
              <!-- ===========================mother====================== -->
              <div class="row my-2" v-if="this.applicantOne.edit.is_mother == true">
                <div class="col-4 px-2 text-center">
                  ឈ្មោះម្ដាយ
                </div>
                <div class="col-4 px-2 text-center">                  
                  {{this.applicantOne.edit.old_mother}}                  
                </div>
                <div class="col-4 px-2 text-center">
                  {{this.applicantOne.edit.new_mother}} 
                </div>
              </div>
            </div>
            <!-- ====================================================== -->            
            <h6 class="fw-bold px-0 mt-2">ឯកសារភ្ជាប់</h6>
            <hr class="hr mt-0" />
            <div class="row align-items-top my-4">
              <!-- ====================image loading========================= -->
              <div class="image-list">
                <div v-for="image in this.files" :key="image._id" class="image-item">
                  <img :src="image.attachs" :alt="image.filename"/>       
                </div>
              </div>
              <!-- =========================================================== -->
            </div>           
            <div class="row pt-2">
              <div class="col-12">
                <div class="float-end">                
                  <router-link
                    to="/user-dashboard/list-services"
                    class="btn btn-danger btn-rounded me-1"
                  >
                    ត្រឡប់ក្រោយ
                  </router-link>                 
                </div>
              </div>
            </div>    
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useapplicantList } from "@/store/applicantList";
import { usefileAttach } from "@/store/fileAttach"
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
  },
  computed: {
    ...mapState(useapplicantList, ["applicantOne","errors"]),
    ...mapState(usefileAttach, ["files"]),
  },
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },
  },
};
</script>

<style scoped>
.image-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.image-item {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;  
}
.image-item img {
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 8px;
}
</style>