import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate, onHoverCursor, onLeaveCursor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'system-design', label: 'SYSTEMS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'github', label: 'GITHUB' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: scrolled ? '16px' : '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '1200px',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="glass-panel"
        style={{
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '99px',
          boxShadow: scrolled ? '0 12px 36px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.03)',
          background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.78)',
          border: '1px solid rgba(217, 217, 212, 0.7)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('hero')}
          onMouseEnter={() => onHoverCursor('AG/')}
          onMouseLeave={onLeaveCursor}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#FF7A00',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '14px',
              letterSpacing: '-0.02em',
            }}
          >
            AG
          </div>
          <span
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: '800',
              fontSize: '18px',
              color: '#111111',
              letterSpacing: '-0.02em',
            }}
          >
            ATHARVA<span style={{ color: '#FF7A00' }}>/</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', gap: '6px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                onMouseEnter={() => onHoverCursor(link.label)}
                onMouseLeave={onLeaveCursor}
                style={{
                  background: isActive ? '#FF7A00' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#666666',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '99px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Buttons & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/assets/Atharva_Gahine_Resume.png"
            download="Atharva_Gahine_Resume.png"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onHoverCursor('RESUME')}
            onMouseLeave={onLeaveCursor}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '99px',
              backgroundColor: '#FF7A00',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
            className="desktop-nav"
          >
            RESUME ↓
          </a>

          <a
            href="https://github.com/AtharvaGahine11"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => onHoverCursor('VIEW')}
            onMouseLeave={onLeaveCursor}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '99px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: '700',
              textDecoration: 'none',
              letterSpacing: '0.04em',
            }}
            className="desktop-nav"
          >
            GITHUB <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#111111',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            marginTop: '12px',
            padding: '20px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.96)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                style={{
                  background: isActive ? '#FF7A00' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#111111',
                  border: 'none',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 880px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
