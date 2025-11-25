# Unstop Mentor: Gamified Growth & AI Copilot 🚀

> **Hypothesis:** By integrating **gamification mechanics** (XP, Leaderboards, Streaks) and a **guided AI mentor** into the core user journey, we can significantly increase **Daily Active Users (DAU)** and drive higher conversion rates to the **Unstop Gold** premium plan.

![Dashboard](assets/screenshots/dashboard.png)

## 🎯 North Star Metric
**Daily Active Users (DAU) / Monthly Active Users (MAU) Ratio**
*Focus: Driving habitual daily engagement rather than sporadic visits.*

## 📊 Key Metrics to Track
1.  **Retention Rate**: Day-1, Day-7, and Day-30 retention cohorts.
2.  **Streak Continuity**: % of users who maintain a 3+ day streak.
3.  **AI Interaction Rate**: % of sessions involving at least one AI conversation turn.
4.  **Gold Conversion Rate**: % of users upgrading to Gold after an AI nudge or Leaderboard interaction.

## 💡 Core Solutions & Features

### 1. Gamified Growth Engine 🎮
*   **XP System & Levels**: Users earn XP for every action (applying, quizzing, logging in), progressing from "Novice" to "Product Ninja".
*   **College Leaderboard**: Leverages social FOMO by showing users their rank against classmates (e.g., "You're 200 XP behind Rohan").
*   **Streak Tracker**: Visual "Heatmap" and streak counters create a sunk cost bias, encouraging daily logins.

![Leaderboard](assets/screenshots/leaderboard.png)

### 2. "Nonstop" AI Mentor (The Copilot) 🤖
*   **Guided Flows**: Replaced open-ended chat with structured chip-based options (Competitions, Quizzes, Leaderboard) to reduce cognitive load.
*   **Contextual Nudges**: The AI knows your context (College: BITS Pilani, Rank: 3) and uses it to drive action.
*   **Monetization Focus**: Witty, persuasive prompts that position **Unstop Gold** as the "winning edge" for serious candidates.

![AI Chat](assets/screenshots/ai_mentor.png)
![AI Leaderboard Widget](assets/screenshots/ai_leaderboard_widget.png)

### 3. Smart Monetization (Gold Plan) 🏆
*   **Contextual Upsell**: The AI recommends the Gold Plan exactly when the user needs it (e.g., after a quiz or when viewing premium tasks).
*   **Premium Tasks**: "Maintain Streak" workflow includes premium-only tasks (e.g., "Read 'The Mom Test' Summary") that trigger the upsell.

![Gold Modal](assets/screenshots/gold_modal.png)

### 4. A/B Testing Framework 🧪
*   **Variant A (Control)**: Standard "Competitions" grid view (Functional but passive).
*   **Variant B (Winner)**: The new Gamified Dashboard (Social, Interactive, Sticky).
*   **Hypothesis**: Variant B will show a **20-30% uplift in session time** and **15% increase in Day-7 retention**.

## 🛠️ Tech Stack
*   **Frontend**: React + Vite
*   **Styling**: Vanilla CSS (Performance-first)
*   **Icons**: Lucide React
*   **State**: Local State (Prototype)

## 🚀 How to Run
1.  Clone the repository.
2.  Run `npm install`.
3.  Run `npm run dev`.
4.  Toggle between Variant A and B using the header switch.

## 🔗 Deployment
- **GitHub Repository**: [unstop-mentor](https://github.com/kr-ankit22/unstop-mentor)
- **Live Demo**: [https://kr-ankit22.github.io/unstop-mentor/](https://kr-ankit22.github.io/unstop-mentor/)
