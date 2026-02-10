# Question Sheet – Topic-Wise Coding Tracker

A lightweight web application to organize, track, and monitor coding practice in a structured, topic-wise manner.  
Designed to help students and internship candidates prepare efficiently for DSA and technical interviews.

---

## Overview

Question Sheet is a frontend-focused project that allows users to browse coding questions grouped by topics such as Arrays, Strings, etc.  
Each topic can be expanded to reveal its questions, along with difficulty indicators and progress tracking.

The project emphasizes:
- clean component design
- scalable state management
- readable folder structure
- real-world frontend practices

---

## Key Features

- Topic-wise organization of coding questions  
- Expand / collapse topics to view related questions  
- Difficulty badges for quick assessment  
- Progress bar to visualize completion per topic  
- Centralized state management using Zustand  
- Fast development setup using Vite  

---

## Tech Stack

**Frontend**
- React.js
- Vite
- Tailwind CSS
- Zustand (state management)

**Data Handling**
- Static JSON-based question dataset

---

## Project Structure
QUESTION-SHEET
├── node_modules/
├── public/
│   ├── data/
│   │   └── sheet.json
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── sheetApi.js
│   ├── assets/
│   │   ├── leetcode.png
│   │   └── react.svg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.jsx
│   │   │   ├── ProblemItem.jsx
│   │   │   └── ProgressBar.jsx
│   │   ├── SectionCard.jsx
│   │   ├── QuestionCard.jsx
│   │   └── Topic.jsx
│   ├── store/
│   │   └── useSheetStore.js
│   ├── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js


---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/question-sheet.git
cd question-sheet

npm install
npm run dev


http://localhost:5173
