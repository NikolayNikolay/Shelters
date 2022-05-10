class OurPets {
   constructor(name, img, type, breed, description, age, inoculations, diseases, parasites, tag, id) {
      this.name = name
      this.img = img
      this.type = type
      this.breed = breed
      this.description = description
      this.age = age
      this.inoculations = inoculations
      this.diseases = diseases
      this.parasites = parasites
      this.tag = tag
      this.id = id
   }
   createCart() {
      this.tag.innerHTML += `<div class="cart">
      <div class="cart__image-ibg"><img src="${this.img}" alt="#"></div>
      <div class="cart__name-pets">${this.name}</div>
      <button class="button cart__button" id ='${this.id}'>Learn more</button>
   </div>`
   }
}

const blockCartsPets = document.querySelectorAll('.block-our-pets__block');
let petsJsonResult;

function puginationOurPetsJson(params) {
   let countId = 0;
   params.forEach(elem => {
      countId++
      elem.id = countId
   });
   petsJsonResult = params;
   getRandomNumbersInRange(petsJsonResult.length)
}
