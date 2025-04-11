<script>
export default {
  props: ['pro','banner','url','moreImage']
}
</script>

<!-- 每個商品左邊加入banner圖片 -->
<template>
  <!-- 有輪播 -->
  <div class="bg01 list_F">
    <!-- banner圖片 -->
    <ul v-if="pro != undefined" class="ai:center!">
      <li class="banner w:48.5%! w:64.6%!@<992 w:97%!@<576 rel bg:none!">
        <!-- 有more圖片+banner -->
        <div v-if="moreImage">
          <img :src="$filters.siteUrl(banner)">
          <a class="abs w:auto right:3% top:3% abs:hover" :href="$filters.addGALink(url)" target="_blank">
            <img :src="$filters.siteUrl(moreImage)">
          </a>
        </div>
        <!-- 只有banner -->
        <div v-else>
          <a :href="$filters.addGALink(url)" target="_blank">
            <img :src="$filters.siteUrl(banner)">
          </a>
        </div>
      </li>
      <li v-for="(proA, p) in pro">
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
      </li>
    </ul>
  </div>
</template>
