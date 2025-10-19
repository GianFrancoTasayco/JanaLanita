import React from 'react';
import './ImageText.css';
import conejitos from '../../Imagenes/conejitos.jpg';

/**
 * Componente ImageText - Sección de imagen con texto
 * 
 * Funcionalidades:
 * - Imagen principal con efecto hover
 * - Texto descriptivo sobre la empresa
 * - Características destacadas
 * - Diseño responsive (grid en desktop, columna en mobile)
 */
const ImageText = () => {
  return (
    <div className="image-text-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Imagen principal */}
          <div className="image-side">
            <img 
              src={conejitos} 
              alt="Amigurumis artesanales"
              className="main-image"
            />
          </div>
          
          {/* Contenido de texto */}
          <div className="text-side">
            <h2 className="text-title">El Arte del Amigurumi</h2>
            <p className="text-description">
              Cada amigurumi que creamos es una expresión única de creatividad y dedicación. 
              Utilizamos técnicas tradicionales de crochet combinadas con diseños modernos 
              para crear piezas únicas que llenan de alegría cada hogar.
            </p>
            
            {/* Características destacadas */}
            <div className="features">
              <div className="feature">
                <div className="feature-icon">🧶</div>
                <span className="feature-text">Hecho a mano con amor</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✨</div>
                <span className="feature-text">Diseños únicos</span>
              </div>
              <div className="feature">
                <div className="feature-icon">🎁</div>
                <span className="feature-text">Regalos perfectos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
