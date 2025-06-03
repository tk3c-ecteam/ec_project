<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today >= new Date('2025/06/01')) ? '2025618videoparty' : 'awesomepet',
  mainUrl = `https://events.tk3c.com/events_net/${mainName}/index.html`,
   location = window.location.pathname.split('/'),
  folderName = (location[2] == 'events_net') ? location[3] : location[2],
  main = null,
  statusTopic = null;

  let topics = [
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/coolcleantech/index.html"},
    {"name":"空調主題館","url":"https://events.tk3c.com/events_net/airconditioner/index.html"},
    {"name":"電視主題館","url":"https://events.tk3c.com/events_net/tv_media/index.html"},
    {"name":"3C電腦週邊","url":"https://events.tk3c.com/events_net/3c_system/index.html"},
    {"name":"風扇與熨燙","url":"https://events.tk3c.com/events_net/fan/index.html"},
    {"name":"綠點10倍送","url":"https://events.tk3c.com/events_net/green_subsidy/index.html"},
    {"name":"夜深價更深","url":"https://events.tk3c.com/events_net/nightsale/index.html"},
    {"name":"福利品特賣","url":"https://events.tk3c.com/events_net/OUTLET/index.html"},
    {"name":"電競專區","url":"https://events.tk3c.com/events_net/GamingRace/index.html"},
  ];

  let topic618 = [
    {"name":"辦公用品","url":"https://events.tk3c.com/events_net/office3c/index.html"},
    {"name":"健康美容","url":"https://events.tk3c.com/events_net/healthbeauty/index.html"},
    {"name":"廚房家電","url":"https://events.tk3c.com/events_net/kitchen3c/index.html"},
    {"name":"行動通訊","url":"https://events.tk3c.com/events_net/mobile3c/index.html"},
    {"name":"戶外休閒","url":"https://events.tk3c.com/events_net/outdoor3c/index.html"},
  ];

  if (today >= new Date('2025/06/04')) {
    topics = topics.concat(...topic618);
  }

  switch (folderName) {
    case 'icewash2209':
    case 'coolcleantech':
      statusTopic = 0;
      break;

    case 'airConditionerLAB':
    case 'airconditioner':
      statusTopic = 1;
      break;

    case '2020TVforever':
    case 'tv_media':
      statusTopic = 2;
      break;

    case '2024083C':
    case '3c_system':
      statusTopic = 3;
      break;

    case 'fan_hot':
    case 'fan':
      statusTopic = 4;
      break;

    case 'green_subsidy':
      statusTopic = 5;
      break;

    case 'nightsale':
      statusTopic = 6;
      break;

    case 'GamingRace':
      statusTopic = 8;
      break;  

    case 'office3c':
      statusTopic = 9;
      break;

    case 'healthbeauty':
      statusTopic = 10;
      break;

    case 'kitchen3c':
      statusTopic = 11;
      break;

    case 'mobile3c':
      statusTopic = 12;
      break;

    case 'outdoor3c':
      statusTopic = 13;
      break;
  } 

  if (folderName != mainName) {
    main = true;
    topics.splice(statusTopic,1);
  }

  //手機版類型
  //預設: mobile3 
  const type = defineModel('type', {
    type: String,
    default:'mobile3'
  });

  //3c頁樓層錨點
  const go3cFloor = defineModel('go3cFloor',{
    type:Function
  });

  // 自訂右側選單樓層標題項目
   const asideExtra = defineModel('asideExtra',{
    type:Object
  });
</script>

<script>
export default {
  data() {
    return {
      swiper: null,
      status: null,
      itemNum: '',
      asides: []
    }
  },
  mounted() {
    //左右側選單顯示隱藏
    window.addEventListener('scroll', this.showAside);
    if (this.go3cFloor === undefined) window.addEventListener('scroll', this.scrollPos);
  },
  beforeUpdate() {
    //確保 DOM 更新後再取得樓層標題和 ID
    this.asides = this.getFloorTitle('section.scroll');
    // 如果是自訂的選單項目則覆蓋舊有的
    if (this.asideExtra) this.asides = this.asideExtra;
  },
  unmounted() {
    window.removeEventListener('resize', this.smallDeviceLeft);
    window.removeEventListener('scroll', this.scrollPos);
  },
  methods: {
    scrollPos() {
      //先取得第一個區域px位置
      const sectionS = document.querySelectorAll('section.scroll');
      if (sectionS.length === 0) return;
      if (sectionS[0].getBoundingClientRect() === undefined) return;

      const sectionTop = sectionS[0].getBoundingClientRect().top,
        scrollTop = window.scrollY;

      this.itemNum = 'auto';
      sectionS.forEach((el, i) => {
        const top = el.getBoundingClientRect().top + scrollTop - 150,
               bottom = top + window.innerHeight;

        // 當前滾動位置是否在所在的區域內
        if (scrollTop > top && scrollTop < bottom) {
          this.status = i;
          this.goSlide(i);
        }
      });

      // 當滾動位置在第一區域，則重置狀態
      if (scrollTop < sectionTop) {
        this.status = null;
        this.goSlide(0);
      }
    },
    onSwiper(swiper) {
      this.swiper = swiper
    },
    goSlide(id) {
      this.swiper.slideTo(id);
    }
  },
}
</script>

