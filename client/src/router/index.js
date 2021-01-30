import Vue from 'vue';
import VueRouter from 'vue-router';
import RepositoriesList from '../views/RepositoriesList/RepositoriesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Repositories List',
    component: RepositoriesList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
