<template>
  <Template618 :contents="contents">
    <template #items>
      <p class="items i1">
        <img :src="$filters.siteUrl('healthbeauty/images/item1.png')" />
      </p>
      <p class="items i2">
        <img :src="$filters.siteUrl('healthbeauty/images/item4.png')" />
      </p>
      <p class="items i3">
        <img :src="$filters.siteUrl('healthbeauty/images/item2.png')" />
      </p>
      <p class="items i4">
        <img :src="$filters.siteUrl('healthbeauty/images/item3.png')" />
      </p>
    </template>

    <template #summer-floor>
      <img :src="$filters.siteUrl('fan/images/S03_a.png')" />
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
          menuPro: 8261,
          title: 'healthbeauty/images/title619.png',
          floors: [
            {
              text: '吹風機',
              url:'https://www.tk3c.com/dic1.aspx?cid=4640&aid=2488'
            },
            {
              text: '按摩椅',
              url:'https://www.tk3c.com/dic1.aspx?cid=842&aid=2492'
            },
            {
              text: '刮鬍刀',
              url: "https://www.tk3c.com/dic1.aspx?cid=4640&aid=2489"
            },
            {
              text: '筋膜槍',
              url: "https://www.tk3c.com/dic1.aspx?cid=842&aid=2492"
            },
            {
              text: '體脂計',
              url: "https://www.tk3c.com/dic1.aspx?cid=108783&aid=23072"
            },
            {
              text: '口腔清潔',
              url: "https://www.tk3c.com/dic1.aspx?cid=4640&aid=2491"
            },
            {
              text: '便座',
              url: "https://www.tk3c.com/dic1.aspx?cid=108783&aid=23230"
            },
          ],
          menus: [8250,8251,8252,8253,8254,8255,8260]
        }
      ],
    }
  }
}
</script>

