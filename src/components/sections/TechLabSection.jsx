import React from 'react';
import { skillsData } from '../../data/skillsData';
import { Code2, Layout, Server, Database, Brain, Cloud, Cpu, Network, Zap, Activity, Wrench } from 'lucide-react';

const categoryIcons = {
  LANGUAGES: Code2,
  FRONTEND: Layout,
  BACKEND: Server,
  DATABASE: Database,
  'AI / ML': Brain,
  CLOUD: Cloud,
  DEVOPS: Cpu,
  'SYSTEM DESIGN': Network,
  'REAL-TIME': Zap,
  MONITORING: Activity,
  TOOLS: Wrench,
};

export const TechLabSection = ({ activeCategory, onCategoryChange, onHoverCursor, onLeaveCursor, onNavigate }) => {
  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">02 / ATHARVA TECHNOLOGY LAB</div>
          <h2 className="section-title">INTERACTIVE ENGINEERING LAB</h2>
          <p className="section-description">
            Explore 11 technical zones powering full-stack web platforms, distributed configuration engines, cloud infrastructure, and AI models.
          </p>
        </div>

        {/* Zone Category Selector */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '36px',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => onCategoryChange('ALL')}
            style={{
              padding: '10px 20px',
              borderRadius: '99px',
              border: activeCategory === 'ALL' ? 'none' : '1px solid #D9D9D4',
              backgroundColor: activeCategory === 'ALL' ? '#FF7A00' : '#FFFFFF',
              color: activeCategory === 'ALL' ? '#FFFFFF' : '#111111',
              fontWeight: '700',
              fontSize: '13px',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: activeCategory === 'ALL' ? '0 8px 20px rgba(255, 122, 0, 0.25)' : 'none',
              transition: 'all 0.2s ease',
            }}
          >
            ALL ZONES (50+)
          </button>

          {skillsData.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code2;
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => onCategoryChange(cat.category)}
                onMouseEnter={() => onHoverCursor(cat.category)}
                onMouseLeave={onLeaveCursor}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '99px',
                  border: isActive ? 'none' : '1px solid #D9D9D4',
                  backgroundColor: isActive ? '#FF7A00' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#111111',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 8px 20px rgba(255, 122, 0, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} /> {cat.category}
              </button>
            );
          })}
        </div>

        {/* Fixed Height Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {skillsData
            .filter((cat) => activeCategory === 'ALL' || activeCategory === cat.category)
            .map((cat) => {
              const Icon = categoryIcons[cat.category] || Code2;
              return (
                <div
                  key={cat.category}
                  className="glass-card"
                  style={{
                    padding: '28px',
                    height: '460px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}
                >
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexShrink: 0 }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255, 122, 0, 0.12)',
                        color: '#FF7A00',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif', margin: 0 }}>
                        {cat.category}
                      </h3>
                      <div style={{ fontSize: '11px', color: '#FF7A00', fontWeight: '800', letterSpacing: '0.05em' }}>
                        {cat.items.length} TECHNOLOGIES
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: '#666666', marginBottom: '16px', lineHeight: '1.4', flexShrink: 0 }}>
                    {cat.description}
                  </p>

                  {/* Scrollable Skills List inside Card */}
                  <div
                    className="custom-scrollbar"
                    style={{
                      flex: 1,
                      overflowY: 'auto',
                      paddingRight: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          border: '1px solid #EAEAEA',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', fontWeight: '800', color: '#111111' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Icon size={16} color="#FF7A00" />
                            <span>{item.name}</span>
                          </div>
                          <span style={{ color: '#FF7A00', fontSize: '12px', fontFamily: 'Outfit, sans-serif' }}>
                            {item.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div style={{ width: '100%', height: '5px', backgroundColor: '#F0F0EC', borderRadius: '99px', marginTop: '8px', overflow: 'hidden' }}>
                          <div style={{ width: `${item.level}%`, height: '100%', backgroundColor: '#FF7A00', borderRadius: '99px' }} />
                        </div>

                        {/* Linked Projects */}
                        {item.projects && item.projects.length > 0 && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '9px', color: '#888888', fontWeight: '800', letterSpacing: '0.05em' }}>
                              USED IN:
                            </span>
                            {item.projects.map((proj) => (
                              <span
                                key={proj}
                                onClick={() => onNavigate('projects')}
                                style={{
                                  fontSize: '10px',
                                  fontWeight: '700',
                                  color: '#111111',
                                  backgroundColor: '#F7F7F4',
                                  border: '1px solid #D9D9D4',
                                  padding: '2px 6px',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor = '#FF7A00';
                                  e.target.style.color = '#FFFFFF';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor = '#F7F7F4';
                                  e.target.style.color = '#111111';
                                }}
                              >
                                {proj}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
