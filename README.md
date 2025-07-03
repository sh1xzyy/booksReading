# 📚 Personal Reading Planner

A web application that helps users organize, schedule, and track their reading goals. Users can manage their personal reading journey - from selecting books they want to read to tracking their progress and reflecting on completed titles.

## 🌟 Features

### 🔐 Authentication
- User registration and login functionality.
- Personal dashboard for each user.

### 📖 Book Management
- Add books to the **"Want to Read"** section.
- Move books to **"Reading"** when added to a reading session.
- After the session ends, books automatically move to the **"Read"** section.
- In the "Read" section, users can:
  - Rate each book.
  - Leave personal comments or reviews.

### 🏁 Reading Session (Training Mode)
- Users can:
  - Set a start and end date for a reading session.
  - Select one or more books from the "Want to Read" list.
- Once the session is started:
  - A countdown timer appears showing time left until the deadline and until New Year's Eve.
  - Books selected for the session move to the "Reading" section.
  - Users can check off books as they finish them.

### 📊 Statistics & Progress
- Daily input form to log the number of pages read and the date.
- Data is visualized through:
  - Interactive charts showing daily/total reading progress.
  - Statistics summary to give users feedback on their habits.

### 🎯 Completion Feedback
- At the end of a session:
  - If not all books were read, a motivational modal appears encouraging the user for next time.

### 🌐 Multilingual Support
- Interface is available in three languages:
  - English
  - Ukrainian
  - Russian

### 💻 Adaptive Design
- Fully optimized for desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

- **React** - Front-end library for building the user interface.
- **React Router** - Navigation between pages.
- **Context API / Custom Hooks** - State management.
- **Formik + Yup** - Forms and validation.
- **Chart.js / Recharts** - Visualization of reading statistics.
- **i18next** - Internationalization (EN/UA/RU).
- **CSS Modules** - Component-scoped styles.
- **LocalStorage / API (if applicable)** - Data persistence.

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/booksReading.git

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run start
