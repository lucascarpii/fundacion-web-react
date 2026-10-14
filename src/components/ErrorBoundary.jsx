import { Component } from 'react';

// Evita que un error de render deje la página en blanco.
export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error de render:', error, info.componentStack);
  }

  componentDidUpdate(prevProps) {
    // Al cambiar de ruta se vuelve a intentar.
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="max-w-screen-xl mx-auto px-6 pt-[180px] pb-32 flex flex-col items-center text-center gap-6">
          <h1 className="text-3xl md:text-5xl font-light text-title-black">Algo salió mal</h1>
          <p className="text-lg text-gray-600 max-w-xl">
            No pudimos mostrar esta sección. Probá recargar la página en unos minutos.
          </p>
          <a href="/" className="border-2 border-isei-blue text-isei-blue hover:bg-isei-blue hover:text-white transition-colors duration-200 uppercase text-xs font-semibold tracking-widest px-5 pt-3 pb-2.5">
            Volver al inicio
          </a>
        </section>
      );
    }
    return this.props.children;
  }
}
