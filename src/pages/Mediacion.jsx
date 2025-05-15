import { Hero2 } from "../components/Mediacion/Hero2";
import { Blockquote } from "../components/Mediacion/Blockquote";
import { Footer } from "../components/Footer";
import { Logos } from "../components/Mediacion/Logos";
import { Videos } from "../components/Mediacion/Videos";
import { CPREM } from "../components/Mediacion/CPREM";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Mediacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Mediación y Prácticas Restaurativas (CPREM) - Fundación Neuquén Oeste"
        description="El CPREM de Fundación Neuquén Oeste ofrece mediación comunitaria gratuita y capacitación en prácticas restaurativas para la resolución pacífica de conflictos en Neuquén. El diálogo pacifica."
        image="https://fundacion.tamnora.com/image/og-mediacion.webp"
        url="https://fundacion.tamnora.com/mediacion"
      />
      
      <Hero2 />
      <Logos />
      <CPREM />
      <Videos />
      <Blockquote />
      <Footer />
    </>
  );
}
