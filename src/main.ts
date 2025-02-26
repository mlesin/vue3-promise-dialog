import { createApp } from "vue";
import App from "./App.vue";
import { PromiseDialog } from "../lib/index";

let app = createApp(App);
app.use(PromiseDialog);
app.mount("#app");
