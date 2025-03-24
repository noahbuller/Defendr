// src/App.tsx
import React from "react";
import Header from "./components/Header";
import ChartSection from "./components/ChartSection";
import CookieBlockerCard from "./components/CookieBlocker";
import DailyTipCard from "./components/DailyTipCard";
import TempMailGenerator from "./components/TempMailGenerator";
//import '/styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <ChartSection />
      <CookieBlockerCard />
      <DailyTipCard />
      <h1>Defendr</h1>
      <TempMailGenerator />
    </div>
  );
};

export default App;
