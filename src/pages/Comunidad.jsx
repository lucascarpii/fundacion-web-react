import { Hero } from "../components/Comunidad/Hero";
import { Blockquote } from "../components/Comunidad/Blockquote";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Comunidad() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Comunidad - Fundación Neuquén Oeste | Un Presente con Conciencia"
        description="El área de Comunidad de Fundación Neuquén Oeste impulsa un presente con conciencia, acompañando a familias, mujeres y niños a través del apoyo comunitario, talleres y charlas informativas en Neuquén."
        image="https://fundacion.tamnora.com/image/og-comunidad.webp"
        url="https://fundacion.tamnora.com/comunidad"
      />

     
      <Hero />
       <section className="-mt-20 lg:-mt-44 flex items-center justify-center relative mb-5">
        <img class="w-full h-full object-cover object-center mask-fade-y-25 " src="/image/comunidad.webp" alt="" />
      </section>
      <Blockquote />
      <Footer />
    </>
  );
}