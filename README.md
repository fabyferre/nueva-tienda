Tienda Online de Productos de Mate: La Ronda Mate

☕ Descripción del Proyecto

Este proyecto es una aplicación web de comercio electrónico (E-commerce) moderna, diseñada para la venta y exhibición de productos relacionados con la cultura del mate, como mates, bombillas y accesorios.

La aplicación cuenta con una interfaz de usuario limpia y responsiva que permite a los clientes navegar por el catálogo de productos (como se ve en la sección "Nuevos", "Ofertas" y "Más vendidos"), visualizar detalles de los artículos, y gestionar su carrito de compras de manera intuitiva.

La arquitectura de la aplicación está construida con React, asegurando una experiencia de usuario rápida y dinámica, y utiliza Firebase para la gestión de datos persistentes y la autenticación.

![Vista Previa de la Aplicación](foto app.jpg)

🛠️ Herramientas Utilizadas (Stack Tecnológico)

El proyecto está desarrollado utilizando las siguientes tecnologías y librerías clave, como se detalla en el archivo package.json:

Frontend

React 19: La biblioteca principal para construir la interfaz de usuario.

Vite: Herramienta de construcción rápida para el desarrollo.

React Router DOM v6: Para la navegación y el enrutamiento dentro de la aplicación.

Bootstrap / React-Bootstrap: Framework de CSS y componentes para un diseño responsivo y estilizado.

React-Icons: Librería de iconos vectoriales para mejorar la interfaz.

React Hook Form: Para la gestión de formularios con validación eficiente.

SweetAlert2: Para notificaciones y alertas interactivas y estéticas.

Backend/Servicios

Firebase: Utilizado como backend-as-a-service (BaaS) para:

Base de datos (probablemente Firestore).

Autenticación.

🚀 Comandos para Ejecutar la Aplicación

Para poner en marcha el proyecto en tu entorno local, sigue los siguientes pasos.

1. Prerrequisitos

Asegúrate de tener instalado Node.js y npm (Node Package Manager) o Yarn.

2. Instalación de Dependencias

Abre la terminal en la carpeta raíz del proyecto y ejecuta el siguiente comando:

npm install
# o si usas yarn
# yarn install


3. Ejecutar en Modo Desarrollo

Para iniciar la aplicación en modo desarrollo con recarga en caliente (Hot Module Replacement), utiliza el comando dev:

npm run dev


La aplicación estará disponible en http://localhost:5173 (o el puerto que indique Vite).

4. Construir para Producción

Para generar una versión optimizada y lista para desplegar de la aplicación, utiliza el comando build:

npm run build


Esto creará los archivos estáticos optimizados en el directorio dist/.

5. Previsualizar la Construcción (Opcional)

Puedes previsualizar los archivos de producción localmente con el comando preview:

npm run preview
