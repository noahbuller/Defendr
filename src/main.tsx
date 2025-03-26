import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./styles/index.css"; // import global styling
import App from "./App.tsx";

// test to check if root was created
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
