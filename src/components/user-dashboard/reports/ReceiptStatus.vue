<template>
  <div class="row pt-5">
    <div class="col text-center">
      <h5>ស្ថានភាពឯកសាររបស់អ្នក</h5>
    </div>
  </div>
  <!-- <div>{{ getStatus }}</div> -->
  <div class="stepper-wrapper">
    <div
      :class="
        getStatus == '1' || getStatus == '2' || getStatus == '3'
          ? 'stepper-item completed'
          : 'stepper-item active'
      "
    >
      <div class="step-counter">១</div>
      <div class="step-name">បានដាក់ពាក្យ</div>
    </div>
    <div
      :class="
        getStatus == '2' || getStatus == '3'
          ? 'stepper-item completed'
          : 'stepper-item active'
      "
    >
      <div class="step-counter">២</div>
      <div class="step-name">កំពង់ធ្វើ</div>
    </div>
    <div
      :class="
        getStatus == '3' ? 'stepper-item completed' : 'stepper-item active'
      "
    >
      <div class="step-counter">៣</div>
      <div class="step-name">រួចរាល់</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
//const apiBaseUrl = import.meta.env.VITE_API_URL;

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const id = props.id;
    const getStatus = ref(null);

    onMounted(async () => {
      const { data } = await axios.get(`/api/qr-scan/${id}`);
      getStatus.value = data.status;
    });

    return {
      getStatus,
    };
  },
};
</script>

<style scoped>
div {
  font-family: "Kantumruy Pro", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
}
.stepper-wrapper {
  font-family: Arial;
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #4bb543;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #4bb543;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}
</style>
