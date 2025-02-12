<script>
import { EffectCoverflow } from "swiper/modules";
export default {
  props: ['pro','name'],
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
    <ul v-if="pro != undefined" :class="[name != undefined ? name : '']">
      <swiper
        class="pro overflow:hidden"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :effect="'coverflow'"
        :centeredSlides="true"
        :centeredSlidesBounds="true"
        :grabCursor="true"
        :loopAdditionalSlides="1"
        :slidesPerView="'auto'"
        :hideOnClick="true"
        :breakpoints="{
          0:{
            slidesPerView:1
          },
          600:{
            slidesPerView:3
          },
          992:{
            slidesPerView:5
          }
        }"
        :coverflowEffect="{
          rotate:25,
           stretch: 0,
            depth: 135,
            modifier: 1,
            slideShadows: false
        }"
        :autoHeight="true"
        :observer="true"
        :navigation="{
          prevEl: `.${name} .prev`,
          nextEl: `.${name} .next`
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
                <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
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
