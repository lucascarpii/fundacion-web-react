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
      <Blockquote />
      <Footer />
    </>
  );
}