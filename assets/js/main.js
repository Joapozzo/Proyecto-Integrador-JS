// Productos
const productsOustandingContainer = document.querySelector(".products-container")
const productsOfferContainer = document.querySelector("#products-container-offers");
const splideList = document.querySelector(".splide__list")
const btnBuy = document.querySelector(".button-buy")
let productsBuy = ""

const listElements = document.querySelectorAll('.list__button--click');
const iconMenu = document.querySelector('.menu-icon')
const navbarR = document.querySelector('.nav')
const iconClose = document.querySelector('.icon-close')
const iconCart = document.querySelector('.navbar-icons')
const cartClose = document.querySelector('.cart-close')
const overlay = document.querySelector('.overlay')
const navbar = document.querySelector(".navbar")
const img = document.querySelector(".navbar-img")
const cartMenu = document.querySelector(".cart");

// Template Productos Destacados
const createProductTemplate = (product) => {
    const {id, nombre, img, img2, precio, destacado, talles, oferta, colores} = product
    return `
    <div class="product" id="product-${id}">
        <div class="product-img">
            <img class="img" src="./assets/imgs/products${img}" alt="">
            <img class="img product-img-hover" src="./assets/imgs/products${img2}" alt="">
        </div>
        <div class="product-info">
            <div class="product-info-text">
                <span class="product-name">${nombre}</span>
                <span class="product-price">$${precio}</span>
                <div class="product-pay">
                <i class="fa-regular fa-credit-card product-pay-icon"></i>
                <span class="product-pay-text">6 cuotas sin interés</span>
            </div>
            </div>
            <div class="product-buttons">
                <span 
                    class="button-buy button"
                    data-id="${id}"
                    data-nombre="${nombre}"
                    data-precio="${precio}"
                    data-img="${img}"
                >
                    <i class="fa-solid fa-bag-shopping icon-buy"></i>
                    comprar
                </span>
                <span class="button-view button">
                    <i class="fa-regular fa-eye eye-icon "></i>
                    ver
                </span> 
            </div>   
        </div>
    </div>
    `
}



// Renderizar productos
const renderProducts = (productsList, productsContainer, productsOfferList, productsOfferContainer) => {
    productsContainer.innerHTML = productsList.map(createProductTemplate).join("");
};

// Renderiza los productos filtrados
const renderProductsOustanding = () => {
    const productsOutstanding = stockProducts.filter((product) => product.destacado === true);
    renderProducts(productsOutstanding, productsOustandingContainer);
};


// Scroll navbar
const scroll = () => {
    let scrollPos = window.scrollY
    if (scrollPos > 39) {
        navbar.classList.remove("bg-red")
        navbar.classList.add("bg-blue")
        img.src = "./assets/imgs/logos/logo-copa.png"
        cartCount.style.backgroundColor = "var(--red)"
    }
    else {
        navbar.classList.add("bg-red")
        navbar.classList.remove("bg-blue")
        img.src = "./assets/imgs/logos/logo-copa-white.png"
        cartCount.style.backgroundColor = "var(--blue)"
    }
}

// SPLIDE JS
const splideHero = new Splide( '.splide-hero', {
    type: 'loop',
    perPage: '1',
    perMove: '1',
    autoplay: true,
    interval: 2500,
    pauseOnHover: false,
    arrows: false, 
    type  : 'fade',
    rewind: true,
});

const splideLocation = new Splide( '.splide-location', {
    perPage: '1',
    perMove: '1',
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    type  : 'fade',
    rewind: true,
});


// Cerrar menu al hacer click en el menu responsive
const closeOnClick = (e) => {
	if (!e.target.classList.contains("nav__link")) {
		return;
	}
	closeMenu();
};

const closeCart = () => {
    cartMenu.classList.add('hidden')
    cartMenu.classList.remove('show')
    overlay.classList.add('hidden')
    overlay.classList.remove('show')

}

const showCart = () => {
    cartMenu.classList.add('show')
    cartMenu.classList.remove('hidden')
    cartMenu.classList.add('slide-right')
    overlay.classList.remove('hidden')
    overlay.classList.add('show')
    closeMenu();
}

const showMenu = () => {
    navbarR.classList.add('show')
    navbarR.classList.remove('hidden')
    cartMenu.classList.add('slide-right')
    overlay.classList.remove('hidden')
    overlay.classList.add('show')
    closeCart();
}

const closeMenu = () => {
    navbarR.classList.add('hidden')
    navbarR.classList.remove('show')
    overlay.classList.add('hidden')
    overlay.classList.remove('show')
}

// Abir Dropdown del menu responsive
listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {
        listElement.classList.toggle('arrow');
        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
});

// Logica Cart
const cartCount = document.querySelector("#cart-count")
const productsCart = document.querySelector("#cart")
const subTotal = document.querySelector("#subtotal-cart")
const total = document.querySelector("#total-cart")
const trash = document.querySelector(".item-trash")
const btnCartBuy = document.querySelector(".cart-btn-buy")
const optLocal = document.querySelector("#opt-local")
const cuotas = document.querySelector('.cart-cuotas-text')

let cart = JSON.parse(localStorage.getItem("cart")) || []
const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart))
}

