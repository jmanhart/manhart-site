---
layout: "../../layouts/BlogPost.astro"
title: "Lets go dark!"
description: "My journey building a dark mode toggle for this site"
pubDate: "Jan 15, 2022"
location: "Seattle"
---

A few months back the dark mode bug finally bit me. Before that I would view everything in full light and glory. After my eyes started to bleed I felt like it might be a fun task to make a toggle on this site to give people the option to slam it.

I am not using a framework for this site because its just a simple static site and I realized my skills with vanilla JS are greatly lacking.

### Steps
1. Learn about local storage
2. Learn how to write a proper `switch` statement
3. Learn how to toggle and make it work everywhere

```js
    document.getElementById("toggle-button").addEventListener("click", () => {
      // Set the default theme
      let currentTheme = localStorage.getItem("theme");

      // If the theme is not set, set the default theme to light-theme
      if (!currentTheme) {
        currentTheme = "light-theme";
      }

      const body = document.body;
      switch (currentTheme) {
        case "light-theme":
          body.classList.toggle("light-theme", false);
          body.classList.toggle("dark-theme", true);
          currentTheme = "dark-theme";
          localStorage.setItem("theme", currentTheme);
          break;
        case "dark-theme":
          body.classList.toggle("dark-theme", false);
          body.classList.toggle("light-theme", true);
          currentTheme = "light-theme";
          localStorage.setItem("theme", currentTheme);
          break;
      }
      console.log(localStorage);
```