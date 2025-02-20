<template>
  <!-- 手機版選單(置底) -->
  <div class="nav-footer">
     <div class="footer-bg" :style="{'display': mobileBg}" @click="closeNav"></div>
    <div class="nav-box">
      <ul>
        <li @click="changeMobile('type')" :class="[mobileStatus == 'type' ? 'active' : '']">
          <span class="icon"><i class="fa-solid fa-shop"></i>精選商品</span>
        </li>
         <li @click="changeMobile('social')" :class="[mobileStatus == 'social' ? 'active' : '']">
          <span class="icon"><i class="fa-solid fa-people-arrows"></i>關注社群</span>
        </li>
      </ul>
    </div>
    <div class="box-area type" :class="[mobileStatus == 'type' ? 'footer-nav-open' : '']" @click="closeNav">
      <slot name="asides"></slot>
    </div>
    <div class="box-area social" :class="[mobileStatus == 'social' ? 'footer-nav-open' : '']">
      <ul>
        <li>
          <a href="https://reurl.cc/QbZ149"  @click="closeNav" target="_blank"><i class="fa-brands fa-facebook"></i></a>
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