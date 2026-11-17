import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Вход и Регистрация', { exact: true }).click();

  const form = page.locator('form[data-marker="login-form"]');
  await form.locator('button[type="submit"]').click();

  await expect(
    form.getByText('Email обязателен', { exact: true })
  ).toBeVisible();

  await expect(
    form.getByText('Пароль обязателен', { exact: true })
  ).toBeVisible();
});