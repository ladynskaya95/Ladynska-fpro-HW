const showImg = () => {
  let randImg = Math.floor(Math.random() * 9) + 1;
  document.querySelector("img").src = `images/${randImg}.jpg`;
};
showImg();

document.querySelector("button").addEventListener("click", showImg);
