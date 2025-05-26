import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MenuButton } from './MenuButton';
import { ArrowRightIcon } from '../icons/ArrowRight';

export function Header({ theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Inicio', href: '/', bg: 'bg-isei-blue' },
    { label: 'Colegio', href: '/colegio', bg: 'bg-red-500' },
    { label: 'Isei', href: '/isei', bg: 'bg-teal-500' },
    { label: 'Deporte', href: '/deporte', bg: 'bg-orange-500' },
    { label: 'Comunicación', href: '/comunicacion', bg: 'bg-sky-500' },
    { label: 'Comunidad', href: '/comunidad', bg: 'bg-yellow-500' },
    { label: 'Mediación', href: '/mediacion', bg: 'bg-purple-500' },
    { label: 'Hidroponia', href: '/hidroponia', bg: 'bg-green-500' },
  ];

  const menuVariants = {
    open: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    closed: { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const logoSrc = theme === 'dark' ? '/image/logo_blanco.png' : '/image/fundacion_logo.png';
  const buttonColor = theme === 'dark' ? 'text-white border-white' : 'text-isei-dark border-isei-dark';
  const underlineColor = theme === 'dark' ? 'bg-white' : 'bg-isei-blue';

  return (
    <>
      <nav className="absolute inset-0 z-50 h-fit">
        <div className={`flex items-center justify-between h-[90px] overflow-hidden max-w-screen-xl mx-auto px-6 2xl:px-0 ${textColor}`}>
          <Link to="/">
            <img className="w-[70px] object-cover" src={logoSrc} alt="Logo" />
          </Link>

          <MenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="lg:hidden cursor-pointer"
            color={theme === 'dark' ? '#fff' : '#000'}
          />

          <ul className="hidden lg:flex gap-4 text-sm items-center">
            {navLinks.map((link) => (
              <li className="relative tracking-widest" key={link.label}>
                <motion.div whileHover="hover">
                  <Link to={link.href} className="w-full relative cursor-pointer px-3 py-2.5">
                    {link.label}
                    <motion.span
                      className={`absolute left-0 bottom-0 z-50 h-[2px] w-full ${underlineColor}`}
                      variants={{ hover: { scaleX: 1 } }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>

          <Link
            to="/sobrenosotros"
            className={`w-40 tracking-widest hidden lg:block text-xs font-semibold uppercase border-2 hover:text-white hover:bg-isei-blue hover:border-transparent transition-all duration-200 ${buttonColor} pt-3 pb-[11px] px-3`}
          >
            Sobre nosotros
          </Link>
        </div>
      </nav>

      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`lg:hidden overflow-y-scroll fixed top-0 z-50 flex flex-col w-full right-0 bg-white ${isOpen ? 'h-dvh' : 'h-[0px] transition-all delay-500'}`}
      >
        <div className='flex items-center justify-between min-h-[90px] px-6'>
          <Link to="/">
            <img className="w-[70px] object-cover" src="/image/fundacion_logo.png" alt="Logo" onClick={toggleMenu} />
          </Link>
          <MenuButton
            isOpen={isOpen}
            onClick={toggleMenu}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="cursor-pointer"
          />
        </div>

        <ul className={`py-6 h-full ${!isOpen && 'hidden'}`}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} onClick={toggleMenu}>
              <motion.li 
              
              className="py-6 px-6 bg-gradient-to-t to-white from-zinc-50 border-b hover:text-isei-blue cursor-pointer flex justify-between items-center text-title-black">
                {/* Agregar un circulo de color al lado del texto */}
                <span>
                  <span className={`inline-block w-3 h-3 ${link.bg} rounded-full mr-2`}></span>
                  {link.label}
                </span>
                <ArrowRightIcon className='size-5' />
              </motion.li>
            </Link>
          ))}
        </ul>

        <div className={`px-6 pb-6 ${!isOpen && 'hidden'}`}>
          <Link to="/sobrenosotros" onClick={toggleMenu}>
            <button className="w-full border-2 border-isei-blue text-isei-blue hover:bg-isei-blue hover:text-white transition-colors duration-200 shadow-md uppercase text-xs font-semibold pb-2.5 pt-3">
              Sobre nosotros
            </button>
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
