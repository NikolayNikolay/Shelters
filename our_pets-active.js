const Our_pets = document.querySelector('.block-our-pets');

const menulist = document.querySelector('.menu__list');

const boss_page = document.querySelector('.block-boss-page');

const menuLink = document.querySelectorAll('.menu__link');

const textLogo = document.querySelector('.text-logo');

const header = document.querySelector('.header');

Our_pets.style.display = 'none';
boss_page.style.display = '';

menulist.addEventListener("click", function (e) {
   console.log(e.target.closest('.menu__link').dataset.ourpets == 'Pets');
   // console.log(e.target.closest('.menu__link').dataset.ourpets);
   if (!e.target.closest('.menu__link').dataset.ourpets == 'Pets') return
   if (e.target.closest('.menu__link').dataset.ourpets == 'Pets') {
      e.preventDefault()
      textLogo.classList.add('text-logo_black')
      header.classList.add('header_weite')
      boss_page.style.display = 'none'
      Our_pets.style.display = ''
      e.target.classList.add('active')
      html.classList.remove('menu-open');
      html.classList.remove('lock');
      block.classList.remove('_active');
   }
   if (e.target.closest('.menu__link').dataset.ourpets !== 'Pets') {
      boss_page.style.display = ''
      Our_pets.style.display = 'none'
      textLogo.classList.remove('text-logo_black')
      header.classList.remove('header_weite')
      btnToggle()
      menuLink.forEach(elem => {
         elem.classList.remove('active')
      });
   }

});