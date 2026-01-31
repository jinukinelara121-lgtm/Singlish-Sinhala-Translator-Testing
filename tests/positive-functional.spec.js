import { test, expect } from "@playwright/test";

//Pos_Fun_0001
test("Convert simple daily usage sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama kaeema kanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම කෑම කනවා", { timeout: 30000 });
});

//Pos_Fun_0002
test("Convert present tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama dhaen igena gannavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම දැන් ඉගෙන ගන්නවා", { timeout: 30000 });
});

//Pos_Fun_0003
test("Convert past tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama iiyea igena gaththaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම ඊයේ ඉගෙන ගත්තා", { timeout: 30000 });
});

//Pos_Fun_0004
test("Convert future tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api heta igena gamu");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි හෙට ඉගෙන ගමු", { timeout: 30000 });
});

//Pos_Fun_0005
test("Convert compound sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api kaeema kanna yanavaa saha passe panthi yanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි කෑම කන්න යනවා සහ පස්සෙ පන්ති යනවා", {
    timeout: 30000,
  });
});

//Pos_Fun_0006
test("Convert complex sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("oyaa enavaanam mama paasal yanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ඔයා එනවානම් මම පාසල් යනවා", {
    timeout: 30000,
  });
});

//Pos_Fun_0007
test("Convert interrogative sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("oyaa bivvadha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ඔයා බිව්වද?", { timeout: 30000 });
});

//Pos_Fun_0008
test("Convert imperative command", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("pitipassa balanna");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("පිටිපස්ස බලන්න", { timeout: 30000 });
});

//Pos_Fun_0009
test("Convert negative sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama godaak dheaval kannea naehae");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම ගොඩාක් දේවල් කන්නේ නැහැ", {
    timeout: 30000,
  });
});

//Pos_Fun_0010
test("Pronoun variation plural", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api naamu");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි නාමු", { timeout: 30000 });
});

//Pos_Fun_0011
test("Convert greeting phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("suba udhaeesanak!");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("සුබ උදෑසනක්!", { timeout: 30000 });
});

//Pos_Fun_0012
test("Convert polite request", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("karuNaakaralaa mata mea vaedea karalaa dhenna puLuvandha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("කරුණාකරලා මට මේ වැඩේ කරලා දෙන්න පුළුවන්ද?", {
    timeout: 30000,
  });
});

//Pos_Fun_0013
test("Convert informal phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("meaka kaapan");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මේක කාපන්", { timeout: 30000 });
});

//Pos_Fun_0014
test("Convert response sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("hari, api karannam");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("හරි, අපි කරන්නම්", { timeout: 30000 });
});

//Pos_Fun_0015
test("Convert mixed Singlish and English sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata heta Teams meeting ekak thiyenavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට හෙට Teams meeting එකක් තියෙනවා", {
    timeout: 30000,
  });
});

//Pos_Fun_0016
test("Convert sentence with place name", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api trip eka Dubai valata yamudha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි trip එක Dubai වලට යමුද?", {
    timeout: 30000,
  });
});

//Pos_Fun_0017
test("Convert daily expression", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata badaginiyi");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට බඩගිනියි", { timeout: 30000 });
});

//Pos_Fun_0018
test("Convert currency format", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("Rs. 2500 ganna oonee");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("Rs. 2500 ගන්න ඕනේ", { timeout: 30000 });
});

//Pos_Fun_0019
test("Convert time format", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("9.30 AM enna");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("9.30 AM එන්න", { timeout: 30000 });
});

//Pos_Fun_0020
test("Convert sentence with multiple spaces", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata   raeeta kanna aappa   oonee");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට   රෑට කන්න ආප්ප   ඕනේ", {
    timeout: 30000,
  });
});

//Pos_Fun_0021
test("Convert multi-line input", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama vaeda karanavaa.\noyaa maath ekka vaeda karanavadha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම වැඩ කරනවා.\nඔයා මාත් එක්ක වැඩ කරනවද?", {
    timeout: 30000,
  });
});

//Pos_Fun_0022
test("Convert repeated emphasis words", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("tika tika karanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ටික ටික කරනවා", { timeout: 30000 });
});

//Pos_Fun_0023
test("Convert English abbreviations and short forms", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata oyaage NIC eka dhenna");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට ඔයාගෙ NIC එක දෙන්න", { timeout: 30000 });
});

//Pos_Fun_0024
test("Convert paragraph-style input (medium/long) ", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill(
    "thadha vaessa saha suLi kuNaatu heethuven praadheashiya saha raajya maarga kotas 512k vinaasayata path vuu athara, ehi samastha dhiga pramaaNaya kiloomiitar 380k pamaNa vana bava saha meya hadhisi vaedapilivela yatathea dhina 14k aethulatha prathisamskaara karana lesa pravaahana saha mahaamaarga maNdalaya sadhahan kaLeaya.",
  );

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText(
    "තද වැස්ස සහ සුළි කුණාටු හේතුවෙන් ප්‍රාදේශිය සහ රාජ්ය මාර්ග කොටස් 512ක් විනාසයට පත් වූ අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 380ක් පමණ වන බව සහ මෙය හදිසි වැඩපිලිවෙල යටතේ දින 14ක් ඇතුලත ප්‍රතිසම්ස්කාර කරන ලෙස ප්‍රවාහන සහ මහාමාර්ග මණ්ඩලය සදහන් කළේය.",
    { timeout: 30000 },
  );
});
