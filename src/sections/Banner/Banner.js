import React from 'react';
import './Banner.css';

/**
 * Componente Banner - Sección principal de presentación
 * 
 * Funcionalidades:
 * - Título principal con animación
 * - Descripción de la empresa
 * - Características destacadas en botones
 * - Diseño responsive
 * - Animaciones de entrada (fadeInUp)
 */
const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner-content">
        {/* Título principal */}
        <h1>🧶 Amigurumis Hechos con Amor</h1>
        
        {/* Descripción */}
        <p>Descubre nuestra colección única de amigurumis artesanales</p>
        
        {/* Características destacadas */}
        <div className="banner-features">
          <span>✨ 100% Hecho a mano</span>
          <span>💝 Regalos perfectos</span>
          <span>🎨 Diseños únicos</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
