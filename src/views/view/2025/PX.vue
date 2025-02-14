<script>
  export default {
    data() {
      const today = new Date();
       const future = new Date('2025/02/13');
      return{
        time:future - today,
        specials: [
        {image:"PXDAY/images/DATE01.png",start:new Date('2025/02/13'),end:new Date('2025/02/14')},
        {image:"PXDAY/images/DATE02.png",start:new Date('2025/02/14'),end:new Date('2025/02/15')},
        {image:"PXDAY/images/DATE03.png",start:new Date('2025/02/15'),end:new Date('2025/02/16')},
        {image:"PXDAY/images/DATE04.png",start:new Date('2025/02/16'),end:new Date('2025/02/17')}
      ],
      gifts: [
        { image: "PXDAY/images/g1.png", "url": "https://www.tk3c.com/pt.aspx?pid=249949-217692" },
        { image: "PXDAY/images/g2.png", "url": "https://www.tk3c.com/pt.aspx?pid=213194-244004" },
        { image: "PXDAY/images/g3.png", "url": "https://www.tk3c.com/pt.aspx?pid=253105-237655" },
        { image: "PXDAY/images/g4.png", "url": "https://www.tk3c.com/pt.aspx?pid=237655-245688" },
        { image: "PXDAY/images/g5.png", "url": "https://www.tk3c.com/pt.aspx?pid=245688-240929-30" },
      ],
      floors: [
        { "image": 'PXDAY/images/S03.png' },
        { "image": 'PXDAY/images/S04_2.png'},
        { "image": 'PXDAY/images/S05.png' },
        { "image": 'PXDAY/images/S06.png' },
      ],
       menu: [7797,7798,7799,7800],
       menuSP:[7801,7802,7803,7804],
       now:new Date(),
       isOff:true,
       isOpen:false,
       statusTab:0
      }
    },
    mounted() {
      const { now,specials } = this;
      if (now >= new Date('2025/02/13')) {
        this.isOpen = true;
        this.isOff = false;
      }

      //撈取限時大禮包商品樓層
      this.getFloorData(this.menuSP);

      for(let i = 0; i < specials.length; i++) {
         if(now < specials[i].start) {
          document.querySelectorAll('.special-box .tab-content')[i].classList.add('incoming');
        } else if(now >= specials[i].start && now < specials[i].end){
          this.statusTab = i;
          document.querySelectorAll('.special-box .tab-content')[i].classList.remove('incoming');
        }
      }

    },
    methods: {
      changeTab(id) {
        this.statusTab = id;
      }
    },
  }
</script>

<template>
  <div id="px-container">
    <div class="background" v-if="isOpen">
      <h2 class="title">
         <img :src="$filters.siteUrl('PXDAY/images/tt.png')">
      </h2>
      <h5 class="subtitle">
        <img :src="$filters.siteUrl('PXDAY/images/subtitle.png')">
      </h5>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('PXDAY/images/item.png')">
    </p>

    <!-- 時間倒數 -->
    <div v-show="isOff" class="time-box">
      <vue-countdown :time="time" :interval="1000" v-slot="{ days, hours, minutes, seconds }">
        <p><b>開賣倒數:</b> <em>{{ days }}</em> 天 <em>{{ hours }}</em> 時 <em>{{ minutes }}</em> 分 <em>{{ seconds }}</em> 秒
        </p>
      </vue-countdown>
    </div>

    <section v-show="isOff">
      <picture>
        <img :src="$filters.siteUrl('PXDAY/images/px.jpg')">
      </picture>
    </section>

    <div v-show="isOpen">
      <!-- 限量 -->
      <section class="special-box scroll" titles="限量搶手速" id="special">
        <h2 class="title">
          <img :src="$filters.siteUrl('PXDAY/images/S01.png')" />
        </h2>

        <ul class="tab mb:2%">
          <li v-for="(sp,s) in specials" :class="[statusTab == s ? 'active' : '']" class="w:17.5% w:25%@<992 w:25%@<576 hue-rotate(180deg).active">
            <a @click="changeTab(s)"><img :src="$filters.siteUrl(sp.image)"></a>
          </li>
        </ul>

        
          <div class="tab-content" v-for="(sp, s) in specials" v-show="statusTab == s">
            <listM v-if="products[menuSP[s]] != undefined" :pro="products[menuSP[s]].Data"></listM>
          </div>
      </section>

      <!-- 限時大禮包 -->
      <section class="gift-box scroll" titles="限時大禮包" id="gift">
        <h2 class="title">
          <img :src="$filters.siteUrl('PXDAY/images/S02.png')" />
        </h2>

        <ul class="gap:10">
          <li v-for="gift in gifts" class="w:40% w:45%@<992 w:full@<576 mb:2%">
            <a :href="$filters.addGALink(gift.url)" target="_blank"><img :src="$filters.siteUrl(gift.image)"></a>
          </li>
        </ul>
      </section>

      <!-- 其他樓層 -->
      <CommonFloor :isSwiper="1" :floors="floors" :menu="menu"></CommonFloor>
    </div>
  </div>

  <div class="custom-top" v-if="isOff">
    <p></p>
  </div>

  <!-- 右側選單+手機板 -->
  <RightAside v-if="isOpen" :asides="asides" :type="'mobile'"></RightAside>
