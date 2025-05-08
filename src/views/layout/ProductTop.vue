<script>
/* 
* pro - 吉米後台陳列清單編號撈取商品 - 必要
* swiperOption - 若要 swiper fade效果直接加入 - 非必要
  swiperOption:{
    efffect:'fade'
  }
*/
export default {
  props:{
    pro:{type:Object,required:true},
    swiperOption:{type:Object,default:''}
  }
}
</script>

<!-- 上方商品輪播 -->
<template>
  <!-- 有輪播 -->
  <div class="bg01 list_F r:15px r:10px@<576 p:1%|1%|0! p:2%|2%|0.5%!@<992 p:3%|3%|1%!@<576 box:border-box">
    <ul v-if="pro != undefined" class="pro-top">
      <swiper class="overflow:hidden"
        :loop="false"
        :autoplay="{
          delay: 2800,
          disableOnInteraction: false
        }"
        :space-between="10"
        :slidesPerView="'auto'"
        :effect="swiperOption.effect"
        :fadeEffect="{
          crossFade:true
        }"
        :pagination="{
           el: '.pro-top .page',
          dynamicBullets: true,
          dynamicMainBullets: 2,
          clickable: true
        }"
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
            <h4 :class="[hidePromte(proA.Promote) == '' ? 'empty' : '']">{{ hidePromte(proA.Promote) }}</h4>
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
      <div class="swiper-pagination page"></div>
    </ul>
  </div>
</template>

<style lang="scss">
    .pro-top
    {
      .boxF_price
      {
        strong
        {
  
          em,
          &:before
          {
            display: none;
          }
        }
      }
  
      .iconF_pro,
      h4
      {
        display: none;
      }
  
      .boxF_price
      {
        strong
        {
          height: 60px;
          line-height: 40px;
        }
      }
  
      .swiper-wrapper
      {
        align-items: baseline;
      }
  
      .swiper-slide
      {
        width: calc(100% / 3 - 8px);
      }
  
      .swiper-pagination
      {
        bottom: 2% !important;
      }
    }

    .top-group {
      .bg01 {
        width: 90%;
        background: #fff;
      }
    }
  @include media-query('mobile', '992px') {
     .top-group {
      .bg01 {
        width: 100%;
      }
    }
  }  
  @include media-query('pad', '577px','630px') {
    .pro-top {
      .swiper-slide {
        width: calc(100% / 3 - -40px);
      }
    }
  }
  @include media-query('mobile', '576px') {
    .pro-top {
          .swiper-slide {
            width: calc(100% / 2 - 3px);
          }
          .boxF_price {
            &:after {
              display: none;
            }
            strong {
              height: 35px;
            }
          }
    }
  }
</style>
