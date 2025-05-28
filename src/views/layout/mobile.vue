<template>
  <!-- 手機版選單(置底) -->
  <div class="nav-footer">
     <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li @click="changeMobile('type')" :class="[mobileStatus == 'type' ? 'active' : '']">
         熱門品類
        </li>
         <li @click="changeMobile('social')" :class="[mobileStatus == 'social' ? 'active' : '']">
          關注社群
        </li>
      </ul>
    </div>
    <div class="box-area type" :class="[mobileStatus == 'type' ? 'footer-nav-open' : '']" @click="closeNav">
      <slot name="asides"></slot>
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