import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { FirebaseProvider } from "./contexts/firebase";
import { UserProvider } from "./contexts/user";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
