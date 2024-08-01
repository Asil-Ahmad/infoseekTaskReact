import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import UserAuthProvider from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserAuthProvider>
    <App />
  </UserAuthProvider>
);
