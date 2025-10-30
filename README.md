# 🎓 Quiz App

A modern, interactive quiz application for testing your knowledge. Built with JavaScript - no dependencies, just open and start learning!

## 🚀 Quick Start

### Option 1: Simple (Recommended)

1. Double-click `index.html`
2. Start learning! 🎉

### Option 2: Local Server

```bash
cd QuizApp
python -m http.server 8200
# Open: http://localhost:8200
```

## � Available Content

- **HCI (Human Computer Interactions) - NPTEL**
  - ✅ 2023: 12 weeks
  - ✅ 2024: 12 weeks
  - ✅ 2025: 12 weeks
- **IIOT (Industrial IOT) - NPTEL**
  - ✅ 2025: 12 weeks
- **IOT (Intro to IOT) - NPTEL**
  - ✅ 2023: 12 weeks
  - ✅ 2024: 12 weeks
  - ✅ 2025: 12 weeks

## ✨ Features

- 🎯 Multiple subjects and years
- 📝 12 weekly assignments per year
- ✅ Single & multi-select questions
- ⚡ Instant answer checking
- 📊 Progress tracking with color codes
- 📱 Mobile-friendly responsive design
- 🎨 Beautiful purple gradient theme

## 🎮 How to Use

1. **Welcome Screen** → Click "Start Learning"
2. **Select Subject** → Choose HCI or IIOT
3. **Select Year** → Pick 2024 or 2025
4. **Select Week** → Choose from 12 weeks
5. **Take Quiz** → Answer and check instantly!

### Navigation Tips

- 🟢 Green = Correct answer
- 🔴 Red = Incorrect answer
- 🔵 Blue = Answered, not checked
- ⚪ White = Not attempted
- Use Next/Previous or jump directly to any question

## 📁 Project Structure

```
QuizApp/
├── index.html          # Main app - double-click to start!
├── styles.css          # Styling
├── app.js             # Application logic
├── config.js          # Configuration
├── HCI/data2024.js    # HCI 2024 questions
├── HCI/data2025.js    # HCI 2025 questions
└── IIOT/              # IIOT data (coming soon)
```

## 🔧 Adding New Content

### Add New Year

1. Create `HCI/data2026.js` (copy structure from existing files)
2. Update `config.js`:

```javascript
years: [
  { year: 2026, file: "data2026.js" },
  { year: 2025, file: "data2025.js" },
];
```

### Add IIOT Data

1. Create `IIOT/data2024.js` and `IIOT/data2025.js`
2. Update `config.js` to enable years for IIOT

### Data Structure

See `DATA_TEMPLATE.js` for the complete template. Basic structure:

```javascript
const quizData = [
  {
    assignment: "Assignment 1",
    week: 1,
    questions: [
      {
        id: "1.1_2025_HCI",
        question_text: "Your question?",
        options: [
          { id: "a", text: "Option A", image: null },
          { id: "b", text: "Option B", image: null },
        ],
        correct_answers: ["a"],
        type: "Single-Select MCQ",
      },
    ],
  },
];
```

## 🛠️ Tech Stack

- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks or dependencies
- Fully responsive design

## � Troubleshooting

- **Blank screen?** Enable JavaScript in browser
- **No questions?** Check data files exist in HCI folder
- **Styling broken?** Clear cache (Ctrl+F5)
- **IIOT unavailable?** Data not added yet (expected)

## 🎓 Happy Learning!

Built with ❤️ for students | v1.0.0 | October 2025
