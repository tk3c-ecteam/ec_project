<script>
  export default {
    mounted() {
      window.addEventListener('scroll',this.showMobileTop);
      window.addEventListener('scroll',this.scrollToPos);
    },
    beforeUnmount() {
        window.removeEventListener('scroll',this.showMobileTop);
    }
  }
</script>

<template>
  <!-- 手機版選單(有熱門活動版本) -->
  <div class="nav-footer">
    <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li @click="changeMobile('event')" :class="[mobileStatus == 'event' ? 'active' : '']">熱門活動</li>
        <li @click="changeMobile('social')" :class="[mobileStatus == 'social' ? 'active' : '']">關注社群</li>
      </ul>
    </div>

   <div class="box-area event" :class="[mobileStatus == 'event' ? 'footer-nav-open' : '']">
     <slot name="events"></slot>
    </div>

    <div class="box-area social" :class="[mobileStatus == 'social' ? 'footer-nav-open' : '']">
      <ul>
        <li>
          <a href="https://reurl.cc/QbZ149" @click="closeNav" target="_blank"><i class="fa-brands fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://reurl.cc/7pMZVl" @click="closeNav" target="_blank"><i class="fa-brands fa-line"></i></a>
        </li>
        <li>
          <a href="https://reurl.cc/3Ye8kX" @click="closeNav" target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>

  <!-- go top -->
  <a class="gotop-mobile" :class="{'isShow':isGoTop}" @click="goTop"></a>

  <div class="mobile-for-product" :class="{'open':isMobileOpen}">
    <div class="top-nav" ref="scrollDis" @click="closeNav">
      <h3 class="title">快速選單</h3>
      <slot name="topAsides"></slot>
    </div>
    <a class="switch" @click="switchMobile">
      <i v-if="!isMobileOpen" class="fa-solid fa-angle-down"></i>
      <i v-else class="fa-solid fa-xmark"></i>
    </a>
  </div>
</template>