</template>

<style lang="scss">
@charset "utf-8";
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/PXDAY/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/PXDAY/images/';

/*  共用樣式調整 */
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

body {
  background: #95d1ee;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }


  .bg01 {
    background: #e8435a;
  }

  .floor {
    .title {
      b {
        display: none;
      }
    }
  }

#px-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 45%;
    .title {
      width: 30%;
      position: absolute;
      left: 17%;
      top: 16%;
      animation: bg-wave3 0.6s ease-in;
    }
    .subtitle {
      width:35%;
      position: absolute;
      left: 16%;
      top: 46%;
    }
  }
}

.time-box {
  margin: 5% auto 1%;
  p {
    font-size: 3em;
    font-weight: bold;
    color: #000;
  }
  em {
    font-size: 1.5em;
    color: #e84a95;
    font-weight: bold;
  }
}

.special-box {
  .title {
    width: 70%;
    margin: 0 auto 0;
  }
  .tab-content {
    position: relative;
    &.incoming {
     &:before {
      content: "尚未開放";
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        background: #0000009e;
        left: 0;
        right: 0;
        z-index: 20;
        color: #ffcd01;
        margin: 0 auto;
        font-size: 3em;
        line-height: 55px;
        white-space: pre;
        justify-content: center;
        align-items: center;
     }
    }
    .list_M {
      .hotpro_wrapper {
        justify-content: center;
      }
    }

    &:first-of-type {
      .list_M {
        .hotpro_wrapper {
          justify-content: left;
        }
      }
    }
  }
}



/*  電腦版其他尺寸 */
/* 手機版 */
@include media-query('mobile', '992px') {
  .time-box {
    p {
      font-size: 2.2em;
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position: -10vw 4vw,top;
    }
  }

  #px-container {
    .background {
      padding-bottom: 60%;
      .title {
        width: 45%;
        left: 6vw;
        top: 9vw;
      }
      .subtitle {
        width: 50%;
        left: 6vw;
        top: 30vw;
      }
    }
  }

  .special-box {
    .title {
      width: 100%;
    }
  }
}
@include media-query('mobile', '576px') {
 .time-box {
    margin: 45px auto 1%;
  b {
    display: block;
    font-size: 1.5em;
  }
  p {
    font-size: 1.5em;
  }
 }

 body {
  &:before {
    background-size: 220% auto;
    background-position: -12vw 10vw,top;
  }
 }

 #px-container {
  .background {
    padding-bottom: 110%;
    .title {
      width: 90%;
      left: 0;
      right: 0;
      top: 15vw;
      margin: 0 auto;
    }
    .subtitle {
      width: 100%;
      left: 0;
      right: 0;
      top: 56vw;
      margin: 0 auto;
    }
  }
 }

}


</style>
