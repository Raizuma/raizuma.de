import { test, expect } from '@playwright/test';

test('Hat Titel: ', async ({ page }) => {
  await page.goto('http://raizuma.de');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveTitle(/Raizuma/);
});

