# SwiftTranslator – Playwright Test Automation

This repository contains automated functional and UI test cases for the **SwiftTranslator** web application, which transliterates **Singlish input into Sinhala**.

The automation is implemented using **Playwright** with the **Chromium** browser engine.

---

## 🛠️ Prerequisites

Ensure the following are installed on your system:

- **Node.js** (version 18 or later recommended)
- **npm** (comes with Node.js)
- Internet connection (to access https://www.swifttranslator.com)

---

## 📥 Installation

1. Clone the repository:

```bash
git clone <GITHUB_REPOSITORY_URL>
```

2. Navigate to the project folder:

```bash
cd <PROJECT_FOLDER_NAME>
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Tests

Run all tests using Chromium (recommended):

```bash
npx playwright test --project=chromium --workers=1
```

Run tests with browser UI visible:

```bash
npx playwright test --project=chromium --workers=1 --headed
```

---

## 🎯 Run a Specific Test Case by ID

Each test case is uniquely identified (e.g., `Pos_Fun_0101`, `Neg_Fun_02`).

Example:

```bash
npx playwright test --project=chromium --grep "Pos_Fun_0101"
```

---

## 📊 View Test Report

After running the tests, open the HTML report using:

```bash
npx playwright show-report
```

This will open a browser-based report showing passed and failed test cases.
