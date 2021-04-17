import { createApp } from 'vue';
import App from './App.vue';

import './assets/scss/variables.scss';

const app = createApp(App);

import tippyPlugin from './helpers/tippy-plugin';
app.use(tippyPlugin);

app.mount('#app');