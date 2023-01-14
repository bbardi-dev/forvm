import { createApp } from "vue";
import "./assets/styles.css";
import App from "./App.vue";
import router from "@/utils/router";
import DateText from "./components/base/DateText.vue";

const app = createApp(App);
app.use(router);
app.component("DateText", DateText);

app.mount("#app");
