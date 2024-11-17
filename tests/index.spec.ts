import { test, expect } from "@playwright/test";

test("Title is correct", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(page).toHaveTitle("Manhart Site");
});
