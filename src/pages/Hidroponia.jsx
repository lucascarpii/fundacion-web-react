import { Hero } from "../components/Hidroponia/Hero";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Hidroponia() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Hidroponía Neuquén Oeste - Fundación Neuquén Oeste | Cultivando Futuro"
        description="Descubre el invernadero hidropónico de Fundación Neuquén Oeste, un laboratorio vivo impulsado por energía solar donde cultivamos conciencia, valores y futuro de manera sostenible en Neuquén."
        image="https://fundacion.tamnora.com/image/og-hidroponia.webp"
        url="https://fundacion.tamnora.com/hidroponia"
      />
      
      <Hero />
      <Footer />
    </>
  );
}