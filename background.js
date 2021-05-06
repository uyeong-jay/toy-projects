const body = document.querySelector("body");

const IMG_NUM = 3;

function images(numbers) {
  const image = new Image();
  image.src = `images/${numbers}.jpg`
  body.andChild(image);
  image.clasppesList.add("bgImages");
}

function number() {
  const randomNumber =Math.ceil(Math.random() * IMG_NUM); 
  return randomNumber;
}

function initImgs() {
  const imageNumber = number();
  images(imageNumber);
}
initImgs();