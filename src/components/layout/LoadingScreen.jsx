import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const welcomeGreetings = [
  { text: 'WELCOME', lang: 'ENGLISH' },
  { text: 'सुस्वागतम्', lang: 'MARATHI (मराठी)' },
  { text: 'स्वागत है', lang: 'HINDI (हिंदी)' },
  { text: 'ようこそ', lang: 'JAPANESE (日本語)' },
  { text: 'BIENVENUE', lang: 'FRENCH (FRANÇAIS)' },
  { text: 'BIENVENIDO', lang: 'SPANISH (ESPAÑOL)' },
  { text: 'WILLKOMMEN', lang: 'GERMAN (DEUTSCH)' },
  { text: 'BENVENUTO', lang: 'ITALIAN (ITALIANO)' },
  { text: '欢迎', lang: 'CHINESE (中文)' },
  { text: 'أهلاً وسهلاً', lang: 'ARABIC (العربية)' },
];

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [langIndex, setLangIndex] = useState(0);

  // Cycle languages every 500ms
  useEffect(() => {
    const langTimer = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % welcomeGreetings.length);
    }, 500);

    return () => clearInterval(langTimer);
  }, []);

  // Smooth progress timer (~5s total)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 3) + 2;
        return Math.min(next, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  const currentGreeting = welcomeGreetings[langIndex];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: 'easeInOut' } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(247, 247, 244, 0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 20000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px 48px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            AG
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
              ATHARVA GAHINE
            </div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#FF7A00', letterSpacing: '0.08em' }}>
              3D PORTFOLIO EXPERIENCE
            </div>
          </div>
        </div>

        <button
          onClick={onComplete}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #D9D9D4',
            borderRadius: '99px',
            padding: '10px 24px',
            color: '#111111',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = '#FF7A00')}
          onMouseLeave={(e) => (e.target.style.borderColor = '#D9D9D4')}
        >
          [ LAUNCH EXPERIENCE DIRECTLY → ]
        </button>
      </div>

      {/* Center Giant Multilingual Greeting Display (NO BOX, FULL PAGE) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flex: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting.lang}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 1.08 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h1
              style={{
                fontSize: 'clamp(56px, 12vw, 140px)',
                fontWeight: '900',
                color: '#111111',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '-0.03em',
                lineHeight: '1.0',
                margin: 0,
                textTransform: 'uppercase',
                textShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
              }}
            >
              {currentGreeting.text}
            </h1>
            <div
              style={{
                marginTop: '16px',
                fontSize: 'clamp(14px, 2vw, 20px)',
                fontWeight: '800',
                color: '#FF7A00',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              • {currentGreeting.lang} •
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Footer Row & Full-Width Progress Bar */}
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#666666', letterSpacing: '0.1em' }}>
            INITIALIZING SYSTEM TELEMETRY
          </span>
          <span style={{ fontSize: '18px', fontWeight: '900', color: '#FF7A00', fontFamily: 'Outfit, sans-serif' }}>
            {progress}%
          </span>
        </div>

        {/* Fullscreen Width Glowing Progress Line */}
        <div
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#EAEAEA',
            borderRadius: '99px',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundColor: '#FF7A00',
              borderRadius: '99px',
              width: `${progress}%`,
              boxShadow: '0 0 16px rgba(255, 122, 0, 0.8)',
            }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};
