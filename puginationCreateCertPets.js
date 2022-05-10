// ===================создание рамдомного массива цифр=======================================================
function getRandomNumbersInRange(count) {
   let result = [];
   while (result.length < count) {
      const randomNumber = Math.floor(Math.random() * count) + 1;
      if (result.indexOf(randomNumber) === -1) {
         result.push(randomNumber);
      }
   }
   randomCart(result)

}

// =============вывод рандомных зверей=======================================================
function randomCart(arrRandom) {
   // petsJsonResult
   for (const key of arrRandom) {
      for (const elem of petsJsonResult) {
         if (key == elem.id) {
            const getClassPets = new OurPets(elem.name, elem.img, elem.type, elem.breed, elem.description, elem.age, elem.inoculations, elem.diseases, elem.parasites, blockCartsPets[prew_next_Count], elem.id);
            getClassPets.createCart()
         }
      }
   }
}
// =============клин по кнопке зверя и вывод попада с информацией===================================================
const blockCart = document.querySelector('.block-our-pets__carts-pets');

blockCart.addEventListener("click", function (e) {
   if (!e.target.closest('.cart__button')) return
   else {
      pupopID(petsJsonResult, e.target.closest('.cart__button').id)
   }

});
