import { motion } from 'framer-motion'

export function Hero() {
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
        <div className='w-full max-w-screen-xl min-h-[80dvh] flex flex-col-reverse xl:flex-row gap-10 justify-center xl:justify-between items-center mx-auto px-4 sm:px-6 '>
          <h1 className="text-center lg:text-start text-5xl sm:scale-110 sm:text-6xl md:text-7xl  lg:scale-100 lg:text-8xl font-light text-black">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              Compartir y difundir
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              un mensaje de<span className="font-normal bg-gradient-to-br from-comunicacion from-50% to-sky-700 text-transparent bg-clip-text"> esperanza</span>
            </motion.span>
          </h1>
          <img src="/image/comunicacion_logo_enca.png" className='h-28 md:h-40' alt="" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-24 -mt-10 relative">
          <div className="lg:max-w-2xl text-lg/8 text-gray-700 relative z-20">
            <p className="text-pretty">
              A través de la utilización de nuestros equipos de radio, televisión y blogs se busca elaborar un mensaje de <strong>paz</strong>, <strong>amor</strong> y <strong>acompañamiento</strong> para dar sentido a la vida y transitarla con alegría. Esto nos motiva a seguir construyendo una comunidad ligada al <strong>positivismo</strong> y <strong>buenas relaciones</strong> para vivir mejor en sociedad.
            </p>
            <p className="mt-6 text-pretty">
              El área de comunicación juega un <strong>rol fundamental</strong> para contar, desde la Fundación hacia el exterior, lo que allí dentro ocurre y los <strong>principios</strong> en los que se basa, poniendo primeramente el <strong>respeto</strong> y el <strong>amor hacia el otro</strong>, con un mensaje dirigido a <strong>todas las personas</strong>.
            </p>
          </div>


          <div className="hidden lg:flex items-center justify-end  relative z-20">
            <img src="/image/enca_comunicacion.webp" className='w-full aspect-video object-cover rounded-3xl rounded-br-none shadow-2xl' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}