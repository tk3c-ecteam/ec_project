<script setup>
  const contents = [
    {
      title: 'IGD2024/images/acer/title3.png',
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
                    "menu":7351
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7352
                  },
                ],
              },
            ],
            1: [
              {
                "text":"輕薄商務",
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dic1.aspx?cid=11124&aid=5059",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7353 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7354 },
                ]
              },
            ],
            2:[
              {
                "text":"高效桌機",
                "title": "IGD2024/images/barc.png",
                "url":"https://www.tk3c.com/dic2.aspx?cid=114130&aid=22580&hid=114677",
                "menu":7356
              }
            ]
          }
        ],
        proBig:[
          {
            image:"IGD2024/images/acer/pd_229095.png",
            url:"https://www.tk3c.com/pt.aspx?pid=229095"
          },
          {
            image:"IGD2024/images/acer/pd_245544.png",
            url:"https://www.tk3c.com/pt.aspx?pid=245544"
          },
          {
            image:"IGD2024/images/acer/pd_248827.png",
            url:"https://www.tk3c.com/pt.aspx?pid=248827"
          },
          {
            image:"IGD2024/images/acer/pd_249833.png",
            url:"https://www.tk3c.com/pt.aspx?pid=249833"
          },
        ]
    }
  ]
</script>

<template>
  <IntelCommon :contents="contents">
    <template #special>
      <swiper-slide>
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123686')" target="_blank">
          <img :src="$filters.siteUrl('IGD2024/images/acer/sp08.png')">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=121466&aid=23845')" target="_blank">
          <img :src="$filters.siteUrl('IGD2024/images/sp05_a.png')">
        </a>
      </swiper-slide>
    </template>
  </IntelCommon>
</template>
