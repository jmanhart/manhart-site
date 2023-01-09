---
layout: "../../layouts/BlogPost.astro"
title: "Lets go dark!"
description: "My journey building a dark mode toggle for this site"
heroImage: "/post-images/dark-mode/dark-mode.png"
pubDate: "Jan 15, 2022"
location: "Seattle"
---
A few months back I finally jumped on to team dark-mode. Before that every application I opend was like a great beacon that could be seen from across the country. Embracing dark mode has changed my life and my tan is starting to fade. But sometimes I do like the blast of light-mode to flood my face like the beacon's of gondor. So I decided to build a little toggle to do so.

In early December I also decided to re-build my personal site (this site you are currently on and reading). I am using astro because it is kinda a blank slate for me. I'll be honest my JavaScript skills have always been umm rough. Astro was the perfect blank slate for me and its very flexiable. With the goal of using vanilla JavaScript I started my journey of building this theme toggle.

I knew 

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