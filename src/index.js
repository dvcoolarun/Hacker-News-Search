import React from "react";
import { createRoot } from "react-dom/client"
import App from "containers/App.js";
import { AppContextProvider } from "./app-context";

createRoot(document.getElementById("root")).render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);
