function initThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle");

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("theme");
    if (currentTheme === "light") {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  });
}

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
