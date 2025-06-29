"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"
import Image from 'next/image'

import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { galleryPhotos } from "@/lib/data"

const FloatingMemories = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate])

  // Usar as fotos reais do relacionamento
  const ourPhotos = galleryPhotos.slice(0, 8)

  return (
    <div
      className="w-full min-h-screen overflow-hidden relative pt-20 pb-44 px-4"
      ref={scope}
    >
      {/* Texto central */}
      <motion.div
        className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <div className="text-center space-y-4">
        <p 
          className="text-4xl md:text-8xl z-50 text-white italic"
          style={{
            fontFamily: '"Dancing Script", cursive',
            fontWeight: 400
          }}
                  >
            love.
          </p>
        </div>
      </motion.div>

      {/* Fotos flutuantes */}
      <Floating sensitivity={-1} className="overflow-visible">
        {/* Foto 1 - Canto superior esquerdo */}
        <FloatingElement depth={0.5} className="top-[8%] left-[2%] md:top-[12%] md:left-[5%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/love/1.jpg"
              alt="Nossa memória especial"
              width={160}
              height={160}
              className="w-16 h-16 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 2 - Topo centro-esquerda */}
        <FloatingElement depth={1} className="top-[12%] left-[22%] md:top-[20%] md:left-[22%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/images/love/2.jpg"
              alt="Nossa memória especial"
              width={176}
              height={176}
              className="w-20 h-20 md:w-44 md:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 3 - Topo centro-direita (maior) */}
        <FloatingElement depth={2} className="top-[4%] left-[50%] md:top-[5%] md:left-[48%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/images/love/3.jpg"
              alt="Nossa memória especial"
              width={240}
              height={320}
              className="w-24 h-32 md:w-60 md:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 4 - Topo direita */}
        <FloatingElement depth={1} className="top-[6%] left-[70%] md:top-[6%] md:left-[75%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="/images/love/4.jpg"
              alt="Nossa memória especial"
              width={192}
              height={192}
              className="w-16 h-16 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 5 - Meio esquerda */}
        <FloatingElement depth={1} className="top-[32%] left-[2%] md:top-[38%] md:left-[2%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Image
              src="/images/love/5.jpg"
              alt="Nossa memória especial"
              width={208}
              height={208}
              className="w-20 h-20 md:w-52 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 6 - Base direita */}
        <FloatingElement depth={2} className="top-[44%] left-[68%] md:top-[52%] md:left-[72%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Image
              src="/images/love/6.jpg"
              alt="Nossa memória especial"
              width={240}
              height={320}
              className="w-20 h-24 md:w-60 md:h-80 object-contain hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 7 - Base esquerda */}
        <FloatingElement depth={4} className="top-[54%] left-[10%] md:top-[60%] md:left-[12%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Image
              src="/images/love/7.jpg"
              alt="Nossa memória especial"
              width={288}
              height={288}
              className="w-24 h-24 md:w-72 md:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 8 - Base centro */}
        <FloatingElement depth={1} className="top-[62%] left-[40%] md:top-[65%] md:left-[45%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Image
              src="/images/love/8.jpg"
              alt="Nossa memória especial"
              width={192}
              height={192}
              className="w-16 h-16 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default FloatingMemories 