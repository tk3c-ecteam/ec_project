<template>
  <Template618 :contents="contents">
    <template #board-image>
      <img class="pc" :src="$filters.siteUrl('3c_system/images/BOX_PC.png')" />
      <img class="mobile" :src="$filters.siteUrl('3c_system/images/BOX_M.png')" />
    </template>
    <template #content>
       <!-- 速速go -->
      <section class="sale-box scroll" titles="速速GO" id="go">
        <h2 class="title">
          <a :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">
            <img :src="$filters.siteUrl('fan_hot/images/2504/S1.png')" />
          </a>
        </h2>

        <div class="sale">
        <listF :pro="product2[menuGo]" :isSwiper="1" :name="'sale'"></listF> 
        </div>
      </section>
    </template>
  </Template618>
</template>

<script>
export default {
  data() {
    return {
      contents:[
        {
          title:'fan/images/title2.png',
          menuPro:8217,
          floors: [
            {
              image: 'fan/images/S01.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
            },
            {
              image: 'fan/images/S02.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
            },
            {
              image: 'fan/images/S03.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
            },
            {
              image: 'fan/images/S04.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
            },
            {
              image: 'fan/images/S05.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
            },
            {
              image: 'fan/images/S06_2.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
            },
            {
              image: 'fan/images/S07.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
            },
            {
              image: 'fan/images/S08.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412',
            },
            {
              image: 'fan/images/S09.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
            }
          ],
          specials:[
            {
              image:'fan/images/C01.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=124669'
            },
            {
              image:'fan/images/C02.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225'
            },
            {
              image:'fan/images/C03.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=69944'
            },
            {
              image:'fan/images/C04.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=2966&hid=5664'
            },
            {
              image:'fan/images/C05.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=115598'
            },
            {
              image:'fan/images/C06.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=17040&hid=71645'
            },
            {
              image:'fan/images/C07.png',
              url:'https://www.tk3c.com/dic2.aspx?cid=842&aid=22698&hid=116932'
            }
          ],
          menus:[8219,8221,8220,8222,8223,8224,8225,8226,8227],
        }
      ],
      today:new Date(),
      menuGo:8231 //速速go陳列編號
    }
  },
  mounted() {
    //撈取速速go樓層商品
    this.getFloorSingle(this.menuGo)
  },
}
</script>

<style lang="scss">
.special-box {
  .swiper-slide {
    width: 18.5% !important;
  }
}

.sale-box {
  .title {
    margin: 0 auto -3%;
  }
  .bg01 {
    background: #0f4761;
  }
}
/*  電腦版其他尺寸 */
@include media-query("mobile", "1600px") {
  .background {
    padding-bottom: 92%;
  } 
}
@include media-query("mobile", "992px") {
  .background {
    padding-bottom: 141vw;
  } 
  .special-box {
    .swiper-slide {
      width: 31.5% !important;
    }
  }
}
@include media-query("mobile", "576px") {
  .background {
    padding-bottom: 280vw;
  } 
  .special-box {
    .swiper-slide {
      width: 46% !important;
    }
  }
}

@include media-query("pc", "2500px") {
  .background {
    padding-bottom: 80%;
  }
}
</style>
