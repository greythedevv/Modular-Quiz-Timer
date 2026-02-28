# 🧠 JavaScript Quiz App

A simple interactive quiz application built with **HTML, CSS, and JavaScript**.  
This app displays multiple-choice questions, includes a countdown timer, tracks score, and stores the highest score using `localStorage`.

---

## 🚀 Features

- 🎲 Randomized question order
- ⏳ 15-second timer per question
- ✅ Instant answer validation
- 🎨 Visual feedback for correct and wrong answers
- 📊 Score tracking
- 🏆 Persistent high score using localStorage
- 🔄 Restart quiz functionality
- 💅 Modern animated UI design

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser Local Storage API

---

## 📂 Project Structure


quiz-app/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## 🧩 How It Works

1. The quiz data is stored in an array of objects.
2. Questions are shuffled randomly on load.
3. Each question:
   - Displays options as buttons.
   - Starts a 15-second countdown timer.
4. When:
   - The user selects an answer → timer stops and answer is validated.
   - Time runs out → correct answer is automatically revealed.
5. Score updates only if the user selected the correct answer manually.
6. After all questions:
   - Final score is displayed.
   - High score is compared and updated in localStorage.
   - Option to restart the quiz appears.

---

## 📸 UI Preview

- Dark themed modern quiz card
- Smooth fade-in animation
- Hover effects on buttons
- Color-coded feedback:
  - Green → Correct
  - Red → Wrong

---

## ▶️ How To Run The Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Start playing 🎉

---

## 🏆 Future Improvements 

- Add difficulty levels
- Add category selection
- Add sound effects
- Add progress bar
- Add more questions dynamically from an API
- Add leaderboard system

---

## 📌 Author
greythdev

Built with ❤️ while learning JavaScript.