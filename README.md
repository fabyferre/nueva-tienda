
# 🛒 Tienda Online de Productos de Mate: **La Ronda Mate**

## ☕ Descripción del Proyecto

Este proyecto es una aplicación web de comercio electrónico (E-commerce) moderna, diseñada para la venta y exhibición de productos relacionados con la cultura del mate, como mates, bombillas y accesorios.

La aplicación cuenta con una interfaz de usuario limpia y responsiva que permite a los clientes navegar por el catálogo de productos (como se ve en la sección **"Nuevos"**, **"Ofertas"** y **"Más vendidos"**), visualizar detalles de los artículos y gestionar su carrito de compras de manera intuitiva.

La arquitectura de la aplicación está construida con **React**, asegurando una experiencia de usuario rápida y dinámica, y utiliza **Firebase** para la gestión de datos persistentes y la autenticación.

![Vista Previa de la App](./public/foto-app.png)

---

## 🛠️ Herramientas Utilizadas (Stack Tecnológico)

El proyecto está desarrollado utilizando las siguientes tecnologías y librerías clave, como se detalla en el archivo `package.json`:

### **Frontend**

- **React 19**: Biblioteca principal para construir la interfaz de usuario.  
- **Vite**: Herramienta de construcción rápida para el desarrollo.  
- **React Router DOM v6**: Para la navegación y enrutamiento dentro de la aplicación.  
- **Bootstrap / React-Bootstrap**: Framework CSS para un diseño responsivo y estilizado.  
- **React-Icons**: Librería de iconos vectoriales.  
- **React Hook Form**: Para la gestión de formularios con validación eficiente.  
- **SweetAlert2**: Para notificaciones y alertas interactivas.

### **Backend / Servicios**

- **Firebase**, utilizado para:
  - Base de datos *(Firestore)*  
  - Autenticación  

---

## 🚀 Comandos para Ejecutar la Aplicación

Para poner en marcha el proyecto en tu entorno local, sigue los pasos a continuación.

### **1. Prerrequisitos**

Asegúrate de tener instalado:

- **Node.js**
- **npm** o **Yarn**

---

### **2. Instalación de Dependencias**

En la carpeta raíz del proyecto, ejecuta:

```bash
npm install
# o si usas Yarn:
# yarn install
````

---

### **3. Ejecutar en Modo Desarrollo**

Inicia el proyecto con recarga en caliente:

```bash
npm run dev
```

La aplicación estará disponible en:


[Visita mi página](https://nueva-tienda-bf91.vercel.app/)


---

### **4. Construir para Producción**

Genera una versión optimizada del proyecto:

```bash
npm run build
```

Esto creará los archivos estáticos optimizados en la carpeta `dist/`.

---

### **5. Previsualizar la Construcción (Opcional)**

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```

---

