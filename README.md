# AndinoChain - Prototipo de Andino Wallet

## Descripción
Sitio web dinámico para presentar Andino Wallet, una solución de Identidad Digital Autosoberana para el andinismo chileno. Este prototipo demuestra cómo la tecnología blockchain puede revolucionar la certificación de logros montañeros.

## Características Principales

### 🎨 Diseño Dinámico
- **Animaciones progresivas**: El contenido aparece gradualmente mientras el usuario hace scroll
- **Efectos interactivos**: Hover effects, ripple effects en botones, y transiciones suaves
- **Responsive design**: Optimizado para dispositivos móviles y desktop
- **Imágenes reales**: Utiliza las imágenes proporcionadas en lugar de SVGs

### 🚀 Funcionalidades Interactivas
- **Botón "Ver Demo"**: Enlaza directamente al video de YouTube del demo
- **Botón "Explorar Proyecto"**: Navegación suave a la sección de visión
- **Botón "Ver Logbook"**: Modal para mostrar el PDF del logbook de testing
- **Navegación suave**: Scroll automático entre secciones

### 📱 Secciones del Sitio
1. **Hero Section**: Presentación principal con imagen de montañas
2. **Visión**: Información sobre Web3 Chile y la alianza con la Federación
3. **Solución**: Características técnicas de AndinoChain
4. **Wallet**: Detalles sobre Andino Wallet y identidad soberana
5. **Beneficios**: Ventajas inmediatas y ecosistema futuro
6. **Testing**: Evidencia del logbook de testing
7. **Proceso**: Cómo funciona de la cumbre a la certificación
8. **Comunidad**: Información sobre la comunidad andinista chilena
9. **Call to Action**: Invitación a unirse a la revolución

## Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Estructura de Archivos
```
src/
├── main.ts          # Archivo principal con el HTML
├── style.css        # Estilos CSS con animaciones
├── app.js           # JavaScript para interacciones dinámicas
└── ...

public/
├── 2.png           # Imagen hero
├── 3.png           # Imagen visión
├── 4.png           # Imagen wallet
├── 5.png           # Imagen comunidad
├── 6.png           # Imagen proceso
├── logos/           # Logos de AndinoChain
└── logbook-testing.pdf  # PDF del logbook (añadir manualmente)
```

## Personalización

### Añadir el PDF del Logbook
1. Coloca tu archivo PDF en la carpeta `public/`
2. Renómbralo como `logbook-testing.pdf`
3. El botón "Ver Logbook Completo" lo mostrará automáticamente

### Modificar Contenido
- **Texto**: Edita directamente en `src/main.ts`
- **Estilos**: Modifica `src/style.css`
- **Interacciones**: Ajusta `src/app.js`

### Cambiar Imágenes
- Reemplaza las imágenes en la carpeta `public/`
- Mantén los mismos nombres de archivo para que funcionen automáticamente

## Tecnologías Utilizadas
- **Vite**: Build tool y servidor de desarrollo
- **Tailwind CSS**: Framework de CSS utilitario
- **TypeScript**: Tipado estático para JavaScript
- **Vanilla JavaScript**: Sin frameworks adicionales para máxima flexibilidad

## Características Técnicas

### Animaciones CSS
- `slideInFromLeft/Right/Bottom`: Aparición desde diferentes direcciones
- `fadeInScale`: Efecto de escala con fade
- `typewriter`: Efecto de máquina de escribir
- `stagger`: Retrasos escalonados para múltiples elementos

### JavaScript Interactivo
- **Intersection Observer**: Detecta cuando elementos entran en viewport
- **Smooth Scrolling**: Navegación suave entre secciones
- **Ripple Effects**: Efectos de ondas en botones
- **Modal System**: Sistema de ventanas emergentes

## Enlaces Importantes
- **Demo en YouTube**: https://youtu.be/eOGxZ8nWW3w
- **Logbook de Testing**: Se muestra en modal cuando se añade el PDF

## Notas de Desarrollo
- El sitio está optimizado para presentaciones
- Todas las animaciones son CSS puro para mejor rendimiento
- El código está estructurado para fácil mantenimiento
- Responsive design garantiza buena experiencia en todos los dispositivos

## Próximos Pasos Sugeridos
1. Añadir el PDF del logbook de testing
2. Personalizar colores y tipografías según marca
3. Añadir más interacciones específicas del dominio
4. Implementar analytics para tracking de engagement
5. Optimizar imágenes para web (WebP, lazy loading)

---

**Desarrollado para Web3 Chile & Federación de Andinismo de Chile**
*Prototipo de Andino Wallet - Solución de Identidad Digital Autosoberana*
