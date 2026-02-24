# 📚 Bookstore - Modern E-Commerce Frontend

<div align="center">
[![Live Demo](https://img.shields.io/badge/DEMO-VIEW_LIVE-brightgreen?style=for-the-badge&logo=netlify)](https://hossamgezo-bookstore.netlify.app/)

![Netlify Status](https://img.shields.io/badge/Netlify-Success-00C7B7?style=flat&logo=netlify)
![React](https://img.shields.io/badge/React_19-%2320232a?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat&logo=tailwind-css)
![ContextAPI](https://img.shields.io/badge/State-Context_API-61DAFB?style=flat&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

</div>

---

### 🔗 Quick Links

- **🚀 Live Website:** [https://hossam-bookstore.netlify.app/](https://hossam-bookstore.netlify.app/)
- **💻 GitHub Repository:** [https://github.com/HossamGezo/book_store](https://github.com/HossamGezo/book_store)

---

<div align="center">
  <img src="assets/bookstore-ui.png" alt="Bookstore UI" width="900" style="border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"/>
</div>

---

## 🛠️ Tech Stack & Tools

| Architecture & Logic                                                              | Form & Validation                                                                      | Styling & UI                                                                             | Performance                                                                      |
| :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React_19-blue?style=flat&logo=react)        | ![HookForm](https://img.shields.io/badge/Hook_Form-pink?style=flat&logo=reacthookform) | ![Tailwind](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat&logo=tailwind-css) | ![Skeleton](https://img.shields.io/badge/Pulse_Loaders-Custom-orange?style=flat) |
| ![TS](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript)  | ![Zod](https://img.shields.io/badge/Zod_Validation-3E67B1?style=flat&logo=zod)         | ![Icons](https://img.shields.io/badge/React_Icons-eb5757?style=flat&logo=react)          | ![Lazy](https://img.shields.io/badge/Lazy_Loading-blue?style=flat)               |
| ![Context](https://img.shields.io/badge/Context_API-61DAFB?style=flat&logo=react) | ![Toasts](https://img.shields.io/badge/Hot_Toasts-Success-green?style=flat)            | ![Flexbox](https://img.shields.io/badge/Layout-Flexbox_Grid-E34F26?style=flat)           | ![Memo](https://img.shields.io/badge/useMemo-Optimized-green?style=flat)         |

---

## ✨ Features & Engineering Highlights

### 🏗️ State Management & Data Persistence

- **Advanced Cart Engine:** Powered by `useReducer` and `Context API` for robust, predictable state transitions.
- **Smart LocalStorage Sync:** Seamlessly persists shopping cart data across browser sessions with a centralized `useEffect` synchronization strategy.
- **Data Integrity:** Strict TypeScript interfaces for Books, Authors, and Cart entities ensuring a 100% type-safe environment.

### ⚡ Premium UX & Performance

- **Memoized Real-time Search:** Optimized Author search functionality using `useMemo` to ensure zero performance lag during filtering of large datasets.
- **Custom Skeleton Screens:** Professional "Pulse" loaders for every lazy-loaded route, eliminating **Layout Shift (CLS)** and providing a high-end feel.
- **Adaptive Pagination:** Intelligent pagination system that dynamically adjusts the number of items per page based on the user's viewport (Mobile-first).
- **Efficient Cart Calculations:** Leveraged `useMemo` for real-time price summations, preventing unnecessary re-computations on unrelated state changes.

---

### 🔐 Forms & Accessibility (A11y)

- **Reusable Input System:** Highly flexible `InputField` and `PasswordField` components with built-in validation feedback.
- **Zod-Powered Validation:** Comprehensive schema validation for Authentication (Login/Register), Reset Password, and Contact forms.
- **Accessible Design:** ARIA labels, semantic HTML structure, and full keyboard navigation support.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── ui/          # Atomic UI components (Button, Input, PageLoader, Skeletons)
│   └── sections/    # Reusable section blocks (ProductsSection)
├── context/         # Application State Management (Cart & Popup Contexts)
├── data/            # Centralized Data storage (Books, Authors, Services)
├── layouts/         # Page wrappers & Global layout (MainLayout, Header, Footer)
├── pages/
│   ├── home/        # Hero Slider, Catalog, and Featured sections
│   ├── auth/        # Authentication module (Login, Register, ResetPassword)
│   ├── cart/        # Cart management module
│   ├── authors/     # Author exploration module with search logic
│   └── book-details/# Dynamic routing for individual book views
├── routes/          # Centralized React Router configuration
├── types/           # Domain-driven TypeScript definitions
└── utils/           # Helper functions (cn utility, formatCurrency)
```

---

## ⚙️ Setup & Installation

1. **Clone & Install:**
   ```bash
   git clone https://github.com/HossamGezo/book_store.git
   npm install
   ```
2. **Run Development Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Hossam Gouda**

- **GitHub:** [@HossamGezo](https://github.com/HossamGezo)
- **LinkedIn:** [Hossam Gouda](https://linkedin.com/in/your-profile)

---

_This project was carefully developed to showcase strong expertise in modern React practices and Clean Code principles.._
