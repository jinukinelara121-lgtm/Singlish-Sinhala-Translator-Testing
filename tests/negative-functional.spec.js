import { test, expect } from "@playwright/test";

// Neg_Fun_0001
test("Joined words without spaces", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mamagedharayanavaa");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect incorrect or no translation
  await expect(output).not.toHaveText("මමගෙදරයනවා", { timeout: 30000 });
});

// Neg_Fun_0002
test("Numeric-only input should not produce meaningful translation", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );
  await input.fill("12345");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Wait until output updates
  await expect(output).toBeVisible();

  const text = (await output.textContent())?.trim();

  // Expected meaningless outputs
  const meaninglessTranslations = [
    "12345",
    ""
  ];

  // ✅ Correct assertion
  expect(meaninglessTranslations).toContain(text);
});

// Neg_Fun_0003 - Special characters mixed with numbers
test("Special characters mixed with numbers", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );
  await input.fill("3@ lamayi enavaa");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Negative test: expect system NOT to produce the correct translation
  const correctTranslation = "තුනේ ළමයි එනවා"; 
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0004
test("Misspelled Singlish words should not produce correct Sinhala translation", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("lmayi enavva");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect incorrect or no translation
  // Replace 'correctTranslation' with the actual correct Sinhala translation if known
  const correctTranslation = "ළමයි එනවා";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0005
test("Repeated word emphasis - check if system fails to preserve repetition", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input repeated words
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("hondai hondai hondai");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect the system NOT to produce the correct repetition translation
  const correctTranslation = "හොඳයි හොඳයි හොඳයි";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0006
test("Excessive repeated characters should cause incorrect translation", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input with excessive repeated characters
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("hriiiiiiiii mama eeka karannm");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect incorrect or failed translation
  // Replace 'correctTranslation' with actual correct Sinhala if known
  const correctTranslation = "හරි මම එක කරන්නම්";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0007
test("Emoji included in input should produce incorrect or partial translation", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input with emoji
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("lamayi enavaa 😊");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect translation to be incorrect or partial
  // Replace 'correctTranslation' with actual correct Sinhala if known
  const correctTranslation = "ළමයි එනවා";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0008
test("Informal spoken contraction should fail or produce incorrect translation", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input with informal contraction
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama ennm");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect translation to be incorrect or rejected
  // Replace 'correctTranslation' with actual correct Sinhala if known
  const correctTranslation = "මම එන්නම්";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0009
test("Mixed English verb inside Singlish should fail if English term not preserved", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input with mixed English verb
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama file upload karanawa");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect translation to fail if English technical term is not preserved
  const correctTranslation = "මම file upload කරනවා";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});

// Neg_Fun_0010
test("Currency with informal spacing should produce incorrect translation", async ({
  page,
}) => {
  await page.goto("https://www.swifttranslator.com/");

  // Input with currency and informal spacing
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama Rs.5000 today denna");

  // Output container
  const output = page.locator("div.bg-slate-50");

  // Expect translation to fail if currency is mishandled
  const correctTranslation = "මම Rs.5000 අද දෙනවා";
  await expect(output).not.toHaveText(correctTranslation, { timeout: 30000 });
});
