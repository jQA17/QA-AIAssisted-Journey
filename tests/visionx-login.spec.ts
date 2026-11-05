import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

const USERNAME = process.env.VISIONX_USERNAME ?? 'farrah@mailsac.com';
const PASSWORD = process.env.VISIONX_PASSWORD ?? 'th!sPassw0rd';

test.describe('Authentication', () => {
  test.describe('Login', () => {
    test('should log in successfully with valid credentials', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await test.step('Navigate to the app', async () => {
        await loginPage.goto();
      });

      await test.step('Submit credentials', async () => {
        await loginPage.login(USERNAME, PASSWORD);
      });

      await test.step('Verify successful login', async () => {
        await expect(page).toHaveURL(/stg\.visionx\.solutions/);
        await expect(page).not.toHaveURL(/login|authenticate/);
      });
    });
  });
});
