// src/components/ChartSection.tsx
import React from "react";
import "../styles/ChartSection.css";

const ChartSection: React.FC = () => {
  return (
    <section className="chart-section">
      <div className="chart-header">
        <h2>Cybersecurity Analytics</h2>
        <select>
          <option value="">Filter</option>
          <option value="item1">Item 1</option>
          <option value="item2">Item 2</option>
          <option value="item3">Item 3</option>
        </select>
      </div>
      <div className="chart-placeholder">
        {/* Replace this div with an actual chart library component */}
        <p>Chart goes here</p>
      </div>
    </section>
  );
};

export default ChartSection;
