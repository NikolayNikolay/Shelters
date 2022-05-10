const pugination = document.querySelector('.block-our-pets__pugination');

const petsBlock = document.querySelectorAll('.block-our-pets__block');

const petsNumber = document.querySelectorAll('.block-our-pets__number');

// =======пагиниция, переключатели============================================================
const oneNumberPagination = document.querySelector('.block-our-pets__one');
const prewPagination = document.querySelector('.block-our-pets__prew');
const lastNumberPagination = document.querySelector('.block-our-pets__last');
const nextPagination = document.querySelector('.block-our-pets__next');
// ==========левый блок кнопок нажатие====================================================
function one() {
   prew_next_Count = 0
   removeClass()
   addClass_active(petsNumber[0], 0)
   puginationBlockremoveBlock()
   getRandomNumbersInRange(petsJsonResult.length)
}
let prew_next_Count = 0;
function prew() {
   prew_next_Count--
   removeClass()
   addClass_active(petsNumber[prew_next_Count], prew_next_Count)
   puginationBlockremoveBlock(+prew_next_Count + 1)
   getRandomNumbersInRange(petsJsonResult.length)
}
// ==========правый блок кнопок= нажатие===================================================

function lastNumPugin() {
   prew_next_Count = petsNumber.length - 1
   removeClass()
   addClass_active(petsNumber[petsNumber.length - 1], petsBlock.length - 1)
   puginationBlockremoveBlock(petsNumber.length)
   getRandomNumbersInRange(petsJsonResult.length)
}

function nextPugin() {
   prew_next_Count++
   removeClass()
   addClass_active(petsNumber[prew_next_Count], prew_next_Count)
   puginationBlockremoveBlock(+prew_next_Count + 1)
   getRandomNumbersInRange(petsJsonResult.length)
}
// =============если актвный первый блок то левые кнопки блокируються===================
function puginationBlockremoveBlock(number = 1) {
   if (petsNumber[0].textContent == number) {
      oneNumberPagination.classList.add('block')
      prewPagination.classList.add('block')
      oneNumberPagination.removeEventListener("click", one);
      prewPagination.removeEventListener("click", prew);
   }
   else {
      oneNumberPagination.classList.remove('block')
      prewPagination.classList.remove('block')
      oneNumberPagination.addEventListener("click", one);
      prewPagination.addEventListener("click", prew);
   }
   // ================правые кнопки=========== если цифра текста совпадат с цифрой количества елементов=====
   if (number == petsNumber.length) {
      lastNumberPagination.classList.add('block')
      nextPagination.classList.add('block')
      lastNumberPagination.removeEventListener("click", lastNumPugin);
      nextPagination.removeEventListener("click", nextPugin);
   }
   else {
      lastNumberPagination.classList.remove('block')
      nextPagination.classList.remove('block')
      lastNumberPagination.addEventListener("click", lastNumPugin);
      nextPagination.addEventListener("click", nextPugin);
   }
}
puginationBlockremoveBlock()
// =========================================================================

pugination.addEventListener("click", function (e) {
   // ===============добавляем снопкам и блоку активность==============
   if (e.target.closest('.block-our-pets__number')) {
      // =========убрать активность==================================================
      removeClass()
      // ============проверка на первый и последний номер пагинации========================================================
      puginationBlockremoveBlock(e.target.textContent)
      // ==========================================
      for (const key in petsNumber) {
         if (e.target.closest('.block-our-pets__number') == petsNumber[key]) {
            addClass_active(petsNumber[key], key)
         }
      }
   }
   // ===================переключатели========================================================
});
// ===============добавляем снопкам и блоку активность==============
function addClass_active(elem, key) {
   elem.classList.add('active')
   petsBlock[key].classList.add('active')
}
// =========убрать активность и очистить страницы==================================================
function removeClass() {
   for (let i = 0; i < petsNumber.length; i++) {
      petsNumber[i].classList.remove('active')
      petsBlock[i].classList.remove('active')
   }
   blockCartsPets[prew_next_Count].innerHTML = ''
}



