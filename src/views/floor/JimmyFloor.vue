<!-- 
 * 吉米後台樓層撈取
 * id: 吉米後台樓層編號 (必要 如:電視頁面 7769->房東精選專區) :id="7769"
 * name: 輪播左右箭頭的class名稱 (有的話才寫) :name="'dis'"
 * isSwiper:是否要輪播 (有的話才寫 :isSwiper=1)
 -->
<script>
  export default {
    props:['id','name','isSwiper','breakpoint'],
    data() {
      return {
        Bg01Html:'',
        BgLiHtml:'',
        BgLiSlide:'',
        bg01Type:'',
        breakpoints:{
          0: {
            slidesPerView: 2
          },
          601: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          }
        },// swiper輪播預設
      }
    },
    mounted() {
      const { id } = this;

        if (this.breakpoint) this.breakpoints = this.breakpoint;

      if (document.querySelectorAll('.wrapper .bg01').length > 0) {
        //用樓層id來找它下一個.bg01 #pro7769 -> .bg01

        if (id != null) {
          let protitle = document.querySelector('#pro' + id).parentNode;
          if (protitle.nextElementSibling == null) return false;
         
          //取得.bg01樓層
          this.Bg01Html = protitle.nextElementSibling;
         
          //撈取樓層版型 如:list_F list_M
          this.bg01Type = protitle.nextElementSibling.getAttribute('class').substring(0, 6);
       
          //將樓層猜分li 做輪播
          this.BgLiSlide = protitle.nextElementSibling.querySelectorAll('li');
          let listMPro = protitle.nextElementSibling.querySelectorAll('.hotproboxL,.hotproboxR'),
          listBoxHBig = protitle.nextElementSibling.querySelectorAll('.boxH_big li'),
          listBoxHSmall = protitle.nextElementSibling.querySelectorAll('.boxH_s li');
          
          //各商品版型價錢加入千分號、不顯示市價=活動價
         if (this.bg01Type == 'list_F') this.modifyListF(this.BgLiSlide);
         if (this.bg01Type == 'list_M') this.modifyListM(listMPro);
         if (this.bg01Type == 'list_D') this.modifyListD(this.BgLiSlide);
         if (this.bg01Type == 'list_H') {
          this.modifyListH(listBoxHBig);
          this.modifyListH(listBoxHSmall);
         }
         
          
          //移除原樓層商品
          protitle.nextElementSibling.remove();
        } else {
          console.log('#pro' + id + '不存在'); return false;
        }
      }
    },
    beforeUpdate() {
      this.removeProtitle();
    },
    methods: {
      // listF 4小版型
      modifyListF(list) {
         list.forEach((Li, i) => {
            let LiText = Li.querySelector('h4').textContent,
              LiStrong = Li.querySelector('strong').innerHTML,
              LiStrongText = Li.querySelector('strong').innerText,
              LiStrongEM = Li.querySelector('strong em').innerText,
              price1 = LiStrongText.split('活動價$')[1],
              price2 = LiStrongEM.substring(3);
            //沒有促銷文加入空白  
            if (LiText == '') Li.querySelector('h4').classList.add('empty');
            //商品價錢加入千分位
            Li.querySelector('strong').innerHTML = this.addNumComma(LiStrong);
            //市價和活動價相同，不顯示市價
            if (price1 == price2) {
              LiStrongEM = ' ';
              Li.querySelector('strong em').innerHTML = LiStrongEM;
            }
          });
      },
      //listM 2凸4小修改
      modifyListM(list) {
         list.forEach((Li, i) => {
            let LiText = Li.querySelector('.hotpro_sale').textContent,
              LiPriceText = Li.querySelector('.hotpro_price1').innerText,
              LiPrice2Text = Li.querySelector('.hotpro_price2 span').innerText,
              price1 = LiPriceText.substring(2);
              
            //沒有促銷文加入空白  
            if (LiText == '') LiText = ' '; Li.querySelector('.hotpro_sale').innerHTML = LiText;
            //商品價錢加入千分位
            Li.querySelector('.hotpro_price2 span').innerHTML = this.addNumComma(LiPrice2Text);
            //市價和活動價相同，不顯示市價
            if (price1 == LiPrice2Text) {
              LiPriceText = ' ';
              Li.querySelector('.hotpro_price1').innerHTML = LiPriceText;
            }
          });
      },
      //listD 5小板型
      modifyListD(list) {
         list.forEach((Li, i) => {
            let LiText = Li.querySelector('h4').textContent,
              LiPice1 = Li.querySelector('.fgray').innerText,
              LiPrice2 = Li.querySelector('.itemD_text span').innerText,
              price1 = LiPice1.substring(3);
            //沒有促銷文加入空白  
            if (LiText == '') Li.querySelector('h4').classList.add('empty');
            //商品價錢加入千分位
            Li.querySelector('.fgray').innerHTML = this.addNumComma(LiPice1);
            Li.querySelector('.itemD_text span').innerHTML = this.addNumComma(LiPrice2);
            //市價和活動價相同，不顯示市價
            if (price1 == LiPrice2) {
              LiPice1 = ' ';
              Li.querySelector('.fgray').innerHTML = LiPice1;
            }
          });
      },
       //listD 2凸3小板型
      modifyListH(list) {
         list.forEach((Li, i) => {
           if (Li.querySelector('.boxH_word h4') == null) return false;
            let LiText = Li.querySelector('.boxH_word h4').textContent,
              LiStrong = Li.querySelector('.boxH_price strong').innerHTML,
              LiStrongText = Li.querySelector('.boxH_price strong').innerText,
              LiStrongEM = Li.querySelector('.boxH_price strong em').innerText,
              price1 = LiStrongText.split('活動價$')[1],
              price2 = LiStrongEM.substring(3);

            //沒有促銷文加入空白  
            if (LiText == '') Li.querySelector('.boxH_word h4').classList.add('empty');
            //商品價錢加入千分位
             Li.querySelector('.boxH_price strong').innerHTML = this.addNumComma(LiStrong);
            //市價和活動價相同，不顯示市價
            if (price1 == price2) {
              price2 = ' ';
               Li.querySelector('.boxH_price strong em').innerHTML = price2;
            }
          });
      },
      //移除多於樓層標題.protitle
      removeProtitle() {
        let pro = document.querySelectorAll('.wrapper .protitle');
        if (pro.length > 0) {
          pro.forEach(el => {
              el.remove();
          });
        }
      }
    },
  }
</script>

<template>
  <!-- 輪播商品 -->
  <div :class="bg01Type" class="bg01 p:1%|1%|0! p:2%|2%|0!@<576" v-if="isSwiper">
    <ul :class="[name != undefined ? name : '']">
      <swiper class="pro" :loop="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }" 
      :autoHeight="true" 
      :space-between="10" 
      :navigation="{
          prevEl: `.${name} .prev`,
          nextEl: `.${name} .next`
        }" 
        :breakpoints="breakpoints"
        >
        <swiper-slide class="bg:#fff pb:2%@<576" v-for="bg in BgLiSlide" v-html="bg.innerHTML">
        </swiper-slide>
      </swiper>
      <div v-show="BgLiSlide.length > 4" class="swiper-button-prev prev"></div>
      <div v-show="BgLiSlide.length > 4" class="swiper-button-next next"></div>
    </ul>
  </div>
  <!-- 無輪播 -->
  <div v-else v-html="Bg01Html.outerHTML"></div>
</template>