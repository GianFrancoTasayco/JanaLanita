import React from 'react';
import './App.css';

// Importar secciones organizadas
import Header from './sections/Header/Header';
import Banner from './sections/Banner/Banner';
import Content from './sections/Content/Content';
import ImageText from './sections/ImageText/ImageText';
import Footer from './sections/Footer/Footer';

/**
 * Componente principal de la aplicación
 * 
 * Estructura:
 * - Header: Barra de navegación fija
 * - Banner: Sección principal de presentación
 * - Content: Galería de amigurumis
 * - ImageText: Sección informativa con imagen
 * - Footer: Pie de página con contacto
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <ImageText />
      <Footer />
    </div>
  );
}

export default App;