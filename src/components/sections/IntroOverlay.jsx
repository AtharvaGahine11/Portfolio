import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, SkipForward } from 'lucide-react';

export const IntroOverlay = ({ onEnterWorld, onHoverCursor, onLeaveCursor }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => setStep(3), 3600);
    const t4 = setTimeout(() => setStep(4), 5000);

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
        padding: '40px 24px',
      }}
    >
      {/* Top watermark badge */}
      <div style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.1em', color: '#666666' }}>
          ATHARVA GAHINE / PORTFOLIO
        </div>
        <button
          onClick={onEnterWorld}
          onMouseEnter={() => onHoverCursor('SKIP')}
          onMouseLeave={onLeaveCursor}
          style={{
            background: '#FFFFFF',
            border: '1px solid #D9D9D4',
            borderRadius: '99px',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: '700',
            color: '#111111',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
          }}
        >
          SKIP INTRO <SkipForward size={14} />
        </button>
      </div>

      {/* Center Animated Typography */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', pointerEvents: 'auto' }}>
        {step >= 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '0.2em', color: '#FF7A00', textTransform: 'uppercase' }}
          >
            HELLO, I'M
          </motion.div>
        )}

        {step >= 1 && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: 'clamp(40px, 8vw, 76px)',
              fontWeight: '800',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '-0.03em',
              color: '#111111',
              marginTop: '10px',
              lineHeight: '1.05',
            }}
          >
            ATHARVA GAHINE
          </motion.h1>
        )}

        {step >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#666666',
              letterSpacing: '0.12em',
              marginTop: '12px',
            }}
          >
            FULL STACK DEVELOPER
          </motion.div>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#888888',
              marginTop: '10px',
              letterSpacing: '0.08em',
            }}
          >
            SYSTEM BUILDER • REAL-TIME ENGINEER • CLOUD & DEVOPS • PROBLEM SOLVER
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '36px' }}
          >
            <button
              onClick={onEnterWorld}
              onMouseEnter={() => onHoverCursor('ENTER')}
              onMouseLeave={onLeaveCursor}
              className="btn-primary"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              ENTER MY WORLD <ArrowRight size={18} />
            </button>
          </motion.div>
        )}
      </div>

      {/* Bottom statement */}
      <div style={{ textAlign: 'center', fontSize: '13px', color: '#888888', fontWeight: '500' }}>
        "I BUILD SYSTEMS. I SOLVE PROBLEMS. I TURN IDEAS INTO DIGITAL EXPERIENCES."
      </div>
    </div>
  );
};
