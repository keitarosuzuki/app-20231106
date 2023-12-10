import { createApp } from "vue";
import App from "./App.vue";
import auth from "./firebase";
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import store from "./store";

createApp(App).use(auth).use(router).use(store).mount("#app");
