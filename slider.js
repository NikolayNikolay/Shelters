const btn_prev = document.querySelector('.swiper-button-prev');
const btn_next = document.querySelector('.swiper-button-next');
setTimeout(() => {
   const carts = document.querySelectorAll('.slide__slide');

   const widthSliders = slideWrapp.clientWidth;

   slidersCarusel.style.width = 100 * carts.length + '%';

   carts.forEach(elem => {
      elem.style.width = widthSliders + 'px'
   });
   // =====количество карточек и счетчик для сравнения количества карточек=====================================
   let cartLength = carts.length - 1;
   let offset = 0;

   // ===========кнопка влево=================================================
   btn_prev.addEventListener("click", function (e) {
      if (offset == widthSliders * (cartLength)) {
         offset = 0;
      }
      else {
         offset += widthSliders;
      }
      slidersCarusel.style.transform = `translateX(-${offset}px)`;
   });
   // ===========кнопка вправо=================================================
   btn_next.addEventListener("click", function (e) {
      if (offset == 0) {
         offset = widthSliders * (carts.length - 1);
      }
      else {
         offset -= widthSliders;
      }
      slidersCarusel.style.transform = `translateX(-${offset}px)`;
   });
   // =========вывод информации===============================================================================
}, 1000);