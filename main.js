// Cart View open close
let cartTrigger = $('.cart-trigger'),
    cart = $('.cart'),
    tSize = $('.product-size label'),
    selectedSize = $('.selected-size'),
    addToCart = $('.btn-cart'),
    cartArr = [],
    cartAppend = $('.cart-view ul'),
    cartItemNum = $('.cart-item-number');

// toggle cart view
cartTrigger.on('click', () => {
    cart.toggleClass('open');
})

// select size then show size
tSize.on('click', (e) => {
    let $el = $(e.target).text();
    selectedSize.html($el);
});

// Add to Cart
addToCart.on('click', () => {
    // check selected-size
    let size = selectedSize.text();
    if(size == '') {
        console.log('ERROR');
    } else {
        let item = {
            'name': 'Classic Tee',
            'price': '$75.00',
            'size': size,
            'quantity': 1
        }
        cartArr.push(item);
        window.localStorage.setItem('Cart', JSON.stringify(cartArr));
    }
});

if(JSON.parse(window.localStorage.getItem('Cart'))) {
    let carts = JSON.parse(window.localStorage.getItem('Cart')),
        html = '',
        sizeArr = [];

    for(let i = 0; i < carts.length; i++) {
        html += `<li class="cart-item d-flex">
                    <img class="w-25 mr-3" src="images/classic-tee.jpg" alt="Classic Tee">
                    <div class="item-detail d-inline-block">
                        <div class="mb-2">Classic Tee</div>
                        <div class="mb-2">1x <strong>$75.00</strong></div>
                        <div class="mb-2">Size: ${carts[i].size}</div>
                    </div>
                </li>`;
    }
    cartAppend.append(html);
    cartItemNum.html(carts.length);
}
