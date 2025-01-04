<template>
  <div class="row align-items-top">
      <div>-វិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាបឋមភូមិ(ថតចម្លង)</div>
      <div>-សំបុត្របញ្ជាក់កំណើត ឬសេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត(ថតចម្លង)</div>
      <div>-ករណីកែឈ្មោះដាច់ត្រូវមានសាលក្រមសម្រេចពីតុលាការ(ថតចម្លង)</div>
      <div>*ក្នុងករណីសុំកែរូបថត</div>
      <div class="ps-5">-ប័ណ្ណសម្គាល់ខ្លួនសិស្សថ្នាក់ទី១២(ថតចម្លង)</div>
      <div class="ps-5">
        -វិញ្ញាបនបត្របញ្ជាក់ការសិក្សា ចុះហត្ថលេខាដោយនាយក ឬនាយិកាវិទ្យាល័យមានវាយត្រាលើរូបថត
      </div>
      <div class="ps-5">
        -រូបថត Digital (ត្រូវយករូបថតដូននឹងប័ណ្ណសម្គាល់ខ្លួនសិស្សថ្នាក់ទី១២)
      </div>
      <div>**រាល់ឯកសារដែលភ្ជាប់មកជាមួយត្រូវយកច្បាប់ដើមមកនាយកដ្ខានកិច្ចការប្រឡងដោយផ្ទាល់</div>
  </div>
  <div class="row align-items-top my-4">
    <!-- ====================image loading========================= -->
    <div class="image-list">
      <div v-for="image in this.files_local" :key="image._id" class="image-item">
        <div v-if="image._id">
          <img :src="image.attachs" :alt="image.filename" />
          <!-- <p>{{ image.originalname }}</p> -->
          <button @click.prevent="deleteImage(image._id)" class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
    <!-- =========================================================== -->
  </div>
  <div class="row align-items-top m-0">
      <FileUpload name="files[]" @select="onFileSelect" @remove="onFileRemove" 
        :multiple="true" accept="image/*" :maxFileSize="1000000" 
        :showUploadButton="false">
        <template #empty>
            <span>Drag and drop files to here to upload.</span>
        </template>
      </FileUpload>
  </div>
 
</template>

<script>
import FileUpload from 'primevue/fileupload';
import { useApplicant } from "@/store/applicant";
import { usefileAttach } from "@/store/fileAttach"
import { mapState, mapActions } from "pinia";

export default {
  data(){
    return {
      files_local :[],
    };
  },  
  mounted(){
    this.files_local = this.files;
  },
  unmounted(){
    this.removeAllFileDelete();
    this.removeAllFileUpload();
  },
  components: {
    FileUpload
  },
  computed: {
    ...mapState(useApplicant, ["filesAttach"]),
    ...mapState(usefileAttach, ["files"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setFilesAttach"]),
    ...mapActions(usefileAttach, ["setFileDelete","removeAllFileDelete","setFileUpload","removeAllFileUpload"]),
 
    deleteImage(id){
      this.setFileDelete(id);
      this.files_local = this.files_local.filter(file => file._id !== id);
    },    
    onFileSelect(event) {
      this.setFileUpload(event.files);
    },
    onFileRemove(event){
      this.setFileUpload(event.files);
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