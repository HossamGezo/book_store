import {createRoot} from "react-dom/client";
// App Router Component
import AppRouter from "./routes/AppRouter.tsx";
// Styles
import "./index.css";
// Root
createRoot(document.getElementById("root")!).render(<AppRouter />);
