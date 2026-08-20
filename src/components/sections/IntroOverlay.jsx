import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, SkipForward } from 'lucide-react';

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
      {/* Top watermark badge */}
      <div style={{ pointerEvents: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            padding: '8px 20px',
            fontSize: '12px',
            fontWeight: '700',
            color: '#111111',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease',
          }}
        >
          SKIP INTRO <SkipForward size={14} />
        </button>
      </div>

      {/* Main Content Layout (Left Column Typography, 0 Ring Collision) */}
      <div
        style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <div style={{ textAlign: 'left', maxWidth: '580px', pointerEvents: 'auto' }}>
          {/* Small Tagline */}
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: '13px',
                fontWeight: '800',
                letterSpacing: '0.25em',
                color: '#FF7A00',
                textTransform: 'uppercase',
              }}
            >
              HELLO, I'M
            </motion.div>
          )}

          {/* Huge Stacked Title */}
          {step >= 1 && (
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: 'clamp(54px, 8.5vw, 92px)',
                fontWeight: '900',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.04em',
                color: '#111111',
                lineHeight: '0.95',
                margin: '12px 0',
                textTransform: 'uppercase',
              }}
            >
              ATHARVA<br />GAHINE
            </motion.h1>
          )}

          {/* Medium Subtitle */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#111111',
                letterSpacing: '0.15em',
                fontFamily: 'Outfit, sans-serif',
                marginTop: '8px',
              }}
            >
              FULL STACK DEVELOPER
            </motion.div>
          )}

          {/* Small Highlights Bar */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '12px',
                fontWeight: '800',
                color: '#666666',
                letterSpacing: '0.15em',
                marginTop: '14px',
                textTransform: 'uppercase',
              }}
            >
              SYSTEM BUILDER · REAL-TIME · CLOUD · DEVOPS
            </motion.div>
          )}

          {/* Editorial Short Statement */}
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#555555',
                marginTop: '16px',
                lineHeight: '1.6',
                maxWidth: '480px',
              }}
            >
              "I build systems that turn complex problems into useful digital experiences."
            </motion.p>
          )}

          {/* Action Button */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginTop: '32px' }}
            >
              <button
                onClick={onEnterWorld}
                onMouseEnter={() => onHoverCursor('ENTER')}
                onMouseLeave={onLeaveCursor}
                className="btn-primary"
                style={{ fontSize: '15px', padding: '16px 36px', boxShadow: '0 10px 30px rgba(255,122,0,0.25)' }}
              >
                ENTER MY WORLD <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Footer Statement */}
      <div style={{ textAlign: 'center', fontSize: '12px', color: '#888888', fontWeight: '600', letterSpacing: '0.08em' }}>
        SYSTEM BUILDER • REAL-TIME ENGINEER • CLOUD & DEVOPS • PROBLEM SOLVER
      </div>
    </div>
  );
};
