"use client";

import { companyInfo, navigation } from "@/content/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              {companyInfo.name.split("").map((char, index) => 
                char === companyInfo.name[4] ? (
                  <span key={index}>{char}</span>
                ) : (
                  char
                )
              )}
            </h2>
            <p>{companyInfo.tagline}</p>
          </div>
          <div className="footer-links">
            <ul>
              {navigation.footer.company.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
