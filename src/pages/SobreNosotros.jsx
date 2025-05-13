import { useEffect } from "react";
import { Hero } from "../components/About/Hero";
import { Pilares } from "../components/About/Pilares";
import { Valores } from "../components/About/Valores";
import { Footer } from "../components/Footer2";
import { MetaData } from "../components/MetaData";


export function SobreNosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Sobre Nosotros - Fundación Neuquén Oeste | Un Gran Ideal Construye un Mundo Mejor"
        description="Conoce la Fundación Neuquén Oeste, nuestros principios, visión, misión y valores. Desde 1998 trabajando por un mundo mejor a través de la educación y el compromiso comunitario en Neuquén."
        image="https://fundacion.tamnora.com/og-sobre-nosotros.webp"
        url="https://fundacion.tamnora.com/sobre-nosotros"
      />
      
      <Hero />
      <div className="bg-isei-footer overflow-hidden">
        <Pilares />
        <Valores />
        <Footer />
      </div>
    </>
  );
}