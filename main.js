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
let totalNumber = 0;
addToCart.on('click', (e) => {
    // check selected-size
    let size = selectedSize.text();
    if(size == '') {
        console.log('ERROR');
    } else {
        let quantity = 1,
            dataSize = size;

        if(cartAppend.find(`#${dataSize}`).length){
            let $el = cartAppend.find(`#${dataSize}`),
                updateQuantity = parseInt($el.prev().children('.item-quantity').text()) + 1;
            $el.prev().children('.item-quantity').html(updateQuantity)
        } else {
            cartAppend.append(`<li class="cart-item d-flex">
                        <img class="w-25 mr-3" src="images/classic-tee.jpg" alt="Classic Tee">
                        <div class="item-detail d-inline-block">
                            <div class="mb-2">Classic Tee</div>
                            <div class="mb-2"><span class="item-quantity">${quantity}</span>x <strong>$75.00</strong></div>
                            <div class="mb-2" id="${dataSize}">Size: ${dataSize}</div>
                        </div>
                    </li>`);
        }
    }
    totalNumber += 1;
    $('.cart-item-number').text(totalNumber);
});

