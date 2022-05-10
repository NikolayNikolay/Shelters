// =========бургер==================================================================================
const btn = document.querySelector('.menu__icon');
const html = document.querySelector('html');
const menu = document.querySelector('.menu__body');
const block = document.querySelector('.burger-block');

function btnToggle() {
   html.classList.toggle('menu-open');
   html.classList.toggle('lock');
   block.classList.toggle('_active');
}

document.addEventListener('click', function (e) {
   const withinBoundaries = e.composedPath().includes(menu);
   if (html.classList[0] == 'menu-open' && !withinBoundaries) {
      btnToggle()
   }
   else if (e.composedPath().includes(btn)) {
      btnToggle()
   }

})
