<template>
  <!-- 手機版上方選單 -->
  <div class="nav-footer">
    <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li class="w:full!" @click="changeMobile('social')" :class="[mobileStatus == 'soical' ? 'active' : '']">關注社群</li>
      </ul>
    </div>

    <!-- 關注社群 -->
    <div class="box-area social" :class="[mobileStatus == 'social' ? 'footer-nav-open' : '']">
      <ul>
        <li><a href="https://reurl.cc/QbZ149" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="https://reurl.cc/7pMZVl" target="_blank"><i class="fa-brands fa-line"></i></a></li>
        <li><a href="https://reurl.cc/3Ye8kX" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>

  <!-- go top -->
  <a class="gotop-mobile" :class="{'isShow':isGoTop}" @click="goTop"></a>

  <div class="mobile-for-product" :class="{'open': isMobileOpen}">
    <div v-if="isMobileOpen" @click="changeNav" class="abs w:full h:full left:0 top:0 z:-1"></div>
    <div class="top-nav">
      <div v-if="!isMobileOpen"><slot name="topAsides"></slot></div>
    </div>
    <a class="switch" @click="switchMobile">
      <i v-if="!isMobileOpen" class="fa-solid fa-angle-down"></i>
      <i v-else class="fa-solid fa-angle-up"></i>
    </a>
    <div v-if="isMobileOpen">
      <div @click="changeNav" class="bg:#1e1d1de0 pl:15px box:border-box">
        <slot name="mobileList"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener('scroll',this.showMobileTop);
    },
    beforeUnmount() {
        window.removeEventListener('scroll',this.showMobileTop);
     }
  }
</script>