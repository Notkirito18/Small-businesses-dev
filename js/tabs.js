//  "#27debf"
//  "#333A73"
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
function addGradient(element) {
  element.style.color = "#ffffff";
  switch (element.id) {
    case "travel":
      element.style.background = "#216136";
      break;
    case "sports":
      element.style.background = "#181d42";
      break;
    case "education":
      element.style.background = "#66438b";
      break;
    case "events":
      element.style.background = "#7a1131";
      break;
  }
}
function removeGradient(element) {
  if (element.classList.length > 1) {
    switch (element.id) {
      case "travel":
        element.style.background = "#27debf";
        break;
      case "sports":
        element.style.background = "#333A73";
        break;
      case "education":
        element.style.background = "#C499F3";
        break;
      case "events":
        element.style.background = "#FF004D";
        break;
    }
  } else {
    element.style.background = "#032144";
  }
}
document.getElementById("travel").addEventListener("click", () => {
  travelClick();
});
document.getElementById("travel").addEventListener("touchstart", () => {
  travelClick();
});

travelClick = () => {
  document.getElementById("travel").style.background = "#27debf";
  document.getElementById("sports").style.background = "#032144";
  document.getElementById("education").style.background = "#032144";
  document.getElementById("events").style.background = "#032144";
};

document.getElementById("sports").addEventListener("click", () => {
  document.getElementById("sports").style.background = "#333A73";
  document.getElementById("travel").style.background = "#032144";
  document.getElementById("education").style.background = "#032144";
  document.getElementById("events").style.background = "#032144";
});
document.getElementById("education").addEventListener("click", () => {
  document.getElementById("education").style.background = "#C499F3";
  document.getElementById("sports").style.background = "#032144";
  document.getElementById("travel").style.background = "#032144";
  document.getElementById("events").style.background = "#032144";
});
document.getElementById("events").addEventListener("click", () => {
  document.getElementById("events").style.background = "#FF004D";
  document.getElementById("sports").style.background = "#032144";
  document.getElementById("education").style.background = "#032144";
  document.getElementById("travel").style.background = "#032144";
});

// //* Services nav dropdown menue
// document
//   .getElementById("services-dropdown-title")
//   .addEventListener("click", () => {
//     if (window.screen.width > 768) {
//       if (
//         document.getElementById("services-dropdown").style.display == "none"
//       ) {
//         document.getElementById("services-dropdown").style.display = "flex";
//       } else {
//         document.getElementById("services-dropdown").style.display = "none";
//       }
//     } else {
//       if (document.getElementById("sm-dropdown").style.display == "none") {
//         document.getElementById("sm-dropdown").style.display = "block";
//       } else {
//         document.getElementById("sm-dropdown").style.display = "none";
//       }
//     }
//   });
// document.addEventListener("click", function (event) {
//   if (
//     !document.getElementById("services-dropdown").contains(event.target) &&
//     !document
//       .getElementById("services-dropdown-title")
//       .contains(event.target) &&
//     document.getElementById("services-dropdown").style.display != "none"
//   ) {
//     document.getElementById("services-dropdown").style.display = "none";
//   }
//   if (
//     !document.getElementById("sm-dropdown").contains(event.target) &&
//     !document
//       .getElementById("services-dropdown-title")
//       .contains(event.target) &&
//     document.getElementById("sm-dropdown").style.display != "none"
//   ) {
//     document.getElementById("sm-dropdown").style.display = "none";
//   }
// });
