$(".product-check").prop('checked', true);
// /* Set rates + misc */
var couponRate = 1.99;
var fadeTime = 300;
/* Assign actions */

$('.product-removal button').click(function () {
    removeItem(this);
});

$('.product-check').change(() => {
    recalculateCart();
})

/* Recalculate cart */
function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function () {
        if ($(this).children('.product-image').children('.product-check')[0].checked) {
            subtotal += parseFloat($(this).children('.product-line-price').text());
        }

    });

    /* Calculate totals */
    var coupon = (subtotal > 0 ? couponRate : 0);
    var total = subtotal - coupon;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function () {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-coupon').html(coupon.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if (total == 0) {
            $('.checkout').fadeOut(fadeTime);
        } else {
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });

    // Popup
    var modal = $('.popup');
    var btn = $('.checkout');
    var span = $('.close');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide().delay(2000, function(){
            window.location.href='homeSEO.html';
        });
    });

    $(".ok").click(function () {
        modal.hide().delay(2000, function(){
            window.location.href='homeSEO.html';
        });
    });

    // $(window).on('click', function (e) {
    //     if ($(e.target).is('.popup')) {
    //         modal.hide();
    //     }
    // });
}
$(function () {

    "use strict"

    var init = "1";
    var counter = 1;

    // Initial Cart
    $(".counter").html(init);

    recalculateCart();
});

// change Items To Basket
function changeToBasket() {
    counter = $(".product-image").find('input[type=checkbox]:checked').length;
    console.log($(".product-image").find('input[type=checkbox]:checked').length);
    $(".counter").html(counter).animate({
        'opacity': '0'
    }, 300, function () {
        $(".counter").delay(300).animate({
            'opacity': '1'
        })
    });
}
$(".product-check").click(function () {
    changeToBasket();
});

/* Remove item from cart */
function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function () {
        productRow.remove();
        recalculateCart();
        changeToBasket();
    });
}