const createCartProductTemplate = (cartProduct) => {
    const {id, nombre, img, cantidad, precio} = cartProduct
    return `
    <div class="cart-item">
        <div class="item-img">
            <img src="./assets/imgs/products${img}"/>
        </div>
        <div class="item-info">
            <div class="item-info-text">
                <h3 class="item-title">${nombre}</h3>
                <span class="item-price">$${precio}</span>
                <div class="item-handler">
                    <span class="quantity-handler down" data-id=${id}>-</span>
                    <span class="item-quantity">${cantidad}</span>
                    <span class="quantity-handler up" data-id=${id}>+</span>
                    <a class="item-trash"                     
                    data-id="${id}"
                    data-nombre="${nombre}"
                    data-precio="${precio}"
                    data-img="${img}"><i class="fa-solid fa-trash-can"></i></a>
                </div>
            </div>
        </div>
    </div>
    `
}

const priceCoutas = () => {
    if (!cart.length) {
        cuotas.innerText = ""
    }
    else {
        cuotas.innerText = "hasta 4 cuotas de $" + cart.reduce((acc, prod) => acc + (prod.cantidad * prod.precio) / 4 , 0) 
    }
}

const renderCart = () => {
    if (!cart.length) {
        productsCart.innerHTML = `<p>No hay productos en el carrito.</p>`;
        return
    }
    productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
    showCart();
}

const getCartTotal = () => {
    return cart.reduce((acc, val) => {
        return acc + Number(val.precio) * Number(val.cantidad);
    }, 0)
}

const showCartTotal = () => {
    total.innerHTML = `$${getCartTotal().toFixed(2)}`;
    subTotal.innerHTML = `$${getCartTotal().toFixed(2)}`;
}

//Desestructuro y retorno un objeto con lo deseado
const createProductData = (product) => {
    const {id, nombre, img, precio} = product;
    return {id, nombre, img, precio}
}

const isExistingCartProduct = (productId) => {
    return cart.find((item) => {
        return item.id === productId.id;
    });
}


const addUnit = (product) => {
    cart = cart.map((cartProduct) => {
        return cartProduct.id === product.id
                ? {...cartProduct, cantidad: cartProduct.cantidad + 1}
                : cartProduct
    })  
}

const createCartProduct = (product) => {
    cart = [
        ...cart, 
        {
            ...product,
            cantidad: 1,
        },
    ];
};

const renderCartCount = () => {
    cartCount.textContent = cart.reduce((acc, val) => {
        return acc + val.cantidad
    },0);
}

const handlePlusBtnEvent = (id) => {
	const existingCartProduct = cart.find((item) => item.id === id);
	addUnit(existingCartProduct);
};

const handleMinusBtnEvent = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);

	if (existingCartProduct.cantidad === 1) {
		if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
			removeProductFromCart(existingCartProduct);
		}
		return; 
	}
    substractProductUnit(existingCartProduct);
}

const removeProductFromCart = (existingProduct) => {    
	cart = cart.filter((product) => {
    return product.id !== existingProduct.id
    });
};

//Función para quitar una unidad de producto.
const substractProductUnit = (existingProduct) => {
	cart = cart.map((product) => {
		return product.id === existingProduct.id
			? { ...product, cantidad: Number(product.cantidad) - 1 }
			: product;
	});
};

const deleteProduct = (id) => {
    const existingCartProduct = cart.find((item) => item.id === id);
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
        removeProductFromCart(existingCartProduct);
        updateCart()
    }
}

const handleQuantity = (e) => {
	if (e.target.classList.contains("down")) {
		handleMinusBtnEvent(e.target.dataset.id);
	} else if (e.target.classList.contains("up")) {
		handlePlusBtnEvent(e.target.dataset.id);
	} else if (e.target.parentElement.classList.contains("item-trash")){
        deleteProduct(e.target.parentElement.dataset.id);
    }
	updateCart();
};

const disableBtn = (btn) => {
	if (!cart.length) {
		btn.classList.add("disabled");
	} else {
		btn.classList.remove("disabled");
	}
};

const updateCart = () => {
    saveCart();
    renderCart();
    showCartTotal();
    renderCartCount();
    priceCoutas();
    disableBtn(btnCartBuy);
}

const addProductOustanding = (e) => {
    if (!e.target.classList.contains("button-buy")) {
        return;
    }

    const product = createProductData(e.target.dataset)

    //Si el producto existe
    if (isExistingCartProduct(product)) {
        addUnit(product)
    } else {
        createCartProduct(product);
    }

    updateCart();
}

const init = () => {
    //Renderizar productos
    document.addEventListener("DOMContentLoaded", renderProductsOustanding)

    // Abrir y cerrar menu,navbar,cart
    iconMenu.addEventListener("click", showMenu)
    iconClose.addEventListener("click", closeMenu)
    iconCart.addEventListener("click", showCart)
    cartClose.addEventListener("click", closeCart)
    overlay.addEventListener("click", closeCart)
    overlay.addEventListener("click", closeMenu)
	iconMenu.addEventListener("click", closeOnClick);
    window.addEventListener("scroll", scroll);

    // Splide
    splideHero.mount();
    splideLocation.mount();

    //Cart
    document.addEventListener("DOMContentLoaded", renderCart);
    document.addEventListener("DOMContentLoaded", showCartTotal)
    productsOustandingContainer.addEventListener("click", addProductOustanding)
    productsCart.addEventListener("click", handleQuantity);
    disableBtn(btnCartBuy);
};

init();



