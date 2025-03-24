// src/App.tsx
import React from "react";
import Header from "./components/Header";
import ChartSection from "./components/ChartSection";
import CookieBlockerCard from "./components/CookieBlocker";
import DailyTipCard from "./components/DailyTipCard";
import '/styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ChartSection />
        <div className="cards-container">
          <CookieBlockerCard />
          <DailyTipCard />
        </div>
      </main>
    </div>
  );
};

export default App;
