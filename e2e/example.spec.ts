import { test, expect } from '@playwright/test';

test('has text', async ({ page }) => {
  await page.goto('/');

  // Expect a heading "Welcome!".
  await expect(page.getByRole('heading', { name: 'Welcome!'})).toBeVisible()
});
