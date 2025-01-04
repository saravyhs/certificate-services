<template>
  <div class="row align-items-top">
      <div>-សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ(ថតចម្លង)</div>
      <div>-ឬ វិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ(ថតចម្លង)</div>
      <div>-ឬ វិញ្ញាបនបត្របញ្ចប់ការសិក្សាថ្នាក់ទី១២(ថតចម្លង)</div>
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
import { mapState, mapActions } from "pinia";

export default {
  data(){
    return {
      //files: [],
    };
  },  
  components: {
    FileUpload
  },
  computed: {
    ...mapState(useApplicant, ["filesAttach"]),
  },
  methods: {
    ...mapActions(useApplicant, ["setFilesAttach"]),
    onFileSelect(event) {
      this.setFilesAttach(event.files);
    },
    onFileRemove(event){
      this.setFilesAttach(event.files);
    },
  },
};
</script>

<style scoped>

</style>