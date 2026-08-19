import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { CustomCursor } from './components/layout/CustomCursor';
import { Footer } from './components/layout/Footer';
import { MainCanvas } from './components/3d/MainCanvas';

import { IntroOverlay } from './components/sections/IntroOverlay';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TechLabSection } from './components/sections/TechLabSection';
import { ProjectMuseumSection } from './components/sections/ProjectMuseumSection';
import { SystemDesignSection } from './components/sections/SystemDesignSection';
import { HowIBuildSection } from './components/sections/HowIBuildSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { ProductBusinessSection } from './components/sections/ProductBusinessSection';
import { AtharvasLabSection } from './components/sections/AtharvasLabSection';
import { GithubCenterSection } from './components/sections/GithubCenterSection';
import { ContactSection } from './components/sections/ContactSection';
import { CaseStudyModal } from './components/modals/CaseStudyModal';

import './styles/main.css';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [activeTechCategory, setActiveTechCategory] = useState('ALL');
  const [selectedSystemNode, setSelectedSystemNode] = useState('distributed-systems');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [cursorText, setCursorText] = useState('');

  const handleHoverCursor = (text) => setCursorText(text);
  const handleLeaveCursor = () => setCursorText('');

  const handleEnterWorld = () => {
    setIsIntro(false);
    setActiveSection('hero');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId) => {
    if (isIntro) setIsIntro(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll listener to update active section in navbar
  useEffect(() => {
    if (isIntro) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'system-design', 'how-i-build', 'experience', 'education', 'product-business', 'github', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIntro]);

  return (
    <div className="app-root">
      {/* Custom Cursor */}
      <CustomCursor cursorText={cursorText} />

      {/* Main 3D Canvas Background */}
      <MainCanvas
        activeSection={isLoading || isIntro ? 'intro' : activeSection}
        activeTechCategory={activeTechCategory}
        selectedSystemNode={selectedSystemNode}
        onSelectSystemNode={setSelectedSystemNode}
      />

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <>

          {/* Floating Translucent Header Navbar */}
          {!isIntro && (
            <Navbar
              activeSection={activeSection}
              onNavigate={handleNavigate}
              onHoverCursor={handleHoverCursor}
              onLeaveCursor={handleLeaveCursor}
            />
          )}

          {/* 3D Intro Sequence Overlay */}
          {isIntro ? (
            <IntroOverlay
              onEnterWorld={handleEnterWorld}
              onHoverCursor={handleHoverCursor}
              onLeaveCursor={handleLeaveCursor}
            />
          ) : (
            <main className="app-content">
              {/* Hero */}
              <HeroSection
                onNavigate={handleNavigate}
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />

              {/* About Workspace */}
              <AboutSection
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />

              {/* Technology Lab */}
              <TechLabSection
                activeCategory={activeTechCategory}
                onCategoryChange={setActiveTechCategory}
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
                onNavigate={handleNavigate}
              />

              {/* 3D Project Museum */}
              <ProjectMuseumSection
                onOpenCaseStudy={setSelectedCaseStudy}
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />

              {/* System Design Topology */}
              <SystemDesignSection
                selectedNode={selectedSystemNode}
                onSelectNode={setSelectedSystemNode}
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
                onNavigate={handleNavigate}
              />

              {/* Engineering Methodology */}
              <HowIBuildSection />

              {/* Internship Experience */}
              <ExperienceSection />

              {/* Education */}
              <EducationSection />

              {/* Leadership & Fun Club Event */}
              <LeadershipSection />

              {/* Product & Business */}
              <ProductBusinessSection />

              {/* Atharva's Lab */}
              <AtharvasLabSection />

              {/* GitHub Center */}
              <GithubCenterSection
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />

              {/* Contact */}
              <ContactSection
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />

              {/* Footer */}
              <Footer
                onNavigate={handleNavigate}
                onHoverCursor={handleHoverCursor}
                onLeaveCursor={handleLeaveCursor}
              />
            </main>
          )}

          {/* Full Screen Case Study Modal */}
          {selectedCaseStudy && (
            <CaseStudyModal
              project={selectedCaseStudy}
              onClose={() => setSelectedCaseStudy(null)}
              onHoverCursor={handleHoverCursor}
              onLeaveCursor={handleLeaveCursor}
            />
          )}
        </>
      )}
    </div>
  );
}
export default App;
