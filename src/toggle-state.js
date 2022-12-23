// Define a function that toggles a element with the given id
export function toggleElement(id, show) {
  // Function implementation goes in here ...
  const element = document.getElementById(id);
  const isDarkTheme = document.body.classList.contains("dark-theme");
  if ("dark-theme") {
    element.classList.add("dark-theme");
  } else {
    element.classList.remove("dark-theme");
  }
  element.style.display = show
    ? isDarkTheme
      ? "block"
      : "none"
    : isDarkTheme
    ? "none"
    : "block";

  console.log(element.style.display);
}

// Function to store the toggle state in sessionStorage
export function toggleAndSave(id) {
  // Function implementation goes in here ...
  toggleElement(id);
  sessionStorage.setItem(id, document.getElementById(id).style.display);
  console.log("Hiya");
}

// Function to restore the toggle state from sessionStorage
export function restoreToggleState(id) {
  // Function implementation goes in here ...
  const display = sessionStorage.getItem(id);
  if (display) {
    document.getElementById(id).style.display = display;
    console.log("urgh");
  }
}
