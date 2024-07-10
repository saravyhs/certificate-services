<template>
  <form-doc-verify v-if="selectedServiceType == 1" />
  <form-doc-edit v-if="selectedServiceType == 2" />
  <form-doc-reissue v-if="selectedServiceType == 3" />
</template>

<script>
import FormDocVerify from "./FormDocVerify.vue";
import FormDocEdit from "./FormDocEdit.vue";
import FormDocReissue from "./FormDocReissue.vue";
import { useServiceStore } from "../../../store/serviceStore";
import { mapState } from "pinia";

export default {
  components: {
    FormDocVerify,
    FormDocEdit,
    FormDocReissue,
  },
  computed: {
    ...mapState(useServiceStore, ["selectedServiceType"]),
  },
};
</script>