import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Projects from '../src/components/Projects.vue';
import Home from '../src/components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
