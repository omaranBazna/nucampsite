import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import CampsitesDirectryPage from "./app/pages/CampsitesDirectryPage";
import Header from "../src/components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <CampsitesDirectryPage></CampsitesDirectryPage>
      <Footer />
    </div>
  );
}

export default App;
