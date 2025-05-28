<template>
  <Template618 :contents="contents">
    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('3c_system/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('3c_system/images/BOX_M.png')" />
    </template>

    <template #content>
      <!-- 速速go -->
      <section class="sale-box scroll" titles="速速go" id="go">
        <h2 class="title">
          <a :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
            <img :src="$filters.siteUrl('fan_hot/images/2504/S1.png')" />
          </a>
        </h2>

        <div class="sales">
          <listF :pro="product2[menuGo]" :isSwiper="1" :name="'sale'"></listF>
        </div>
      </section>
    </template>
  </Template618>
</template>

<script>
import listM from "@/views/layout/listM.vue";
export default {
  data() {
    return {
      listM,
      contents:[
        {
          title:'fan/images/title.png',
          menuPro:8217,
          floors: [
            {
              image: 'fan_hot/images/2505/bar_01.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
            },
            {
              image: 'fan_hot/images/2505/bar_03.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
            },
            {
              image: 'fan_hot/images/2505/bar_04.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
            },
            {
              image: 'fan_hot/images/2505/bar_05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
            },
            {
              image: 'fan_hot/images/2505/bar_11.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
            },
            {
              image: 'fan_hot/images/2505/bar_07.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
            },
            {
              image: 'fan_hot/images/2505/bar_08.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
            },
            {
              image: 'fan_hot/images/2505/bar_09.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
              type: listM
            },
            {
              image: 'fan_hot/images/2505/bar_10.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
              isSwiper: 1
            }
          ],
          menus:[8219,8221,8220,8222,8223,8224,8225,8226,8227],
        }
      ],
      menuGo:8218, //速速go陳列標題
      today:new Date(),
    }
  },
  mounted() {
    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  }
}
</script>

<style lang="scss">

/*  共用樣式調整 */
.bg01 {
  background: none;
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
}

/* 手機版 */
@include media-query("mobile", "576px") {
}

</style>
