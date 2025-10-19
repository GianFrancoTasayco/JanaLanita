import React from 'react';
import './Content.css';
import { obtenerAmigurumis, formatearFecha } from '../../data/Contenido';

/**
 * Componente Content - Sección principal de contenido
 * 
 * Funcionalidades:
 * - Muestra la colección de amigurumis
 * - Grid responsive de tarjetas
 * - Información de contacto
 * - Diseño centrado y limpio
 */
const Content = () => {
  const amigurumis = obtenerAmigurumis();

  return (
    <div className="content-section">
      {/* Header de la sección */}
      <div className="content-header">
        <h2>Nuestros Amigurumis</h2>
        <p>Cada amigurumi es único y está hecho con mucho amor</p>
      </div>

      {/* Grid de amigurumis */}
      <div className="amigurumis-grid">
        {amigurumis.map((amigurumi) => (
          <div key={amigurumi.id} className="amigurumi-card">
            {/* Contenedor de imagen */}
            <div className="image-container">
              <img 
                src={amigurumi.urlImagen} 
                alt={amigurumi.title}
                className="amigurumi-image"
              />
              <div className="image-overlay">
                <h3>{amigurumi.title}</h3>
              </div>
            </div>
            
            {/* Contenido de la tarjeta */}
            <div className="card-content">
              <div className="card-header">
                <h4>{amigurumi.title}</h4>
                <span className="fecha">📅 {formatearFecha(amigurumi.fecha)}</span>
              </div>
              
              <p className="descripcion">{amigurumi.descripcion}</p>
              
              <div className="hashtags">
                {amigurumi.hashtags.split(' ').map((hashtag, index) => (
                  <span key={index} className="hashtag">
                    {hashtag.startsWith('#') ? hashtag : `#${hashtag}`}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer de contacto */}
      <div className="content-footer">
        <p>¿Te gustan nuestros amigurumis? ¡Contáctanos para encargos personalizados!</p>
        <div className="contacto-info">
          <span>📱 WhatsApp: +34 123 456 789</span>
          <span>📧 Email: info@amigurumis.com</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
