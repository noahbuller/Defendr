// src/App.tsx
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
      <TempMailGenerator />
    </div>
  );
};

export default App;
