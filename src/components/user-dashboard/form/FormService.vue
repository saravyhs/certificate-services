<template>
  <div class="d-flex justify-content-center">
    <form>
      <div class="container">
        <div class="row">
          <div class="col-sm-auto">
            <div class="form-check">
              <span class="form-check-label" for="serviceType">ប្រភេទសេវា</span>
            </div>
          </div>

          <div class="col-sm-auto">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="serviceType"
                id="validation"
                @change="handleChangeService('1')"
                :checked="selectedServiceType === '1'"
              />
              <span class="form-check-label" for="validation">
                បញ្ជាក់ភាពត្រឹមត្រូវ
              </span>
            </div>
          </div>

          <div class="col-sm-auto">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="serviceType"
                id="reissue"
                value="2"
                @change="handleChangeService('2')"
                :checked="selectedServiceType === '2'"
              />
              <span class="form-check-label" for="reissue">កែតម្រូវ</span>
            </div>
          </div>
          <div class="col-sm-auto">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="serviceType"
                id="secondary"
                @change="handleChangeService('3')"
                :checked="selectedServiceType === '3'"
              />
              <span class="form-check-label" for="secondary"> ទុតិយតា </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <hr class="hr" />
  <div class="container">
    <FormServiceVerify v-if="selectedServiceType === '1'"></FormServiceVerify>
    <FormServiceEdit v-else-if="selectedServiceType === '2'"></FormServiceEdit>
    <!-- <VerifycertificateVue v-else-if="selectedServiceType === '3'"></VerifycertificateVue> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import FormServiceVerify from "./FormServiceVerify.vue";
import FormServiceEdit from "./FormServiceEdit.vue";
import { useServiceStore } from "../../../store/serviceStore";
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