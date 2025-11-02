const productos = [
    {
        id: "01",
        name: "Mate Imperial Calabaza",
        description: "Mate tradicional imperial forrado en cuero con detalles de alpaca. Ideal para un cebado perfecto.",
        stock: 15,
        price: 45000, // Precio base
        // Atributos de precio y descuento
        oldPrice: 55000, // Precio anterior
        discountPercentage: 18, // Porcentaje de descuento (18%)
        finalPrice: 36900, // Precio de contado con 18% OFF (45000 * 0.82)
        installments: "3x $16.500 sin interés (Precio total: $49.500)", // Precio en cuotas (mayor al 'price')
        // Atributos del producto en inglés, pero con valores en español
        material: "Calabaza y Alpaca",
        color: "Marrón Oscuro",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../mate-imperial.webp",
        category: "Mas Vendidos"
    },
    {
        id: "02",
        name: "Termo Acero Inoxidable 1L",
        description: "Termo de acero inoxidable de doble capa, mantiene la temperatura por más de 12 horas.",
        stock: 25,
        price: 32000,
        // Atributos de precio y descuento
        oldPrice: 38000,
        discountPercentage: 15,
        finalPrice: 27200, // Precio de contado con 15% OFF (32000 * 0.85)
        installments: "6x $6.400 sin interés (Precio total: $38.400)",
        // Atributos del producto en inglés, pero con valores en español
        material: "Acero Inoxidable",
        color: "Plateado",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../termo.webp",
        category: "Ofertas"
    },
    {
        id: "03",
        name: "Yerba Mate Orgánica 500g",
        description: "Yerba mate premium, secado natural y sin agroquímicos. Sabor suave y duradero.",
        stock: 40,
        price: 5500,
        // Atributos de precio y descuento
        oldPrice: 6000,
        discountPercentage: 8,
        finalPrice: 5060, // Precio de contado con 8% OFF (5500 * 0.92)
        installments: "No aplica para este producto",
        // Atributos del producto en inglés, pero con valores en español
        material: "Yerba Mate",
        color: "Natural",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../yerba-mate.webp",
        category: "Mas Vendidos"
    },
    {
        id: "04",
        name: "Bombilla Pico de Loro Alpaca",
        description: "Bombilla de alpaca de alta calidad, desarmable para facilitar la limpieza, con filtro preciso.",
        stock: 20,
        price: 18000,
        // Atributos de precio y descuento
        oldPrice: 20000,
        discountPercentage: 10,
        finalPrice: 16200, // Precio de contado con 10% OFF (18000 * 0.90)
        installments: "3x $6.600 sin interés (Precio total: $19.800)",
        // Atributos del producto en inglés, pero con valores en español
        material: "Alpaca",
        color: "plateado",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../bombilla-pico-loro.webp",
        category: "Mas Vendidos"
    },
    {
        id: "05",
        name: "Set Matero Canasta",
        description: "Incluye Mate Algarrobo Termo Bombilla.",
        stock: 12,
        price: 21500,
        // Atributos de precio y descuento
        oldPrice: 25000,
        discountPercentage: 20,
        finalPrice: 17200, // Precio de contado con 20% OFF (21500 * 0.80)
        installments: "6x $4.300 sin interés (Precio total: $25.800)",
        // Atributos del producto en inglés, pero con valores en español
        material: "Madera de Algarrobo ",
        color: "Negro",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../ser-matero.webp",
        category: "Ofertas"
    },
    {
        id: "06",
        name: "Mate de Silicona",
        description: "Mate moderno de silicona, irrompible y fácil de limpiar. Diseño ergonómico.",
        stock: 35,
        price: 8900,
        // Atributos de precio y descuento
        oldPrice: 10500,
        discountPercentage: 15,
        finalPrice: 7565, // Precio de contado con 15% OFF (8900 * 0.85)
        installments: "3x $3.267 sin interés (Precio total: $9.800)",
        // Atributos del producto en inglés, pero con valores en español
        material: "Silicona",
        color: "varios colores",
        // Placeholder: Imagen aleatoria de 300x200
        img: "../mate-silicona.webp",
        category: "Nuevo"
    }
];

export const getProductos = () => {
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                console.log('El error existe')
                reject('Ups, algo salio mal')
            } else {
                console.log('No hay error, se reuelve')
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id)=> {
    return new Promise((resolve) => {
        setTimeout(()=>{
            //harcodeado
            //resolve(productos[0])
            let prod = productos.find((producto)=> producto.id === id)
            resolve(prod)

        }, 2000)
    })
}