import { motion } from 'framer-motion'
import { RadioPlayer } from '../RadioPlayer'
import { runCode } from '../hooks/useRunCode'
import { useEffect, useState } from 'react'

export function Hero() {
const [radioData, setRadioData] = useState(null)
const [activeRadio, setActiveRadio] = useState(false)

useEffect(() => {
  const fetchRadioData = async () => {
    try {
      const data = await runCode('-sl id, active, url, name, title -fr live_radio_stream');
      
      console.log('Radio Data:', data);
      setRadioData(data);
      setActiveRadio(data[0].active == 1); // Set the first radio as active by default
    } catch (error) {
      console.error('Error fetching radio data:', error);
    }
  };

  fetchRadioData();
}, []);





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
      
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className='w-full max-w-screen-xl min-h-[70dvh] flex flex-col-reverse xl:flex-row gap-10 justify-center xl:justify-between items-center mx-auto px-4 sm:px-6 '>
          <h1 className="text-center lg:text-start text-5xl sm:scale-110 sm:text-6xl md:text-7xl  lg:scale-100 lg:text-8xl font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Ampliamos voces,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              compartimos<span className="font-normal bg-gradient-to-br from-comunicacion from-50% to-sky-700 text-transparent bg-clip-text"> ideas</span>
            </motion.span>
          </h1>
          <img src="/image/comunicacion_logo_enca.png" className='h-28 md:h-40' alt="" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-24 -mt-10 relative">
          <div className="lg:max-w-2xl text-lg/8 text-gray-700 relative z-20">
            <p className="text-pretty">
              Desde el área de Comunicación trabajamos al servicio de la comunidad, acercando la voz, los proyectos y el espíritu de la Fundación. Generamos contenidos accesibles y significativos que fortalecen los vínculos, promueven la participación y reflejan nuestro compromiso con la transformación social.
            </p>
            <div className="flex justify-center lg:justify-start items-center mt-6">
              { activeRadio && radioData && (
                <RadioPlayer
                  url={radioData.find(radio => radio.active).url}
                  name={radioData.find(radio => radio.active).name}
                  title={radioData.find(radio => radio.active).title}
                />
              )}
            
            </div>
            <p className="mt-6 text-pretty">
              <strong>ISEI Play</strong> es una iniciativa conjunta del área de Comunicación y el ISEI. Un medio comunitario donde co-creamos contenidos, dando lugar a relatos que expresan nuestra identidad y nuestra forma de habitar el mundo.
            </p>
          </div>


          <div className="flex items-center justify-end  relative z-20">
            <img src="/image/enca_comunicacion.webp" className='w-full aspect-video object-cover rounded-3xl rounded-br-none shadow-2xl' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}