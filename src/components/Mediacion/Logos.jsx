import { motion } from "motion/react"

export function Logos() {
  return (
    <div className="relative">
      <svg className="w-full absolute bottom-0 h-full opacity-20 text-base-400/70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            height="110"
            id="grid-pattern"
            patternUnits="userSpaceOnUse"
            width="110">
            <path d="M 110 0 L 0 0 0 110" stroke="currentColor" fill="none" strokeWidth="1">
            </path>
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" height="100%" width="100%">
        </rect>
      </svg>
      
      <div className='absolute w-full h-full bg-gradient-to-b from-white via-transparent to-white'></div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32  lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }} className="text-center text-4xl/snug text-gray-900">
          Contamos 
          <br className="sm:hidden" /> con el  <motion.span
            className="w-fit pb-2 px-2"
            initial={{
              background: 'linear-gradient(90deg, #7f3894 50%, transparent 50%)',
              backgroundSize: '200% 100%',
              backgroundPosition: '100% 0',
              color: '#ffffff00',
            }}
            animate={{ backgroundPosition: '0% 0', color: '#ffffffff' }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'backOut' }}
          >
            apoyo
          </motion.span> de
        </motion.h2>
        <div className="mx-auto mt-20 grid max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl grid-cols-2 md:grid-cols-6 place-items-center sm:gap-x-10 lg:mx-0 lg:max-w-none ">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            alt="Transistor"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo1.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain "
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            alt="Reform"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo5.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain "
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            alt="Tuple"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo4.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain "
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            alt="SavvyCal"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo3.png"
            width={158}
            height={48}
            className="max-h-12 w-full object-contain  "
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            alt="Statamic"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo6.png"
            width={158}
            height={48}
            className=" max-h-12 w-3/4 sm:w-full object-contain"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            alt="Statamic"
            src="https://fundacionnqnoeste.com/imagenes/mediacion_apoyo_logo2.png"
            width={158}
            height={48}
            className=" max-h-12 w-3/4 sm:w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}
