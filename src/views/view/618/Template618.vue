<template>
  <div id="container">
    <div class="background" :class="{ 'other': !contents[0].specials }">
      <h2 class="title animate__animated animate__fadeInUp">
        <img :src="$filters.siteUrl(contents[0].title)" />
      </h2>

      <div
        class="board abs w:50% w:60%@<1600 w:90%@<992 w:80%@<576 left:0 right:0 top:28vmax top:35.5vmax@<1600 top:36vw@<1025 top:53vw@<992 top:89vw@<576 m:auto">
        <img v-if="!contents[0].specials" class="pc" :src="$filters.siteUrl('office3c/images/BOX_PC.png')" />
        <img v-if="!contents[0].specials" class="mobile" :src="$filters.siteUrl('office3c/images/BOX_M.png')" />
        <slot v-if="contents[0].specials" name="board-image"></slot>
      </div>

      <div class="product">
        <ProductTop :pro="product2[contents[0].menuPro]"></ProductTop>
      </div>
    </div>

    <!-- 緞帶特效 -->
    <div id="confetti"></div>

    <!-- 攻略 -->
    <section class="special-box mt:-19% mt:-32%@<992 mt:-59vw@<576" v-if="contents[0].specials">
      <div class="rel mt:3%">
        <swiper :loop="false" :spaceBetween="20" :slidesPerView="'auto'" :navigation="{
          nextEl: '.special-box .next',
          prevEl: '.special-box .prev',
        }">
          <!-- 無彈跳視窗 -->
          <swiper-slide v-if="!contents[0].isAlert" v-for="(special, s) in contents[0].specials" class="w:fit-content! w:31%!@<992 w:47%!@<576" :key="s">
            <a :href="$filters.addGALink(special.url)" target="_blank">
              <img :src="$filters.siteUrl(special.image)">
            </a>
          </swiper-slide>
          <!-- 需要彈跳視窗 -->
          <slot v-else name="special"></slot>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>

      <slot name="alert-message"></slot>
    </section>

    <!-- 登記 -->
    <section class="gift-box" v-if="contents[0].gifts">
      <ul :class="{'single': contents[0].gifts.length < 2}" class="gap:10 w:85% w:95%@<992 w:full@<576 gap:10 grid-cols:2 grid-cols:1.single grid-cols:1@<576">
        <li v-for="(gift,g) in contents[0].gifts" :key="g">
          <a :href="$filters.addGALink(gift.url)" target="_blank">
            <img v-if="gift.image" :src="$filters.siteUrl(gift.image)">
            <img class="pc" v-if="gift.pc" :src="$filters.siteUrl(gift.pc)">
            <img class="mobile" v-if="gift.mobile" :src="$filters.siteUrl(gift.mobile)">
          </a>
        </li>
      </ul>
    </section> 

    <!-- 其他區域 -->
    <slot name="content"></slot>

    <!-- 其他樓層 -->
    <CommonFloor v-if="contents[0].menus" :floors="contents[0].floors" :menu="contents[0].menus">
      <!-- 有看更多的標題 -->
      <template v-if="!contents[0].specials" #moreTitle>
        <img :src="$filters.siteUrl('office3c/images/bar1.png')">
      </template>
      <!-- 沒有看更多的標題 -->
      <template v-if="!contents[0].specials" #moreTitle2>
        <img :src="$filters.siteUrl('office3c/images/bar2.png')">
      </template>
    </CommonFloor>
  </div>

  <!-- 左側選單+手機版 -->
  <LeftAside></LeftAside>

  <!-- 右側選單 -->
  <RightAside :type="'mobile3'"></RightAside>
</template>

<script>
export default {
  props:{
    contents:{
      type:Object
    }
  },
  mounted() {
    this.getFloorSingle(this.contents[0].menuPro)
  }
}
</script>

<style lang="scss">
  @import '@/assets/sass/common618.scss';
</style>


