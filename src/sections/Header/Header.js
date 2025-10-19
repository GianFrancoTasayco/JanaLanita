import React from 'react';
import './Header.css';
import logoImage from '../../Imagenes/logo.jpg';
import whatsappImage from '../../Imagenes/whatsapp.png';

/**
 * Componente Header - Barra de navegación superior fija
 * 
 * Funcionalidades:
 * - Logo de la empresa (imagen circular)
 * - Frase inspiracional
 * - Botón de WhatsApp con funcionalidad de contacto
 * - Diseño responsive para mobile y desktop
 * - Header fijo que permanece visible al hacer scroll
 */
const Header = () => {
  /**
   * Maneja el clic del botón de WhatsApp
   * Abre WhatsApp Web/App con mensaje predefinido
   */
  const handleWhatsAppClick = () => {
    const phoneNumber = '+34123456789'; // Número de teléfono de contacto
    const message = '¡Hola! Me interesa conocer más sobre tus amigurumis 🧶';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Sección del logo */}
          <div className="logo-section">
            <div className="logo">
              <img src={logoImage} alt="Logo Amigurumis" className="logo-image" />
            </div>
          </div>
          
          {/* Sección derecha con frase y botón WhatsApp */}
          <div className="header-right">
            {/* Frase inspiracional (oculta en mobile) */}
            <div className="header-quote">
              <p className="quote-text">
                "Cada puntada es un abrazo, cada amigurumi es una sonrisa"
              </p>
            </div>
            
            {/* Botón de WhatsApp */}
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <img src={whatsappImage} alt="WhatsApp" className="whatsapp-icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
