import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/common/ScrollToTop";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ top: 96 }}
        toastOptions={{
          duration: 4500,
          style: {
            background: "#ffffff",
            color: "#0c1222",
            border: "1px solid rgba(12, 18, 34, 0.1)",
            borderRadius: "16px",
            padding: "14px 18px",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            boxShadow: "0 20px 48px rgba(12, 18, 34, 0.12)",
          },
          success: {
            iconTheme: { primary: "#0d9488", secondary: "#ffffff" },
          },
          error: {
            iconTheme: { primary: "#dc2626", secondary: "#ffffff" },
          },
          loading: {
            iconTheme: { primary: "#b8860b", secondary: "#ffffff" },
          },
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
