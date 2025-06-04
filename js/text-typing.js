const firstSlotTexts = [
  "build the website",
  "design the platform",
  "simplify the web",
];
const secondSlotTexts = [
  "business stands out",
  "brand grows stronger",
  "business gets new customers",
];

let currentIndex = -1;

const firstSlotElement = document.getElementById("changing-text-1");
const secondSlotElement = document.getElementById("changing-text-2");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//* text auto changing in home page
async function deleteFirstText() {
  while (firstSlotElement.innerHTML.length > 0) {
    firstSlotElement.innerHTML = firstSlotElement.innerHTML.slice(0, -1);
    await sleep(35); // Adjust the speed of deletion here
  }
}
async function deleteSecondText() {
  while (secondSlotElement.innerHTML.length > 0) {
    secondSlotElement.innerHTML = secondSlotElement.innerHTML.slice(0, -1);
    await sleep(35); // Adjust the speed of deletion here
  }
}

async function typeFirstText(text) {
  firstSlotElement.style.color = "white";
  for (let char of text) {
    firstSlotElement.innerHTML += char;
    await sleep(35); // Adjust the speed of typing here
  }
}
async function typeSecondText(text) {
  secondSlotElement.style.color = "white";

  for (let char of text) {
    secondSlotElement.innerHTML += char;
    await sleep(35); // Adjust the speed of typing here
  }
}

async function changeFirstText() {
  while (true) {
    await deleteFirstText();
    currentIndex = (currentIndex + 1) % firstSlotTexts.length;
    await typeFirstText(firstSlotTexts[currentIndex]);
    await sleep(3000); // Adjust the delay between changes here
  }
}
async function changeSecondText() {
  while (true) {
    await deleteSecondText();
    currentIndex = (currentIndex + 1) % secondSlotTexts.length;
    await typeSecondText(secondSlotTexts[currentIndex]);
    await sleep(3000); // Adjust the delay between changes here
  }
}
changeFirstText();
changeSecondText();
