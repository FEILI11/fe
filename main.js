import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
import axios from 'axios'
import Qs from 'qs'
import router from './route/index.js'

app.config.globalProperties.aaxios = axios;
app.config.globalProperties.qs = Qs;





app.use(router).mount('#app')
