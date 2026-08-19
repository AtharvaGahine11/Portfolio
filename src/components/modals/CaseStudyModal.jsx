import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Layers, HelpCircle } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { qaData } from '../../data/qaData';

export const CaseStudyModal = ({ project, onClose, onHoverCursor, onLeaveCursor }) => {
  const [openQAIdx, setOpenQAIdx] = useState(null);

  if (!project) return null;

  const projectQAs = qaData[project.id] || [];

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel"
          style={{
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px',
            backgroundColor: '#FFFFFF',
            position: 'relative',
            borderRadius: '24px',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            onMouseEnter={() => onHoverCursor('CLOSE')}
            onMouseLeave={onLeaveCursor}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#F0F0EC',
              border: '1px solid #D9D9D4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#111111',
            }}
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div style={{ paddingRight: '48px', marginBottom: '24px' }}>
            <span className="badge badge-orange" style={{ marginBottom: '12px' }}>{project.badge}</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111111', fontFamily: 'Outfit, sans-serif' }}>
              {project.title}
            </h2>
            <div style={{ fontSize: '16px', fontWeight: '700', color: '#FF7A00', marginTop: '4px' }}>
              {project.subtitle}
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', marginBottom: '10px' }}>
              PROBLEM & SOLUTION OVERVIEW
            </h3>
            <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', marginBottom: '12px' }}>
              TECHNOLOGY STACK
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    backgroundColor: '#F7F7F4',
                    border: '1px solid #D9D9D4',
                    padding: '8px 16px',
                    borderRadius: '99px',
                    color: '#111111',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Flow */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', marginBottom: '14px' }}>
              SYSTEM ARCHITECTURE
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    backgroundColor: '#F7F7F4',
                    borderRadius: '12px',
                    border: '1px solid #EAEAEA',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#FF7A00',
                      color: '#FFFFFF',
                      fontWeight: '800',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#111111' }}>{arch.step}</div>
                    <div style={{ fontSize: '13px', color: '#666666', marginTop: '2px' }}>{arch.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', marginBottom: '14px' }}>
              KEY SYSTEM FEATURES
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#333333', fontWeight: '600' }}>
                  <CheckCircle2 size={16} color="#FF7A00" /> {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Industry Q&A Accordion */}
          {projectQAs.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <HelpCircle size={20} color="#FF7A00" />
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>
                  INDUSTRY JUDGING PANEL Q&A
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {projectQAs.map((qa, idx) => {
                  const isOpen = openQAIdx === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#F7F7F4',
                        borderRadius: '12px',
                        border: '1px solid #D9D9D4',
                        overflow: 'hidden',
                      }}
                    >
                      <button
                        onClick={() => setOpenQAIdx(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '16px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '14px',
                          fontWeight: '700',
                          color: '#111111',
                        }}
                      >
                        <span>{qa.q}</span>
                        {isOpen ? <ChevronUp size={18} color="#FF7A00" /> : <ChevronDown size={18} />}
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 16px 16px 16px', fontSize: '14px', color: '#555555', lineHeight: '1.6' }}>
                          {qa.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Modal Footer Buttons */}
          <div style={{ display: 'flex', gap: '14px', paddingTop: '20px', borderTop: '1px solid #EAEAEA' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              OPEN GITHUB REPOSITORY <GithubIcon size={18} />
            </a>
            <button onClick={onClose} className="btn-secondary">
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
