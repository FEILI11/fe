import { createRouter, createWebHashHistory } from "vue-router"

const homee = () => import('../ho.vue')
const loginn = () => import('../lo.vue')

const routes = [

  {
    path: '/home',

    component: homee
  },
  {
    path: '/login',

    component: loginn
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});
export default router;
