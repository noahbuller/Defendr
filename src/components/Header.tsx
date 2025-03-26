// src/components/Header.tsx
import React from "react";
import "../styles/Header.css"; // if you want separate CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">Defendr</div>
      <nav className="header-nav">
        <ul>
          <li>Home</li>
          <li>Temporary Email</li>
          <li>One-Click Privacy</li>
          <li>AI Chatbot</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
