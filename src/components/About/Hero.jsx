import { motion } from "motion/react";
import React, { useState } from 'react';
import { Modal } from '../ui/Modal'; // Asegúrate que la ruta al componente Modal sea correcta

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative overflow-hidden">
      {/* Elementos de fondo (SVG grid, gradiente) - Se mantienen */}
      <svg className="w-full absolute h-full opacity-20 text-base-400/70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="200"
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="200">
            <path d="M 200 0 L 0 0 0 200" stroke="currentColor" fill="none" strokeWidth="1">
            </path>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
      </svg>
      <div className='absolute w-full h-full lg:bg-hero-radial-gradient'></div>

      <div className='max-w-2xl lg:max-w-screen-xl mx-auto pt-24 pb-20 lg:py-28 flex flex-col justify-center lg:grid px-6 sm:px-8 xl:px-0 lg:grid-cols-5 min-h-dvh gap-4 xl:gap-10'>
        <div className="h-fit lg:h-full flex flex-col justify-center z-10 col-span-1 lg:col-span-3 gap-8 lg:gap-10">
          {/* Título Principal H1 - Se mantiene */}
          <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl flex flex-col font-light text-title-black">
            <span>
              Un <span className="font-medium text-isei-blue ">gran ideal</span>
            </span>
            <span>construye un</span>
            <motion.span
              className="px-2 lg:px-2 lg:pe-3 w-fit pb-1 lg:pb-3 mt-2 lg:mt-3 font-medium"
              initial={{
                background: 'linear-gradient(90deg, #84cc16 50%, transparent 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                color: '#ffffff00',
              }}
              animate={{ backgroundPosition: '0% 0', color: '#ffffffff' }}
              transition={{ duration: 1.2, ease: 'backOut' }}
            >
              mundo mejor
            </motion.span>
          </h1>

          <article className="text-lg space-y-4 sm:text-lg/7 text-gray-700 max-w-xl text-pretty">
            <p>
            Desde <strong> 1986</strong>, la Fundación Neuquén Oeste acompaña el desarrollo de las personas en la Ciudad de Neuquén promoviendo valores para la transformación social. En <strong>2005</strong>, abrimos el Colegio Neuquén Oeste de <strong>Nivel Medio para adultos</strong>, brindando oportunidades a quienes quedaron fuera del sistema educativo.
            </p>
            <p>
              Finalmente, y por la <strong>gran demanda</strong> de las propias familias de la zona, se incorporaron otras <strong>propuestas educativas</strong> de nivel inicial a terciario y expandimos nuestras áreas de acción, consolidándonos como una <strong>institución comprometida</strong> con la comunidad.
            </p>
          </article>

        </div>
        {/* Bloque de Imagen/Video - Se mantiene */}
        <div className="w-full aspect-video lg:aspect-[3/4.2] mt-6 lg:mt-10 lg:col-span-2 flex items-center justify-center z-20 relative bg-hero-image bg-cover bg-center rounded-3xl overflow-hidden rounded-tr-none">
          <div className="absolute inset-0 bg-black/40"></div>
          <button className="z-10 flex flex-col justify-center gap-2 items-center hover:scale-105 transition-transform duration-300" onClick={openModal}>
            <div className="bg-lime-200 aspect-square text-lime-600 flex items-center justify-center w-16 rounded-full" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">Ver video</span>
          </button>
        </div>
      </div>

      {/* Modal para el Video - Se mantiene */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          className="w-full relative aspect-video z-10"
          // Ajusta la ruta si tu video está en una carpeta pública, p.ej., /videos/30aniversario.mp4
          src="/video/30aniversario.mp4"
          title="Video Fundación Neuquén Oeste"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
}