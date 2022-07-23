import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import ContactPage from "./app/pages/ContactPage";
import "./App.css";

import CampsitesDirectryPage from "./app/pages/CampsitesDirectryPage";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
import AboutPage from "./app/pages/AboutPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>

        <Route path="/contact" element={<ContactPage />}>
          {" "}
        </Route>

        <Route path="/campsites" element={<CampsitesDirectryPage />}>
          {" "}
        </Route>

        <Route path="/about" element={<AboutPage />}>
          {" "}
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
