# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ZenSpace
Welcome to *ZenSpace, a mood-tracking and journaling app to assist users in introspecting over their emotions and keeping a sound mental state. This application provides a means to track daily mood, compose journal entries, and see how their emotional trends evolve over time. Built with contemporary web development technologies, the project utilizes **React.js* as the frontend, *Recharts* for interactive data visualization (such as mood pie charts), and *TailwindCSS-like styling* for a modern-looking and responsive interface. The application also employs *Context API* for global state management such as theme settings (light/dark mode) and user authentication, while *Lucide React Icons* offer clean and contemporary icons across the interface. Data persistence is achieved through *local storage*, saving user preferences even after page refresh.

The app features a *dashboard* that provides an overview of your mood distribution through a visually appealing pie chart, weekly statistics like journal streaks and most frequent moods, and a preview of recent journal entries. Users can create new journal entries by selecting their mood, adding a title, and writing detailed content. Each journal entry is also assigned a mood emoji, which is aggregated as part of the overall mood analytics on the dashboard. Customizable themes are enabled in the app, so that users can switch from light to dark modes easily, with automatic switching based on system settings. Navigation is simple with a top header featuring links to the dashboard, the journal entries, and a new entry form, along with a mobile menu for smaller devices.

The project is structured in reusable components, contexts, and pages for scalability and maintainability. Important components are *MoodChart, which plots mood data; **RecentEntries, which shows a summary of the most recent journal logs; **EntryForm, where users can add new entries; and **EntryList, which presents all previous entries in a clean, card-based structure. The **Header* component is responsible for navigation and user actions, whereas *ThemeToggle* and *UserMenu* are used to offer theme changing and user profile management functionality. Sample data has been added for demonstrating functionality, e.g., mood frequencies and example journal entries.

To get started with the app, clone the repository, install dependencies with npm install, and start it with npm start. From there, you can navigate features such as logging new journal entries, seeing mood analytics, and switching themes. The app is completely responsive, so it looks fantastic on any device, from mobile to desktop. Future additions might include the integration of real user authentication, backend storage for journal entries, more advanced analytics, notifications for daily mood logging, and exporting data as PDFs or CSVs.

Special appreciation to the libraries and resources that made this project achievable, such as *React, **Recharts, **Lucide React Icons, and **TailwindCSS* for inspiration. ZenSpace is a respectful and practical tool for anyone who wants to keep an eye on their emotional health and stay in the habit of reflective journaling.