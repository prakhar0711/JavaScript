const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let stopId;
const startChangingColor = function () {
  if (stopId == null) {
    stopId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    const back = document.querySelector("body");
    back.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(stopId);
  stopId = null;
};

//starts interval
document.querySelector("#start").addEventListener("click", startChangingColor);

//stops interaval
document.querySelector("#stop").addEventListener("click", stopChangingColor);
