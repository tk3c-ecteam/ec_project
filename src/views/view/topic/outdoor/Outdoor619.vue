<template>
  <Template618 :contents="contents">
    <template #items>
        <p class="items i1">
          <img :src="$filters.siteUrl('outdoor3c/images/item1.png')" />
        </p>
        <p class="items i2">
          <img :src="$filters.siteUrl('outdoor3c/images/item2.png')" />
        </p>
        <p class="items i3">
          <img :src="$filters.siteUrl('outdoor3c/images/item3.png')" />
        </p>
      </template>

      <template #summer-floor>
        <img :src="$filters.siteUrl('fan/images/S01_a.png')" />
      </template>
  </Template618>
</template>

<script>
export default {
  data() {
    return {
      today: new Date(),
      contents: [
        {
          type:'summer-other',
          menuPro: 8317,
          title: 'outdoor3c/images/title619_a.png',
          floors: [
            {
              text: '空拍機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=111126'
            },
            {
              text: '運動攝影機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=11703'
            },
            {
              text: '相機/鏡頭',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=111962'
            },
            {
              text: '機車',
              url: "https://www.tk3c.com/dic1.aspx?cid=111383&aid=22330"
            },
            {
              text: '機車百貨',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=111383'
            },
            {
              text: '儲能行動電源',
              url: "https://www.tk3c.com/dic2.aspx?cid=118048&aid=23498&hid=122900"
            },
            {
              text: '隨身風扇',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
            },
            {
              text: '防蚊商品',
              url: "https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677"
            },
          ],
          menus: [8293,8294,8295,8296,8297,8298,8299,8300]
        }
      ],
    }
  }
}
</script>

