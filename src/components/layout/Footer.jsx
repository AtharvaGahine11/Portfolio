import React from 'react';
import { Mail, ArrowUp, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Footer = ({ onNavigate, onHoverCursor, onLeaveCursor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #D9D9D4',
        padding: '60px 0 40px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid #EAEAEA',
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '360px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#FF7A00',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '16px',
                }}
              >
                AG
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '800', fontSize: '20px', color: '#111111' }}>
                ATHARVA GAHINE
              </span>
            </div>
            <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.6' }}>
              FULL STACK DEVELOPER • SYSTEM BUILDER • REAL-TIME ENGINEER • CLOUD & DEVOPS • PROBLEM SOLVER
            </p>
            <div style={{ marginTop: '16px', fontSize: '13px', color: '#888888', fontWeight: '500' }}>
              ITM Skills University • Mumbai, India
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', color: '#111111', marginBottom: '16px' }}>
                NAVIGATION
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666666' }}>
                <button onClick={() => onNavigate('hero')} style={linkBtnStyle}>Home</button>
                <button onClick={() => onNavigate('about')} style={linkBtnStyle}>About</button>
                <button onClick={() => onNavigate('skills')} style={linkBtnStyle}>Tech Lab</button>
                <button onClick={() => onNavigate('projects')} style={linkBtnStyle}>Project Museum</button>
                <button onClick={() => onNavigate('system-design')} style={linkBtnStyle}>System Design</button>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', color: '#111111', marginBottom: '16px' }}>
                CONNECT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#666666' }}>
                <a href="/assets/Atharva_Gahine_Resume.png" download="Atharva_Gahine_Resume.png" target="_blank" rel="noreferrer" style={linkStyle}>
                  <Download size={16} color="#FF7A00" /> Download Resume
                </a>
                <a href="https://github.com/AtharvaGahine11" target="_blank" rel="noreferrer" style={linkStyle}>
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/atharva-gahine-074b0a324" target="_blank" rel="noreferrer" style={linkStyle}>
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a href="mailto:atharvagahine11@gmail.com" style={linkStyle}>
                  <Mail size={16} color="#FF7A00" /> Email: atharvagahine11@gmail.com
                </a>
                <a href="tel:+917972052561" style={linkStyle}>
                  📞 Call: +91 79720 52561
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '30px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ fontSize: '13px', color: '#888888' }}>
            © Atharva Pravin Gahine. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => onHoverCursor('TOP')}
            onMouseLeave={onLeaveCursor}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#F0F0EC',
              border: '1px solid #D9D9D4',
              borderRadius: '99px',
              padding: '10px 18px',
              fontSize: '12px',
              fontWeight: '700',
              color: '#111111',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

const linkBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#666666',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0,
  fontSize: '14px',
  transition: 'color 0.2s ease',
};

const linkStyle = {
  color: '#666666',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'color 0.2s ease',
};
