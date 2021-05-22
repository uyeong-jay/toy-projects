export const container = document.querySelector(".container");

export const IMG_NUM = 3;

export function images(numbers) {
  const img = new Image();
  img.src = `images/${numbers}.jpg`
  container.appendChild(img);
  img.classList.add("bgImages");
}

export function number() {
  const randomNumber =Math.ceil(Math.random() * IMG_NUM); 
  return randomNumber;
}

export function initImg() {
  const imageNumber = number();
  images(imageNumber);
}
initImg();