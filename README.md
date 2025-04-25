# CONNECT Course Entry Automation

This [script](main.js) automates course entry in the CONNECT platform — the course offering and scheduling system developed and used by BRAC University. It reduces the manual burden of entering details for each course section by automatically filling out necessary forms across multiple pages.

---

🚀 **Watch the Tutorial (Highly Recommended)**  
🎥 [Click here to watch this short video tutorial](https://youtu.be/RYprXukVBEE)
This video shows how to use the script effectively and safely.

---

## 🧩 Features

- Automates section creation, theory/lab scheduling, and faculty assignment.
- Auto-selects course and room from dropdowns.
- Inputs custom time and date values.
- Supports both theory and lab components, including exams.
- Easily extendable and modifiable.
- Uses browser-native Developer Tools (Snippets) — no external extension required.

---

## 📋 Auto-Generate Script Variables with Google Sheet

To avoid manually editing the top variables every time (lines 7–25 of the script), use the following Google Sheet template:

📄 [Google Sheet Template for Course Entry Script](https://docs.google.com/spreadsheets/d/1wSfk7hZBF89dioSPjiclteF5tXy8ORsyPwsG9ldhdhU/edit?usp=sharing)

### ✨ How to Use:
1. Enter your course details in the sheet.
2. The sheet will **auto-generate the formatted script lines** in cell `Z2`.
3. Simply **copy the cell Z2** and **paste to overwrite lines 7 to 25** in the script.
4. Edit course, degree, and semester information on line `28-30` if necessary.
5. Run the [script](main.js) using browser's developer interface (described below).

---

## 🔧 Getting Started

### ✅ Prerequisites

- Edge, Chrome, Mozilla or similar browser
- Access to BRAC University CONNECT portal
- Basic familiarity with Developer Tools

### ✨ Steps

1. Open CONNECT and navigate to: Registrar → Course Offered → Course Section
2. Press `Ctrl+Shift+I` (or right-click → Inspect) to open **Developer Tools**.
3. Go to the **Sources** tab → Left Pane → `Snippets` → Right-click → `New Snippet`.
4. Paste the [script](main.js) into the new snippet.
5. Paste your course-specific variables from the Google Sheet (as above).
6. Hit `Ctrl + Enter` to run.
7. Manually review the section and click **Send For Approval** only when satisfied.

> 💡 **Always refresh the page before running the script for a new section.**

---

## 📺 Tutorial Video (Again, Don’t Skip!)

🎥 [Watch the full demo tutorial here (YouTube)](https://your-video-link-here.com)  
Covers: setup, running, safety tips, and how it works under the hood.

---

## ❗ Disclaimer & Purpose

> ⚠️ **This script was developed solely to assist with and simplify course entry tasks for authorized personnel.**  
> It is intended to support workflow efficiency and reduce repetitive manual input.  
> I do not take any responsibility for improper or unauthorized use of this script.  
> Please ensure data accuracy and follow institutional protocols when using it.

---

## 🔄 Planned Improvements

- One-click entry for all sections of a course (batch processing).
- GSheet integration for pulling data directly into the script.
- Auto-validation to confirm successful input.

---

## 🧠 Additional Notes

- **Do NOT uncomment `send_for_approval()` unless you're 100% sure.**  
Once a section is submitted for approval, it cannot be edited.

- The script assumes standard UI layout. If CONNECT's interface changes, updates to selectors may be needed.

---

## 📬 Feedback & Contributions

Found a bug or want to collaborate? Feel free to raise an issue or suggest enhancements.

---

Made purely to help fellow faculty and admin staff.
