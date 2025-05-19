<script>
import { EffectCoverflow } from "swiper/modules";
export default {
  props: ['pro'],
  data() {
    return {
      EffectCoverflow
    }
  }
}
</script>

<!-- 商品樓層list_F版型 4小 (扇形展開效果 swiper:coverflow) -->
<template>
  <div class="bg01 list_F p:1%|1%|0! p:2%|2%|0!@<576">
    <ul v-if="pro != undefined" class="pro-cover">
      <swiper
       class="pro"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :effect="'coverflow'"
        :centeredSlides="true"
        :coverflowEffect="{
           rotate:22, // 3d旋轉時Y軸的旋轉角度
           stretch: 0, //slide之間的拉伸值 越大靠得越緊
            depth: 135, //值越大z軸距離越遠 (越來越小)
            modifier: 1, //modifier和rotate、stretch、depth之間的倍率 值越大越明顯
            slideShadows: false //是否有陰影
        }"
        :breakpoints="{
          0:{
            slidesPerView:2
          },
          600:{
            slidesPerView:3
          },
          992:{
            slidesPerView:4.5
          }
        }"
        :autoHeight="true"
        :navigation="{
          prevEl: '.pro-cover .prev',
          nextEl: '.pro-cover .next'
        }"
        :modules="[EffectCoverflow]"
      >
        <swiper-slide
          v-for="(proA, p) in pro"
          class="bg:#fff pb:2%@<576"
        >
          <a
            :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
            :id="'prod' + proA.productid"
            :name="'prod' + proA.productid"
          >
            <p class="itemF_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" /></p>
            <storg v-html="proA.productname"></storg>
            <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
            <div class="boxF_price">
              <p class="iconF_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>

              <strong class="txt_red fred">
                <em v-if="proA.nonmemberprice != proA.realprice">市價${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價$</i>{{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div v-if="pro.length > 4" class="swiper-button-prev prev"></div>
      <div v-if="pro.length > 4" class="swiper-button-next next"></div>
    </ul>
  </div>
</template>
