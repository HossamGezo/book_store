# 📚 Bookstore - Modern E-Commerce Frontend

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-00C853?style=for-the-badge&logo=netlify&logoColor=white)](https://hossamgezo-bookstore.netlify.app/)

![Netlify Status](https://img.shields.io/badge/Netlify-Success-00C7B7?style=flat&logo=netlify)
![React](https://img.shields.io/badge/React_19-%2320232a?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat&logo=tailwind-css)
![ContextAPI](https://img.shields.io/badge/State-Context_API-61DAFB?style=flat&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

</div>

---

### 🔗 Quick Links

- **🚀 Live Website:** [https://hossamgezo-bookstore.netlify.app/](https://hossamgezo-bookstore.netlify.app/)
- **💻 GitHub Repository:** [https://github.com/HossamGezo/book_store](https://github.com/HossamGezo/book_store)

---

<div align="center">
  <img src="assets/bookstore-ui.png" alt="Bookstore UI" width="900" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"/>
</div>

---

## ✨ Key Features

- **🔍 Real-time Search Engine:** Dynamic filtering for Authors and Books with instant UI updates.
- **🛒 Advanced Shopping Cart:** Full-featured cart with `useReducer` logic and persistent **LocalStorage** sync.
- **📱 Adaptive Pagination:** Smart pagination system that changes items per page based on screen size.
- **⚡ High Performance:** Lightning-fast loads using **React Lazy Loading**, **Suspense**, and **Memoization**.
- **🏗️ Modular Architecture:** Extremely organized code structure designed for scalability and maintenance.
- **♿ A11y & SEO:** Fully accessible UI with semantic HTML and optimized metadata.

---

## 🛠️ Tech Stack & Tools

| Architecture & Logic                                                              | Form & Validation                                                                      | Styling & UI                                                                             | Performance                                                                      |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React_19-blue?style=flat&logo=react)        | ![HookForm](https://img.shields.io/badge/Hook_Form-pink?style=flat&logo=reacthookform) | ![Tailwind](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat&logo=tailwind-css) | ![Skeleton](https://img.shields.io/badge/Pulse_Loaders-Custom-orange?style=flat) |
| ![TS](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript)  | ![Zod](https://img.shields.io/badge/Zod_Validation-3E67B1?style=flat&logo=zod)         | ![Icons](https://img.shields.io/badge/React_Icons-eb5757?style=flat&logo=react)          | ![Lazy](https://img.shields.io/badge/Lazy_Loading-blue?style=flat)               |
| ![Context](https://img.shields.io/badge/Context_API-61DAFB?style=flat&logo=react) | ![Toasts](https://img.shields.io/badge/Hot_Toasts-Success-green?style=flat)            | ![Flexbox](https://img.shields.io/badge/Layout-Flexbox_Grid-E34F26?style=flat)           | ![Memo](https://img.shields.io/badge/useMemo-Optimized-green?style=flat)         |

---

## 📝 Engineering Highlights

### 🧪 Performance Optimization

- **Memoized Search:** Integrated `useMemo` for Author search to ensure smooth filtering even with large datasets.
- **Efficient Re-renders:** Optimized state management to prevent unnecessary DOM updates.
- **Custom Skeleton Screens:** Implemented professional "Pulse" placeholders for every lazy-loaded route to eliminate **Layout Shift (CLS)**.

### 🔐 Form Management

- **Type-Safe Validation:** Full Zod integration for Login, Register, and Contact forms.
- **Reusable Form Atoms:** Highly flexible `InputField` and `PasswordField` components.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/          # Atomic UI components (Button, Input, PageLoader, Skeletons)
│   └── sections/    # Modular UI blocks (ProductsSection)
├── context/         # Centralized State (Cart & Popup Contexts)
├── data/            # Domain data (Books, Authors, Services)
├── layouts/         # Page wrappers & Global layout (MainLayout, Header, Footer)
├── pages/
│   ├── home/        # Hero Slider, Catalog, and Featured sections
│   ├── auth/        # Authentication module (Login, Register, Reset)
│   ├── cart/        # Cart management module
│   ├── authors/     # Author exploration with search logic
│   └── book-details/# Dynamic routing for book views
├── routes/          # Centralized React Router configuration
├── types/           # Domain-driven TypeScript definitions
└── utils/           # Helper functions (cn utility, formatCurrency)
```

---

## 👨‍💻 Author

**Hossam Gouda**

- **GitHub:** [@HossamGezo](https://github.com/HossamGezo)
- **LinkedIn:** [Hossam Gouda](https://linkedin.com/in/your-profile)

---

_This project showcases mastery of React state management and professional frontend engineering standards._
