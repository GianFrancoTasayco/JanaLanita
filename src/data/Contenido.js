/**
 * Datos de contenido de amigurumis
 * 
 * Contiene la información de los amigurumis disponibles
 * incluyendo títulos, descripciones, fechas, hashtags e imágenes
 */

import { formatearFecha } from '../utils/helpers';

export const contenidoAmigurumis = [
  {
    id: 1,
    title: "Oso Amigurumi Tierno",
    descripcion: "Mi último amigurumi de oso hecho con mucho amor y dedicación. Cada puntada cuenta una historia de ternura y cariño.",
    hashtags: "#amigurumi #oso #teddy #crochet #handmade #love #tierno #cute",
    fecha: "2024-01-15",
    urlImagen: "https://scontent.cdninstagram.com/v/t51.75761-15/500397713_18068410040497336_7868031742058765814_n.webp?stp=dst-webp_p1080x1080&_nc_cat=102&ig_cache_key=MzYzODM5MjYyODE5MTMzNzM0NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTcyOS5zZHIuQzMifQ%3D%3D&_nc_ohc=aRYzsPcMrikQ7kNvwHLbY23&_nc_oc=Adn60HR1w_6ieSXRxDe_Q1RDtQp-XlYd1TvndudrQL6sY8f-P1KPZMRDIGG5c_j9VAPDmlFAU3QgPBaYxV9cCnKm&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eJr-lZrp0X8ljYA2VHIa4w&oh=00_AfcU1R4EWWE3FuQsE_0UH8nfx3uzxeAaW5RhZgxnta0aUg&oe=68F84680"
  },
  {
    id: 2,
    title: "Gatito Juguetón",
    descripcion: "Este gatito amigurumi fue un regalo especial para mi sobrina. Sus ojos brillantes y su cola esponjosa lo hacen irresistible.",
    hashtags: "#amigurumi #gato #cat #crochet #handmade #regalo #cute #jugueton",
    fecha: "2024-01-12",
    urlImagen: "https://scontent.cdninstagram.com/v/t51.75761-15/496865934_18067116443497336_3940788309643148401_n.webp?stp=dst-webp_p1080x1080&_nc_cat=111&ig_cache_key=MzYyOTY5NjQyMDAxMDc3MjM3Mg%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=6-onYw3tKc0Q7kNvwEVVDhb&_nc_oc=Adl2ZRJMcp6eCIk0LvKFcGSwG_dXysN2QuPhTiOL98ZBI4i7pvIeEQpcqZkSxj3is2bafmlRNA_oOafkhm3vGmEq&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eJr-lZrp0X8ljYA2VHIa4w&oh=00_AfdO1N7DBGjpei9b8EtnYT50x7p7sCmuHNFZbeYJvLWy4w&oe=68F84F22"
  },
  {
    id: 3,
    title: "Conejito de Pascua",
    descripcion: "Perfecto para la temporada de Pascua, este conejito amigurumi tiene orejas largas y un corazón grande lleno de amor.",
    hashtags: "#amigurumi #conejo #easter #pascua #crochet #handmade #spring #bunny",
    fecha: "2024-01-10",
    urlImagen: "https://scontent.cdninstagram.com/v/t51.75761-15/495300767_18066651521497336_8431814670812015864_n.webp?_nc_cat=104&ig_cache_key=MzYyNjUxMjMzNzg1NjQ4NDEzMw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=G6q5QMn2HVMQ7kNvwEUC1kA&_nc_oc=AdkQj4n4ykwKOjukpFb3xN-Dxj6_mwlV0I429Rd8jxp2vNQEBWz9vfoa27u1W51XgliPDrW27xu46mlhI2Ra2L7N&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eJr-lZrp0X8ljYA2VHIa4w&oh=00_Afe0OXoIBPrVWVIQRRGUCjmttu5_Wp-UUjlmL2_wrbk5cg&oe=68F85F4E"
  }
];

/**
 * Obtiene todos los amigurumis disponibles
 * @returns {Array} Array de amigurumis
 */
export const obtenerAmigurumis = () => {
  return contenidoAmigurumis;
};

/**
 * Obtiene un amigurumi por su ID
 * @param {number} id - ID del amigurumi
 * @returns {Object|undefined} Amigurumi encontrado o undefined
 */
export const obtenerAmigurumiPorId = (id) => {
  return contenidoAmigurumis.find(amigurumi => amigurumi.id === id);
};

/**
 * Obtiene amigurumis que contengan un hashtag específico
 * @param {string} hashtag - Hashtag a buscar
 * @returns {Array} Array de amigurumis que contienen el hashtag
 */
export const obtenerAmigurumisPorHashtag = (hashtag) => {
  return contenidoAmigurumis.filter(amigurumi => 
    amigurumi.hashtags.toLowerCase().includes(hashtag.toLowerCase())
  );
};

/**
 * Obtiene estadísticas de los amigurumis
 * @returns {Object} Objeto con estadísticas
 */
export const obtenerEstadisticas = () => {
  const total = contenidoAmigurumis.length;
  const hashtags = contenidoAmigurumis.reduce((acc, amigurumi) => {
    const tags = amigurumi.hashtags.split(' ');
    return acc + tags.length;
  }, 0);
  
  return {
    totalAmigurumis: total,
    totalHashtags: hashtags,
    fechaMasReciente: Math.max(...contenidoAmigurumis.map(a => new Date(a.fecha).getTime())),
    fechaMasAntigua: Math.min(...contenidoAmigurumis.map(a => new Date(a.fecha).getTime()))
  };
};

// Re-exportar formatearFecha para compatibilidad
export { formatearFecha };
