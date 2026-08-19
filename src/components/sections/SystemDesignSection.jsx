import React from 'react';
import { Network, CheckCircle2, ArrowRight } from 'lucide-react';

const systemNodesDetails = {
  'distributed-systems': {
    title: 'Distributed Systems Architecture',
    desc: 'Coordinating autonomous compute nodes to operate as a unified, resilient system across network boundaries.',
    principles: ['CAP Theorem Trade-offs', 'Partition Tolerance', 'Asynchronous Messaging', 'Eventual vs Strong Consistency'],
    projects: ['ConfigSync', 'Discord Sharding Simulation']
  },
  'microservices': {
    title: 'Microservices Design Pattern',
    desc: 'Decomposing monolithic applications into loosely-coupled, independently deployable domain services.',
    principles: ['Domain-Driven Design (DDD)', 'API Gateway Routing', 'Database-per-Service', 'Service Discovery'],
    projects: ['Project Nova', 'AWS API Management Platform']
  },
  'replication': {
    title: 'Data Replication Protocols',
    desc: 'Synchronizing application state across primary and replica database nodes to guarantee read availability.',
    principles: ['Leader-Follower Replication', 'Synchronous vs Async Sync', 'WAL Log Shipping', 'Read-Scaling Racks'],
    projects: ['ConfigSync', 'HealthFlow']
  },
  'leader-election': {
    title: 'Leader Election & Failover',
    desc: 'Dynamically selecting a coordinator node among cluster members using heartbeat signals and voting.',
    principles: ['Heartbeat Timeout Triggers', 'Raft / Paxos Consensus Logic', 'Split-Brain Avoidance', 'Quorum Voting'],
    projects: ['ConfigSync']
  },
  'consensus': {
    title: 'Distributed Consensus',
    desc: 'Ensuring all non-faulty nodes agree on a single data state update across unreliable networks.',
    principles: ['State Machine Replication', 'Log Matching Property', 'Term Indices & Votes', 'Atomic Commit Protocols'],
    projects: ['ConfigSync']
  },
  'fault-tolerance': {
    title: 'Fault Tolerance & Resilience',
    desc: 'Designing systems that gracefully handle partial hardware, network, or process failures without downtime.',
    principles: ['Self-Healing Recovery Loops', 'Circuit Breaker Pattern', 'Graceful Degradation', 'Retry Exponential Backoff'],
    projects: ['ConfigSync', 'Project Nova']
  },
  'realtime-comm': {
    title: 'Real-Time Synchronisation',
    desc: 'Full-duplex WebSocket communication protocols delivering sub-second event notifications.',
    principles: ['Persistent Socket Connections', 'Event Listener Dispatchers', 'Low-Latency Buffering', 'State Delta Broadcasts'],
    projects: ['HealthFlow', 'Smart Traffic Light Controller']
  },
  'monitoring': {
    title: 'Observability & Monitoring',
    desc: 'Collecting metrics, structured logs, and distributed traces to maintain operational visibility.',
    principles: ['Prometheus Metric Scraping', 'Grafana Dashboard Visuals', 'Centralized Log Aggregation', 'Alerting Thresholds'],
    projects: ['Project Nova', 'AWS API Management Platform', 'ConfigSync']
  }
};

export const SystemDesignSection = ({ selectedNode, onSelectNode, onHoverCursor, onLeaveCursor, onNavigate }) => {
  const nodeInfo = systemNodesDetails[selectedNode] || systemNodesDetails['distributed-systems'];

  return (
    <section id="system-design" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">04 / SYSTEM ARCHITECTURE</div>
          <h2 className="section-title">THINKING IN SYSTEMS</h2>
          <p className="section-description">
            Interactive topology network reflecting distributed consensus, fault-tolerance, microservices isolation, and real-time state synchronization.
          </p>
        </div>

        {/* Node Buttons Selector Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          {Object.keys(systemNodesDetails).map((key) => {
            const isSelected = selectedNode === key;
            const detail = systemNodesDetails[key];
            return (
              <button
                key={key}
                onClick={() => onSelectNode(key)}
                onMouseEnter={() => onHoverCursor(detail.title)}
                onMouseLeave={onLeaveCursor}
                style={{
                  padding: '10px 18px',
                  borderRadius: '99px',
                  border: isSelected ? 'none' : '1px solid #D9D9D4',
                  backgroundColor: isSelected ? '#FF7A00' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#111111',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {detail.title}
              </button>
            );
          })}
        </div>

        {/* Node Inspector Detail Panel */}
        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,122,0,0.12)',
                color: '#FF7A00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Network size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', color: '#FF7A00' }}>
                SELECTED ARCHITECTURAL NODE
              </span>
              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                {nodeInfo.title}
              </h3>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#555555', lineHeight: '1.6', marginBottom: '28px', maxWidth: '720px' }}>
            {nodeInfo.desc}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {/* Principles */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111111', marginBottom: '14px' }}>
                CORE DESIGN PRINCIPLES
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {nodeInfo.principles.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#444444', fontWeight: '600' }}>
                    <CheckCircle2 size={16} color="#FF7A00" /> {p}
                  </div>
                ))}
              </div>
            </div>

            {/* Applied Projects */}
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#111111', marginBottom: '14px' }}>
                REAL-WORLD PROJECT APPLICATIONS
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {nodeInfo.projects.map((proj) => (
                  <div
                    key={proj}
                    onClick={() => onNavigate('projects')}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #D9D9D4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: '700',
                      fontSize: '14px',
                      color: '#111111',
                      cursor: 'pointer',
                    }}
                  >
                    <span>{proj}</span>
                    <ArrowRight size={16} color="#FF7A00" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
