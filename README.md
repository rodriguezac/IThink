# I Think Blog



_I Think_ es una plataforma para compartir ideas y pensamientos en un espacio seguro y respetuoso. Con una estética vintage y colorida, el proyecto fue creado utilizando ReactJS y Tailwind CSS. Es un blog donde los usuarios pueden escribir sus pensamientos en temas como Comida, Arte, Música y Tecnología.

## Tecnologías y Dependencias

Este proyecto utiliza las siguientes tecnologías y dependencias:

- **ReactJS**: Librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para un diseño eficiente y personalizado.
- **React Router DOM**: Para la navegación entre páginas en la aplicación.
- **Lucide React**: Iconos personalizables para React.
- **@tailwindcss/vite**: Integración de Tailwind CSS con Vite.

Dependencias:
```json
"dependencies": {
  "@tailwindcss/vite": "^4.0.9",
  "lucide-react": "^0.477.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.2.0",
  "tailwindcss": "^4.0.9"
}
```
## Cómo correr el proyecto
Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio:
   ```bash
   git clone <URL del repositorio>
   ```
3. Instala las dependencias: Asegúrate de tener Node.js instalado y luego ejecuta el siguiente comando en la raíz del proyecto:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo: Para arrancar la aplicación en modo de desarrollo, ejecuta:
npm run dev
   ```bash
   npm run dev
   ```
La aplicación debería estar disponible en http://localhost:3000 o en el puerto que Vite configure.

## Funcionalidades implementadas
- **Página principal:** Muestra un feed con los blogs escritos por los usuarios.

- **Navegación fluida:** Utiliza React Router para la navegación entre las secciones -principales, como 'Blogs' y 'Sobre Nosotros'.

- **Sistema de temas:** Los temas principales (Comida, Arte, Música, Tecnología) están representados como botones con iconos.

- **Interactividad con botones:** Los botones se agrandan al hacer hover para mejorar la experiencia del usuario.

- **Responsive Design:** La aplicación es completamente responsiva y está optimizada para dispositivos móviles y escritorios.

- **Animaciones:** Transiciones suaves en los elementos clave como el menú de navegación.

## Decisiones técnicas
- **ReactJS:** Se eligió ReactJS para construir la interfaz por su flexibilidad y su capacidad de crear interfaces de usuario interactivas y escalables.

- **Tailwind CSS:** Tailwind CSS fue seleccionado para estilizar rápidamente el proyecto sin escribir un CSS largo y repetitivo, permitiendo una gran personalización.

- **React Router DOM:** Usado para manejar la navegación entre las diferentes páginas de la aplicación de forma sencilla y eficiente.

- **Lucide React:** Los iconos personalizados de Lucide React se implementaron para mejorar la estética y funcionalidad del diseño.

## Contribuir
Si deseas contribuir a este proyecto, por favor abre un pull request con tus mejoras o soluciones a problemas. ¡Cualquier ayuda es bienvenida!

***¡Gracias por visitar el proyecto I Think! Espero que disfrutes compartiendo tus pensamientos aquí.***
