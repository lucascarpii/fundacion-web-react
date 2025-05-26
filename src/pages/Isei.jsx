import { Footer } from "../components/Footer";
import { Hero } from "../components/Isei/Hero";
import { Blockquote } from "../components/Isei/Blockquote";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";
import { Hero2 } from "../components/Isei/Hero2";
import { Info } from "../components/Isei/Info";

export function Isei() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="ISEI - Instituto Superior de Estudios Interdisciplinarios | Fundación Neuquén Oeste"
        description="Descubre ISEI, el Instituto Superior de Estudios Interdisciplinarios de Fundación Neuquén Oeste. Formamos agentes de transformación social a través de una educación que construye conocimientos y promueve el diálogo y respeto."
        image="https://fundacionnqnoeste.com/image/og-isei.webp"
        url="https://fundacionnqnoeste.com/isei"
      />
      
      <Hero />
      <Hero2 />
      <Info />
      <Blockquote />
      <Footer />
    </>
  );
}