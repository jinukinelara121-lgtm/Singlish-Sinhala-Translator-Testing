# Singlish to Sinhala Translator – Playwright Test Automation

## 📌 Project Overview

This repository contains automated test cases implemented using **Playwright** to test the functionality, robustness, and UI behavior of the **Singlish to Sinhala Translator web application**.

The test suite includes:

* Positive functional test cases
* Negative functional test cases
* UI-related test scenarios
  based on the assignment requirements for **Semester 1**.

---

## 🛠 Technologies Used

* **Node.js**
* **Playwright Test Framework**
* **JavaScript**

---

## 📂 Project Structure

```
singlish-sinhala-testing/
│
├── tests/
│   ├── positive-functional.spec.js
│   ├── negative-functional.spec.js
│   └── ui-tests.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Prerequisites

Before running the project, ensure you have the following installed on your system:

* **Node.js (v18 or later recommended)**
* **npm** (comes with Node.js)
* A modern web browser (Chrome/Edge/Firefox)

---

## ⚙️ Installation Steps

1. **Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
```

2. **Navigate to the project directory**

```bash
cd singlish-sinhala-testing
```

3. **Install dependencies**

```bash
npm install
```

4. **Install Playwright browsers**

```bash
npx playwright install
```

---

## ▶️ Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run tests with UI mode

```bash
npx playwright test --ui
```

### Run a specific test file

```bash
npx playwright test tests/negative-functional.spec.js
```

---

## 📊 Test Coverage

The test cases cover the following areas:

* Singlish to Sinhala translation accuracy
* Handling of incorrect or malformed input
* Sentence structure (simple, compound, complex)
* Polite vs informal phrasing
* Day-to-day expressions
* Mixed English and Singlish
* Numbers, punctuation, currency, and time formats
* UI behaviors such as:

  * Real-time output updates
  * Clearing input behavior
  * Formatting preservation

---

## 📄 Assignment Compliance

This repository fulfills the **Semester 1 assignment requirements** by including:

* ✅ A complete Playwright automation project
* ✅ Positive and negative test scripts
* ✅ UI-related test scenarios
* ✅ Clear instructions to install and run tests
* ✅ Publicly accessible GitHub repository

> ⚠️ **Note:** Ensure the repository is set to **Public** so it can be accessed during marking.

---

## 👤 Author

**Name:** *Senevirathne S W J N*
**Student IT Number:** *IT23555976*

