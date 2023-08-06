let stockProducts = [
    // REMERAS
    /* remera-01 */ {   
        id: 1,
        nombre: "Remera - 'Fenómeno'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/remeras/remera-ronaldo.jpg",
        img2: "/remeras/remera-ronaldo-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Remeras",
        precio: 7500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* remera-02 */ {   
        id: 2,
        nombre: "Remera - 'Diego 82'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/remeras/remera-diego82.jpg",
        img2: "/remeras/remera-diego82-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Remeras",
        precio: 7500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* remera-03 */ {   
        id: 3,
        nombre: "Remera - 'Messi'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/remeras/remera-messias.jpg",
        img2: "/remeras/remera-messias-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Remeras",
        precio: 7500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* remera-04 */ {   
        id: 4,
        nombre: "Remera - 'Johan'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/remeras/remera-johan.jpg",
        img2: "/remeras/remera-johan-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Remeras",
        precio: 7500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    // GORRAS
    /* gorra-01 */ {   
        id: 5,
        nombre: "Gorra - 'Gris'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/gorras/mod1.png",
        img2: "/gorras/mod1.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Gorras",
        precio: 4000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* gorra-02 */ {   
        id: 6,
        nombre: "Gorra - 'Negra'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/gorras/mod4.png",
        img2: "/gorras/mod4.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Gorras",
        precio: 4000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* gorra-03 */ {   
        id: 7,
        nombre: "Gorra - 'Camionero'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/gorras/mod5.png",
        img2: "/gorras/mod5.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Gorras",
        precio: 4000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* gorra-04 */ {   
        id: 8,
        nombre: "Gorra - 'Negra Lisa'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/gorras/mod7.png",
        img2: "/gorras/mod7.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Gorras",
        precio: 4000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    // BILLETERAS
    /* billetera-01 */ {   
        id: 9,
        nombre: "Billetera - 'Cuero'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/billeteras/1.png",
        img2: "/billeteras/1.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Neceseres",
        precio: 8000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* billetera-02 */ {   
        id: 9,
        nombre: "Billetera - 'Black'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/billeteras/2.png",
        img2: "/billeteras/2.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Neceseres",
        precio: 8000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* billetera-03 */ {   
        id: 9,
        nombre: "Billetera - 'Inca'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/billeteras/5.png",
        img2: "/billeteras/5.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Neceseres",
        precio: 8000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* billetera-04 */ {   
        id: 9,
        nombre: "Billetera - 'Perú'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/billeteras/6.png",
        img2: "/billeteras/6.png",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Neceseres",
        precio: 8000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    // BOLSOS
    /* bolso-01 */ {   
        id: 13,
        nombre: "Botinero - 'Gajos'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/bolsos/mochila1-line.jpg",
        img2: "/bolsos/mochila1-line-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Bolsos",
        precio: 10000,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* bolso-02 */ {   
        id: 14,
        nombre: "Botinero - 'Line'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/bolsos/mochila3-line.jpg",
        img2: "/bolsos/mochila3-line-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Bolsos",
        precio: 9500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* bolso-03 */ {   
        id: 15,
        nombre: "Mochila - 'Gajos'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/bolsos/mochila-line.jpg",
        img2: "/bolsos/mochila-line2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Bolsos",
        precio: 11500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
    /* bolso-04 */ {   
        id: 16,
        nombre: "Matera - 'Gajos'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/bolsos/mochila4-line.jpg",
        img2: "/bolsos/mochila4-line-2.jpg",
        talles: {
            xl: true,
            l: true,
            m: true,
            s: true,
        },
        colores: {
            gris: true,
            blanco: false,
            celeste: false,
            negro: false,
            rojo: false,
            azul: false
        },
        categoria: "Bolsos",
        precio: 10500,
        oferta: false,
        destacado: true,
        cantidad: 1
    },
]

const divideProductsInParts = (size) => {
	let productsList = [];
	for (let i = 0; i < stockProducts.length; i += size) {
		productsList.push(stockProducts.slice(i, i + size));
	}
	return productsList;
};

const appState = {
	products: divideProductsInParts(8),
	currentProductsIndex: 0,
	productsLimit: divideProductsInParts(8).length,
	activeFilter: null,
};