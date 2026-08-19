import React from 'react';
import { educationData } from '../../data/educationData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">07 / ACADEMIC BACKGROUND</div>
          <h2 className="section-title">EDUCATION & QUALIFICATIONS</h2>
          <p className="section-description">
            Computer Science Engineering education focused on systems architecture, cloud computing, and real-time engineering.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,122,0,0.12)',
                    color: '#FF7A00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#FF7A00' }}>{edu.period}</span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                {edu.institution}
              </h3>
              
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#666666', marginTop: '4px', marginBottom: '12px' }}>
                {edu.degree}
              </div>

              <p style={{ fontSize: '14px', color: '#555555', lineHeight: '1.5' }}>
                {edu.focus}
              </p>

              <div style={{ fontSize: '12px', color: '#888888', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                <MapPin size={14} /> {edu.location}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
