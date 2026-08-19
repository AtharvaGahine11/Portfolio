import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Cpu, Layers, Award } from 'lucide-react';

export const AboutSection = ({ onHoverCursor, onLeaveCursor }) => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        <div className="glass-panel" style={{ padding: '48px' }}>
          <div className="section-subtitle">01 / ABOUT ATHARVA</div>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            I BUILD. I EXPLORE. I SOLVE.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              marginTop: '24px',
            }}
          >
            {/* Left Column: Bio Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '16px', color: '#444444', lineHeight: '1.7' }}>
              <p>
                I'm <strong>Atharva Gahine</strong>, a Computer Science Engineering student and Full Stack Developer passionate about building real-world digital products and technology-driven systems.
              </p>
              <p>
                My technical journey spans full-stack web development, real-time applications, AI/ML models, cloud infrastructure, DevOps containerization, distributed systems, and system design architecture.
              </p>
              <p>
                I enjoy taking complex problems, understanding their core requirements and architectural bottlenecks, and transforming them into functional, scalable, and user-focused digital solutions.
              </p>
              <p>
                Beyond code, I explore product design, business modeling, unit economics pricing, and entrepreneurship while cultivating leadership and project-management skills.
              </p>
            </div>

            {/* Right Column: Atharva's Secondary Portrait */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  padding: '12px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #D9D9D4',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
                  maxWidth: '320px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    aspectRatio: '1/1',
                    background: '#F0F0EC',
                  }}
                >
                  <img
                    src="/assets/atharva2.png"
                    alt="Atharva Gahine — Software Engineer"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
                <div style={{ marginTop: '12px', textAlign: 'center', fontSize: '13px', fontWeight: '800', color: '#111111' }}>
                  ATHARVA PRAVIN GAHINE
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid #D9D9D4',
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#FF7A00', fontFamily: 'Outfit, sans-serif' }}>8+</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#666666', marginTop: '4px' }}>PRODUCTION REPOSITORIES</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>50+</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#666666', marginTop: '4px' }}>ENGINEERING SKILLS</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#FF7A00', fontFamily: 'Outfit, sans-serif' }}>100%</div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#666666', marginTop: '4px' }}>VERIFIED CODEBASE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
