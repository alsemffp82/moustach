// Cart View open close
let cartTrigger = $('.cart-trigger'),
    cart = $('.cart');

cartTrigger.on('click', () => {
    cart.toggleClass('open');
})
