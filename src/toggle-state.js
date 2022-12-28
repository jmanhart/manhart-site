export function toggleTheme(id) {
  const body = document.body;
  const isDarkTheme = body.classList.contains("dark-theme");
  // const isLightTheme = body.classList.contains("light-theme");

  // If the dark-theme class is present, remove it and add the light-theme class
  if (isDarkTheme) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    // Set the theme to "light"
    localStorage.setItem("theme", "light");
  } else {
    // If the dark-theme class is not present, remove the light-theme class and add the dark-theme class
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    // Set the theme to "dark"
    localStorage.setItem("theme", "dark-theme");
  }
  console.log(localStorage);
}

// Apply the stored theme when the page loads
export function applyStoredTheme() {
  // Get the stored theme from local storage
  const storedTheme = localStorage.getItem("theme");
  console.log("storedTheme", storedTheme);
  // If a theme is stored, apply it to the page
  if (storedTheme) {
    document.body.classList.add(storedTheme);
  }
}

// window.addEventListener("load", applyStoredTheme);
// Wait for the page to finish loading
window.addEventListener("load", () => {
  // Apply the stored theme
  applyStoredTheme();
});
