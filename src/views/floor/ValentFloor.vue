<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
</script>

<script>
export default {
  data() {
    return {
     menu:[7710,7711,7712,'',7702,7703,7704,7705,7706,7707,
      7708,7709,7720,7721,7713,7766],
      menuPrint: [7715,7716,7717,7718,7719],
      floorImg: [
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: '2025Valentine/images/S14_bar.png',
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: '2025Valentine/images/S15_bar.png',
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: '2025Valentine/images/S16_bar.png',
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=16917',
          image: '2025Valentine/images/S17_bar.png',
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
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: '2025Valentine/images/S6_bar.png',
          banner:[
            {
              image:'2025Valentine/images/S6_01.jpg',
              url:''
            },
            {
               image:'2025Valentine/images/S6_02.jpg',
               links:[
                "https://www.tk3c.com/dic1.aspx?cid=119202&aid=23268",
                "https://www.tk3c.com/dictitleurl.aspx?cid=12504"
               ]
            }
          ]
        },
           {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: '2025Valentine/images/S7_bar.png',
          banner:[
            {
              image:'2025Valentine/images/S7_01.jpg',
              url:'https://www.tk3c.com/dic1.aspx?cid=11312&aid=23350&strPreView=y'
            },
             {
              image:'2025Valentine/images/S7_02.jpg',
              links:[
                "https://www.tk3c.com/dic2.aspx?cid=11312&aid=23350&hid=119769&strPreView=y",
                "https://www.tk3c.com/dic2.aspx?cid=11312&aid=23350&hid=123669&strPreView=y"
              ]
            },
          ]
        },
           {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117916',
          image: '2025Valentine/images/S8_bar.png'
        },
           {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11058',
          image: '2025Valentine/images/S9_bar.png'
        },
         {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83186',
          image: '2025Valentine/images/S10_bar.png'
        },
         {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: '2025Valentine/images/S11_bar.png',
          banner:[
            {
              image:'2025Valentine/images/S11_01.jpg',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=11225'
            },
              {
              image:'2025Valentine/images/S11_02.jpg',
              url:"https://www.tk3c.com/dictitleurl.aspx?cid=11225"
            },
          ]
        },
         {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: '2025Valentine/images/S12_bar.png'
        },
         {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: '2025Valentine/images/S13_bar.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: '2025Valentine/images/S18_bar.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=93605',
          image: '2025Valentine/images/S19_bar.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: '2025Valentine/images/S20_bar.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=10890',
          image: '2025Valentine/images/S21_bar.png'
        }
      ],
      today: Date(),
      statusPrinter: 0
    }
  },
  mounted() {
    this.getFloorData(this.menu)
   
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
      <div>
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

    <listF
      v-if="floor.class != 'print-box' && products[menu[f]] != undefined"
      :pro="products[menu[f]].Data"
    >
    </listF>
  </section>
</template>
