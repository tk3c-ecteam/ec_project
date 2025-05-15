<script setup>
  //燦坤服務
  const services = [
    {"name":"燦坤聯名卡","url":"https://events.tk3c.com/events_net/tk3c_creditcard/index.html"},
    {"name":"VVIP尊榮安裝","url":"https://events.tk3c.com/events_net/2021airconditioning/index.html#/airconditioner"},
    {"name":"Apple維修中心","url":"https://events.tk3c.com/events_net/apple_service/reservation.aspx"},
    {"name":"BooBee care","url":"https://events.tk3c.com/events_net/bobeecare_2022/index.html"},
    {"name":"預約空調場勘","url":"https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2"},
    {"name":"線上估價 線下回收","url":"https://www.tk3c.com/3COldChangeNew/index.aspx"},
    {"name":"銀行優惠","url":"https://events.tk3c.com/events_net/events_net/banks/bank.html"},
    {"name":"電氣醫院","url":"https://www.tk3c.com/DrTK.aspx"},
  ];
</script>

<template>
  <li v-for="(service,s) in services" :key="s">
    <a class="word-break:keep-all" :href="$filters.addGALink(service.url)" target="_blank">{{ service.name }}</a>
   </li>
</template>