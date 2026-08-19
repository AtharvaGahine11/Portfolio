import React, { useState } from 'react';
import { Cpu, GitBranch, Terminal, ShieldAlert, Activity, CheckCircle2 } from 'lucide-react';

const pipelineStepsData = [
  { step: 'CODE', icon: Terminal, desc: 'Developer commits code changes and pushes feature branches to GitHub repository.' },
  { step: 'GIT', icon: GitBranch, desc: 'Git webhook triggers automated Jenkins multibranch pipeline build job.' },
  { step: 'JENKINS', icon: Cpu, desc: 'Jenkins controller executes unit tests, code linting, and security vulnerability scans.' },
  { step: 'CI / CD', icon: Activity, desc: 'Declarative stage automation compiles production distribution artifacts.' },
  { step: 'DOCKER', icon: Cpu, desc: 'Container image built with multi-stage Dockerfile and pushed to Docker Registry.' },
  { step: 'KUBERNETES', icon: Cpu, desc: 'Minikube/K8s cluster executes rolling deployment update with zero downtime.' },
  { step: 'TERRAFORM', icon: Cpu, desc: 'IaC manifests provision cloud VPC subnets and node pools programmatically.' },
  { step: 'PROMETHEUS', icon: Activity, desc: 'Prometheus scrapes target service metrics and monitors cluster resource usage.' },
  { step: 'GRAFANA', icon: Activity, desc: 'Grafana renders telemetry dashboards and triggers threshold alert webhooks.' }
];

export const DevOpsPipelineSection = ({ onHoverCursor, onLeaveCursor }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section id="devops" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">06 / DEVOPS & INFRASTRUCTURE</div>
          <h2 className="section-title">INTERACTIVE DEVOPS CI/CD PIPELINE</h2>
          <p className="section-description">
            Physical pipeline automation workflow moving code seamlessly from commit to container orchestration, Infrastructure-as-Code, and telemetry monitoring.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          {/* Interactive Steps Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '8px',
              marginBottom: '36px',
            }}
          >
            {pipelineStepsData.map((item, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIdx(idx)}
                  onMouseEnter={() => onHoverCursor(item.step)}
                  onMouseLeave={onLeaveCursor}
                  style={{
                    padding: '12px 8px',
                    borderRadius: '10px',
                    border: isActive ? 'none' : '1px solid #D9D9D4',
                    backgroundColor: isActive ? '#FF7A00' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#111111',
                    fontWeight: '800',
                    fontSize: '11px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.step}
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '30px',
              border: '1px solid #D9D9D4',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255,122,0,0.12)',
                color: '#FF7A00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {React.createElement(pipelineStepsData[activeStepIdx].icon, { size: 30 })}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', color: '#FF7A00' }}>
                STAGE {activeStepIdx + 1} OF 9
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                {pipelineStepsData[activeStepIdx].step}
              </h3>
              <p style={{ fontSize: '15px', color: '#555555', marginTop: '6px', lineHeight: '1.5' }}>
                {pipelineStepsData[activeStepIdx].desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
