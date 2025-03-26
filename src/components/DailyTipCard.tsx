// src/components/DailyTipCard.tsx
import React from "react";
import "../styles/DailyTipCard.css";

const DailyTipCard: React.FC = () => {
  const tips = [
    {
      text: "Enable Multifactor Authentication (MFA) for Your Accounts",
      url: "https://www.cisa.gov/MFA",
    },
    {
      text: "Use a Password Manager to store and generate passwords. Don't auto save passwords in your browser.",
      url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers",
    },
    {
      text: "Watch Out for Phishing Scams",
      url: "https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams",
    },
    {
      text: "Use HTTPS that show a lock icon next to secure URLs",
      url: "https://www.cloudflare.com/learning/ssl/why-use-https/",
    },
    {
      text: "Be wary of emails that create urgency (e.g. 'Your account will be deactivated!')",
      url: "https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams",
    },
    {
      text: "Avoid using public Wi-Fi for sensitive tasks; if needed, use a VPN.",
      url: "https://usa.kaspersky.com/resource-center/preemptive-safety/public-wifi-risks",
    },
    {
      text: "Disable Bluetooth when not in use",
      url: "https://www.citynet.net/bluetooth-security-concerns/",
    },
    {
      text: "Avoid downloading software from unofficial or sketchy websites.",
      url: "https://its.ucsc.edu/security/download.html",
    },
    {
      text: "Recognize Social Engineering Attacks",
      url: "https://www.imperva.com/learn/application-security/social-engineering-attack/",
    },
    {
      text: "Don't Use the Same Password for Multiple Accounts",
      url: "https://www.linkedin.com/advice/0/what-risks-using-same-password-multiple-accounts-edqzc",
    },
    {
      text: "Look for misspelled URLs, e.g., gooogle.com instead of google.com. These can be phishing scams.",
      url: "https://usa.kaspersky.com/resource-center/definitions/what-is-typosquatting",
    },
    {
      text: "Monitor Your Accounts for Suspicious Activity",
      url: "https://www.cimcor.com/blog/monitoring-for-suspicious-network-activity",
    },
    {
      text: "Back up Data Regularly: Use cloud storage and external hard drives to back up important files.",
      url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data#section_2",
    },
  ];

  // Calculate the index based on the current date
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
  const currentTipIndex = dayOfYear % tips.length;

  return (
    <div className="daily-tip-card">
      <h3>Daily Cybersecurity Tip</h3>
      <p>
        <span className="tip-text" onClick={() => window.open(tips[currentTipIndex].url, "_blank")}>
          {tips[currentTipIndex].text}
        </span>
      </p>
    </div>
  );
};

export default DailyTipCard;
