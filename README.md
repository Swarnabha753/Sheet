# Question Sheet – Topic-Wise Coding Tracker

A lightweight web application to organize, track, and monitor coding practice in a structured, topic-wise manner.  
Designed to help students and internship candidates prepare efficiently for DSA and technical interviews.

## 🚀 Live Demo  
🔗 **[Deployed Website](https://sheet-bay.vercel.app/)**  

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
```
QUESTION-SHEET/
│── node_modules/        # Project dependencies
│── public/              # Public static files
│   ├── data/            # Question data source
│   │   └── sheet.json
│   └── vite.svg
│── src/                 # Application source code
│   ├── api/             # Data fetching logic
│   │   └── sheetApi.js
│   ├── assets/          # Images and icons
│   │   ├── leetcode.png
│   │   └── react.svg
│   ├── components/      # UI components
│   │   ├── ui/           # Reusable UI elements
│   │   │   ├── Badge.jsx
│   │   │   ├── ProblemItem.jsx
│   │   │   └── ProgressBar.jsx
│   │   ├── SectionCard.jsx
│   │   ├── QuestionCard.jsx
│   │   └── Topic.jsx
│   ├── store/           # Global state management
│   │   └── useSheetStore.js
│   ├── api.js           # API abstraction layer
│   ├── App.jsx          # Root component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
│── .gitignore           # Git ignored files
│── eslint.config.js     # ESLint configuration
│── index.html           # HTML entry file
│── package.json         # Dependencies and scripts
│── package-lock.json    # Dependency lock file
│── postcss.config.js    # PostCSS configuration
│── tailwind.config.js   # Tailwind CSS configuration
│── vite.config.js       # Vite configuration
│── README.md            # Project documentation

```
---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/question-sheet.git
cd question-sheet

npm install
npm run dev


http://localhost:5173
