# Design Decision

## Overview

The goal of this project was to create a simple, intuitive, and professional task management dashboard that could be used by both employees and managers.

Instead of focusing on complex visuals, I prioritized usability, readability, and component reusability.

---

## Layout

A card-based layout was chosen because it separates information into small, digestible sections.

This approach makes it easier for users to scan tasks quickly without feeling overwhelmed.

---

## Color Choice

The interface uses a white and orange color palette.

- Orange represents action, energy, and productivity.
- White provides clarity and reduces visual clutter.
- Green indicates completed tasks.
- Yellow indicates pending tasks.
- Red highlights high-priority or risk-related information.

These colors create clear visual feedback while maintaining consistency throughout the application.

---

## Employee Dashboard

The employee dashboard focuses on simplicity.

Users immediately see:

- Weekly progress
- Task summary
- Assigned tasks
- Completion status

This minimizes distractions and allows employees to complete their work efficiently.

---

## Manager Dashboard

Managers need more information than employees.

The manager dashboard therefore provides:

- Team overview
- Completed tasks
- Pending tasks
- At-risk tasks

The layout keeps these statistics visible while still allowing managers to focus on individual employees.

---

## Component Reusability

The application was divided into reusable React components such as:

- Header
- TaskCard
- DashboardStats
- ProgressBar
- ManagerDashboard
- ManagerTaskRow
- StatCard

This keeps the code modular, easier to maintain, and scalable for future development.

---

## Responsive Design

The interface was designed using responsive layouts so it works well across desktop and tablet screen sizes.

Flexible grids and spacing help maintain readability on different devices.

---

## Conclusion

The overall design prioritizes clarity, usability, and maintainability while following modern dashboard design principles.

The goal was to create an interface that is easy to navigate, visually clean, and scalable for future enhancements.