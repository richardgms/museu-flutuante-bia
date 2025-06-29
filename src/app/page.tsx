'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import FloatingMemories from '@/components/sections/FloatingMemories';
import MusicPlayer from '@/components/sections/MusicPlayer';
import Letters from '@/components/sections/Letters';
import Timeline from '@/components/sections/Timeline';
import { 
  GlassCard, 
  FloatingHearts, 
  ParallaxSection, 
  AnimatedCounter,
  SectionIndicator,
  ClientOnly
} from '@/components/ui';
import ClickSpark from '@/components/ui/ClickSpark';

import { calculateTimeTogether } from '@/lib/utils';
import { galleryPhotos, mainPlaylist, relationshipStartDate, loveLetters, timelineEvents, carouselSlides } from '@/lib/data';

export default function Home() {
  const [showHearts, setShowHearts] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showShine, setShowShine] = useState(false);

  const triggerHearts = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 100);
  };

  useEffect(() => {
    // Detectar seção atual baseada no scroll
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      
      const sections = ['hero', 'home', 'gallery', 'floating-memories', 'letters', 'timeline'];
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(index);
          }
        }
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setShowShine(true), 400); // dispara shine junto com o counter
    setTimeout(() => setShowShine(false), 2200); // dura só uma vez
  }, []);

  return (
    <ClientOnly>
        <ClickSpark
          sparkColor='#ffd700'
          sparkSize={12}
          sparkRadius={20}
          sparkCount={6}
          duration={500}
          easing="ease-out"
        >
          <main className="relative min-h-screen pb-0" id="main-content">

            {/* Hero Section - Tela inicial */}
            <div id="hero" className="w-full">
              <Hero />
            </div>

            {/* Home Section - Para Ana Beatriz */}
            <ParallaxSection 
              id="home" 
              data-section="home" 
              className="h-screen flex items-center justify-center"
              speed={0.3}
              direction="up"
            >
              <FloatingHearts trigger={showHearts} count={8}>
                <div 
                  className="text-center mx-auto" 
                  role="main"
                  aria-label="Seção principal do Museu Flutuante"
                  style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 'clamp(24px, 3vw, 36px)',
                    padding: 'clamp(64px, 8vh, 128px) clamp(16px, 4vw, 48px) clamp(32px, 4vh, 64px)',
                    maxWidth: 'min(90vw, 1200px)',
                    minHeight: '100vh',
                    justifyContent: 'center'
                  }}>


                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 'clamp(16px, 2vw, 24px)',
                      marginBottom: 'clamp(8px, 1vw, 16px)'
                    }}
                  >
                    <p className="text-white/80 font-light" style={{
                      fontFamily: '"Poiret One", sans-serif',
                      fontSize: 'clamp(23px, 3.9vw, 31px)',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}>
                      Para a neguinha mais especial do mundo
                    </p>
                    <p className="text-accent" style={{
                      fontFamily: '"Dancing Script", cursive',
                      fontSize: 'clamp(32px, 5vw, 48px)',
                      fontWeight: 600,
                      letterSpacing: '0.01em'
                    }}>
                      Ana Beatriz 💕
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{
                      margin: 'clamp(8px, 1vw, 16px) 0'
                    }}
                  >
                      <div 
                        className="inline-block cursor-pointer"
                        onClick={triggerHearts}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '20px',
                          padding: '32px',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(245, 215, 110, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)';
                        }}
                      >
                      <div className="text-center" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <p className="text-white/60" style={{
                          fontFamily: '"Poiret One", sans-serif',
                          fontSize: 'clamp(18px, 2.6vw, 21px)',
                          fontWeight: 500,
                          letterSpacing: '0.01em'
                        }}>Juntos há</p>
                          <div className="font-bold" style={{
                            fontFamily: '"Playfair Display", serif',
                            fontSize: 'clamp(36px, 5vw, 48px)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                            color: '#7dd3fc'
                          }}>
                            <AnimatedCounter 
                              end={35}
                              start={0}
                              duration={2}
                              suffix={' meses'}
                            />
                          </div>
                        <p className="text-white/60" style={{
                          fontFamily: '"Poiret One", sans-serif',
                          fontSize: 'clamp(18px, 2.6vw, 21px)',
                          fontWeight: 500,
                          letterSpacing: '0.01em'
                        }}>
                          e cada dia é mais especial 🤍
                        </p>
                      </div>
                      {/* Shine sincronizado com o contador */}
                      {showShine && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.25), transparent)',
                          animation: 'shine 2s ease-in-out',
                          pointerEvents: 'none'
                        }}></div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    style={{
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: 'clamp(16px, 2vw, 24px)',
                      paddingTop: 'clamp(8px, 1vw, 16px)'
                    }}
                  >
                    <p className="text-white/70 max-w-3xl mx-auto leading-relaxed font-light" style={{
                      fontFamily: '"Poiret One", sans-serif',
                      fontSize: 'clamp(21px, 3.25vw, 26px)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      letterSpacing: '0.005em'
                    }}>
                      Este é nosso museu pessoal, onde cada memória é uma obra de arte, 
                      cada momento é uma exposição especial, e cada dia juntos é uma nova 
                      peça adicionada à nossa coleção de amor.
                    </p>
                    

                  </motion.div>
                </div>
              </FloatingHearts>
            </ParallaxSection>

            {/* Gallery Section */}
            <ParallaxSection 
              id="gallery" 
              data-section="gallery" 
              className="h-screen flex items-center justify-center px-6 py-12 pb-24"
              speed={0.2}
              direction="down"
            >
              <div className="max-w-7xl mx-auto w-full">
                <Gallery 
                  photos={galleryPhotos} 
                  title="Nossa Galeria de Momentos Especiais"
                  carouselSlides={carouselSlides}
                />
              </div>
            </ParallaxSection>

            {/* Floating Memories Section */}
            <ParallaxSection 
              id="floating-memories" 
              data-section="floating-memories" 
              className="h-screen w-full pt-16"
              speed={0.15}
              direction="up"
            >
              <FloatingMemories />
            </ParallaxSection>

            {/* Letters Section */}
            <ParallaxSection 
              id="letters" 
              data-section="letters" 
              className="min-h-screen flex items-start justify-center px-6 pt-32 md:pt-24 pb-12"
              speed={0.4}
              direction="left"
            >
              <div className="max-w-[1400px] mx-auto w-full">
                <Letters 
                  letters={loveLetters} 
                  title="Cartinhas do Coração"
                />
              </div>
            </ParallaxSection>

            {/* Espaçamento reduzido no mobile entre Letters e Footer */}
            <div className="block md:hidden h-16"></div>

            {/* Footer */}
            <footer className="py-8 px-6 text-center mb-24 pb-24">
              <GlassCard 
                className="max-w-3xl mx-auto hover-lift px-8 py-8" 
                variant="gold" 
                size="lg"
                shimmer
              >
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <p className="font-romantic text-2xl md:text-3xl text-accent">
                      Feito com muito amor pelo seu Nathan
                    </p>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-2xl flex-shrink-0"
                    >
                      💕
                    </motion.div>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed use-inter text-center" style={{fontFamily: '"Inter", sans-serif', fontSize: 'clamp(16px, 2.2vw, 20px)'}}>
                  Esse museu é exclusivamente dedicado para a minha neguinha, minha Bia 🌟
                </p>
              </GlassCard>
            </footer>

            {/* Music Player */}
            <MusicPlayer playlist={mainPlaylist} />

            {/* Section Indicator */}
            <SectionIndicator totalSections={5} currentSection={currentSection} />

          </main>
                  </ClickSpark>
        </ClientOnly>
    );
}
