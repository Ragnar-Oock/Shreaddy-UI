import { createApp } from 'vue';
import App from './App.vue';

import './assets/scss/variables.scss';

const app = createApp(App);

import tippyPlugin from './helpers/tippy-plugin';
app.use(tippyPlugin);

import 'css-reset-and-normalize/scss/reset-and-normalize.scss';

app.mount('#app');