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
    // NECESERES
    /* neceser-01 */ {   
        id: 9,
        nombre: "Neceser - 'Kubo'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/neceseres/neceser-cuero.jpg",
        img2: "/neceseres/neceser-cuero-2.jpg",
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
    /* neceser-02 */ {   
        id: 10,
        nombre: "Neceser - 'Gajos'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/neceseres/neceser-gajos.jpg",
        img2: "/neceseres/neceser-gajos-2.jpg",
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
    /* neceser-03 */ {   
        id: 11,
        nombre: "Neceser - 'Metal'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/neceseres/neceser-metal.jpg",
        img2: "/neceseres/neceser-metal-2.jpg",
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
    /* neceser-04 */ {   
        id: 12,
        nombre: "Neceser - 'Zr'",
        descripcion: "Casaca de un besito de R9 a la caprichosa, su mejor amiga.",
        img: "/neceseres/neceser-zr.jpg",
        img2: "/neceseres/neceser-zr-2.jpg",
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
        img: "/bolsos/botinero-gajos.jpg",
        img2: "/bolsos/botinero-gajos-2.jpg",
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
        img: "/bolsos/botinero-line.jpg",
        img2: "/bolsos/botinero-line-2.jpg",
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
        img2: "/bolsos/mochila-line-2.jpg",
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
        img: "/bolsos/matera-gajos.jpg",
        img2: "/bolsos/matera-gajos-2.jpg",
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