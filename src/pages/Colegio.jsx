import { Hero } from "../components/Colegio/Hero";
import { Footer } from "../components/Footer";
import { NivelPrimario } from "../components/Colegio/NivelPrimario";
import { NivelSecundario } from "../components/Colegio/NivelSecundario";
import { SecundarioAdultos } from "../components/Colegio/SecundarioAdultos";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Colegio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Colegio | Niveles Inicial, Primario y Secundario 2"
        description="Descubre la propuesta educativa de Fundación Neuquén Oeste. Ofrecemos Nivel Inicial, Primario y Secundario para niños, jóvenes y adultos. ¡Creciendo juntos por un futuro mejor!"
        image="https://fundacion.tamnora.com/image/og-colegio.webp"
        url="https://fundacion.tamnora.com/colegio"
      />

      
      <Hero />
      <NivelPrimario />
      <NivelSecundario />
      <SecundarioAdultos />
      <Footer />
    </>
  )
}