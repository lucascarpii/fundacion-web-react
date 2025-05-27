import { motion } from "motion/react";
import { ArrowRightIcon } from "../../icons/ArrowRight";
import { SearchIcon } from "../../icons/SearchIcon";

export function Hero() {
  return (
    <main className="w-full min-h-[85dvh] bg-hero-image bg-no-repeat bg-cover bg-center flex items-center relative px-5 lg:px-20 lg:pt-10">
      {/* <div className="absolute w-full left-0 bottom-8 flex justify-center z-10">
        <div className="max-w-screen-xl mx-auto w-full flex justify-end px-6">
          <a href="#areas" className="flex cursor-pointer items-center gap-2 tracking-wide font-light text-white">
            Explorar más <span className="bg-white text-black rounded-full p-1 rotate-90"> <ArrowRightIcon className="size-5" /></span>
          </a>
        </div>
      </div> */}

      <div id="overlay" className="bg-black/65 absolute inset-0"></div>
      <section className="max-w-screen-xl flex justify-center items-center lg:items-start mx-auto text-center flex-col lg:text-start w-full z-40">
        <h1 className="text-4xl scale-110 sm:text-6xl md:text-7xl lg:scale-100 lg:text-[90px] font-light text-white">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Transformamos
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            desde el <span className="text-comunicacion">servicio</span>,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="relative"
          >
            <span className="relative z-20">
              cultivando comunidad
            </span>
            <svg
              className="absolute -bottom-1 right-0"
              viewBox="0 0 623 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 11.9131C74.0017 8.54856 247.666 2.05701 366.307 3.007C484.949 3.95698 585.536 6.76735 621 8.05378"
                stroke="#D0F601"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ opacity: { duration: 0.4, delay: 0.4 }, pathLength: { duration: 0.9, delay: 0.6 } }}
              />
            </svg>

          </motion.span>
        </h1>

      </section>
    </main>
  )
}