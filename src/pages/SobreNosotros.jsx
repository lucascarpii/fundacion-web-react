import { useEffect } from "react";
import { Hero } from "../components/About/Hero";
import { Pilares } from "../components/About/Pilares";
import { Valores } from "../components/About/Valores";
import { Footer } from "../components/Footer2";
import { MetaData } from "../components/MetaData";
import { History } from "../components/About/History";
import { ZonaRestaurativa } from "../components/About/ZonaRestaurativa";
import { Nosotros } from "../components/About/Nosotros";


export function SobreNosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Sobre Nosotros - Fundación Neuquén Oeste | Un Gran Ideal Construye un Mundo Mejor"
        description="Conoce la Fundación Neuquén Oeste, nuestros principios, visión, misión y valores. Desde 1998 trabajando por un mundo mejor a través de la educación y el compromiso comunitario en Neuquén."
        image="https://fundacionnqnoeste.com/image/og-sobrenosotros.webp"
        url="https://fundacionnqnoeste.com/sobrenosotros"
      />

      <Hero />
      {/* <ZonaRestaurativa /> */}
      {/* <Nosotros /> */}
      <History />
      <div className="bg-isei-footer overflow-hidden">
        <Pilares />
        <Valores />
        <Footer />
      </div>
    </>
  );
}