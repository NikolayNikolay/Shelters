
// ===========вывод животных==========================================================================

const petsUrl = './pets.json';
const slidersCarusel = document.querySelector('.sliders');
const slideWrapp = document.querySelector('.display__wrapper');
let cart;

let resultPromisPets;
fetch(petsUrl)
   .then((res) => res.json())
   .then(function (data) {
      resultPromisPets = data;
      puginationOurPetsJson(resultPromisPets)
      return jsonPars(resultPromisPets)
   })
   .catch(function (error) {
      alert('Что то не так!')
   });
// =============================================================================

let b = [];
let count = 1;
function jsonPars(elem) {
   let num = Math.ceil(elem.length / 3)
   if (document.documentElement.clientWidth <= 1000) {
      num = Math.ceil(elem.length / 2)
   }
   if (document.documentElement.clientWidth <= 600) {
      num = elem.length;
   }
   createElem(num, elem);
}
function createElem(num, elements) {
   console.log('запуск создания слайдов');
   for (let i = 1; i <= num; i++) {
      slidersCarusel.innerHTML += `<div class="slide__slide corobca${i}"></div>`
   }
   setTimeout(() => {
      forEachElement(elements);
   }, 2000);


}
function forEachElement(elem) {
   console.log('запуск форэйч');
   elem.forEach(item => {
      b.push(item)
      let sum = count;
      item.id = count++;
      listItems(item.name, sum, item.img, item.id)
   });
}

let btnInfo;
function listItems(info, num, img, id) {
   const corobca1 = document.querySelector('.corobca1');
   const corobca2 = document.querySelector('.corobca2');
   const corobca3 = document.querySelector('.corobca3');
   const corobca4 = document.querySelector('.corobca4');
   const corobca5 = document.querySelector('.corobca5');
   const corobca6 = document.querySelector('.corobca6');
   const corobca7 = document.querySelector('.corobca7');
   const corobca8 = document.querySelector('.corobca8');
   if (document.documentElement.clientWidth > 1000) {
      if (num <= 3) {
         corobca1.innerHTML += `<div class="cart">
      <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
      <div class="cart__name-pets">${info}</div>
      <button class="button cart__button" id ='${id}'>Learn more</button>
   </div>`
      }
      if (num > 3 && num <= 6) {
         // corobca2.append(list)
         corobca2.innerHTML += `<div class="cart">
      <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
      <div class="cart__name-pets">${info}</div>
      <button class="button cart__button" id ='${id}'>Learn more</button>
   </div>`
      }
      if (num > 6) {
         // corobca3.append(list)
         corobca3.innerHTML += `<div class="cart">
      <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
      <div class="cart__name-pets">${info}</div>
      <button class="button cart__button" id ='${id}'>Learn more</button>
   </div>`
      }
   }
   else if (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 600) {
      if (num <= 2) {
         corobca1.innerHTML += `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num > 2 && num <= 4) {
         // corobca2.append(list)
         corobca2.innerHTML += `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num > 4 && num <= 6) {
         // corobca3.append(list)
         corobca3.innerHTML += `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num > 6) {
         // corobca3.append(list)
         corobca4.innerHTML += `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
   }
   else if (document.documentElement.clientWidth <= 600) {
      if (num == 1) {
         corobca1.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 2) {
         corobca2.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 3) {
         corobca3.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 4) {
         corobca4.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 5) {
         corobca5.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 6) {
         corobca6.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 7) {
         corobca7.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
      if (num == 8) {
         corobca8.innerHTML = `<div class="cart">
         <div class="cart__image-ibg"><img src="${img}" alt="#"></div>
         <div class="cart__name-pets">${info}</div>
         <button class="button cart__button" id ='${id}'>Learn more</button>
      </div>`
      }
   }
}

// ==================попап=======================================================================
const popup = document.querySelector('.popup');
const popapInfo = document.querySelector('.popup__content');
const popapClose = document.querySelector('.popup__close');

slideWrapp.addEventListener("click", function (e) {
   console.log(e.target.id);
   pupopID(b, e.target.id)
});


popup.addEventListener("click", function (e) {
   if (!(e.composedPath().includes(popapInfo)) || e.target.closest('.popup__close')) {
      popup.classList.remove('_active')
      html.classList.remove('lock');
   }
});

function pupopID(elem, id) {
   elem.forEach(item => {
      if (id == item.id) {
         console.log('есть такой айди');
         popup.classList.add('_active')
         html.classList.add('lock');
         let inoculations = '';
         let diseases = '';
         let parasites = '';
         for (const elem of item.inoculations) {
            inoculations += elem + ' ';
         }
         for (const elem of item.diseases) {
            diseases += elem + ' ';
         }
         for (const elem of item.parasites) {
            parasites += elem + ' ';
         }

         popapInfo.innerHTML = `<button data-close type="button" class="popup__close"><img src="./img/icon/crest.png" alt="#"></button>
            <div class="popup__img">
            <div class="popup__image-ibg"><img src="${item.img}" alt="#"></div>
         </div>
         <div class="popup__info">
            <h2 class="pet-name">${item.name}</h2>
            <div class="pet-categories">${item.type} - ${item.breed}</div>
            <p class="text-info">${item.description}</p>
            <ul>
               <li><span>Age: </span> ${item.age}</li>
               <li><span>Inoculations: </span> ${inoculations}</li>
               <li><span>Diseases: </span>  ${diseases}</li>
               <li><span>Parasites: </span>  ${parasites}</li>
            </ul>
         </div>`
      }
   });
}