<template>
   <!-- 左側選單 -->
  <aside class="aside-container left" v-show="isAsideTop" :class="{'close-left': isLeftAside}">
    <span class="collaspe" @click="switchLeftAside">
      <i v-if="!isLeftAside" class="fas fa-chevron-left"></i>
      <i v-else class="fas fa-chevron-right"></i>
    </span>  
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content rt:15px box:border-box bg:#000000b8">
        <ul class="flex flex:wrap jc:flex-start">
          <li class="main color:#fff f:bold" v-if="main">
            <a class="bg:#767070!" :href="$filters.addGALink(mainUrl)" target="_blank">回主會館</a>
          </li>
           <li v-for="(topic,t) in topics" :class="{'br:2px|solid|#fff': t % 2 == 0}" class="w:48%! m:0|1px! p:0|4px box:border-box" :key="t">
            <a class="bg:none! word-break:keep-all text:ellipsis overflow:hidden box:border-box" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
            <em v-if="t != topics.length -1 && t != topics.length - 2" class="w:95% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
           </li>
           <li v-if="asides" class="color:#fff bg:#767070 f:bold mb:5px">熱門品類</li>
           <li v-for="(aside, a) in asides" class="w:48%! m:0|1px! p:0|5px box:border-box" :class="{'stay': status == a,'br:2px|solid|#fff': a % 2 == 0}" :key="a">
              <a class="bg:none! word-break:keep-all white-space:nowrap text:ellipsis overflow:hidden box:border-box" :href="aside.href">{{ aside.text }}</a>
              <em v-if="a != asides.length - 1 && a != asides.length - 2" class="w:95% h:auto block m:auto bb:2px|solid|#fff rel box:border-box"></em>
           </li>
        </ul>
      </div>
      <a href="#" class="go-top" @click="goTop">GO TOP</a>
    </div>
  </aside>

   <!-- 手機版選單 置頂 -->
  <mobile3 v-if="type == 'mobile3'">
    <!-- 主會場 -->
    <template v-slot:main="{ closeNav2 }">
      <li v-if="main != null" @click="closeNav2">
         <a :href="$filters.addGALink(mainUrl)" target="_blank">主會館</a>
      </li>
    </template>

    <!-- 主題活動館 -->
    <template #topic>
       <ul>
        <li v-for="(topic,t) in topics" :key="t" class="w:31%!">
              <a class="word-break:keep-all" :href="$filters.addGALink(topic.url)" target="_blank">{{ topic.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 燦坤服務 -->
     <template #service>
      <ul>
        <Service></Service>
      </ul>
     </template>

    <!-- 上方快速選單 -->
    <template #topAsides>
      <swiper
      :loop="false"
      :spaceBetween="10"
      :slidesPerView="itemNum"
      @swiper="onSwiper"
      >
      <swiper-slide v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}" class="color:#ffe400.active width:fit-content!">
         <a v-if="go3cFloor" @click="go3cFloor(aside.id,aside.href)">{{ aside.text }}</a>
          <a v-else :href="aside.href">{{ aside.text }}</a>
      </swiper-slide>
      </swiper>
    </template>
    <template #mobileList>
       <ul class="grid-cols:2">
        <li v-for="(aside,a) in asides" :key="a" :class="{'active': status == a}">
           <a v-if="go3cFloor" @click="go3cFloor(aside.id,aside.href)">{{ aside.text }}</a>
          <a v-else :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile3>
</template>

<style lang="scss">
  .mobile-for-product{
    &.open {
      ul {
        li {
          width: auto;
          margin: 0 3px 5%;
        }
      }
    }
    .switch {
      top: 0;
    }
  }
</style>