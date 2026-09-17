# Dynamic Interview Prep — Amazon & E-Commerce

> **Applicable to 99% of interviews, based on my observation.**

A sleek, interactive React app for preparing Amazon and e-commerce operations interviews. Built with the philosophy of **maximum interview coverage with minimum memorization**.

---

## 🎯 Overview

This app implements a **Dynamic Interview Build** framework that uses 5 core responses to answer 20+ common interview questions. Instead of memorizing dozens of answers, you learn to **route** questions to the most relevant core response.

### Core Architecture

```
Core KBs → Specialized Bridge → Router
```

- **Core KBs:** Career Story + Day-to-Day Operations + Evidence
- **Specialized Bridge:** SEO + PPC + Promotions
- **Router:** Identify competency → select relevant KB → compose natural answer

---

## ✨ Features

### 📖 Content Sections

1. **Career Story** (60–90 seconds) — Your professional journey and background
2. **Day-to-Day Routine** (45–60 seconds) — How you manage daily operations
3. **STAR — APN Suppression Case** (1–2 minutes) — Behavioral interview evidence
4. **FBA Shipment Walkthrough** (60–90 seconds) — Operational process demonstration
5. **Commercial Optimization** (60–90 seconds) — SEO, PPC, and promotions strategy
6. **Response Framework** — Question-to-response mapping tables
7. **Core Principles** — Operating principles and practice tips

### ⏱️ Practice Timer

Each section includes an interactive timer with:
- Start/Pause/Reset controls
- Visual progress bar with color coding
  - 🟢 Green = On track (< 70% of target)
  - 🟡 Yellow = Approaching limit (70–100%)
  - 🔴 Red = Over time (> 100%)
- Target time display based on section

### 🗺️ Response Framework

Interactive tables mapping interview questions to the appropriate core response:
- **Main Framework:** 20+ questions mapped to responses
- **SEO + PPC Coverage:** 12 commercial optimization questions
- **Architecture Diagram:** Visual representation of the routing system

### 🎨 UI/UX

- Dark theme optimized for focus and readability
- Responsive design with mobile sidebar
- Bold keyword highlighting for key talking points
- Smooth transitions and hover effects
- Custom scrollbar styling

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd interview-prep

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app component with routing
├── main.tsx                   # Entry point
├── index.css                  # Global styles
├── components/
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── SectionContent.tsx    # Content renderer for interview sections
│   ├── Timer.tsx             # Practice timer component
│   ├── Framework.tsx         # Response framework tables
│   └── Principles.tsx        # Core principles display
└── data/
    └── content.ts            # All interview content data
```

---

## 🎓 How to Use

### For Interview Practice

1. **Navigate** to a section using the sidebar
2. **Read** through the content, focusing on **bold** keywords
3. **Start the timer** and practice delivering the answer
4. **Check your timing** against the target duration
5. **Review the Framework** to understand which questions map to which responses

### For Learning the System

1. Start with **Core Principles** to understand the methodology
2. Review the **Response Framework** to see the question mapping
3. Practice each of the 5 core responses individually
4. Test yourself: given a random question, identify which core response to use

### Key Principles

- **Don't memorize answers for every question** — identify the competency being tested
- **Use the router** to pull the most relevant experience
- **Focus on bold text** — these are key talking points interviewers listen for
- **Practice the STAR format** for behavioral questions
- **Remember:** 5 core responses can answer 20+ interview questions

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Icon library

---

## 📊 Response Mapping Examples

| Interview Question | Primary Response |
|---|---|
| "Tell me about yourself." | Career Story |
| "What do you do every day?" | Day-to-Day Routine |
| "Tell me about a difficult problem." | APN Evidence (STAR) |
| "How do you handle an FBA shipment?" | FBA Operational Walkthrough |
| "How do you improve Amazon SEO?" | Commercial Optimization |
| "How do SEO and PPC work together?" | Commercial Optimization |
| "How do you prepare for Prime Day?" | Commercial Optimization + FBA/Inventory |

---

## 💡 Tips

- **Time yourself** — stay within the target duration for each section
- **Practice out loud** — don't just read silently
- **Focus on structure** — use the framework to organize your thoughts
- **Adapt, don't memorize** — the goal is natural, confident delivery
- **Use evidence** — the APN case is your go-to for behavioral questions

---

## 📝 License

This project is for personal interview preparation use.

---

## 🤝 Contributing

Feel free to fork and customize for your own interview preparation needs.

---

**Remember:** The objective is maximum interview coverage with minimum memorization. Route, don't recite.
