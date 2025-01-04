import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import router from "./route";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { fas, faUserSecret } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(fas, faUserSecret);

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueSweetalert2, options);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
