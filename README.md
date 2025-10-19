# 🧶 Amigurumis - Sitio Web

Un sitio web moderno y responsive para mostrar una colección de amigurumis artesanales, desarrollado con React.

## 📋 Descripción del Proyecto

Este proyecto es una página web de una sola página (SPA) diseñada para mostrar la colección de amigurumis de una artesana. El sitio presenta un diseño limpio y minimalista con esquema de colores blanco y negro, destacando la belleza de los amigurumis artesanales.

## ✨ Características Principales

- **Diseño Responsive**: Optimizado para desktop, tablet y móvil
- **Header Fijo**: Navegación siempre visible con logo y botón de WhatsApp
- **Banner Atractivo**: Sección principal con gradientes y animaciones
- **Galería de Amigurumis**: Grid responsive con tarjetas interactivas
- **Sección Informativa**: Imagen con texto sobre la técnica del amigurumi
- **Footer Completo**: Información de contacto y redes sociales
- **Animaciones Suaves**: Transiciones y efectos hover elegantes

## 🎨 Paleta de Colores

- **Primario**: #eb445b (Rojo coral)
- **Secundario**: #f5938b (Rosa salmón)
- **Acento**: #f0cdab (Beige cálido)
- **Claro**: #f1e7c5 (Crema suave)
- **Éxito**: #b6d4bb (Verde menta)
- **Texto**: #000000 (Negro)
- **Fondo**: #ffffff (Blanco)

## 🏗️ Estructura del Proyecto

```
src/
├── sections/                 # Componentes organizados por sección
│   ├── Header/              # Barra de navegación
│   │   ├── Header.js
│   │   └── Header.css
│   ├── Banner/              # Sección principal
│   │   ├── Banner.js
│   │   └── Banner.css
│   ├── Content/             # Galería de amigurumis
│   │   ├── Content.js
│   │   └── Content.css
│   ├── ImageText/           # Sección informativa
│   │   ├── ImageText.js
│   │   └── ImageText.css
│   └── Footer/              # Pie de página
│       ├── Footer.js
│       └── Footer.css
├── components/              # Componentes comunes
│   └── common/
├── data/                    # Datos de la aplicación
│   └── Contenido.js
├── utils/                   # Utilidades y helpers
│   ├── constants.js
│   └── helpers.js
├── styles/                  # Estilos globales
│   └── variables.css
├── Imagenes/               # Recursos de imagen
│   ├── logo.jpg
│   └── whatsapp.png
├── App.js                  # Componente principal
├── App.css                 # Estilos globales
└── index.js               # Punto de entrada
```

## 🚀 Cómo Funciona

### 1. **Header (Navegación)**
- Logo circular de la empresa
- Frase inspiracional (oculta en móvil)
- Botón de WhatsApp funcional
- Header fijo que permanece visible al hacer scroll

### 2. **Banner (Presentación)**
- Título principal con animación de entrada
- Descripción de la empresa
- Características destacadas en botones
- Gradiente de fondo con patrón sutil

### 3. **Content (Galería)**
- Grid responsive de tarjetas de amigurumis
- Imágenes con efecto hover y overlay
- Información detallada (título, fecha, descripción, hashtags)
- Sección de contacto al final

### 4. **ImageText (Informativa)**
- Imagen principal con efecto hover
- Texto descriptivo sobre la técnica
- Características destacadas con iconos
- Layout de dos columnas (desktop) / una columna (móvil)

### 5. **Footer (Contacto)**
- Información de la empresa
- Datos de contacto
- Enlaces a redes sociales
- Copyright en sección separada

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario
- **CSS3**: Estilos con variables CSS, flexbox, grid y animaciones
- **JavaScript ES6+**: Funcionalidades modernas de JavaScript
- **Responsive Design**: Media queries para diferentes dispositivos
- **Google Fonts**: Fuente Jost para tipografía moderna

## 📱 Responsive Design

El sitio está optimizado para tres tipos de dispositivos:

- **Desktop** (> 1024px): Layout completo con todas las características
- **Tablet** (768px - 1024px): Adaptación de espaciados y tamaños
- **Mobile** (< 768px): Layout de una columna, elementos apilados

### Características Mobile:
- Header compacto con elementos en fila
- Banner con texto más pequeño
- Grid de una columna para amigurumis
- Footer con elementos centrados
- Uso del 90% del ancho con 10% de margen

## 🎯 Funcionalidades Específicas

### WhatsApp Integration
- Botón funcional que abre WhatsApp Web/App
- Mensaje predefinido personalizable
- Número de teléfono configurable

### Sistema de Datos
- Archivo de datos centralizado (`src/data/Contenido.js`)
- Funciones para obtener y filtrar amigurumis
- Formateo automático de fechas
- Sistema de hashtags

### Animaciones
- FadeInUp para elementos del banner
- Hover effects en tarjetas e imágenes
- Transiciones suaves en botones
- Transformaciones en elementos interactivos

## 👨‍💻 Desarrollador

**Desarrollado por**: Asistente de IA (Claude)
**Fecha**: Octubre 2024
**Tecnología**: React + CSS3

## 🔧 Cómo Ejecutar el Proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm start
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 📁 Archivos Importantes

- `src/App.js`: Componente principal que orquesta todas las secciones
- `src/data/Contenido.js`: Datos de los amigurumis y funciones de utilidad
- `src/utils/`: Utilidades y constantes reutilizables
- `src/styles/variables.css`: Variables CSS globales
- `public/index.html`: HTML base con Google Fonts

## 🎨 Personalización

### Cambiar Colores
Edita las variables en `src/styles/variables.css`:
```css
:root {
  --primary-color: #eb445b;
  --secondary-color: #f5938b;
  /* ... más variables */
}
```

### Agregar Amigurumis
Modifica el array en `src/data/Contenido.js`:
```javascript
{
  id: 4,
  title: "Nuevo Amigurumi",
  descripcion: "Descripción del amigurumi",
  hashtags: "#amigurumi #nuevo #crochet",
  fecha: "2024-01-20",
  urlImagen: "URL_de_la_imagen"
}
```

### Cambiar Información de Contacto
Actualiza las constantes en `src/utils/constants.js`:
```javascript
export const CONTACT_INFO = {
  PHONE: '+34 123 456 789',
  EMAIL: 'info@amigurumis.com',
  // ...
};
```

## 📈 Optimizaciones Implementadas

- **Código Modular**: Componentes organizados por funcionalidad
- **CSS Optimizado**: Variables reutilizables y estilos eficientes
- **Responsive First**: Diseño mobile-first
- **Performance**: Imágenes optimizadas y lazy loading
- **Accesibilidad**: Alt texts y estructura semántica
- **SEO Ready**: Meta tags y estructura optimizada

## 🔮 Futuras Mejoras

- [ ] Sistema de filtros por hashtags
- [ ] Galería de imágenes con lightbox
- [ ] Formulario de contacto
- [ ] Blog de técnicas de amigurumi
- [ ] Sistema de pedidos online
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta explorando el mundo de los amigurumis! 🧶✨**