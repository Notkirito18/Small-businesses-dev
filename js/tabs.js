//  "#27debf"
//  "#F3C623"
//  "#C499F3"
//  "#FF004D"

const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => tabClicked(tab));
});

function tabClicked(tab) {
  tabButtons.forEach((tab) => {
    tab.classList.remove("active");
  });
  tab.classList.add("active");

  const contents = document.querySelectorAll(".content");

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  const contentId = tab.getAttribute("content-id");
  const contentSelected = document.getElementById(contentId);

  contentSelected.classList.add("show");
}
// function addGradient(element) {
//   element.style.color = "#ffffff";
//   switch (element.id) {
//     case "first-project-btn":
//       element.style.background = "#216136";
//       break;
//     case "second-project-btn":
//       element.style.background = "#181d42";
//       break;
//     case "third-project-btn":
//       element.style.background = "#66438b";
//       break;
//     case "fourth-project-btn":
//       element.style.background = "#7a1131";
//       break;
//   }
// }
// function removeGradient(element) {
//   if (element.classList.length > 1) {
//     switch (element.id) {
//       case "first-project-btn":
//         element.style.background = "#27debf";
//         break;
//       case "second-project-btn":
//         element.style.background = "#F3C623";
//         break;
//       case "third-project-btn":
//         element.style.background = "#C499F3";
//         break;
//       case "fourth-project-btn":
//         element.style.background = "#FF004D";
//         break;
//     }
//   } else {
//     element.style.background = "#032144";
//   }
// }
document.getElementById("first-project-btn").addEventListener("click", () => {
  firstProjectBtnClick();
});
document
  .getElementById("first-project-btn")
  .addEventListener("touchstart", () => {
    firstProjectBtnClick();
  });

firstProjectBtnClick = () => {
  document.getElementById("first-project-btn").style.background = "#27debf";
  document.getElementById("second-project-btn").style.background = "#032144";
  document.getElementById("third-project-btn").style.background = "#032144";
  document.getElementById("fourth-project-btn").style.background = "#032144";
};

document.getElementById("second-project-btn").addEventListener("click", () => {
  document.getElementById("second-project-btn").style.background = "#F3C623";
  document.getElementById("first-project-btn").style.background = "#032144";
  document.getElementById("third-project-btn").style.background = "#032144";
  document.getElementById("fourth-project-btn").style.background = "#032144";
});
document.getElementById("third-project-btn").addEventListener("click", () => {
  document.getElementById("third-project-btn").style.background = "#C499F3";
  document.getElementById("second-project-btn").style.background = "#032144";
  document.getElementById("first-project-btn").style.background = "#032144";
  document.getElementById("fourth-project-btn").style.background = "#032144";
});
document.getElementById("fourth-project-btn").addEventListener("click", () => {
  document.getElementById("fourth-project-btn").style.background = "#FF004D";
  document.getElementById("second-project-btn").style.background = "#032144";
  document.getElementById("third-project-btn").style.background = "#032144";
  document.getElementById("first-project-btn").style.background = "#032144";
});
$(document).ready(function () {
  firstProjectBtnClick();
});
