import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ArrowRightIcon } from "../icons/ArrowRight";

export function NotFound() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Página no encontrada | Fundación Neuquén Oeste";
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-6 pt-[180px] pb-32 flex flex-col items-center text-center gap-6">
        <p className="text-sm tracking-widest uppercase text-isei-blue font-semibold">Error 404</p>
        <h1 className="text-4xl md:text-6xl font-light text-title-black">Página no encontrada</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          La página que buscás no existe o fue movida.
        </p>
        <Link to="/" className="flex items-center gap-2 mt-4 border-2 border-isei-blue text-isei-blue hover:bg-isei-blue hover:text-white transition-colors duration-200 uppercase text-xs font-semibold tracking-widest px-5 pt-3 pb-2.5">
          Volver al inicio
          <ArrowRightIcon className="size-4" />
        </Link>
      </section>
      <Footer />
    </>
  );
}
