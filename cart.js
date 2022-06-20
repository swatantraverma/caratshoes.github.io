// CART-CODE-START-HERE
let local = localStorage;
let shoeList = [{
        id: 0,
        img: "darkgreen",
        name: "dark green shoes",
        price: 40,
        cart: 0
    },
    {
        id: 1,
        img: "lightredblack",
        name: "red and black shoes",
        price: 70,
        cart: 0
    },
    {
        id: 2,
        img: "blackbluebluesky",
        name: "black and sky shoes",
        price: 50,
        cart: 0
    },
    {
        id: 3,
        img: "lightgreencoffee",
        name: "light skin shoes",
        price: 90,
        cart: 0
    },
    {
        id: 4,
        img: "graylightgreen",
        name: "gray white shoes",
        price: 30,
        cart: 0
    },
    {
        id: 5,
        img: "greenorangeblack",
        name: "green orange shoes",
        price: 80,
        cart: 0
    },
    {
        id: 6,
        img: "allbrown",
        name: "fully brown shoes",
        price: 40,
        cart: 0
    },
    {
        id: 7,
        img: "brownwhite",
        name: "brown white shoes",
        price: 40,
        cart: 0
    },

    {
        id: 8,
        img: "orangewhite",
        name: "orange white shoes",
        price: 40,
        cart: 0
    },

    {
        id: 9,
        img: "yellowbalck",
        name: "yellow black shoes",
        price: 105,
        cart: 0
    },

    {
        id: 10,
        img: "redblackwhite",
        name: "red black white shoes",
        price: 90,
        cart: 0
    },

    {
        id: 11,
        img: "skinwhite",
        name: "skin white shoes",
        price: 60,
        cart: 0
    },

]
let btns = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        productCount(shoeList[i]);
        totalAmount(shoeList[i]);
        printAllProductsINCart();
    })
}

function productCount(shoes) {
    let addProductNoInCart = localStorage.getItem('counter')
    addProductNoInCart = parseInt(addProductNoInCart);
    if (addProductNoInCart) {
        localStorage.setItem('counter', addProductNoInCart + 1);
        document.querySelector('.cart span').textContent = addProductNoInCart + 1;
    } else {
        localStorage.setItem('counter', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    addProductInCart(shoes);

}

function addProductInCart(shoes) {
    let productsInCart = localStorage.getItem('singleProduct');
    productsInCart = JSON.parse(productsInCart)
    if (productsInCart != null) {
        if (productsInCart[shoes.name] == undefined) {
            productsInCart = {
                ...productsInCart,
                [shoes.name]: shoes
            }
        }
        productsInCart[shoes.name].cart += 1;
    } else {
        shoes.cart = 1;
        productsInCart = {
            [shoes.name]: shoes
        }
    }
    localStorage.setItem('singleProduct', JSON.stringify(productsInCart));
}

function totalAmount(shoes) {
    let price = localStorage.getItem('amount');
    if (price != null) {
        price = parseInt(price);
        localStorage.setItem('amount', price + shoes.price);
    } else {
        localStorage.setItem('amount', shoes.price);
    }
}

function printAllProductsINCart() {
    let price = localStorage.getItem('amount');
    let productsInCart = localStorage.getItem('singleProduct');
    productsInCart = JSON.parse(productsInCart);
    let cartWindow = document.querySelector('.cart-window .product-list');
    if (productsInCart && cartWindow) {
        cartWindow.innerHTML = '';
        Object.values(productsInCart).map(cartitems => {
            cartWindow.innerHTML += `
            <div class="inner-product-list">
                <div class="remove-product box-size"><i class="fa-solid fa-xmark" class='removebtn'></i></div>
               <div class="box-size product-img">
                 <img src="images/${cartitems.img}.png">
                </div>
                <div class="product-name box-size">${cartitems.name}</div>
                <div class="price box-size">${cartitems.price}</div>
                <div class="quantity box-size">${cartitems.cart}</div>
                <div class="total box-size">${cartitems.cart * cartitems.price}</div>
            </div>
            `;


        })
        cartWindow.innerHTML += `
        <div class="net-amount">
        <div class="remove-product box-size"></i></div>
        <div class="box-size product-img"></div>
        <div class="product-name box-size"></div>
        <div class="price box-size"></div>
        <div class="quantity box-size">net :</div>
        <div class="total box-size">${price}</div>        
        </div>
        `
    }

}

function upDateCart() {
    addProductNoInCart = localStorage.getItem('counter');
    document.querySelector('.cart span').textContent = addProductNoInCart;


}
upDateCart();
printAllProductsINCart();

// CART-CODE-END-HERE






// FORM-VALIDATION-CODE-START
let firstName = document.getElementById('name');
let mobile = document.getElementById('mobile');
let email = document.getElementById('email');
let textarea = document.getElementById('textarea');
let startsSixSevenEightNIne = /^[0]?[6789]\d{9}$/;
let onlyText = /^[a-zA-Z ]*$/;
let passForm = 1;

function validForm() {
    // USERNAME-CODE-START
    if (firstName.value.length == '') {
        document.getElementById('username').innerHTML = 'plzz enter your name';
        passForm = 0;
    } else if (firstName.value.length < 3) {
        document.getElementById('username').innerHTML = 'plzz enter the valid name';
        passForm = 0;
    } else if (onlyText.test(firstName.value) == false) {
        document.getElementById('username').innerHTML = 'only charecters are allowed';
        passForm = 0;
    } else {
        document.getElementById('username').innerHTML = '';
        passForm = 1;
    }
    // USERNAME-CODE-END
    // USERMOBILE-CODE-START
    if (mobile.value.length == '') {
        document.getElementById('usermobile').innerHTML = 'plzz enter your mobile no';
        passForm = 0;
    } else if (isNaN(mobile.value)) {
        document.getElementById('usermobile').innerHTML = 'enter only numaric value';
        passForm = 0;
    } else if (mobile.value.length > 10) {
        document.getElementById('usermobile').innerHTML = 'plzz enter the valid no';
        passForm = 0;
    } else if (mobile.value.length < 10) {
        document.getElementById('usermobile').innerHTML = 'plzz enter the valid no';
        passForm = 0;
    } else if (startsSixSevenEightNIne.test(mobile.value) == false) {
        document.getElementById('usermobile').innerHTML = 'indian no are allowed';
        passForm = 0;
    } else {
        document.getElementById('usermobile').innerHTML = '';
        passForm = 1;
    }
    // USERMOBILE-CODE-END
    // USERMAIL-CODE-START
    if (email.value.length == '') {
        document.getElementById('useremail').innerHTML = 'plzz enter your email id';
        passForm = 0;
    } else if (email.value.length < 12) {
        document.getElementById('useremail').innerHTML = 'plzz enter the valid email';
        passForm = 0;
    } else {
        document.getElementById('useremail').innerHTML = ''
        passForm = 1;
    }
    // USERMAIL-CODE-END
    // USERMASSAGE-CODE-START
    if (textarea.value.length == '') {
        document.getElementById('usertextarea').innerHTML = 'plzz tell something about your self';
        passForm = 0;
    } else if (textarea.value.length < 50) {
        document.getElementById('usertextarea').innerHTML = 'write your massage in minimum 50 character';
        passForm = 0;
    } else {
        document.getElementById('usertextarea').innerHTML = '';
        passForm = 1;
    }
    // USERMASSAGE-CODE-END
    // PASS-THE-FORM-AFTER-VALIDATION
    if (passForm) {
        return true;
    } else {
        return false;
    }
    // PASS-THE-FORM-AFTER-VALIDATION
}



// FORM-VALIDATION-CODE-END
