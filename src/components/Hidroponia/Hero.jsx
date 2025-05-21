import { motion } from 'framer-motion'
import { MailIcon } from "../../icons/MailIcon";
import { FileTypePDF } from '../../icons/FileTypePDF';
import { useState } from 'react';
import { Modal } from '../ui/Modal'; // Asegúrate que la ruta al componente Modal sea correcta


export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full -mt-2 absolute h-full opacity-20 text-base-400/70 [mask-image:radial-gradient(50rem_50rem_at_top,white,transparent)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="150" id="grid-pattern" patternUnits="userSpaceOnUse" width="150">
              <path d="M 150 0 L 0 0 0 150" stroke="currentColor" fill="none" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-6 md:mt-[45px]">
        <div className='min-h-[80dvh] md:min-h-[70dvh] flex-col-reverse lg:flex-row flex items-center justify-center lg:justify-between gap-16 md:px-4  '>

          <div className='flex flex-col items-center lg:items-start justify-center'>
            <h1 className="text-5xl sm:scale-110 sm:text-6xl md:text-7xl text-center lg:text-start lg:scale-100 lg:text-8xl font-light text-black">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <span className="font-normal bg-gradient-to-tr from-[#709121] from-50% to-lime-200 text-transparent bg-clip-text">Hidroponía</span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Neuquén Oeste
              </motion.span>
            </h1>
            <motion.a
              href='https://campusvirtualisei.com/pdf/invernadero_calf_fundacion.pdf'
              target='_blank'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='w-full sm:w-fit justify-center select-none cursor-pointer flex items-center gap-4 border-2 text-black border-black transition-colors duration-200 px-6 py-3 rounded-lg hover:bg-black hover:text-white mt-8 mb-10 lg:mb-0'>
              Invernadero con Energía Solar <FileTypePDF />
            </motion.a>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0, ease: 'easeInOut' }}
            src="/image/hidroponia.png" className='w-44 md:w-80 mx-auto' alt="" />
        </div>


        <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center  relative rounded-3xl overflow-hidden bg-huerta-image mb-10">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button className="z-10 flex flex-col justify-center gap-2 items-center hover:scale-105 transition-transform duration-300" onClick={openModal}>
            <div className="bg-lime-200 aspect-square text-lime-600 flex items-center justify-center w-16 rounded-full" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white">Ver video</span>
          </button>
        </div>

        


        <div className="grid lg:grid-cols-2 mb-24 gap-6 lg:gap-20 place-items-center">
          <div className="text-balance max-w-2xl text-lg/7 text-gray-700">
            <p className="">
              En la Fundación Neuquén Oeste, el <strong>invernadero hidropónico</strong> es mucho más que un espacio de producción sustentable: es un reflejo de nuestra filosofía institucional. Un lugar con un clima nutritivo donde cultivamos <strong>conciencia, valores y futuro</strong>.
            </p>
            <p className="mt-6 ">
              Impulsado por <strong>energía solar</strong> y llevado a cabo en conjunto con la Cooperativa de Agua, Luz y Fuerza (CALF).
            </p>
          </div>


          <div className="text-pretty flex flex-col justify-between max-w-2xl text-lg/7 text-gray-700">
            <p className="">
              Este invernadero se convierte en un <strong>laboratorio vivo</strong>, donde los estudiantes del Colegio Neuquén Oeste y la comunidad pueden experimentar de manera directa el ciclo de crecimiento, desde la siembra hasta la cosecha.
            </p>
            <p className='mt-2'>
              En este espacio, el aprendizaje florece de manera colaborativa, en armonía con el entorno y con un profundo respeto por la sustentabilidad.</p>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          className="w-full relative aspect-video z-10"
          // Ajusta la ruta si tu video está en una carpeta pública, p.ej., /videos/30aniversario.mp4
          src="/video/huerta_hidroponica.mp4"
          title="Video Fundación Neuquén Oeste"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  )
}