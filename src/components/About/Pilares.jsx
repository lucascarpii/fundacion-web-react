export const Pilares = () => {
  return (
    <section className="relative min-h-dvh text-white pt-32 pb-20">
      <div className="w-2/12 aspect-square rounded-full bg-[#d0f502]/40 absolute top-44 right-32 blur-[150px]"></div>
      <div className="w-4/12 aspect-square rounded-full bg-indigo-600 absolute top-[30rem] right-[20rem] blur-[300px]"></div>
      <div className="text-white max-w-screen-xl mx-auto px-6 sm:px-8 xl:px-0  mb-12">
        <h2 className="text-4xl md:text-6xl/tight max-w-lg bg-gradient-to-br from-white from-40% h-fit to-white/40 inline-block text-transparent bg-clip-text">
          Sobre <span className="text-[#d0f500]">Nosotros</span>
        </h2>

      </div>
      
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <img src="/image/acompañar.jpg" alt="" className="h-full w-4/5  object-cover rounded-2xl" />
        </div>

        <div className="flex flex-col gap-6 w-full relative z-20 mt-4">
          <article className="max-w-xl">
            {/* <h3 className="text-white/50 uppercase text-lg font-medium mb-2">Inicios</h3> */}
            <div className="text-white/50 text-xl tracking-wide">
              <p className="mb-6 text-balance">
                <strong className="text-white font-medium">Fundación Neuquén Oeste</strong> nace del compromiso con la transformación social, con el propósito de generar oportunidades reales que impacten de manera positiva en las comunidades. </p>
              <p className="mb-6 text-balance">
                Nuestro camino comenzó con la convicción de que el deporte puede ser una poderosa herramienta de <strong className="text-white font-medium">inclusión, acompañamiento y crecimiento</strong>.
              </p>
              <p className="text-balance">
                A través de actividades deportivas, promovimos desde los inicios valores como el respeto, el trabajo en equipo y la superación personal, generando espacios de contención para niños, niñas y adolescentes del oeste neuquino.
              </p>
            </div>
          </article>
          <article className="max-w-xl">
            {/* <h3 className="text-white/50 uppercase text-lg font-medium mb-2">Misión</h3> */}
            <div className="text-white/50 text-xl tracking-wide">
              <p className="mb-6 text-balance">
                Con el paso del tiempo, fuimos ampliando nuestro accionar, impulsando programas que fortalecen las capacidades individuales y colectivas.
              </p>
              <p className="mb-6 text-balance">
                Hoy, somos una <strong className="text-white font-medium">organización educativa, social y comunitaria</strong> que trabaja de manera articulada con instituciones públicas y privadas, acompañando trayectorias de vida desde una perspectiva integral.
              </p>
            </div>
          </article>
        </div>

      </div>

    </section>
  );
};
