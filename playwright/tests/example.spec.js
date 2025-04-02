// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  // await page.goto('https://playwright.dev/');

  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);

  await page.goto("https://aura-fe.stg.fawk.app/dinesh/9999");
  await page
    .locator(".swiper-wrapper > div:nth-child(2) > div > div > .z-10")
    .first()
    .click();
  await page
    .locator(
      ".relative > div:nth-child(4) > div > div:nth-child(2) > div > .flex"
    )
    .click();
  await expect(
    page.getByRole("alertdialog", { name: "Let's Begin our journey!" })
  ).toBeVisible();
  await page.locator('[data-test-id="button-skip"]').click();
  await page.locator(".z-10 > div:nth-child(3) > div > .flex").click();
  await page.getByRole("button", { name: "Bet", exact: true }).click();
  await page.locator("div:nth-child(8) > div > .flex").click();
  await expect(page.getByRole("img", { name: "diamond" })).toBeVisible();
  await expect(page.locator("#step-selectOption")).toContainText(
    "Cashout 1.18"
  );
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
