// src/components/CookieBlockerCard.tsx
import React from "react";
//import "../styles/CookieBlocker.css";

const CookieBlockerCard: React.FC = () => {
  // This could be a toggle, switch, or just a status display
  const isActive = true;

  return (
    <div className="cookie-blocker-card">
      <h3>Cookie Blocker</h3>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      {/* If you want a toggle button, add it here */}
    </div>
  );
};

export default CookieBlockerCard;
