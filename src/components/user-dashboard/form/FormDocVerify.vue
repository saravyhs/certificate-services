<template>
  <div class="row align-items-center">
    <div class="col-sm-6">
      <div>-សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ(ថតចម្លង)</div>
      <div>-ឬ វិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ(ថតចម្លង)</div>
      <div>-ឬ វិញ្ញាបនបត្របញ្ចប់ការសិក្សាថ្នាក់ទី១២(ថតចម្លង)</div>
    </div>
    <div class="col-sm-6">
      <input class="form-control" type="file" id="formFile" />
      <!-- <FileElement :upload-temp-endpoint="false" /> -->
      <Vueform>
        <FileElement name="file-attach" />
      </Vueform>
      
    </div>
  </div>
</template>