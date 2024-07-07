<template>
  <div class="d-flex justify-content-center">
    <form class="row">
      <div class="col-auto">
        <div class="form-check">
          <label class="form-check-label" for="serviceType">
            ប្រភេទសេវា
          </label>
        </div>
      </div>

      <div class="col-auto">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="serviceType" id="validation"
            @change="handleChangeService('1')" :checked="selectedServiceType === '1'">
          <label class="form-check-label" for="validation">
            បញ្ជាក់ភាពត្រឹមត្រូវ
          </label>
        </div>
      </div>

      <div class="col-auto">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="serviceType" id="reissue" value="2"
            @change="handleChangeService('2')" :checked="selectedServiceType === '2'">
          <label class="form-check-label" for="reissue">
            កែតម្រូវ
          </label>
        </div>
      </div>
      <div class="col-auto">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="serviceType" id="secondary"
            @change="handleChangeService('3')" :checked="selectedServiceType === '3'">
          <label class="form-check-label" for="secondary">
            ទុតិយតា
          </label>
        </div>
      </div>
    </form>
  </div>
  <div class="row">
    <VerifycertificateVue v-if="selectedServiceType === '1'"></VerifycertificateVue>
    <FormReissue v-else-if="selectedServiceType === '2'"></FormReissue>
    <!-- <VerifycertificateVue v-else-if="selectedServiceType === '3'"></VerifycertificateVue> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import VerifycertificateVue from './FormVerifycertificate.vue';
import FormReissue from './FormReissue.vue';
import { useServiceStore } from '../../../store/serviceStore';
import { storeToRefs } from "pinia";
const serviceStore = useServiceStore();

// Use storeToRefs to destructure reactive state properties
const { selectedServiceType } = storeToRefs(serviceStore);

// If you need to use actions, destructure them directly from the store
const { setSelectedServiceType } = serviceStore;

// Function to handle service change
function handleChangeService(type) {
  setSelectedServiceType(type);
}
</script>