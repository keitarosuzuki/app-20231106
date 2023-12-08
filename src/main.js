import { createApp } from "vue";
import App from "./App.vue";
import auth from "./firebase"; // firebase.jsのパスに応じて修正
import router from './router'; // routerフォルダのindex.jsをインポート
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(auth).use(router).mount("#app");
