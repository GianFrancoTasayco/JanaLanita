/**
 * Funciones auxiliares y helpers
 * 
 * Contiene funciones de utilidad utilizadas en toda la aplicación
 */

/**
 * Formatea una fecha al formato DD/MM/YY
 * @param {string|Date} fecha - Fecha a formatear
 * @returns {string} Fecha formateada
 */
export const formatearFecha = (fecha) => {
  const date = new Date(fecha);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

/**
 * Abre WhatsApp con un mensaje predefinido
 * @param {string} phoneNumber - Número de teléfono
 * @param {string} message - Mensaje a enviar
 */
export const openWhatsApp = (phoneNumber, message) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Genera un ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Valida si es un dispositivo móvil
 * @returns {boolean} True si es móvil
 */
export const isMobile = () => {
  return window.innerWidth <= 768;
};

/**
 * Debounce function para optimizar eventos
 * @param {Function} func - Función a ejecutar
 * @param {number} wait - Tiempo de espera en ms
 * @returns {Function} Función con debounce
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
