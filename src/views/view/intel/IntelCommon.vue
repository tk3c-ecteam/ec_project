<script> 
   import { EffectFlip } from "swiper/modules";
   export default {
    props:{
      contents:{
        type:Object
      }
    },
    data() {
      return {
        EffectFlip
      }
    },
    mounted() {
      const { contents } = this;
      for (const [t, tab] of Object.entries(contents[0].tabs[0])) {
      //撈取無頁籤商品樓層 
      if (tab[0].content == undefined) {
         //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
      }
    }
    },
  methods: {
    message(id) {
      this.$refs[`alert${id}`].openAlert();
    }
  }
   }
</script>

<template>
  <div id="intel-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl(contents[0].title)">
      </h2>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('IGD2024/images/p02.png')">
    </p>

    <!-- 指南 -->
    <section class="special-box">
        <h2 class="title">
          <img :src="$filters.siteUrl('IGD2024/images/sp_bar01.png')">
        </h2>

        <ul>
          <li><a href="https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123633&strPreView=y&ec=IGD2024_ACER"
              target="_blank"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp01_a.png"></a>
          </li>
          <li class="muti">
            <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp02_a.png">
            <div class="links">
              <a href="https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123634&strPreView=y&ec=IGD2024_ACER"
                target="_blank">
                <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go.png">
              </a>
              <a class="alert" @click.prevent="message(1)">
                <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go2.png">
              </a>
            </div>
          </li>
          <li class="slide">
            <swiper :loop="true" :effect="'flip'" :flipEffect="{
              slideShadows: false,
              limitRotation: false,
            }" :autoplay="{
            delay: 1800,
            disableOnInteraction: false
          }" :modules="[EffectFlip]">
              <swiper-slide>
                <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123687')"
                  target="_blank">
                  <img :src="$filters.siteUrl('IGD2024/images/sp09.png')">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=121466&aid=23845')" target="_blank">
                  <img :src="$filters.siteUrl('IGD2024/images/sp03-1_a.png')">
                </a>
              </swiper-slide>
            </swiper>
          </li>
          <li class="muti">
            <img :src="$filters.siteUrl('IGD2024/images/sp04_a.png')">
            <div class="links">
              <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123246')"
                target="_blank">
                <img :src="$filters.siteUrl('IGD2024/images/go.png')">
              </a>
              <a class="alert" @click.prevent="message(2)">
                <img :src="$filters.siteUrl('IGD2024/images/go2.png')">
              </a>
            </div>
          </li>
          <li class="slide2">
            <swiper :loop="true" :effect="'flip'" :flipEffect="{
              slideShadows: false,
              limitRotation: false,
            }" :autoplay="{
            delay: 2200,
            disableOnInteraction: false
          }" :modules="[EffectFlip]">
              <slot name="special"></slot>
            </swiper>
          </li>
          <li>
            <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=121466&aid=23566')" target="_blank">
              <img :src="$filters.siteUrl('IGD2024/images/sp06_a.png')">
            </a>
          </li>
        </ul>

        <!-- 彈出視窗 -->
        <AlertBox ref="alert1" :type="'image'">
          <picture>
            <img :src="$filters.siteUrl('IGD2024/images/Game_bundle.jpg')">
          </picture>
        </AlertBox>

        <AlertBox ref="alert2" :type="'image'">
          <iframe width="100%" height="500" :src="$filters.siteUrl('IGD2024/info.pdf')"></iframe>
        </AlertBox>
      </section>

    <section class="pro-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('IGD2024/images/barpt.png')">
      </h2>

      <a v-for="(pro,p) in contents[0].proBig" :key="p" :href="$filters.addGALink(pro.url)" target="_blank">
        <img :src="$filters.siteUrl(pro.image)">
      </a>
    </section>

    <section class="tab-group scroll" v-for="(tab,t) in contents[0].tabs[0]" :key="t" :titles="tab[0].text"
      :class="`tab${Number(t) + 1}-box`" :id="`tab${Number(t) + 1}`">
      <h2 class="title">
        <a :href="$filters.addGALink(tab[0].url)" target="_blank">
          <img :src="$filters.siteUrl(tab[0].title)"> 
        </a>
      </h2>


      <div class="content">
        <div v-if="tab[0].content != undefined">
          <Tabs :tabs="tab[0].content">
            <template v-slot="{ selectedTab }">
              <TabContent v-for="(content, c) in tab[0].content" :menus="content.menu" :index="c"
                :selectedTab="selectedTab">
              </TabContent>
            </template>
          </Tabs>
        </div>
        <div v-else>
          <listF :pro="product2[tab[0].menu]">
          </listF>
        </div>
      </div>
    </section>
  </div>

  <!-- 右側選單 -->
  <RightAside :type="'mobile'"></RightAside>

</template>

<style>
 @import '@/assets/sass/intel.scss';
</style>
