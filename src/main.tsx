// Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// App Router Component
import AppRouter from "./routes/AppRouter";

// Styles
import "./index.css";

// Root
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
