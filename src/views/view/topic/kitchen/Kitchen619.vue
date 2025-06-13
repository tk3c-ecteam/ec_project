<template>
  <Template618 :contents="contents">
    <template #items>
      <p class="items i1">
        <img :src="$filters.siteUrl('kitchen3c/images/item1.png')" />
      </p>
      <p class="items i2">
        <img :src="$filters.siteUrl('kitchen3c/images/item2.png')" />
      </p>
      <p class="items i3">
        <img :src="$filters.siteUrl('kitchen3c/images/item3.png')" />
      </p>
      <p class="items i4">
        <img :src="$filters.siteUrl('kitchen3c/images/item4.png')" />
      </p>
    </template>

    <template #summer-floor>
      <img :src="$filters.siteUrl('fan/images/S2_a.png')" />
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
          menuPro: 8264,
          title: 'kitchen3c/images/title619.png',
          floors: [
            {
              text: '微波爐',
              url: "https://www.tk3c.com/dic1.aspx?cid=83186&aid=18682"
            },
            {
              text: '洗/烘碗機',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=119202"
            },
            {
              text: '電鍋/萬用鍋',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=83185"
            },
            {
              text: '烤箱',
              url: "https://www.tk3c.com/dic1.aspx?cid=83186&aid=18680"
            },
            {
              text: '氣炸鍋',
              url: "https://www.tk3c.com/dic2.aspx?cid=83186&aid=18681&hid=83363"
            },
            {
              text: '熱水瓶',
              url: "https://www.tk3c.com/dic1.aspx?cid=83187&aid=18721"
            },
            {
              text: '咖啡機',
              url: "https://www.tk3c.com/dic1.aspx?cid=83187&aid=18700"
            },
            {
              text: '淨水/濾水',
              url: "https://www.tk3c.com/dic1.aspx?cid=83188&aid=19820"
            },
            {
              text: '果汁/調理機',
              url: "https://www.tk3c.com/dic1.aspx?cid=83188&aid=4963"
            },
          ],
          menus: [8265,8266,8267,8268,8269,8270,8271,8272,8273]
        }
      ]
    }
  }
}
</script>
