import React from 'react';

const buildTimelineSteps = [
  { num: '01', title: 'UNDERSTAND', desc: 'Deconstruct real-world user bottlenecks, operational constraints, and core system goals.' },
  { num: '02', title: 'RESEARCH', desc: 'Evaluate state-of-the-art framework choices, database models, and algorithm trade-offs.' },
  { num: '03', title: 'DESIGN', desc: 'Architect schema diagrams, microservices isolation boundaries, and REST/WebSocket API contracts.' },
  { num: '04', title: 'DEVELOP', desc: 'Write clean, modular, type-safe full-stack code using industry standards.' },
  { num: '05', title: 'TEST', desc: 'Execute automated unit tests, manual edge-case verifications, and stress simulations.' },
  { num: '06', title: 'DEPLOY', desc: 'Provision cloud environments via IaC pipelines, Docker containers, and K8s orchestration.' },
  { num: '07', title: 'ITERATE', desc: 'Analyze real-time telemetry metrics, Prometheus logs, and user feedback to refine performance.' },
];

export const HowIBuildSection = () => {
  return (
    <section id="how-i-build" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">05 / METHODOLOGY</div>
          <h2 className="section-title">HOW I BUILD</h2>
          <p className="section-description">
            A disciplined 7-stage engineering framework ensuring every software product is scalable, resilient, and user-centered.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {buildTimelineSteps.map((s) => (
              <div
                key={s.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #D9D9D4',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                }}
              >
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#FF7A00', fontFamily: 'Outfit, sans-serif' }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', marginTop: '6px', marginBottom: '8px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.5' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '36px',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '800',
              color: '#111111',
              fontFamily: 'Outfit, sans-serif',
              paddingTop: '24px',
              borderTop: '1px solid #D9D9D4',
            }}
          >
            "I DON'T JUST BUILD FEATURES. I BUILD SOLUTIONS AROUND PROBLEMS."
          </div>
        </div>

      </div>
    </section>
  );
};
