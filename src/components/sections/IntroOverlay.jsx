import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, SkipForward, Cpu, Zap, Cloud, ShieldCheck } from 'lucide-react';

export const IntroOverlay = ({ onEnterWorld, onHoverCursor, onLeaveCursor }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 2000);
    const t4 = setTimeout(() => setStep(4), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '36px 48px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header Watermark */}
      <div style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '15px', fontWeight: '900', color: '#FF7A00', fontFamily: 'Outfit, sans-serif' }}>AG/</span>
          <span style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.12em', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
            ATHARVA GAHINE
          </span>
        </div>

        <button
          onClick={onEnterWorld}
          onMouseEnter={() => onHoverCursor('SKIP')}
          onMouseLeave={onLeaveCursor}
          style={{
            background: '#FFFFFF',
            border: '1px solid #D9D9D4',
            borderRadius: '99px',
            padding: '10px 20px',
            fontSize: '12px',
            fontWeight: '700',
            color: '#111111',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease',
          }}
        >
          SKIP INTRO <SkipForward size={14} />
        </button>
      </div>

      {/* Main Content Layout (Left Text Column, Right 3D Studio Space) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          pointerEvents: 'none',
        }}
      >
        {/* Left Column: Hero Typography & Info Stack */}
        <div style={{ maxWidth: '580px', pointerEvents: 'auto' }}>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '99px',
                backgroundColor: 'rgba(255, 122, 0, 0.12)',
                color: '#FF7A00',
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '0.15em',
                marginBottom: '16px',
              }}
            >
              HELLO, I'M
            </motion.div>
          )}

          {step >= 1 && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(44px, 7vw, 76px)',
                fontWeight: '900',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.03em',
                color: '#111111',
                lineHeight: '1.02',
                margin: 0,
              }}
            >
              ATHARVA GAHINE
            </motion.h1>
          )}

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#FF7A00',
                letterSpacing: '0.1em',
                marginTop: '14px',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              FULL STACK DEVELOPER
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                marginTop: '24px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#111111',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                💻 SYSTEM BUILDER
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#111111',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                ⚡ REAL-TIME ENGINEER
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#111111',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                ☁ CLOUD & DEVOPS
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EAEAEA',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#111111',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                }}
              >
                🎯 PROBLEM SOLVER
              </span>
            </motion.div>
          )}

          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ marginTop: '36px' }}
            >
              <button
                onClick={onEnterWorld}
                onMouseEnter={() => onHoverCursor('ENTER')}
                onMouseLeave={onLeaveCursor}
                className="btn-primary"
                style={{
                  fontSize: '16px',
                  padding: '16px 36px',
                  boxShadow: '0 10px 30px rgba(255, 122, 0, 0.3)',
                }}
              >
                ENTER MY WORLD <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Footer Quote */}
      <div style={{ textAlign: 'center', fontSize: '13px', color: '#888888', fontWeight: '600', letterSpacing: '0.05em' }}>
        "I BUILD SYSTEMS. I SOLVE PROBLEMS. I TURN IDEAS INTO DIGITAL EXPERIENCES."
      </div>
    </div>
  );
};
