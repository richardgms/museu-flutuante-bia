'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Gallery from '@/components/sections/Gallery';
import MusicPlayer from '@/components/sections/MusicPlayer';
import Letters from '@/components/sections/Letters';
import Timeline from '@/components/sections/Timeline';
import { 
  GlassCard, 
  FloatingHearts, 
  ParallaxSection, 
  AnimatedTooltip,
  PulseBadge,
  AnimatedCounter
} from '@/components/ui';
import ClickSpark from '@/components/ui/ClickSpark';

import { calculateTimeTogether } from '@/lib/utils';
import { galleryPhotos, mainPlaylist, relationshipStartDate, loveLetters, timelineEvents } from '@/lib/data';

export default function Home() {
  const [showHearts, setShowHearts] = useState(false);

  const triggerHearts = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 100);
  };



  useEffect(() => {
    // Inicialização do componente
    const timer = setTimeout(() => {
      // Componente carregado
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor='#ffd700'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
      easing="ease-out"
    >
      <main className="relative min-h-screen" id="main-content">

        {/* Home Section */}
      <ParallaxSection 
        id="home" 
        data-section="home" 
        className="min-h-screen flex items-center justify-center px-6 py-16"
        speed={0.3}
        direction="up"
      >
        <FloatingHearts trigger={showHearts} count={8}>
          <div className="text-center max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="text-gradient block mb-4">Museu</span>
                <span className="font-romantic text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gold block">
                  Flutuante
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light">
                Para a pessoa mais especial do mundo
              </p>
              <p className="font-romantic text-3xl md:text-4xl lg:text-5xl text-accent">
                Mayanne 💕
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <AnimatedTooltip 
                content="Clique para uma surpresa! 💕"
                position="top"
              >
                <GlassCard 
                  className="inline-block px-8 py-6" 
                  hover 
                  glow
                  shimmer
                  tilt
                  onClick={triggerHearts}
                >
                <div className="text-center space-y-4">
                  <p className="text-base md:text-lg text-white/60">Juntos há</p>
                    <div className="font-display text-3xl md:text-4xl lg:text-5xl text-gold font-bold">
                      <AnimatedCounter 
                        end={parseInt(calculateTimeTogether(relationshipStartDate).split(' ')[0])}
                        suffix={` ${calculateTimeTogether(relationshipStartDate).split(' ').slice(1).join(' ')}`}
                      />
                    </div>
                  <p className="text-base md:text-lg text-white/60">
                    e cada dia é mais especial ✨
                  </p>
                </div>
              </GlassCard>
              </AnimatedTooltip>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                Este é nosso museu pessoal, onde cada memória é uma obra de arte, 
                cada momento é uma exposição especial, e cada dia juntos é uma nova 
                peça adicionada à nossa coleção de amor.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <PulseBadge variant="info" className="animate-bounce-subtle text-base px-6 py-2">
                  Explore rolando a página! 🎉
                </PulseBadge>
              </div>
            </motion.div>
          </div>
        </FloatingHearts>
      </ParallaxSection>

      {/* Gallery Section */}
      <ParallaxSection 
        id="gallery" 
        data-section="gallery" 
        className="min-h-screen flex items-center justify-center px-6 py-20"
        speed={0.2}
        direction="down"
      >
        <div className="max-w-7xl mx-auto w-full">
          <Gallery 
            photos={galleryPhotos} 
            title="Nossa Galeria de Momentos Especiais"
          />
        </div>
      </ParallaxSection>

      {/* Letters Section */}
      <ParallaxSection 
        id="letters" 
        data-section="letters" 
        className="min-h-screen flex items-center justify-center px-6 py-20"
        speed={0.4}
        direction="left"
      >
        <div className="max-w-7xl mx-auto w-full">
          <Letters 
            letters={loveLetters} 
            title="Cartinhas do Coração"
          />
        </div>
      </ParallaxSection>

      {/* Timeline Section */}
      <ParallaxSection 
        id="timeline" 
        data-section="timeline" 
        className="min-h-screen flex items-center justify-center px-6 py-20"
        speed={0.3}
        direction="right"
      >
        <div className="max-w-7xl mx-auto w-full">
          <Timeline 
            events={timelineEvents} 
            title="Nossa História de Amor"
          />
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="py-16 px-6 text-center mb-24">
        <GlassCard 
          className="max-w-3xl mx-auto hover-lift px-8 py-8" 
          variant="gold" 
          size="lg"
          shimmer
        >
          <div className="flex items-center justify-center mb-6 space-x-3">
            <p className="font-romantic text-2xl md:text-3xl text-accent">
            Feito com muito amor por Richard
          </p>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-2xl"
            >
              💕
            </motion.div>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Este museu é dedicado exclusivamente à você, Mayanne.
            <br />
            Cada pixel foi pensado com carinho.
          </p>
        </GlassCard>
      </footer>

      {/* Music Player */}
      <MusicPlayer playlist={mainPlaylist} />

      </main>
    </ClickSpark>
  );
}
