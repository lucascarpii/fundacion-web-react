import { Hero2 } from "../components/Mediacion/Hero2";
import { Blockquote } from "../components/Mediacion/Blockquote";
import { Footer } from "../components/Footer";
import { Logos } from "../components/Mediacion/Logos";
import { Videos } from "../components/Mediacion/Videos";
import { CPREM } from "../components/Mediacion/CPREM";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export function Mediacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Mediación y Prácticas Restaurativas (CPREM) - Fundación Neuquén Oeste</title>
        <meta
          name="description"
          content="El CPREM de Fundación Neuquén Oeste ofrece mediación comunitaria gratuita y capacitación en prácticas restaurativas para la resolución pacífica de conflictos en Neuquén. El diálogo pacifica."
        />
        <meta
          name="keywords"
          content="mediación, prácticas restaurativas, CPREM, fundación neuquén oeste, resolución de conflictos, diálogo, comunidad, Neuquén, capacitación, círculos restaurativos, mediación comunitaria, mediación escolar, mediación familiar, mediación vecinal, formación, educación, inclusión social, justicia restaurativa, prevención de conflictos, fundacion, mediación en neuquén"
        />
        <meta name="author" content="Fundación Neuquén Oeste - CPREM" />
        <link rel="canonical" href="https://fundacion.tamnora.com/mediacion" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fundacion.tamnora.com/mediacion" />
        <meta
          property="og:title"
          content="CPREM: Mediación y Prácticas Restaurativas en Neuquén | Fundación Neuquén Oeste"
        />
        <meta
          property="og:description"
          content="Conoce el Centro de Prácticas Restaurativas y Mediación (CPREM) de Fundación Neuquén Oeste. Facilitamos el diálogo y la resolución pacífica de conflictos comunitarios, vecinales, escolares y familiares."
        />
        <meta property="og:image" content="https://fundacion.tamnora.com/og-mediacion.webp" />
        <meta property="og:image:alt" content="Mediación y Prácticas Restaurativas - CPREM - Fundación Neuquén Oeste" />
        <meta property="og:site_name" content="Fundación Neuquén Oeste" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="es" />
      </Helmet>
      <Hero2 />
      <Logos />
      <CPREM />
      <Videos />
      <Blockquote />
      <Footer />
    </>
  );
}
