import { type Page, type Locator } from '@playwright/test';

const BASE_URL = process.env.VISIONX_URL ?? 'https://stg.visionx.solutions';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly proceedButton: Locator;
  readonly signInButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByPlaceholder('Enter username or email address');
    this.passwordInput = page.getByPlaceholder('Enter password');
    this.proceedButton = page.getByRole('button', { name: 'Proceed' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.proceedButton.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
