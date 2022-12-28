const themes = [
  {
    name: "light-theme",
    iconPath: "/public/icon-sun.svg",
  },
  {
    name: "dark-theme",
    iconPath: "/public/icon-moon.svg",
  },
];

// Set the default theme
let currentTheme = localStorage.getItem("theme");

// If the theme is not set, set the default theme to light-theme
if (!currentTheme) {
  currentTheme = themes[0].name;
}

export function toggleTheme() {
  const body = document.body;
  const iconPath = document.getElementById("toggle-button-icon");

  switch (currentTheme) {
    case "light-theme":
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      iconPath.src = themes[1].iconPath;
      currentTheme = "dark-theme";
      localStorage.setItem("theme", currentTheme);
      break;
    case "dark-theme":
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      iconPath.src = themes[0].iconPath;
      currentTheme = "light-theme";
      localStorage.setItem("theme", currentTheme);
      break;
  }
  console.log(localStorage);
}

// Apply the stored theme when the page loads
export function applyStoredTheme() {
  const storedTheme = localStorage.getItem("theme");
  console.log("storedTheme", storedTheme);
  if (storedTheme) {
    document.body.classList.add(storedTheme);
    const icon = document.getElementById("toggle-button-icon");
    const themeIndex = themes.findIndex((theme) => theme.name === storedTheme);
    icon.src = themes[themeIndex].iconPath;
  }
}

window.addEventListener("load", () => {
  applyStoredTheme();
});
