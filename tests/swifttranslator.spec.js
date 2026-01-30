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
  {
    id: "Neg_Fun_02",
    name: "Joined sentences with English words ",
    input: "adhaofficeZoommeetingekata mama latevenavaa",
    expected: "අද office Zoom meeting එකකට මම late වෙනවා",
  },
  {
    id: "Pos_Fun_09",
    name: "Convert sentence with plural pronoun and question",
    input: "oyaalaa heta gedhara enavadha?",
    expected: "ඔයාලා හෙට ගෙදර එනවද?",
  },
  {
    id: "Pos_Fun_10",
    name: "Convert sentence containing currency and numbers",
    input: "magee bill eka Rs. 2500k vitharayi.",
    expected: "මගේ bill එක Rs. 2500ක් විතරයි.",
  },
  {
    id: "Pos_Fun_11",
    name: "Date fromat with simple dialog",
    input: "meeting eka 25/12/2025 thiyennee",
    expected: "meeting එක 25/12/2025 තියෙන්නේ",
  },
  {
    id: "Pos_Fun_12",
    name: "connected sentence with english word that use in informal conversation.",
    input: "mata heta enna bari vena scene  ekak thiyenne.haebayi mama mokak hari gemak gahanna balagena inne",
    expected: "මට හෙට එන්න බැරි වෙන scene  එකක් තියෙන්නෙ.හැබයි මම මොකක් හරි ගෙමක් ගහන්න බලගෙන ඉන්නේ බැරි",
  },
  {
    id: "Pos_Fun_13",
    name: "Convert sentence with repeated words ",
    input: "hari hari eeka hariyata vaeda karanavaa",
    expected: "හරි හරි ඒක හරියට වැඩ කරනවා",
  },
  {
    id: "Neg_Fun_03",
    name: "Multiple Joined words",
    input: "hetaapiyanavaanamapiyamu",
    expected: "හෙට අපි යනවානම් අපි යමු",
  },
  {
    id: "Neg_Fun_04",
    name: "Extra spaces",
    input: "mata   raeeta    kanna   bath    oonee",
    expected: "මට රෑට කන්න බත් ඕනේ",
  },
  {
    id: "Neg_Fun_05",
    name: "Multi line input in a dialog",
    input: "mama gedhara yanavaa oyaa enavadha?",
    expected: "මම ගෙදර යනවා ඔයා එනවද?",
  },
  {
    id: "Neg_Fun_07",
    name: "Trailing punctuation causes formating",
    input: "mama gedhara yanavaa,,, oyaa enavadha???",
    expected: "මම ගෙදර යනවා, ඔයා එනවද?",
  },
  {
    id: "Pos_Fun_14",
    name: "Convert polite rquest ",
    input: "karuNaakaralaa mata podi udhavvak karanna puLuvandha?",
    expected: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?",
  },
  {
    id: "Pos_Fun_15",
    name: "Convert long pharagraph",
    input: "shrii lankaavee praDhaana jaathiya vana sinhala janayaagee mav basa sinhala veyi. adha vana vita miliyana 20 kata aDhika sinhala saha miliyana 3kata aDhika sinhala novana janagahanayak sinhala BhaaShaava Bhaavitha karathi. sinhala indhu-yuroopiiya BhaaShaavala upa gaNayak vana indhu-aarYA BhaaShaa gaNayata ayithi vana athara maala dhivayina Bhaavitha karana dhivehi BhaaShaava sinhala basata bohoo dhurata samaana BhaaShaavaki. sinhala shrii lankaavee nila BhaaShaavayi.",
    expected: "ශ්‍රී ලන්කාවේ ප්‍රධාන ජාතිය වන sinhala ජනයාගේ මව් බස sinhala වෙයි. අද වන විට මිලියන 20 කට අධික sinhala සහ මිලියන 3කට අධික sinhala නොවන ජනගහනයක් sinhala භාෂාව භාවිත කරති. sinhala ඉන්දු-යුරෝපීය භාෂාවල උප ගණයක් වන ඉන්දු ආර්ය භාෂා ගණයට අයිති වන අතර මාල දිවයින භාවිත කරන දිවෙහි භාෂාව sinhala බසට බොහෝ දුරට සමාන භාෂාවකි. sinhala ශ්‍රී ලන්කාවේ නිල භාෂාවයි.",
  },
  {
    id: "Pos_Fun_16",
    name: "Large phragrph with english words and numbers",
    input: "roods nam griika dhivayinee roods nagarayee idhikarana ladha griika tayitan suurya dhevi hiiliyoosgee prathimaavaki. puraathana lookayee pudhuma hathen ekak vana meya kri.puu. 305dhii sayiprasayee paalakayaa vuu aentigoonas I monofthaelmas visin dhiyath kaLa aakramaNaya paradhaa roods laebuu jayagrahaNaya sankeethavath karamin idhivuuvaki. bohoo samakaaliina visthara anuva, mema prathimaavee pathulee sita kiruLa dhakvaa vuu usa aasanna vashayen riyan 70k hevath 33 metres (108 feet) viya. meya nuuthana libarti prathimaavee usata aasannava samaana ya. ee anuva meya puraathana lookayee usin vaedima prathimaava viya. kri.puu. 226 Bhuumikampaavakin meya vinaasha vuu athara, eya naevatha idhi kiriimak dha sidhuvuuyee naetha.",
    expected: "roods නම් ග්‍රීක දිවයිනේ roods නගරයේ ඉදිකරන ලද ග්‍රීක ටයිටන් සූර්ය දෙවි හීලියෝස්ගේ ප්‍රතිමාවකි. පුරාතන ලෝකයේ පුදුම හතෙන් එකක් වන මෙය ක්‍රි.පූ. 305දී සයිප්‍රසයේ පාලකයා වූ ඇන්ටිගෝනස් ඉ මොනොෆ්තැල්මස් විසින් දියත් කළ ආක්‍රමණය පරදා roods ලැබූ ජයග්‍රහණය සන්කේතවත් කරමින් ඉදිවූවකි. බොහෝ සමකාලීන විස්තර අනුව, මෙම ප්‍රතිමාවේ පතුලේ සිට කිරුළ දක්වා වූ උස ආසන්න වශයෙන් රියන් 70ක් හෙවත් 33 මෙට්‍රෙස් (108 feet) විය. මෙය නූතන ලිබර්ටි ප්‍රතිමාවේ උසට ආසන්නව සමාන ය. ඒ අනුව මෙය පුරාතන ලෝකයේ උසින් වැඩිම ප්‍රතිමාව විය. ක්‍රි.පූ. 226 භූමිකම්පාවකින් මෙය විනාශ වූ අතර, එය නැවත ඉදි කිරීමක් ද සිදුවූයේ නැත.",
  },
  {
    id: "Pos_Fun_17",
    name: "Convert an imperative command",
    input: "vashama enna",
    expected: "වහාම එන්න",
  },
  {
    id: "Pos_Fun_18",
    name: "Convert a complex sentence with local words",
    input: "mama sunaQQgu vunee paara kaedila nisaa",
    expected: "මම සුනංගු වුනේ පාර කැඩිල නිසා",
  },
  {
    id: "Pos_Fun_19",
    name: "Convert a trditional sinhala word",
    input: "maulimQQgalYAya",
    expected: "මෞලිමංගල්‍යය",
  },
  {
    id: "Pos_Fun_20",
    name: "Convert sentence with time format and curruncy",
    input: "mata 7.30 AM venakan inna puluvan.rs 1000k aran enna.",
    expected: "මට 7.30 AM වෙනකන් ඉන්න පුලුවන්.rs 1000ක් අරන් එන්න",
  },
  {
    id: "Pos_Fun_15",
    name: "",
    input: "",
    expected: "",
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
