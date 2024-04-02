const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector("body");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
btn.addEventListener("click", () => {
  let hexColor = generateHex();
  body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
});

function generateHex() {
  let hexColor ="#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomColor()];
  
  }
  return hexColor;
}

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}
