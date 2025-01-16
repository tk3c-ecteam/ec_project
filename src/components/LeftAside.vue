<script setup>
 const today = new Date();

 //熱門活動區
 let mainName = (today < new Date('2025/01/14')) ? '202501vip' : 'newyear2025';
 let mainUrl = `https://events.tk3c.com/events_net/${mainName}/bank.html`;
  let location = window.location.pathname.split('/');

  let events = [
    {"name":"回主會場","url": mainUrl,"class":"main"},
    {"name":"銀行優惠","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html","class":"bank"},
    {"name":"冰箱洗衣機","url":"https://events.tk3c.com/events_net/icewash2209/index.html"},
    {"name":"空調主題館","url":"https://events.tk3c.com/events_net/airConditionerLAB/index.html"},
    {"name":"電視主題館","url":"https://events.tk3c.com/events_net/2020TVforever/index.html"},
    {"name":"3C與電腦週邊","url":"https://events.tk3c.com/events_net/2024083C/index.html"},
    {"name":"黑神話悟空專區","url":"https://events.tk3c.com/events_net/WUKONG/index.html"},
    {"name":"尾牙禮品大賞","url":"https://events.tk3c.com/events_net/banquet/index.html"},
  ];

  if (location[2] == mainName) events.splice(0,1);

  if (today >= new Date('2025/01/20')) events.splice(7,1);

  const asides = defineModel('asides', {
    type: Object
  })

</script>

<template>
   <!-- 左側選單 -->
  <aside class="aside-container left">
    <span class="collaspe"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(event,e) in events"  :class="[event.class ? event.class :'']">
            <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

   <!-- 手機版選單 -->
  <mobile3>
    <!-- 熱門活動 -->
    <template #events>
       <ul>
        <li v-for="event in events" :class="[event.class ? event.class : '']">
              <a :href="$filters.addGALink(event.url)">{{ event.name }}</a>
            </li>
      </ul>
    </template>

    <!-- 上方快速選單 -->
    <template #topAsides>
       <ul>
        <li v-for="aside in asides">
          <a :href="aside.href">{{ aside.text }}</a>
        </li>
      </ul>
    </template>
  </mobile3>
</template>