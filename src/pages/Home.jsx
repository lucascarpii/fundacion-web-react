import { Hero } from "../components/Home/Hero";
import { Areas } from "../components/Home/Areas";
import { LatestArticles } from "../components/Home/LatestArticles";
import { PopularArticles } from "../components/Home/PopularArticles";
import { Footer } from "../components/Footer";
import { Banner2 } from "../components/Home/Banner2";
import { useEffect, useState } from "react";
import { MetaData } from "../components/MetaData";
import { RadioPlayer } from "../components/RadioPlayer";
import { runCode } from '../components/hooks/useRunCode'

export function Home() {
  const [radioData, setRadioData] = useState(null)
  const [activeRadio, setActiveRadio] = useState(false)

  useEffect(() => {
    const fetchRadioData = async () => {
      try {
        const data = await runCode('-sl id, active, url, name, title -fr live_radio_stream');

        console.log('Radio Data:', data);
        setRadioData(data);
        setActiveRadio(data[0].active == 1); // Set the first radio as active by default
      } catch (error) {
        console.error('Error fetching radio data:', error);
      }
    };

    fetchRadioData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData
        title="Fundación Neuquén Oeste | Transformamos desde el Servicio, Cultivando Comunidad"
        description="Fundación Neuquén Oeste: Conoce nuestras áreas de trabajo en Comunicación, Deporte, Educación (Instituto Superior y Colegio), Comunidad y Mediación. Transformamos desde el servicio, cultivando comunidad en Neuquén."
        image="https://fundacionnqnoeste.com/image/og-fundacion-principal.webp"
        url="https://fundacionnqnoeste.com/"
      />

      <Hero />

        <div className="py-6 -mt-20 z-40">
          <div className="w-full max-w-screen-xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center gap-4 lg:gap-1 lg:flex-row">
            {activeRadio && radioData && (
              <RadioPlayer
                url={radioData.find(radio => radio.active).url}
                name={radioData.find(radio => radio.active).name}
                title={radioData.find(radio => radio.active).title}
              />
            )}

            <Banner2 />
          </div>
        </div>

      <div id="areas" className="relative mt-8">
        <Areas />
      </div>
      <PopularArticles />
      <LatestArticles />
      <div className="bg-isei-footer relative overflow-hidden">
        <div className="w-80 lg:w-4/12 aspect-square rounded-full bg-[#3753b0] absolute lg:-top-[30rem] lg:left-[12rem] blur-[150px] lg:blur-[250px]">
        </div>
        <Footer />
      </div>
    </>
  );
} 