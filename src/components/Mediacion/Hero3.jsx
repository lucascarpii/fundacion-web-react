import { motion } from 'framer-motion'

export function Hero3() {
  return (
    <section className="min-h-[60dvh] flex items-center justify-center relative">
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
      <div className="w-full max-w-screen-xl min-h-[80dvh] flex flex-col-reverse xl:flex-row gap-20  justify-center xl:justify-between items-center mx-auto px-4 sm:px-6 ">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0">
        <h1 className="text-4xl scale-110 sm:text-6xl md:text-7xl text-center lg:text-left lg:scale-100 lg:text-8xl font-light text-black">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Prácticas   
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Restaurativas  
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            y  <span className="font-medium bg-gradient-to-br from-purple-500 from-50% to-purple-700 text-transparent bg-clip-text">Mediación</span>
          </motion.span>
        </h1>
      </div>
      <img src="/image/mediacion_logo_enca.png" className='h-40 md:h-52 ' alt="" />
      </div>
    </section>
  )
}