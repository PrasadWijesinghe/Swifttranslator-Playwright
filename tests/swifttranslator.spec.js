const { test, expect } = require("@playwright/test");

const cases = [
  {
    id: "Pos_Fun_01",
    name: "Convert a short command",
    input: "issarahata yanna",
    expected: "ඉස්සරහට යන්න",
  },
  {
    id: "Pos_Fun_02",
    name: "Convert a present daily sentence",
    input: "mama dhaen vaeda karanavaa",
    expected: "මම දැන් වැඩ කරනවා",
  },
  {
    id: "Pos_Fun_03",
    name: "Convert a Question ",
    input: "oyaa kavadhdha enna hithan inne?",
    expected: "ඔයා කවද්ද එන්න හිතන් ඉන්නේ?",
  },
  {
    id: "Pos_Fun_04",
    name: "Convert mixed English sentence ",
    input: "Team meeting eke link eka whatsapp karanna puluvandha?",
    expected: "Team meeting eke link එක whatsapp කරන්න පුලුවන්ද?",
  },
  {
    id: "Neg_Fun_01",
    name: "Joined singlish words ",
    input: "mamagedharayanava",
    expected: "මම ගෙදර යනවා",
  },
  {
    id: "Pos_Fun_05",
    name: "Convert a compund sentence",
    input: "api kaema kanna yanavaa iita passe chithrapatiyakuth balanna yanavaa.",
    expected: "අපි කැම කන්න යනවා ඊට පස්සෙ චිත්‍රපටියකුත් බලන්න යනවා.",
  },
  {
    id: "Pos_Fun_06",
    name: "Convert a past tense sentence",
    input: "mama iiye gedhara giyaa",
    expected: "මම ඊයෙ ගෙදර ගියා",
  },
  {
    id: "Pos_Fun_07",
    name: "Convert slang-based expression(infromal)",
    input: "ela machan mata adha vaeda godak thiyenavaa",
    expected: "එල මචන් මට අද වැඩ ගොඩක් තියෙනවා",
  },
  {
    id: "Pos_Fun_08",
    name: "Convert sentence with English words and  location names",
    input: "api trip eka Kandy valata yamudha ? haebaeyi passe Colombo enavaa",
    expected: "අපි trip එක Kandy වලට යමුද ? හැබැයි පස්සෙ Colombo එනවා",
  },
];

test.describe("SwiftTranslator - Positive functional tests", () => {
  for (const tc of cases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const inputBox = page.getByRole("textbox", {
        name: "Input Your Singlish Text Here.",
      });

      await inputBox.fill(tc.input);

      await expect(page.getByText(tc.expected)).toBeVisible();
    });
  }
});
