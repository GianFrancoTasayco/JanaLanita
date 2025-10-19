import React from 'react';
import './Footer.css';

/**
 * Componente Footer - Pie de página del sitio
 * 
 * Funcionalidades:
 * - Información de la empresa
 * - Datos de contacto
 * - Enlaces a redes sociales
 * - Copyright
 * - Diseño responsive
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sección principal de información */}
          <div className="footer-section">
            <h3 className="footer-title">Amigurumis</h3>
            <p className="footer-description">
              Creando sonrisas a través del arte del crochet. 
              Cada amigurumi es una pequeña obra de arte llena de amor.
            </p>
          </div>
          
          {/* Sección de contacto */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="contact-info">
              <p>📧 info@amigurumis.com</p>
              <p>📱 +34 123 456 789</p>
              <p>📍 Madrid, España</p>
            </div>
          </div>
          
          {/* Sección de redes sociales */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sección de copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2024 Amigurumis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
