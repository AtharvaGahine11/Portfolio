import React from 'react';
import { ArrowUpRight, GitBranch, Star, Code } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const verifiedRepos = [
  { name: 'HealthFlow', url: 'https://github.com/AtharvaGahine11/HealthFlow', desc: 'Real-time hospital triage system using Socket.IO & Node.' },
  { name: 'ConfigSync', url: 'https://github.com/AtharvaGahine11/ConfigSync', desc: 'Distributed configuration engine with leader consensus.' },
  { name: 'Project Nova', url: 'https://github.com/AtharvaGahine11/Project-Nova-Crypto-Exchange', desc: 'DevOps / Cloud crypto exchange platform infrastructure.' },
  { name: 'AWS API Platform', url: 'https://github.com/AtharvaGahine11/aws-api-management-platform', desc: 'Cloud microservices platform on AWS API Gateway & VPC.' },
  { name: 'Smart Traffic Controller', url: 'https://github.com/AtharvaGahine11/Smart-Traffic-Light-Controller', desc: 'Smart city signal system with Firebase Realtime Database.' },
  { name: 'Discord Sharding', url: 'https://github.com/AtharvaGahine11/Discord-Sharding-Simulation', desc: 'Distributed WebSocket bot sharding simulation.' },
  { name: 'Robotic Packaging ML', url: 'https://github.com/AtharvaGahine11/Robotic-Packaging-System-Investment-Analysis', desc: 'ML financial modeling investment decision engine.' },
  { name: 'Urban Company Clone', url: 'https://github.com/AtharvaGahine11/UrbanCompany_Clone', desc: 'Service marketplace platform & unit economics study.' },
];

export const GithubCenterSection = ({ onHoverCursor, onLeaveCursor }) => {
  return (
    <section id="github" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">11 / CODE BASE</div>
          <h2 className="section-title">GITHUB COMMAND CENTER</h2>
          <p className="section-description">
            Explore verified open-source repositories, system architecture implementations, and full-stack projects on GitHub.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#111111',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GithubIcon size={24} color="#FFFFFF" />
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                  @AtharvaGahine11
                </h3>
                <div style={{ fontSize: '13px', color: '#666666', fontWeight: '600' }}>
                  github.com/AtharvaGahine11
                </div>
              </div>
            </div>

            <a
              href="https://github.com/AtharvaGahine11?tab=repositories"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => onHoverCursor('GITHUB')}
              onMouseLeave={onLeaveCursor}
              className="btn-primary"
            >
              EXPLORE ALL REPOSITORIES <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Repos Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {verifiedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => onHoverCursor('VIEW')}
                onMouseLeave={onLeaveCursor}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '14px',
                  border: '1px solid #D9D9D4',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
                className="glass-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                      {repo.name}
                    </span>
                    <ArrowUpRight size={16} color="#FF7A00" />
                  </div>
                  <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.5' }}>
                    {repo.desc}
                  </p>
                </div>

                <div style={{ marginTop: '16px', fontSize: '11px', fontWeight: '700', color: '#FF7A00', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <GitBranch size={12} /> VERIFIED CODEBASE
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
