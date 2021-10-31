const container = document.querySelector(".container");

const IMG_NUM = 3;

function images(numbers) {
  const img = new Image();
  img.src = `images/${numbers}.jpg`
  container.appendChild(img);
  img.classList.add("bgImages");
}

function number() {
  const randomNumber =Math.ceil(Math.random() * IMG_NUM); 
  return randomNumber;
}

function initImg() {
  const imageNumber = number();
  images(imageNumber);
}
initImg();