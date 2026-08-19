import React from 'react';
import { experienceData } from '../../data/experienceData';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">06 / PROFESSIONAL EXPERIENCE</div>
          <h2 className="section-title">SOFTWARE DEVELOPER INTERNSHIP</h2>
          <p className="section-description">
            Hands-on professional software engineering experience building user-facing web products and collaborating in cross-functional teams.
          </p>
        </div>

        {experienceData.map((exp, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <span className="badge badge-orange" style={{ marginBottom: '10px' }}>{exp.type}</span>
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                  {exp.role}
                </h3>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#FF7A00', marginTop: '4px' }}>
                  {exp.company}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>{exp.duration}</div>
                <div style={{ fontSize: '13px', color: '#888888', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end', marginTop: '4px' }}>
                  <MapPin size={14} /> {exp.location}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6', marginBottom: '24px' }}>
              {exp.description}
            </p>

            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111111', marginBottom: '14px' }}>
              KEY RESPONSIBILITIES & CONTRIBUTIONS
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {exp.responsibilities.map((resp, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#444444', lineHeight: '1.5' }}>
                  <CheckCircle2 size={18} color="#FF7A00" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{resp}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D9D9D4',
                    padding: '6px 14px',
                    borderRadius: '99px',
                    color: '#111111',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
