"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { companyInfo } from '@/content/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderCompanyName = () => {    
      return (
        <>
          Obod<span style={{ color: 'var(--primary-color)' }}>S</span>oft
        </>
      );

  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav className="container">
          <div className="logo">
          <Link href="/">
            <h1>
              {renderCompanyName()}
            </h1>
            </Link>
          </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
            <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
            <Link href="/about" onClick={closeMobileMenu}>
              About
              </Link>
            </li>
            <li>
            <Link href="/services" onClick={closeMobileMenu}>
              Services
              </Link>
            </li>
            <li>
            <Link href="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>

        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
    </header>
  );
}
