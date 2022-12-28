// function initThemeToggle() {
//   const toggleButton = document.querySelector(".theme-toggle");

//   toggleButton.addEventListener("click", () => {
//     const currentTheme = document.documentElement.getAttribute("theme");
//     if (currentTheme === "light") {
//       toggleTheme("dark");
//     } else {
//       toggleTheme("light");
//     }
//   });
// }

// function initThemeToggle() {
//   // document.documentElement.setAttribute("theme", "light");
//   // function toggleTheme(theme) {
//   //   document.documentElement.setAttribute("theme", theme);
//   //   console.log(theme);
//   // }
//   const toggleButton = document.querySelector(".theme-toggle");
//   console.log("hiya Pal");

//   toggleButton.addEventListener("click", () => {
//     const currentTheme = document.documentElement.getAttribute("theme");
//     if (currentTheme === "light") {
//       toggleTheme("dark");
//     } else {
//       toggleTheme("light");
//     }
//   });
// }

// Sets the theme to light by default
// document.documentElement.setAttribute("theme", "light");

// export function toggleTheme(theme) {
//   document.documentElement.setAttribute("theme", theme);
//   console.log(theme);
// }

// const toggleButton = document.querySelector(".theme-toggle");

// export toggleButton.addEventListener("click", () => {
//   const currentTheme = document.documentElement.getAttribute("theme");
//   if (currentTheme === "light") {
//     toggleTheme("dark");
//   } else {
//     toggleTheme("light");
//   }
// });

// Intitalize the state from sessionStorage at the top of the file
// if (window.sessionStorage.getItem("isToggled")) {
//   isToggled = JSON.parse(window.sessionStorage.getItem("isToggled"));
// }

// let isToggled = false;

// export function getIsToggled() {
//   return isToggled;
// }

// export function toggle() {
//   isToggled = !isToggled;
//   window.sessionStorage.setItem("isToggled", JSON.stringify(isToggled));
//   console.log("meow");
// }

// window.addEventListener("popstate", () => {
//   isToggled = JSON.parse(window.sessionStorage.getItem("isToggled"));
// });

// element.style.display = show
//   ? isDarkTheme
//     ? "block"
//     : "none"
//   : isDarkTheme
//   ? "none"
//   : "block";

// button.addEventListener("click", () => {
//   // console.log("toggled");
//   toggleElement("toggle-button", false);
// });

{
  /* <script>
  // Sets the theme to light by default
  document.documentElement.setAttribute("theme", "light");

  function toggleTheme(theme) {
    document.documentElement.setAttribute("theme", theme);
    console.log(theme);
  }

  const toggleButton = document.querySelector(".theme-toggle");

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("theme");
    if (currentTheme === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  });
</script> */
}

{
  /* <script>
import { toggleElement } from "../toggle-state.js";
const button = document.getElementById("toggle-button");
button.addEventListener("click", () => {
  toggleElement("toggle-button", !button.classList.contains("active"));
  button.classList.toggle("active");
});
</script>
<style lang="scss">
@import "../styles/_mixins.scss";
html[theme="light"] {
  background-color: white;
  color: black;
}

html[theme="dark"] {
  background-color: rgb(35, 35, 35);
  color: white;
}
.dark-theme {
  background-color: rgb(35, 35, 35);
  color: white;
}
</style> */
}

// Define a function that toggles a element with the given id

// export function toggleElement(id) {
//   const element = document.getElementById(id);
//   const isDarkTheme = document.body.classList.contains("dark-theme");
//   const isLightTheme = document.body.classList.contains("light-theme");
//   const computedStyles = getComputedStyle(document.body);

//   // Get the background-color and color styles
//   const backgroundColor = computedStyles.backgroundColor;
//   const color = computedStyles.color;

//   if (isDarkTheme) {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.add("light-theme");
//     console.log("Dark theme is active");
//   } else if (isLightTheme) {
//     document.body.classList.remove("light-theme");
//     document.body.classList.add("dark-theme");
//     console.log("Light theme is active");
//   }
//   // if (isDarkTheme) {
//   //   document.body.style.backgroundColor = "black";
//   //   document.body.style.color = "white";
//   //   console.log("Dark theme is active");
//   // } else if (isLightTheme) {
//   //   document.body.style.backgroundColor = "white";
//   //   document.body.style.color = "black";
//   //   console.log("Light theme is active");
//   // }
//   console.log("backgroundColor", backgroundColor);
// }

// export function setTheme(theme) {
//   // Get the body element
//   const body = document.body;

//   // Remove the light-theme and dark-theme classes from the body element
//   body.classList.remove("light-theme");
//   body.classList.remove("dark-theme");

//   // Add the specified theme class to the body element
//   body.classList.add(theme);
// }

// export function getActiveTheme() {
//   // Get the body element
//   const body = document.body;

//   // Check if the light-theme class is present on the body element
//   if (body.classList.contains("light-theme")) {
//     return "light-theme";
//   } else {
//     // If the light-theme class is not present, return the dark-theme class
//     return "dark-theme";
//   }
// }

// export function applyStoredTheme() {
//   // Get the toggle state from local storage
//   const theme = localStorage.getItem("theme");

//   if (theme) {
//     setTheme(theme);
//   }
// }

// // If the dark-theme class is present, remove it and add the light-theme class
// if (isDarkTheme) {
//   body.classList.remove("dark-theme");
//   body.classList.add("light-theme");
//   // Set the theme to "light"
//   localStorage.setItem("theme", "light");
// } else {
//   // If the dark-theme class is not present, remove the light-theme class and add the dark-theme class
//   body.classList.remove("light-theme");
//   body.classList.add("dark-theme");
//   // Set the theme to "dark"
//   localStorage.setItem("theme", "dark");
//   console.log(localStorage);
// }
