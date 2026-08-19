import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

const leadershipRoles = [
  {
    title: 'Fun Club Head',
    organization: 'School of Future Tech, ITM Skills University',
    description: 'Led and coordinated student engagement activities, fun events, freshers activities, and team-based initiatives.',
    badge: 'STUDENT LEADERSHIP'
  },
  {
    title: 'Management Head',
    organization: 'ITM Cultural Committee',
    description: 'Managed event planning, coordination, team operations, and execution of cultural activities and college events.',
    badge: 'EVENT & OPERATIONS'
  },
  {
    title: 'B.Tech Head',
    organization: 'ITM External Club',
    description: 'Represented and coordinated B.Tech students in external club activities, events, collaborations, and student initiatives.',
    badge: 'REPRESENTATIVE'
  }
];

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">08 / BEYOND CODE</div>
          <h2 className="section-title">LEADERSHIP & POSITIONS</h2>
          <p className="section-description">
            Key leadership roles, student organization management, event operations, and university committee positions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {leadershipRoles.map((role, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span className="badge badge-orange">{role.badge}</span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                {role.title}
              </h3>
              
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#FF7A00', marginTop: '4px', marginBottom: '16px' }}>
                {role.organization}
              </div>

              <p style={{ fontSize: '15px', color: '#555555', lineHeight: '1.6' }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
