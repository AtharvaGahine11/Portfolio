import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, ShieldCheck, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const HeroSection = ({ onNavigate, onHoverCursor, onLeaveCursor }) => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            maxWidth: '1180px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div style={{ textAlign: 'left' }}>
            {/* Status Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}
            >
              <span className="badge badge-orange">
                <Sparkles size={14} /> FULL STACK & SYSTEMS ENGINEER
              </span>
              <span className="badge badge-neutral">
                <GraduationCap size={14} /> ITM SKILLS UNIVERSITY
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(40px, 6vw, 68px)',
                fontWeight: '800',
                fontFamily: 'Outfit, sans-serif',
                color: '#111111',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
              }}
            >
              ATHARVA GAHINE
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                fontWeight: '700',
                color: '#FF7A00',
                marginTop: '10px',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              FULL STACK DEVELOPER
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#666666',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '10px',
              }}
            >
              SYSTEM BUILDER • REAL-TIME ENGINEER • CLOUD & DEVOPS • PROBLEM SOLVER
            </motion.div>

            {/* Main Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '17px',
                color: '#555555',
                marginTop: '20px',
                lineHeight: '1.6',
              }}
            >
              "I build full-stack applications, real-time systems and cloud-powered solutions that turn complex problems into meaningful digital experiences."
            </motion.p>

            {/* Metadata info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '16px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#666666',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={16} color="#FF7A00" /> B.Tech CSE (2024–2028)
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={16} color="#FF7A00" /> Mumbai, India
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '30px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => onNavigate('projects')}
                onMouseEnter={() => onHoverCursor('EXPLORE')}
                onMouseLeave={onLeaveCursor}
                className="btn-primary"
              >
                EXPLORE MY WORK <ArrowRight size={18} />
              </button>

              <a
                href="/assets/Atharva_Gahine_Resume.png"
                download="Atharva_Gahine_Resume.png"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => onHoverCursor('DOWNLOAD')}
                onMouseLeave={onLeaveCursor}
                className="btn-secondary"
              >
                DOWNLOAD RESUME <Download size={18} />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '28px',
              }}
            >
              <a
                href="https://github.com/AtharvaGahine11"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                onMouseEnter={() => onHoverCursor('GITHUB')}
                onMouseLeave={onLeaveCursor}
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-gahine-074b0a324"
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                onMouseEnter={() => onHoverCursor('LINKEDIN')}
                onMouseLeave={onLeaveCursor}
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:atharvagahine11@gmail.com"
                className="btn-icon"
                onMouseEnter={() => onHoverCursor('EMAIL')}
                onMouseLeave={onLeaveCursor}
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>



        </div>
      </div>
    </section>
  );
};
