import { Hero } from "../components/Comunicacion/Hero";
import { Blockquote } from "../components/Comunicacion/Blockquote";
import { Footer } from "../components/Footer";
import { Mentes } from "../components/Comunicacion/Mentes";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Comunicacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Comunicación - Fundación Neuquén Oeste | Un Mensaje de Esperanza</title>
        <meta
          name="description"
          content="El área de Comunicación de Fundación Neuquén Oeste comparte un mensaje de esperanza, paz y amor utilizando radio, TV y blogs. Conoce nuestras 'Mentes de servicio' y cómo llevamos nuestro mensaje a cada persona."
        />
        <meta
          name="keywords"
          content="comunicación, fundación neuquén oeste, mensaje de esperanza, radio, televisión, blogs, streaming, mentes de servicio, Neuquén, paz, amor, acompañamiento, servicio, comunidad, valores, educación, fundacion, comunicación social, medios de comunicación, difusión, mentes de servicio, comunicación comunitaria, diálogo, respeto, inclusión"
        />
        <meta name="author" content="Fundación Neuquén Oeste - Área Comunicación" />
        <link rel="canonical" href="https://fundacion.tamnora.com/comunicacion" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacion.tamnora.com/comunicacion" />
        <meta
          property="og:title"
          content="Comunicación en Fundación Neuquén Oeste: Difundiendo un Mensaje de Esperanza"
        />
        <meta
          property="og:description"
          content="A través de radio, TV, blogs y streaming, el área de Comunicación de Fundación Neuquén Oeste lleva un mensaje de esperanza, paz, amor y servicio a cada hogar en Neuquén."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-comunicacion.webp" />
        <meta property="og:image:alt" content="Comunicación y Difusión - Fundación Neuquén Oeste" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero />
      <Mentes />
      <Blockquote />
      <Footer />
    </>
  );
} 