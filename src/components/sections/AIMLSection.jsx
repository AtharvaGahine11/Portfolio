import React, { useState } from 'react';
import { Brain, Sliders, CheckCircle2, BarChart2 } from 'lucide-react';

export const AIMLSection = ({ onHoverCursor, onLeaveCursor }) => {
  const [kValue, setKValue] = useState(5);
  const [scalingType, setScalingType] = useState('StandardScaler');

  return (
    <section id="ai-ml" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">04 / AI & MACHINE LEARNING</div>
          <h2 className="section-title">LOGISTIC REGRESSION × KNN DATA PIPELINE</h2>
          <p className="section-description">
            Interactive machine learning workflow evaluating classification algorithms on clinical datasets (Breast Cancer Dataset) with feature engineering and scaling pipelines.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '40px' }}>
          {/* Pipeline Flow Visualization */}
          <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', color: '#FF7A00', marginBottom: '20px' }}>
            CLASSIFICATION PIPELINE STAGES
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '36px',
            }}
          >
            {[
              '01. DATASET',
              '02. EXPLORATION',
              '03. CLEANING',
              '04. ENCODING',
              '05. TRAIN/TEST',
              '06. SCALING',
              '07. REGRESSION/KNN',
              '08. EVALUATION',
            ].map((stage, idx) => (
              <div
                key={stage}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '14px 10px',
                  borderRadius: '12px',
                  border: '1px solid #D9D9D4',
                  textAlign: 'center',
                  fontSize: '11px',
                  fontWeight: '800',
                  color: '#111111',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                {stage}
              </div>
            ))}
          </div>

          {/* Interactive ML Parameter Panel */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              backgroundColor: '#FFFFFF',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid #D9D9D4',
            }}
          >
            {/* Controls */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111111', marginBottom: '16px' }}>
                Pipeline Controls
              </h3>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: '#666666', display: 'block', marginBottom: '8px' }}>
                  KNN K-NEIGHBORS PARAMETER: <span style={{ color: '#FF7A00', fontWeight: '800' }}>K = {kValue}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={kValue}
                  onChange={(e) => setKValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#FF7A00', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '700', color: '#666666', display: 'block', marginBottom: '8px' }}>
                  FEATURE SCALING METHOD:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setScalingType('StandardScaler')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: scalingType === 'StandardScaler' ? 'none' : '1px solid #D9D9D4',
                      backgroundColor: scalingType === 'StandardScaler' ? '#FF7A00' : '#F0F0EC',
                      color: scalingType === 'StandardScaler' ? '#FFFFFF' : '#111111',
                      fontWeight: '700',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    StandardScaler (Z-Score)
                  </button>
                  <button
                    onClick={() => setScalingType('MinMaxScaler')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: scalingType === 'MinMaxScaler' ? 'none' : '1px solid #D9D9D4',
                      backgroundColor: scalingType === 'MinMaxScaler' ? '#FF7A00' : '#F0F0EC',
                      color: scalingType === 'MinMaxScaler' ? '#FFFFFF' : '#111111',
                      fontWeight: '700',
                      fontSize: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    MinMaxScaler (0–1)
                  </button>
                </div>
              </div>
            </div>

            {/* Model Evaluation Metrics Display */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#111111', marginBottom: '16px' }}>
                Evaluation Pipeline Breakdown
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>Dataset Splitting Ratio</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#FF7A00' }}>80% Train / 20% Test</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>Feature Preprocessing</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#FF7A00' }}>{scalingType}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>Logistic Regression Solver</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#FF7A00' }}>L-BFGS Iterative</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>KNN Distance Metric</span>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#FF7A00' }}>Euclidean (K={kValue})</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
