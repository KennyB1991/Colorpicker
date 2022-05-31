let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarList = document.querySelector(".nav-sidebar ul");
let getSidebarItems = document.querySelectorAll(".nav-sidebar li");
let getColorList = document.querySelectorAll(".nav-sidebar li");
let getColorListRadio = Array.from(
  document.querySelectorAll(".nav-sidebar li input[type=radio]")
);
const getColorChecked = document.querySelector(
  ".nav-sidebar li input[checked]"
);
const getWebBody = document.querySelector("body");
const getWebTitle = document.querySelector("h2");

/* Function for 'opening' navbar, change styling */
const openNav = function (navContainer, navList, navItems) {
  console.log("Opening navbar...");
  navList.style.visibility = "visible";
  navContainer.style.width = "250px";

  let arrayLength = navItems.length;
  for (i = 0; i < arrayLength; i++) {
    navItems[i].style.opacity = "1";
  }
};

/* Function for 'closing' navbar, change styling */
const closeNav = function (navContainer, navList, navItems) {
  console.log("Closing navbar...");
  navList.style.visibility = "hidden";
  navContainer.style.width = "60px";

  let arrayLength = navItems.length;
  for (i = 0; i < arrayLength; i++) {
    navItems[i].style.opacity = "0";
  }
};

/* Open or close navigation */
const toggleNav = function () {
  console.log("Entering toggleNav...");

  if (toggleNavStatus === false) {
    openNav(getSidebar, getSidebarList, getSidebarItems);
    toggleNavStatus = true;
  } else {
    closeNav(getSidebar, getSidebarList, getSidebarItems);
    toggleNavStatus = false;
  }
};

/* Using the radio buttons in the list the change background color */
const colorRadioCheck = function (radioBtn, btnColorName, webBody, webTitle) {
  console.log("Adding listeners to radio buttons...");
  radioBtn.addEventListener("change", function () {
    webBody.style.backgroundColor = btnColorName;
    webTitle.innerHTML = btnColorName;
    closeNav(getSidebar, getSidebarList, getSidebarItems);
    toggleNavStatus = false;
  });
};

/* Set initial styling for background color, and give each list item its unique color */
const InitialSetup = function () {
  console.log("Initial setup for code to run...");
  getWebBody.style.backgroundColor = getColorChecked.value;
  getWebTitle.innerHTML = getColorChecked.value;

  const colorId = [];

  let arrayLength = getColorListRadio.length;
  for (i = 0; i < arrayLength; i++) {
    colorId[i] = getColorListRadio[i].value;
    getColorList[i].style.backgroundColor = colorId[i];
    colorRadioCheck(getColorList[i], colorId[i], getWebBody, getWebTitle);
  }
};

InitialSetup();

const getNavBtn = document.querySelector(".btn-toggle-nav");

/* Event listener when mouse enters the nav icon */
getNavBtn.addEventListener("click", function () {
  toggleNav();
});

/* Event listener for keypress (keydown), to change colors based on number key pressed */
document.addEventListener("keydown", function (event) {
  let name = event.key;

  const colorId = [];

  switch (name) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      let arrayLength = getColorListRadio.length;
      for (i = 0; i < arrayLength; i++) {
        colorId[i] = getColorListRadio[i].value;
      }
      getWebBody.style.backgroundColor = colorId[name - 1];
      getWebTitle.innerHTML = colorId[name - 1];
      getColorListRadio[name - 1].checked = true;
      console.log(
        `You pressed ${name}, changing background to ${colorId[name - 1]}`
      );
      break;
    default:
      console.log(`You pressed ${name}, this is not a valid keypress`);
      break;
  }
});
