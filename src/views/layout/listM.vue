<script>
export default {
  props: ['pro']
}
</script>

<template>
  <div class="list_M bg01" v-if="pro != undefined">
    <div class="hotpro_wrapper">
      <div v-for="(proA, p) in pro.slice(0, 2)" :class="[p == 0 ? 'hotproboxL' : 'hotproboxR']">
        <a :id="`prod${proA.productid}`" :name="`prod${proA.productid}`"></a>
        <div class="hotpro_pro">
          <div class="hotpro_pic">
            <p class="icon_number"></p>
            <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
          </div>
          <div class="hotpromain">
            <div class="hotpro_sale"></div>
            <div class="hotpro_name" v-html="proA.productname"></div>
            <div class="hotpro_info" v-html="proA.Productfunc"></div>
            <div class="hotpro_price1 fred">${{ addNumComma(proA.nonmemberprice) }}</div>
            <div class="hotpro_price2">
              活動價$<span>{{ addNumComma(proA.realprice) }}</span>
            </div>
            <a :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=' + proA.productid)">
              <div class="buybtn">前往購買</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="list_special">
      <ul>
        <li v-for="(proA, pr) in pro.slice(2, pro.length)">
          <a
            :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=808673' + proA.productid)"
            :id="`prod${proA.productid}`"
            :name="`prod${proA.productid}`"
          >
            <p class="item_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" /></p>
            <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
            <storg v-html="proA.productname"></storg>
            <div class="box_price">
              <p class="icon_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>
              <strong class="txt_red fred">
                <em>${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價</i>{{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  @charset "utf-8";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/dyson/images/";
$origin: "https://events.tk3c.com/events_net/events_net/dyson/images/";

body {
  background-color: #e7e6e6;
  background-size: cover;
  overflow-x: hidden;
}

.protitle {
  height: auto;
  @include hide-text;
  margin: 0 auto 2%;
}

.bg01 {
  background: none;
  margin: 0 auto 8%;
}

.fb-fans {
  display: none;
}

#dyson-container {
  width: 100%;
  margin: 0 auto;
  padding-top: 1vw;
  .slidebox {
    position: relative;
    margin: 0 auto 0;
    .swiper-pagination {
      bottom: 2% !important;
    }
  }
}

/* header區 */
.header {
  background: black;
  color: white;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  .logo {
    width: 10%;
    height: auto;
  }
  b {
    font-size: 1.5em;
    font-weight: bold;
  }
}

/* 選單區 */

.navbar {
  background: white;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    li {
      width: 14%;
      font-size: 1.5em;
      color: #000;
      padding: 5px;
      font-weight: bold;
      &:hover,
      &:active {
        background: #6c6c6c;
        color: white;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 0;
    z-index: 999;
  }
}

/* icon按鈕區 */
.navSed {
  width: 60%;
  margin: 0 auto 2%;
  text-align: center;

  li {
    &:hover {
      transform: translateY(0.6em);
      transition: all 0.4s linear;
    }
  }
  .sed {
    margin: 0 auto 0;
    overflow: hidden;
    li {
      width: 20%;
    }
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }
}

/* 影片區 */
.youtube {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin: 0 auto 5%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  video {
    width: 100%;
  }
}

.event-box {
  li {
    width: 48%;
    margin: 0 5px;
  }
  ul {
    @include flex-arrange;
    width: 70%;
  }
}

.floor {
  .title {
    b {
      font-size: 0;
    }
  }
}

/* 其他尺寸 */
@include media-query("mobile", "1440px") {
  .navbar {
    ul {
      li {
        width: 15%;
      }
    }
  }
}
@include media-query("mobile", "1280px") {
  .navbar {
    ul {
      li {
        font-size: 1.2em;
      }
    }
  }

  #dyson-container {
    padding-top: 3%;
  }
}
@include media-query("mobile", "1145px") {
  .navbar {
    ul {
      li {
        font-size: 1em;
      }
    }
  }
}

@include media-query("mobile", "992px") {
  .navbar {
    ul {
      li {
        font-size: 0.9em;
      }
    }
  }

  .header {
    b {
      font-size: 1em;
    }
    .logo {
      width: 12%;
    }
  }

  #dyson-container {
    padding-top: 5%;
  }

  .event-box {
    ul {
      width: 85%;
    }
  }

  .navSed {
    width: 90vw;
  }
}
@include media-query("mobile", "768px") {
  .header {
    .logo {
      width: 14%;
    }
  }
  body {
    background-position: 0 30vmin, top;
  }
}

@include media-query("mobile", "576px") {
  .header {
    .logo {
      width: 25%;
    }
    b {
      font-size: 18px;
    }
  }

  body {
    background-position: 0 85vmin, top;
  }

  .navbar {
    display: none;
  }

  #dyson-container {
    padding-top: 11%;
  }

  .event-box {
    ul {
      width: 95%;
    }
    li {
      width: 47%;
    }
  }

  .youtube {
    margin: 0 auto 10%;
  }
}

@include media-query("mobile", "360px") {
  .header {
    .logo {
      font-size: 1.5em;
      line-height: 2em;
    }
  }
}

@include media-query("mobile", "320px") {
  .copyR {
    margin-bottom: 50px !important;
  }

  .header {
    b {
      font-size: 12px;
    }
  }

  .event-box {
    li {
      margin: 0 4px;
    }
  }
}

@include media-query("pc", "2500px") {
  body {
    background-position: 0 -25vmax, top;
  }
}

</style>