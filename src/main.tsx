import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("body")!).render(
  <StrictMode>
    <main className="dark">
      <App />
    </main>
  </StrictMode>
);
