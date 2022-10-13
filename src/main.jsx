import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.jsx";
import "@firebase_connection/firebase.config.js";
import "@styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
