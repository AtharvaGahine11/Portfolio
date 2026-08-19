import React from 'react';
import { projectsData } from '../../data/projectsData';
import { ArrowUpRight, Layers, Server, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export const ProjectMuseumSection = ({ onOpenCaseStudy, onHoverCursor, onLeaveCursor }) => {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">03 / 3D PROJECT MUSEUM</div>
          <h2 className="section-title">THINGS I'VE BUILT</h2>
          <p className="section-description">
            From real-time healthcare triage and distributed configuration consensus to cloud infrastructure pipelines and IoT city signals — built around real engineering challenges.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel"
              style={{
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center',
                borderLeft: project.isFeatured ? '4px solid #FF7A00' : '1px solid #D9D9D4',
              }}
            >
              {/* Left Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span className="badge badge-orange">{project.badge}</span>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#888888' }}>{project.category}</span>
                </div>

                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#FF7A00', marginTop: '4px', marginBottom: '16px' }}>
                  {project.subtitle}
                </div>

                <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        backgroundColor: '#F0F0EC',
                        color: '#111111',
                        padding: '6px 12px',
                        borderRadius: '99px',
                        border: '1px solid #D9D9D4',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    onMouseEnter={() => onHoverCursor('EXPLORE')}
                    onMouseLeave={onLeaveCursor}
                    className="btn-primary"
                    style={{ fontSize: '14px', padding: '12px 24px' }}
                  >
                    VIEW CASE STUDY <ArrowUpRight size={16} />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => onHoverCursor('GITHUB')}
                    onMouseLeave={onLeaveCursor}
                    className="btn-secondary"
                    style={{ fontSize: '14px', padding: '12px 24px' }}
                  >
                    GITHUB REPO <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Right Architecture Flow Box */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #D9D9D4',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', color: '#666666', marginBottom: '16px' }}>
                  SYSTEM ARCHITECTURE FLOW
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.architecture.map((arch, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 14px',
                        backgroundColor: '#F7F7F4',
                        borderRadius: '10px',
                        border: '1px solid #EAEAEA',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#FF7A00',
                          color: '#FFFFFF',
                          fontWeight: '800',
                          fontSize: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>{arch.step}</div>
                        <div style={{ fontSize: '12px', color: '#666666', marginTop: '2px' }}>{arch.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
