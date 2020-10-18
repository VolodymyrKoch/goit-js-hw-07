const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// <ul id="gallery"></ul>
//   Використовуй масив об'єктів images для створення тегів img вкладених в li. 
//  Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
//     Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
//     Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.

const galleryImg = document.querySelector("#gallery");
console.log(galleryImg);
const fotos = document.querySelector(".foto");
const cyclicListImg = images.forEach((el) => { 
const itemImg = document.createElement("li");
  console.log(itemImg);
  const galleryСards = galleryImg.insertAdjacentHTML("beforeend",`<img class="foto" src="${el.url}" alt="${el.alt}"/>`)
});



