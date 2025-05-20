export function History() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="w-full -mt-10 lg:-mt-60 absolute h-full opacity-20 text-base-400/70 [mask-image:radial-gradient(50rem_80rem_at_top,white,transparent)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="200" id="grid-pattern" patternUnits="userSpaceOnUse" width="200">
              <path d="M 200 0 L 0 0 0 200" stroke="currentColor" fill="none" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>

      <div className=" max-w-screen-xl mx-auto">
        <div className=" lg:col-start-1 lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">

          {/* <h1 className="mt-2 col-span-2 mb-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Compromiso y Trayectoria
          </h1> */}
          <div className="lg:max-w-lg text-lg/7 text-gray-700">
            <strong className="">¿Por qué nuestra institución es una zona restaurativa?
            </strong>
            <p className="mt-4 text-balance">
              En cada área de <strong>Fundación Neuquén Oeste</strong> contamos con un protocolo concreto de acción para la gestión y prevención de conflictos orientado a una convivencia pacífica en el que todas las partes podemos desempeñarnos como <strong>agentes de restauración</strong>.
            </p>
            <p className="mt-2 text-balance">
              Trabajamos en la capacitación e implementación de las herramientas que ofrecen las <strong>Prácticas Restaurativas</strong> con el fin de sembrar una cultura nutritiva en los vínculos que se gestan dentro de nuestra comunidad.
            </p>
          </div>

          <div className="max-w-xl text-lg/7 text-gray-700 mt-auto">
            <strong className="text-2xl">Nuestro sueño</strong>
            <p className="mt-4">
              Anhelamos que las Prácticas Restaurativas lleguen a cada organismo de la sociedad civil.
            </p>
            <p className="mt-6">
              Nos gustaría ser una referencia del impacto positivo que esta metodología tiene a la hora de promover una <strong>cultura proactiva</strong> donde la prevención y gestión saludable de los conflictos son el resultado de dinámicas vinculares empáticas, participativas y colaborativas.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
