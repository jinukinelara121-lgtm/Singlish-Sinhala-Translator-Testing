import { test, expect } from "@playwright/test";

//Pos_Fun_0001
test("Convert simple daily usage sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama gedhara yanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම ගෙදර යනවා", { timeout: 30000 });
});

//Pos_Fun_0002
test("Convert present tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama dhaen vaeda karanavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම දැන් වැඩ කරනවා", { timeout: 30000 });
});

//Pos_Fun_0003
test("Convert past tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama iiyee gedhara giyaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම ඊයේ ගෙදර ගියා", { timeout: 30000 });
});

//Pos_Fun_0004
test("Convert future tense sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api iiLaGa sathiyee gedhara yamu");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි ඊළඟ සතියේ ගෙදර යමු", { timeout: 30000 });
});

//Pos_Fun_0005
test("Convert compound sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill(
    "api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa",
  );

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText(
    "අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා",
    { timeout: 30000 },
  );
});

//Pos_Fun_0006
test("Convert complex sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("oyaa enavaanam mama balan innavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ඔයා එනවානම් මම බලන් ඉන්නවා", {
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
  await input.fill("oyaa enavadha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ඔයා එනවද?", { timeout: 30000 });
});

//Pos_Fun_0008
test("Convert imperative command", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("issarahata yanna");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ඉස්සරහට යන්න", { timeout: 30000 });
});

//Pos_Fun_0009
test("Convert negative sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mama ehema karannee naehae");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම එහෙම කරන්නේ නැහැ", { timeout: 30000 });
});

//Pos_Fun_0010
test("Pronoun variation plural", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("api yamu");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි යමු", { timeout: 30000 });
});

//Pos_Fun_0011
test("Convert greeting phrase", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("aayuboovan!");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("ආයුබෝවන්!", { timeout: 30000 });
});

//Pos_Fun_0012
test("Convert polite request", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("karuNaakaralaa mata podi udhavvak karanna puLuvandha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?", {
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
  await input.fill("ehema karapan");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("එහෙම කරපන්", { timeout: 30000 });
});

//Pos_Fun_0014
test("Convert response sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("hari, mama karannam");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("හරි, මම කරන්නම්", { timeout: 30000 });
});

//Pos_Fun_0015
test("Convert mixed Singlish and English sentence", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata Zoom meeting ekak thiyenavaa");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට Zoom meeting එකක් තියෙනවා", {
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
  await input.fill("api trip eka Kandy valata yamudha?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("අපි trip එක Kandy වලට යමුද?", {
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
  await input.fill("mata nidhimathayi");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට නිදිමතයි", { timeout: 30000 });
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
  await input.fill("7.30 AM enna");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("7.30 AM එන්න", { timeout: 30000 });
});

//Pos_Fun_0020
test("Convert sentence with multiple spaces", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  // 1) Input textarea
  const input = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  await input.fill("mata   raeeta kanna bath   oonee.");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මට   රෑට කන්න බත්   ඕනේ.", {
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
  await input.fill("mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?", {
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
  await input.fill("hari hari hoDHAtama");

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText("හරි හරි හොඳටම", { timeout: 30000 });
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
    "dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.",
  );

  // 2) Output container
  const output = page.locator("div.bg-slate-50");

  // 3) Wait for translation
  await expect(output).toHaveText(
    "දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.",
    { timeout: 30000 },
  );
});
