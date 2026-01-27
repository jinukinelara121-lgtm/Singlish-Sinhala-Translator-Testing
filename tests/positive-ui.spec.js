import { test, expect } from '@playwright/test';

test('Real-time Sinhala output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // 1) Input textarea
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await input.fill('api passee kathaa karamu');

  // 2) Output container
  const output = page.locator('div.bg-slate-50');

  // 3) Wait for translation
  await expect(output).toHaveText('අපි පස්සේ කතා කරමු', { timeout: 30000 });
});