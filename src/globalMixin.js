import axios from 'axios';
import axiosRetry from 'axios-retry';

export const globalMixin = {
  data() {
    return {
      products: {},//多個商品
      product2: {},//單一商品
      percent: 0,
      isLeftAside: false, //是否顯示左側選單
      isRightAside: false, //是否顯示右側選單
      mobileStatus: '',//手機版置底選單用(status:'event','social')
      mobileBg: 'none',//手機版選單背景遮罩
      isGoTop: false,//手機版回到上層按鈕
      isAsideTop: false,//左右側選單顯示隱藏
      isMobileOpen: false,//手機版上方選單切換狀態
      jimmyId: [], //商品樓層id
      jimmyText: [], //樓層文字 
    }
  },
  methods: {
    /*加入meta標籤
    * 參數格式: styles = [
     "url....."
    ]
    */
    addStyle(styles) {
      styles.forEach((style, s) => {
        let link = document.createElement('link');
        link.type = 'text/css'
        link.rel = 'preload stylesheet'
        link.as = 'style'
        link.setAttribute('href', style)
        document.head.appendChild(link);
      })
    },
    addScript(script) {
      script.forEach((script, s) => {
        let scr = document.createElement('script')
        scr.setAttribute('src', script)
        scr.setAttribute('defer', '')
        document.body.appendChild(scr);
      })
    },
    //回到上層
    goTop(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    },
    //生成 api url
    apiUrl(menuId) {
      const time = Date.now();
      return `https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=${menuId}&_=${time}`;
    },
    //例外處理錯誤訊息
    handleError(error) {
      if (error.code === 'ECONNABORTED') {
        console.log('請求逾時');
        this.retryRequest(); //重啟
      } else {
        console.log(error.message)
      }
    },
    //用後台陳列編號撈取全商品 [2000,20001,2002]
    async getFloorData(menu) {
      const moreUrls = menu.map(this.apiUrl); // 生成所有 URL

      //撈取所有 url api 資料
      try {
        const responses = await Promise.all(moreUrls.map(url => axios.get(url)));
        responses.forEach((response, r) => {
          this.products[menu[r]] = response.data;
        });
      } catch (error) {
        this.handleError(error);
      }
    },

    //用後台陳列編號撈取單一商品 如:2000
    async getFloorSingle(menu) {
      try {
        const response = await axios.get(this.apiUrl(menu));
        this.product2[menu] = response.data.Data;
      } catch (error) {
        this.handleError(error);
      }
    },
    //計算折數
    getProPercent(data) {
      let percent = Math.round((data.realprice / data.nonmemberprice) * 100)
      return percent
    },
    //價錢百分數加入逗號
    addNumComma(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    //促銷文顯示錯誤隱藏
    hidePromte(text) {
      if (text.indexOf('遠端伺服器傳回一個錯誤') > -1 || text.indexOf('\r\n\r\n<!DOCTYPE html>\r\n\r\n<html>') > -1) {
        return ''
      } else {
        return text.trim();
      }
    },
    //頁籤顯示隱藏
    showAndHide(id, element) {
      document.querySelectorAll(`${element} .tab-content`).forEach((el) => {
        el.style.display = 'none'
        el.classList.remove('active')

        document.querySelectorAll(`${element} .tab-content`)[id].style.display = 'block'
        document.querySelectorAll(`${element} .tab-content`)[id].classList.add('active')
      })

      // 有輪播 .swiper-slide版本
      if (document.querySelectorAll(`${element} .swiper-slide`).length > 0) {
        document.querySelectorAll(`${element} .swiper-slide`).forEach((el) => {
          el.classList.remove('active')
          document.querySelectorAll(`${element} .swiper-slide`)[id].classList.add('active')
        })
      }

      //無輪播版本
      if (document.querySelectorAll(`${element} li`).length > 0) {
        document.querySelectorAll(`${element} li`).forEach((el) => {
          el.classList.remove('active')
          document.querySelectorAll(`${element} li`)[id].classList.add('active')
        })
      }

    },
    /*滑鼠滾動後固定背景
     *  element: 目標區域 selector
     *  scrollSelect:滾動後區域
     */
    fixedBg(element, scrollSelect) {
      if (document.querySelectorAll(element).length > 0) {
        document.addEventListener('scroll', (e) => {
          let scrollTop = window.scrollY,
            scrollEl = document.querySelector(scrollSelect),
            elementPos = scrollEl.getBoundingClientRect()
          if (scrollTop >= elementPos.top - 50) {
            document.querySelector(element).classList.add('fixed')
          } else {
            document.querySelector(element).classList.remove('fixed')
          }
        })
      }
    },
    retryRequest() {
      //若request請求失敗則重新發送請求
      /* retryDelay 兩種方法
      * 1. retryDelay: axiosRetry.exponentialDelay
        (Exponential back-off retry delay between requests)
        2. retryDelay: axiosRetry.linearDelay()
        (Liner retry delay between requests)
      */
      axiosRetry(axios, {
        retries: 2, //重新發送請求次數
        retryDelay: axiosRetry.linearDelay(),
        shouldResetTimeout: true,
      })
    },
    /*
    * 攔截器: 請求/回應一同處理 加快速度
    */
    interCatch() {
      axios.interceptors.response.use(
        response => response,
        error => {
          //如果為伺服器錯誤 重啟
          if (error.response) {
            switch (error.response.status) {
              case 401:
                console.log('tokan 不存在!')
                break;

              case 404:
                console.log('頁面不存在!')
                break;

              case 500:
                console.log('程式碼有誤')
                break

              default:
                console.log(error.message)
                break;
            }

            if (!window.navigator.onLine) {
              console.log('refresh page')
              return
            }
            axiosRetry(axios, {
              retries: 2,
              shouldResetTimeout: true,
              retryDelay: axiosRetry.exponentialDelay()
            })
          }
          return Promise.reject(error);
        }
      );
    },
    //取得樓層標題 id(element=區域)，並加到右側、手機版選單上
    getFloorTitle(element) {
      const elements = document.querySelectorAll(element);
      const asides = [];

      elements.forEach(el => {
        const title = el.getAttribute('titles'),
          id = el.getAttribute('id') || el.querySelector('.title')?.getAttribute('id');

        if (id && title) {
          asides.push(
            {
              "text": title,
              "href": '#' + id
            });
        }
      });

      return asides;
    },
    //回到最上層
    goTop() {
      window.scrollTo(0, 0);
      this.mobileBg = 'none';
    },
    //關閉手機版選單
    closeNav() {
      this.isMobileOpen = false;
      this.mobileStatus = '';
      this.mobileBg = 'none';
      document.body.style.overflow = 'auto';
    },
    //滑鼠滾動後顯示
    showMobileTop() {
      (window.scrollY >= 100) ? this.isGoTop = true : this.isGoTop = false;
    },
    //左右側選單滾動顯示
    showAside() {
      (window.scrollY >= 800) ? this.isAsideTop = true : this.isAsideTop = false;
    },
    //移除手機版上方選單 .open 與改變icon符號
    changeNav() {
      this.isMobileOpen = false;
      document.body.style.overflow = 'auto';
    },
    //點擊切換置底選單      
    changeMobile(name) {
      if (this.mobileStatus == name) {
        this.mobileStatus = '';
        this.mobileBg = 'none';
        document.body.style.overflow = 'auto';
      } else {
        this.mobileStatus = name;
        this.mobileBg = 'block';
        document.body.style.overflow = 'hidden';
      }

      this.isMobileOpen = false;
    },
    //點擊切換手機版上方按鈕
    switchMobile() {
      this.isMobileOpen = !this.isMobileOpen;
    },
    //切換左側選單顯示按鈕
    switchLeftAside() {
      this.isLeftAside = !this.isLeftAside;
    },
    //切換右側選單顯示按鈕
    switchRightAside() {
      this.isRightAside = !this.isRightAside;
    },
    smallDeviceLeft() {
      //左側選單 1520 以下裝置不展開
      (window.innerWidth < 1520) ? this.isLeftAside = true : this.isLeftAside = false;
    },
    smallDeviceRight() {
      //右側選單 1520 以下裝置不展開
      (window.innerWidth < 1520) ? this.isRightAside = true : this.isRightAside = false;
    },
    //取得吉米後台商品
    addJimmyFloor() {
      let protitle2 = document.querySelectorAll('.wrapper .protitle');
      if (protitle2.length > 0) {
        protitle2.forEach((pro, p) => {
          let id = pro.querySelector('a').getAttribute('id').substring(3)
          //id - 商品樓層 
          this.jimmyId[id] = pro.querySelector('a').getAttribute('id').substring(3);
          //樓層標題文字
          this.jimmyText[id] = pro.textContent.trim();
        });
      }
    },
    goAnchor(element) {
      if (document.querySelector(element) == null) return;
      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + document.documentElement.scrollTop

      setTimeout(() => {
        window.scrollTo({
          top: move - 90,
        })
      }, 80)
    },
  }
}
