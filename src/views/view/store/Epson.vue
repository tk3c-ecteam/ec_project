<script setup>
import listM from '@/views/layout/listM.vue';
const contents = [
        {
          logoImage: "epson/images/logo.jpg",
          floorImg: [
            {
              image: 'epson/images/s1.png',
              href: "#pro3578",
              text: "強檔熱銷",
              type:listM
            },
            {
              image: 'epson/images/s2.png',
              href: "#pro3580",
              text: "噴墨印表機",
            },
             {
              image: 'epson/images/s3.png',
              href: "#pro3581",
              text: "連續供墨印表機",
            },
            {
              image: 'epson/images/s4.png',
              href: "#pro3582",
              text: "雷射&點陣印表機",
              type:listM
            },
            {
              image: 'epson/images/s5.png',
              href: "#pro3583",
              text: "標籤機",
            },
            {
              image: 'epson/images/s6.png',
              href: "#pro3585",
              text: "掃描器",
            },
            {
              image: 'epson/images/s7.png',
              href: "#pro3584",
              text: "投影機",
            },
            {
              image: 'epson/images/s8.png',
              href: "#pro3586",
              text: "精選耗材",
            },
            {
              image: 'epson/images/s9.png',
              href: "#pro3587",
              text: "影印紙這裡選",
            },
          ],
          slides: [
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson_230309.jpg", "mobile": "epson/images/epson_230309M.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson01_2050x600.jpg", "mobile": "epson/images/epson01_900x800.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson02_2050x600.jpg", "mobile": "epson/images/epson02_900x800.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson03_2050x600.jpg", "mobile": "epson/images/epson03_900x800.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson04_2050x600.jpg", "mobile": "epson/images/epson04_900x800.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson05_2050x600.jpg", "mobile": "epson/images/epson05_900x800.jpg" },
            { "url": "https://www.tk3c.com/dic1.aspx?cid=16917&aid=6722", "pc": "epson/images/epson06_2050x600.jpg", "mobile": "epson/images/epson06_900x800.jpg" },
          ],
          menu:[3578,3580,3581,3582,3583,3585,3584,
          3586,3587]
        }
      ];

const icons = [
   { "url": "#pro3580", "image": "epson/images/nav01.png" },
   { "url": "#pro3581", "image": "epson/images/nav02.png" },
   { "url": "#pro3582", "image": "epson/images/nav03.png" },
   { "url": "#pro3585", "image": "epson/images/nav04.png" },
   { "url": "#pro3583", "image": "epson/images/nav05.png" },
   { "url": "#pro3584", "image": "epson/images/nav06.png" },
   { "url": "#pro3586", "image": "epson/images/nav07.png" },
];     
</script>

<template>
  <StoreDefault :contents="contents">
    <template #special>
      <!-- icon錨點區 -->
      <section class="icon-group pt:5% box:border-box">
        <swiper :loop="false" :spaceBetween="10" :breakpoints="{
          0: {
            slidesPerView: 2.3,
            grid: {
              fill: 'colmn',
              rows: 2
            }
          },
          600: {
            slidesPerView: 2.5,
            grid: {
              fill: 'colmn',
              rows: 2
            }
          },
          992: {
            slidesPerView: 4,
            grid: {
              fill: 'colmn',
              rows: 2
            }
          }
        }">
          <swiper-slide v-for="(icon, i) in icons" :key="i">
            <a :href="icon.url"><img :src="$filters.siteUrl(icon.image)"></a>
          </swiper-slide>
        </swiper>
      </section>
    </template>
  </StoreDefault>

  <!-- 商品樓層 -->
  <CommonFloor :floors="contents[0].floorImg" :menu="menu"></CommonFloor>
</template>

<style lang="scss">
@charset "utf-8";
/*  共用樣式調整 */
body {
  background: #e5eef6;
}

.bg01 {
  background: #5b8fba;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 5px solid #fff;
    padding: 5px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0 auto;
  }
}

#store-container {
  .logo {
    background: #fff;
  }
  .background {
    padding-bottom: 29%;
  }
}

nav {
  background: #10218b;
  .swiper-slide {
    .active {
      color: #FFEB3B;
      font-weight: bold;
    }
  }
}

.floor {
  .title {
    margin: 0 auto 0;
    b {
      font-size: 0;
    }
  }
}

.icon-group {
  .swiper-wrapper {
    justify-content: center;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #store-container {
    .background {
      padding-bottom: 88%;
    }
  }

  .icon-group {
  .swiper-wrapper {
    justify-content: left;
  }
  }
}
</style>

