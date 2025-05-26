import { Hero } from "../components/Comunicacion/Hero";
import { Blockquote } from "../components/Comunicacion/Blockquote";
import { Footer } from "../components/Footer";
import { Mentes } from "../components/Comunicacion/Mentes";
import { useEffect } from "react";
import { MetaData } from "../components/MetaData";

export function Comunicacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Comunicación - Fundación Neuquén Oeste | Un Mensaje de Esperanza"
        description="El área de Comunicación de Fundación Neuquén Oeste comparte un mensaje de esperanza, paz y amor utilizando radio, TV y blogs. Conoce nuestras 'Mentes de servicio' y cómo llevamos nuestro mensaje a cada persona."
        image="https://fundacionnqnoeste.com/image/og-comunicacion.webp"
        url="https://fundacionnqnoeste.com/comunicacion"
      />
      
      <Hero />
      <Mentes />
      <Blockquote />
      <Footer />
    </>
  );
} 