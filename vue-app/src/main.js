/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { createApp } from 'vue';
import router from './router';

// Application Imports

import App from './App.vue';

// Definitions

const app = createApp(App);

app.use(router);
app.mount('#app');
