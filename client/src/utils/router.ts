import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import Home from "@/pages/Home.vue";
import ThreadDetail from "@/pages/ThreadDetail.vue";
import NotFound from "@/pages/NotFound.vue";
import SubForum from "@/pages/SubForum.vue";
import Category from "@/pages/Category.vue";
import placeholderData from "@/placeholderData";

let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/subforum/:id",
    name: "SubForum",
    component: SubForum,
    props: true,
  },
  {
    path: "/thread/:id",
    name: "ThreadDetail",
    component: ThreadDetail,
    props: true,
  },
];

// routes = routes.map((route: typeof routes[1]) => ({
//   ...route,
//   beforeEnter(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
//     const threadExists = placeholderData.threads.find((thread) => thread.id === to.params.id);
//     if (threadExists) {
//       return next();
//     } else {
//       next({
//         name: "NotFound",
//       });
//     }
//   },
// }));

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
