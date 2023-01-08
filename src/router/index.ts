import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/homePage",
    },
    {
      path: "/homePage",
      name: "homePage",
      component: () => import("../views/homePage/index.vue"),
      meta: { title: "Home Page" },
    },
    {
      path: "/specialColumn",
      name: "specialColumn",
      component: () => import("../views/specialColumn/index.vue"),
      meta: { title: "Special Column" },
    },
    {
      path: "/articleDetail/:id",
      name: "articleDetail",
      props: true,
      component: () => import("../views/articleDetail/index.vue"),
      meta: { title: "Article Details" },
    },
    {
      path: "/qaModules",
      name: "qaModules",
      component: () => import("../views/QAModules/index.vue"),
      meta: { title: "Q&A Module" },
    },
    {
      path: "/qadetail/:id",
      name: "qadetail",
      props: true,
      component: () => import("../views/QADetail/index.vue"),
      meta: { title: "Q&A Details" },
    },
    {
      path: "/ask",
      name: "ask",
      component: () => import("../views/Ask/index.vue"),
      meta: { title: "ask" },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login&Register/index.vue"),
      meta: { title: "Login&Register" },
    },
    {
      path: "/write",
      name: "write",
      component: () => import("../views/Write/index.vue"),
      meta: { title: "writeArticle" },
    },
    {
      path: "/userpage",
      name: "userpage",
      component: () => import("../views/userPage/index.vue"),
      meta: { title: "userpage" },
    },
  ],
});

router.afterEach((to) => {
  const a: any = to.meta.title;
  document.title = a;
});

export default router;
