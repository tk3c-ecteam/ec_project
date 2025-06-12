import { createRouter, createMemoryHistory } from "vue-router";

const router = new createRouter({
  history: createMemoryHistory(),
  routes: [],
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      //回上一頁固定目前頁面滾動位置
      return savedPosition;
    }
    if (to.hash) {
      //錨點
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 90 });
        }, 80);
      });
    }
  }
})

export default router;