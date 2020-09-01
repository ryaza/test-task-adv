import Vue from 'vue';
import VueRouter from 'vue-router';
import DialogComponent from '../views/DialogComponent/DialogComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DialogComponent,
  },
  {
    path: '/dialog/:id',
    name: 'Dialog',
    component: DialogComponent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
