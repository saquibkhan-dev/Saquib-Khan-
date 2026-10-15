import { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data.js';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#expertise', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="nav-inner">
        <a href="#hero" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand-dot" />
          <span>{profile.name}</span>
        </a>
        <nav className="links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Toggle dark mode"
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className="btn-accent" href="#contact">
            <span>Hire me</span> <ArrowUpRight size={15} />
          </a>
          <button
            id="mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
