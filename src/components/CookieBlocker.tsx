// src/components/CookieBlockerCard.tsx
import React, { useEffect, useState } from "react";
import { getCookieBlockerStatus, toggleCookieBlocker } from "../services/CookieBlockService";
import {
  getDomainList,
  saveDomainList,
} from '../services/CookieBlockService';
import "../styles/CookieBlocker.css";

const CookieBlockerCard: React.FC = () => {
  // This could be a toggle, switch, or just a status display
  const [mode, setMode] = useState<"whitelist" | "blacklist">("blacklist");
  const [domains, setDomains] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [isBlocking, setIsBlocking] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const { type, domains } = await getDomainList();
      setMode(type);
      setDomains(domains);

      const currentStatus = await getCookieBlockerStatus();
      setIsBlocking(currentStatus === "enabled");
    };
    loadData();
  }, []);

  const addDomain = async () => {
    if(!input.trim()) return;
    const newDomains = [...new Set([...domains, input.trim().toLowerCase()])];
    setDomains(newDomains);
    setInput("");
    await saveDomainList(mode, newDomains);
  };

  const removeDomain = async (domainToRemove: string) => {
    const newDomains = domains.filter((d) => d !== domainToRemove);
    setDomains(newDomains);
    await saveDomainList(mode, newDomains);
  };

  const toggleMode = async () => {
    const newMode = mode === "blacklist" ? "whitelist" : "blacklist";
    setMode(newMode);
    await saveDomainList(newMode, domains);
  };

  const handleBlockerToggle = async () => {
    const result = await toggleCookieBlocker();
    setIsBlocking(result === "enabled");
  };

  return (
    <div className="cookie-blocker-card">
      <h3>Cookie Blocker</h3>
      <button 
        onClick={handleBlockerToggle}
        style={{backgroundColor: isBlocking ? "red" : "green"}}
      >
        {isBlocking ? "Disable" : "Enable"} Cookie Blocker
      </button>

      <p>
        Mode: <strong>{mode}</strong>{" "}
        <button onClick={toggleMode}>
          Switch to {mode === "blacklist" ? "whitelist" : "blacklist"}
        </button>
      </p>

      <div>
        <ul>
          {domains.map((domain) => (
            <li key={domain}>
              {domain}{" "}
              <button onClick={() => removeDomain(domain)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add website (e.g. facebook.com)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addDomain}>Add</button>
      </div>
    </div>
  );
};

export default CookieBlockerCard;
