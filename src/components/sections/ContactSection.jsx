import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection = ({ onHoverCursor, onLeaveCursor }) => {
  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.15em', color: '#FF7A00', textTransform: 'uppercase', marginBottom: '12px' }}>
            12 / CONNECT & COLLABORATE
          </div>

          <h2 style={{ fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: '800', fontFamily: 'Outfit, sans-serif', color: '#111111', lineHeight: '1.1' }}>
            LET'S BUILD SOMETHING.
          </h2>

          <p style={{ fontSize: '18px', color: '#555555', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0 auto', lineHeight: '1.6' }}>
            "Have an idea, opportunity or interesting problem to solve? Let's connect and transform ideas into high-performance digital experiences."
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
            <a
              href="mailto:atharvagahine11@gmail.com"
              onMouseEnter={() => onHoverCursor('EMAIL')}
              onMouseLeave={onLeaveCursor}
              className="btn-primary"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              EMAIL ME <Mail size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/atharva-gahine-074b0a324"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onHoverCursor('LINKEDIN')}
              onMouseLeave={onLeaveCursor}
              className="btn-secondary"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              LINKEDIN <LinkedinIcon size={18} />
            </a>

            <a
              href="https://github.com/AtharvaGahine11"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onHoverCursor('GITHUB')}
              onMouseLeave={onLeaveCursor}
              className="btn-secondary"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              GITHUB <GithubIcon size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
