import React from 'react';
import './ImageGrid.css';
import useInstagram from '../hooks/useInstagram';

const ImageGrid = () => {
  const { images, profile, loading, error } = useInstagram();

  if (loading) {
    return (
      <section className="image-grid-section">
        <div className="container">
          <h2 className="section-title">Nuestros Amigurumis</h2>
          <p className="section-subtitle">Cargando desde Instagram...</p>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="image-grid-section">
        <div className="container">
          <h2 className="section-title">Nuestros Amigurumis</h2>
          <p className="section-subtitle">Error al cargar las imágenes: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="image-grid-section">
      <div className="container">
        <h2 className="section-title">Nuestros Amigurumis</h2>
        <p className="section-subtitle">
          {profile ? `Desde @${profile.username} - ${profile.biography}` : 'Cada pieza es única y está hecha con amor'}
        </p>
        
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="grid-item">
              <div className="image-container">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="grid-image"
                />
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                  <p className="image-description">{image.description}</p>
                  <div className="instagram-stats">
                    <span className="likes">❤️ {image.likes}</span>
                    <span className="comments">💬 {image.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
