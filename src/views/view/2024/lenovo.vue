<script setup>
  const contents = [
    {
      title: 'IGD2024/images/lenovo/title3.png',
      tabs:[
          {
            0: [
              {
                "text":"飆速電競",
                "title": "IGD2024/images/bara.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=117913",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, 
                  "image": "IGD2024/images/bna01.png" ,
                    "menu":7371
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7372
                  },
                ],
              },
            ],
            1: [
              {
                "text":"輕薄商務",
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=11124",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7373 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7374 },
                ]
              },
            ]
          }
        ],
        proBig:[
          {
            image:"IGD2024/images/lenovo/pd_243164.png",
            url:"https://www.tk3c.com/pt.aspx?pid=243164"
          },
          {
            image:"IGD2024/images/lenovo/pd_239795.png",
            url:"https://www.tk3c.com/pt.aspx?pid=239795"
          },
          {
            image:"IGD2024/images/lenovo/pd_247850.png",
            url:"https://www.tk3c.com/pt.aspx?pid=247850"
          },
          {
            image:"IGD2024/images/lenovo/pd_248562.png",
            url:"https://www.tk3c.com/pt.aspx?pid=48562"
          },
        ]
    }
  ]
</script>


<template>
    <IntelCommon :contents="contents">
    <template #special>
      <swiper-slide>
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11124&aid=5261')" target="_blank">
          <img :src="$filters.siteUrl('IGD2024/images/lenovo/sp08.png')">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=121466&aid=23844')" target="_blank">
          <img :src="$filters.siteUrl('IGD2024/images/sp05_1_b.png')">
        </a>
      </swiper-slide>
    </template>
  </IntelCommon>
</template>

