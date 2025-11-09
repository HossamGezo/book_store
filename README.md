# Book Store Project 📖

An e-commerce application for an online book store, built with React, TypeScript, and Vite. This project focuses on professional Git workflows, building a scalable project structure, and mastering state management with the Context API.

---

## ✨ Features

### Project Setup & Best Practices:
- **Professional Boilerplate:** Built on a clean, professional template using Vite for a fast development experience.
- **Absolute Import Paths:** Configured ` @/ ` aliases for cleaner, more maintainable import paths.
- **Structured Git Workflow:** Adherence to feature-branching, atomic commits, and pull requests for every new feature.
- **Custom Theming:** Centralized project theme (colors, fonts) configured in `tailwind.config.js`.
- **Reusable UI Components:** Building a library of custom components from scratch, starting with a powerful `<Button />` component that uses `clsx` for dynamic and conditional styling.

### Core Functionality:
- **Book Browsing & Details:** Users can view a list of all available books and click on any book to see its dedicated details page.
- **Shopping Cart (Context API):** A global shopping cart managed with React's Context API, allowing users to add, remove, and update the quantity of books.

### Authentication:
- **Login & Register Pages:** Dedicated routes and placeholder pages for user authentication.

### Layout & Static Pages:
- **Main Layout:** A consistent and reusable layout structure with a shared Header and Footer.
- **Static Pages:** Includes About Us, Authors, and Contact pages.
- **Utility Components:** A `ScrollToTop` component to ensure smooth navigation between pages.
- **Error Page:** A custom error page for handling invalid routes.

---

## 🛠️ Tech Stack & Setup

- **Framework:** React with TypeScript & Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Version Control:** Git & GitHub

### Key Libraries & Utilities
- **`clsx`:** A tiny utility for constructing `className` strings conditionally, making dynamic component styling clean and readable.

---

## 🚀 How to Run

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/HossamGezo/book_store.git
    ```
2.  **Navigate into the project directory:**
    ```sh
    cd book_store
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```