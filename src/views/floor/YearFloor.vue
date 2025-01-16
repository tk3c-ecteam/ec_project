<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
</script>

<script>
export default {

  data() {
    return {
     menu:[7702,7703,7704,7705,7706,7707,7708,7709,7710,7711,7712,'',
      7720,7721,7713,7459,''
     ],
      menuPrint: [7715,7716,7717,7718,7719],
      floorImg: [
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'newyear2025/images/s05.png',
          banner:[
            {
              image:'newyear2025/images/S05-1.png',
              links:[
                'https://www.tk3c.com/dic1.aspx?cid=12504&aid=7101',
                'https://www.tk3c.com/dictitleurl.aspx?cid=83198'
              ]
            },
            {
              image:'newyear2025/images/S05-2.png',
              links:[
                'https://www.tk3c.com/dic1.aspx?cid=119202&aid=23268',
                'https://www.tk3c.com/dictitleurl.aspx?cid=12504'
              ]
            }
          ]
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: 'newyear2025/images/s06.png',
          banner:[
            {
              image:'newyear2025/images/S06-1.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11312&aid=23889&hid=123990'
            },
            {
              image:'newyear2025/images/S06-2.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11312&aid=23889&hid=124193'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117916',
          image: 'newyear2025/images/s07.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11058',
          image: 'newyear2025/images/s08_3.png'
        },
           {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83186',
          image: 'newyear2025/images/s09.png'
        },
           {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: 'newyear2025/images/s10.png',
           banner:[
            {
              image:'newyear2025/images/S10-1.png',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=11225'
            },
             {
              image:'newyear2025/images/S10-2.png',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=11225'
            },
          ]
        },
           {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: 'newyear2025/images/s11.png'
        },
         {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: 'newyear2025/images/s12.png'
        },
         {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'newyear2025/images/s13.png'
        },
         {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'newyear2025/images/s14.png'
        },
         {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'newyear2025/images/s15.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=16917',
          image: 'newyear2025/images/s16.png',
          class: 'print-box',
          content: [
            {
              image: '2024Thxgiving/images/hp.png'
            },
            {
              image: '2024Thxgiving/images/EPSON.png'
            },
            {
              image: '2024Thxgiving/images/Brother.png'
            },
            {
              image: '2024Thxgiving/images/Canon.png'
            },
            {
              image: '2024Thxgiving/images/FUJIFILM.png'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: 'newyear2025/images/s17.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=93605',
          image: 'newyear2025/images/s18.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: 'newyear2025/images/s19.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=111126',
          image: 'newyear2025/images/s20.png'
        },
        {
          url: 'https://www.tk3c.com/other_store.aspx',
          image: 'newyear2025/images/s21.png',
          id:'store',
          products:[
            {
              image:'newyear2025/images/S24-1.png',
            },
            {
              image:'newyear2025/images/S24-2.png',
            },
            {
              image:'newyear2025/images/S24-3.png',
            },
            {
              image:'newyear2025/images/S24-4.png',
            },
          ]
        }
      ],
      today: Date(),
      statusPrinter: 0
    }
  },
  mounted() {
    setTimeout(() => {
       this.getFloorData(this.menu)
    }, 20);
   
  },
}
</script>

<template>
  <section
    class="floor scroll"
    v-for="(floor, f) in floorImg"
    :key="f"
    :class="floor.class ? floor.class : ''"
  >
    <h2 class="title" :id="[floor.class == 'print-box' ? 'print' : `pro${menu[f]}`]">
      <a :href="$filters.addGALink(floor.url)" target="_blank">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
    </h2>

    <!-- 加入banner圖片 -->
    <div class="banner rel" v-if="floor.banner != undefined" :class="`bn${f + 1}`">
      <div v-if="f == 1">
        <ul class="gap:10">
          <li class="w:48% w:95%@<992" v-for="(bn, b) in floor.banner">
          <a
            v-if="bn.url != undefined"
            :href="$filters.addGALink(bn.url)"
            target="_blank"
          >
            <img :src="$filters.siteUrl(bn.image)" loading="lazy" />
          </a>
        </li>
        </ul>
      </div>

      <div v-else>
         <swiper
        :loop="false"
        :effect="'fade'"
        :fadeEffect="{
          crossFade: true,
        }"
        :parallax="true"
        :navigation="{
          prevEl: `.banner.bn${f + 1} .prev`,
          nextEl: `.banner.bn${f + 1} .next`
        }"
        :modules="[EffectFade, Parallax]"
      >
        <swiper-slide v-for="(bn, b) in floor.banner">
          <a
            v-if="bn.url != undefined"
            :href="$filters.addGALink(bn.url)"
            target="_blank"
            data-swiper-parallax-opacity="0"
          >
            <img :src="$filters.siteUrl(bn.image)" loading="lazy" />
          </a>

          <div class="split-box rel w:full" v-if="bn.links != undefined">
            <img :src="$filters.siteUrl(bn.image)" loading="lazy" />
            <div class="w:full abs left:0 right:0 m:auto top:0 flex">
              <a
                v-for="(link, l) in bn.links"
                :href="$filters.addGALink(link)"
                class="h:22vmax! h:22rem!@<1440 h:16.5rem!@<992"
                target="_blank"
              ></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="floor.banner.length > 1" class="swiper-button-prev prev"></div>
      <div v-if="floor.banner.length > 1" class="swiper-button-next next"></div>
      </div>
    </div>

    <!-- 印表機頁籤樓層 -->
    <div v-if="floor.content != undefined">
       <Tabs :isSwiper="1" :tabs="floor.content">
        <template v-slot="{ selectedTab }">
          <TabContent v-for="(content,c) in floor.content" :menus="menuPrint[c]" :index="c" :selectedTab="selectedTab">

          </TabContent>
        </template>
      </Tabs>
    </div>

    <!-- k幣商品 -->
    <div class="bonus mb:5%" v-if="floor.id == 'store'" id="bonus">
       <swiper
        :loop="false"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 2,
            grid:{
              fill: 'row',
              rows:2
            }
          },
          600: {
            slidesPerView: 2,
            grid:{
              fill: 'row',
              rows:2
            }
          },
          992: {
            slidesPerView: 4,
            grid:{
              fill: 'row',
              rows:1
            }
          }
        }"
        class="mb:1%"
      >
      <swiper-slide v-for="pro in floor.products">
         <img :src="$filters.siteUrl(pro.image)" loading="lazy">
      </swiper-slide>
    </swiper>
    </div>

    <listF
      v-if="products[menu[f]] != undefined"
      :pro="products[menu[f]].Data"
    >
    </listF>
  </section>
</template>
