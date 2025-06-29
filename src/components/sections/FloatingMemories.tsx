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
        <FloatingElement depth={0.5} className="top-[8%] left-[2%] md:top-[15%] md:left-[8%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/images/love/1.jpg"
              alt="Nossa memória especial"
              width={120}
              height={120}
              className="w-16 h-16 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 2 - Topo centro-esquerda */}
        <FloatingElement depth={1} className="top-[12%] left-[22%] md:top-[18%] md:left-[25%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/images/love/2.jpg"
              alt="Nossa memória especial"
              width={140}
              height={140}
              className="w-20 h-20 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 3 - Topo centro-direita (maior) */}
        <FloatingElement depth={2} className="top-[4%] left-[50%] md:top-[8%] md:left-[53%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/images/love/3.jpg"
              alt="Nossa memória especial"
              width={200}
              height={260}
              className="w-24 h-32 md:w-52 md:h-68 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 4 - Topo direita */}
        <FloatingElement depth={1} className="top-[6%] left-[70%] md:top-[8%] md:left-[78%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              src="/images/love/4.jpg"
              alt="Nossa memória especial"
              width={150}
              height={150}
              className="w-16 h-16 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 5 - Meio esquerda */}
        <FloatingElement depth={1} className="top-[32%] left-[2%] md:top-[40%] md:left-[5%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Image
              src="/images/love/5.jpg"
              alt="Nossa memória especial"
              width={160}
              height={160}
              className="w-20 h-20 md:w-44 md:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 6 - Base direita */}
        <FloatingElement depth={2} className="top-[44%] left-[68%] md:top-[55%] md:left-[77%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Image
              src="/images/love/6.jpg"
              alt="Nossa memória especial"
              width={170}
              height={230}
              className="w-20 h-24 md:w-44 md:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 7 - Base esquerda */}
        <FloatingElement depth={4} className="top-[54%] left-[10%] md:top-[58%] md:left-[15%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Image
              src="/images/love/7.jpg"
              alt="Nossa memória especial"
              width={240}
              height={240}
              className="w-24 h-24 md:w-64 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>
        </FloatingElement>
        {/* Foto 8 - Base centro */}
        <FloatingElement depth={1} className="top-[62%] left-[40%] md:top-[62%] md:left-[50%]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Image
              src="/images/love/8.jpg"
              alt="Nossa memória especial"
              width={150}
              height={150}
              className="w-16 h-16 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-lg shadow-lg"
            />
          </motion.div>
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default FloatingMemories 