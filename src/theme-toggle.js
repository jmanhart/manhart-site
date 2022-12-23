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
