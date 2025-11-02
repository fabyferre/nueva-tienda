const productos = [
    {
        id: "01",
        name: "Mate Imperial Calabaza",
        description: "Mate tradicional imperial forrado en cuero con detalles de alpaca. Ideal para un cebado perfecto.",
        stock: 15,
        price: 45000, 
        oldPrice: 55000, 
        discountPercentage: 18, 
        finalPrice: 36900, 
        installments: "3x $16.500 sin interés (Precio total: $49.500)", 
        material: "Calabaza y Alpaca",
        color: "Marrón Oscuro",
        img: "../mate-imperial.webp",
        category: "Mas Vendidos"
    },
    {
        id: "02",
        name: "Termo Acero Inoxidable 1L",
        description: "Termo de acero inoxidable de doble capa, mantiene la temperatura por más de 12 horas.",
        stock: 25,
        price: 32000,
        oldPrice: 38000,
        discountPercentage: 15,
        finalPrice: 27200, 
        installments: "6x $6.400 sin interés (Precio total: $38.400)",
        material: "Acero Inoxidable",
        color: "Plateado",
        img: "../termo.webp",
        category: "Ofertas"
    },
    {
        id: "03",
        name: "Yerba Mate Orgánica 500g",
        description: "Yerba mate premium, secado natural y sin agroquímicos. Sabor suave y duradero.",
        stock: 40,
        price: 5500,
        
        oldPrice: 6000,
        discountPercentage: 8,
        finalPrice: 5060, 
        installments: "No aplica para este producto",
        material: "Yerba Mate",
        color: "Natural",
        img: "../yerba-mate.webp",
        category: "Mas Vendidos"
    },
    {
        id: "04",
        name: "Bombilla Pico de Loro Alpaca",
        description: "Bombilla de alpaca de alta calidad, desarmable para facilitar la limpieza, con filtro preciso.",
        stock: 20,
        price: 18000,
        oldPrice: 20000,
        discountPercentage: 10,
        finalPrice: 16200,
        installments: "3x $6.600 sin interés (Precio total: $19.800)",
        material: "Alpaca",
        color: "plateado",
        img: "../bombilla-pico-loro.webp",
        category: "Mas Vendidos"
    },
    {
        id: "05",
        name: "Set Matero Canasta",
        description: "Incluye Mate Algarrobo Termo Bombilla.",
        stock: 12,
        price: 21500,
        oldPrice: 25000,
        discountPercentage: 20,
        finalPrice: 17200,
        installments: "6x $4.300 sin interés (Precio total: $25.800)",
        material: "Madera de Algarrobo ",
        color: "Negro",
        img: "../ser-matero.webp",
        category: "Ofertas"
    },
    {
        id: "06",
        name: "Mate de Silicona",
        description: "Mate moderno de silicona, irrompible y fácil de limpiar. Diseño ergonómico.",
        stock: 35,
        price: 8900,
        oldPrice: 10500,
        discountPercentage: 15,
        finalPrice: 7565,
        installments: "3x $3.267 sin interés (Precio total: $9.800)",
        material: "Silicona",
        color: "varios colores",
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