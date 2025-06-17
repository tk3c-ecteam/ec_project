<template>
  <Template618 :contents="contents">
    <template #items>
      <p class="items i1">
        <img :src="$filters.siteUrl('mobile3c/images/item1.png')" />
      </p>
      <p class="items i2">
        <img :src="$filters.siteUrl('mobile3c/images/item2.png')" />
      </p>
      <p class="items i3">
        <img :src="$filters.siteUrl('mobile3c/images/item3.png')" />
      </p>
      <p class="items i4">
        <img :src="$filters.siteUrl('mobile3c/images/item4.png')" />
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
          menuPro: 8274,
          title: 'mobile3c/images/title619_a.png',
          floors: [
            {
              text: '智慧型手機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=12406'
            },
            {
              text: '平板電腦',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=10890'
            },
            {
              text: '藍牙耳機',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=118133'
            },
            {
              text: '智慧穿戴',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=40343"
            },
            {
              text: '行動電源',
              url:'https://www.tk3c.com/dictitleurl.aspx?cid=112782'
            },
            {
              text: '週邊配件',
              url: "https://www.tk3c.com/dictitleurl.aspx?cid=28825"
            },
          ],
          menus: [8275,8276,8277,8278,8279,8280]
        }
      ],
    }
  }
}
</script>

<style lang="scss">
 body {
    background: #cfffcd;
  }

  .bg01 {
    background: #1084ec;
  }

  .floor {
    .title {
      b {
        top: 50%;
      }
    }
  }

  @include media-query("mobile", "1600px") {
    .background {
      &.summer-other {
        .items {
          &.i1 {
            top: 15%;
          }
          &.i2 {
            top: 22%;
            left: 2%;
          }
          &.i3 {
            left: 7%;
          } 
          &.i4 {
            top: 69%;
          }
        }
      }
    }
  }

  @include media-query("mobile", "992px") {
    .background {
      &.summer-other {
        .items {
          &.i1 {
            top: 13vw;
            left: 13vw;
          }
          &.i2 {
            top:29vw;
            left: 2vw;
          }
          &.i3 {
            left: unset;
            right: 2vw;
          }
          &.i4 {
            top: 61vw;
            left: -2vw;
          }
        }
      }
    }
  }
</style>

