import { test, expect } from '@playwright/test';

test('navigate to google.com', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
  await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible();
});
