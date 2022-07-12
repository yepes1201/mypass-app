import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes";
import { firebaseConfig, initializeApp } from "firebase-config";

initializeApp(firebaseConfig);

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
