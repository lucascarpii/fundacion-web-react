// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Colegio } from './pages/Colegio.jsx';
import { Comunicacion } from './pages/Comunicacion.jsx';
import { Comunidad } from './pages/Comunidad.jsx';
import { Deporte } from './pages/Deporte.jsx';
import { Hidroponia } from './pages/Hidroponia.jsx';
import { Isei } from './pages/Isei.jsx';
import { Mediacion } from './pages/Mediacion.jsx';
import { SobreNosotros } from './pages/SobreNosotros.jsx';
import { Noticia } from './pages/Noticia.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Header } from './components/Header.jsx';
import { ErrorBoundary } from './components/ErrorBoundary.jsx';


function AppContent() {
  const location = useLocation();
  const isDarkTheme = location.pathname === '/';

  return (
    <>
      <Header theme={isDarkTheme ? "dark" : "light"} />
      <ErrorBoundary resetKey={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunicacion" element={<Comunicacion />} />
          <Route path="/colegio" element={<Colegio />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/deporte" element={<Deporte />} />
          <Route path="/hidroponia" element={<Hidroponia />} />
          <Route path="/isei" element={<Isei />} />
          <Route path="/mediacion" element={<Mediacion />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/noticias/:id" element={<Noticia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
