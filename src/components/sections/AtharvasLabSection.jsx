import React from 'react';
import { Activity, Flame, Sparkles } from 'lucide-react';

const activeExploreTopics = [
  { topic: 'DISTRIBUTED SYSTEMS', detail: 'Exploring Raft consensus consensus mechanisms & leader election failovers.' },
  { topic: 'REAL-TIME APPLICATIONS', detail: 'Optimizing low-latency WebSocket streaming & WebRTC peer data channels.' },
  { topic: 'CLOUD ARCHITECTURE', detail: 'Designing multi-region AWS infrastructure with terraform IaC automation.' },
  { topic: 'AI / MACHINE LEARNING', detail: 'Training predictive regression models for industrial throughput analysis.' },
  { topic: 'DEVOPS & ORCHESTRATION', detail: 'Configuring Kubernetes multi-container deployment pods & helm charts.' },
  { topic: 'SYSTEM DESIGN', detail: 'Studying high-availability sharding algorithms & cache invalidation.' },
  { topic: 'PRODUCT DEVELOPMENT', detail: 'Validating unit economics pricing models & marketplace break-even loops.' },
];

export const AtharvasLabSection = () => {
  return (
    <section id="atharvas-lab" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">10 / CURRENT EXPLORATION</div>
          <h2 className="section-title">ATHARVA'S LAB</h2>
          <p className="section-description">
            Currently exploring. Currently building. Active engineering research topics and ongoing system experiments.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF7A00', display: 'inline-block', boxShadow: '0 0 10px #FF7A00' }} />
            <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.1em', color: '#111111' }}>
              ACTIVE RESEARCH INDICATORS
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {activeExploreTopics.map((item) => (
              <div
                key={item.topic}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '14px',
                  border: '1px solid #D9D9D4',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                    {item.topic}
                  </span>
                  <span className="badge badge-orange" style={{ fontSize: '10px', padding: '2px 8px' }}>
                    ACTIVE
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.5' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
