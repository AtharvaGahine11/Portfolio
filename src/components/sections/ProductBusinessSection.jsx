import React from 'react';

export const ProductBusinessSection = () => {
  return (
    <section id="product-business" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">09 / ENTREPRENEURIAL THINKING</div>
          <h2 className="section-title">CODE × PRODUCT × BUSINESS</h2>
          <p className="section-description">
            Combining software engineering with unit economics, financial modeling, pricing strategies, and product design thinking.
          </p>
        </div>

        {/* Core Formula Box */}
        <div className="glass-panel" style={{ padding: '36px', marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
            PROBLEM + PRODUCT + TECHNOLOGY + BUSINESS MODEL = REAL-WORLD SOLUTION
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {/* Parampara Venture Card */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-orange">FOUNDER / STARTUP VENTURE</span>
              </div>

              <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                PARAMPARA
              </h3>
              
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#FF7A00', marginTop: '2px', marginBottom: '12px' }}>
                Digital Legacy Ecosystem
              </div>

              <p style={{ fontSize: '14px', color: '#555555', lineHeight: '1.6', marginBottom: '20px' }}>
                Conceptualized a family-focused platform that preserves memories, stories, voice recordings, digital assets, and personal wisdom while enabling controlled access for future generations.
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#111111', fontWeight: '600', marginBottom: '20px' }}>
                <div>• Digital Legacy & Family Heritage Platform</div>
                <div>• AI-Powered Memory & Story Preservation</div>
                <div>• Storage-Based SaaS Business Model</div>
              </div>

              {/* Focus Areas Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {['PRODUCT STRATEGY', 'AI', 'FAMILY TECH', 'CLOUD STORAGE', 'SAAS'].map((tag) => (
                  <span key={tag} style={{ fontSize: '10px', fontWeight: '800', backgroundColor: '#F0F0EC', color: '#666666', padding: '4px 8px', borderRadius: '6px', letterSpacing: '0.04em' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* USP Highlight Callout Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #FF7A00',
                borderRadius: '14px',
                padding: '16px',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(255, 122, 0, 0.08)',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#FF7A00', letterSpacing: '0.08em', marginBottom: '4px' }}>
                UNIQUE SELLING PROPOSITION (USP)
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111', fontStyle: 'italic', fontFamily: 'Outfit, sans-serif' }}>
                “Preserve not only what you own — but who you are.”
              </div>
            </div>
          </div>

          {/* Parampara Storage SaaS Model Financial Economics */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-neutral">UNIT ECONOMICS ANALYSIS</span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
                PARAMPARA — STORAGE SaaS MODEL
              </h3>
              
              <p style={{ fontSize: '14px', color: '#555555', marginTop: '8px', lineHeight: '1.6', marginBottom: '20px' }}>
                End-to-end financial unit economics and SaaS recurring revenue model for digital asset & memory preservation:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', fontWeight: '700', color: '#111111' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '10px' }}>
                  <span>Initial Investment</span>
                  <span style={{ color: '#FF7A00' }}>₹2.50 Lakh</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '10px' }}>
                  <span>Monthly Operating Cost</span>
                  <span style={{ color: '#FF7A00' }}>₹55K</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '10px' }}>
                  <span>Projected Monthly Revenue</span>
                  <span style={{ color: '#FF7A00' }}>₹1.25 Lakh</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '10px' }}>
                  <span>Projected Monthly Profit</span>
                  <span style={{ color: '#00AA44' }}>₹70K</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#F7F7F4', borderRadius: '10px' }}>
                  <span>Estimated Payback</span>
                  <span style={{ color: '#FF7A00' }}>4–6 Months</span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '24px',
                backgroundColor: '#F0F0EC',
                border: '1px solid #D9D9D4',
                borderRadius: '14px',
                padding: '16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#666666', letterSpacing: '0.08em', marginBottom: '4px' }}>
                FINANCIAL STRATEGY
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>
                Recurring Revenue • Storage-Based SaaS • Scalable Cloud Economics
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
