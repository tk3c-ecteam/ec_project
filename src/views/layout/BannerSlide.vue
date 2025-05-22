<template>
  <!-- 加到樓層裡的banner輪播 -->
   <div class="banner rel" :class="`bn${index + 1}`">
    <swiper
        :loop="false"
        :effect="'fade'"
        :fadeEffect="{
           crossFade: true,
        }"
        :pagination="{
           el: `.banner.bn${index + 1} .page`,
        }"
        :modules="[EffectFade]"
      >
        <swiper-slide v-for="(bn, b) in banners">
          <a
            v-if="bn.url != undefined"
            :href="$filters.addGALink(bn.url)"
            target="_blank"
          >
            <img v-if="bn.image" :src="$filters.siteUrl(bn.image)" />
            <img class="pc" v-if="bn.pc" :src="$filters.siteUrl(bn.pc)" />
            <img class="mobile" v-if="bn.pc" :src="$filters.siteUrl(bn.mobile)" />
          </a>

          <!-- 單張圖片切割成多個連結 -->
          <div class="split-box rel w:full" v-if="bn.links != undefined">
            <img :src="$filters.siteUrl(bn.image)" />
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
      <div class="swiper-pagination page"></div>
   </div>
</template>

<script setup>
  import { EffectFade } from "swiper/modules";

  const banners = defineModel('banners',{
    type:Object
  });

  const index = defineModel('index',{
    type:Number
  });
</script>

<style lang="scss">
  .floor {
    .banner {
      .swiper-pagination {
        bottom: 2% !important;
      }
    }
  }
</style>