// Get shopping cart
var mybutton = document.getElementById("bottom-shopping-cart");

// When the user scrolls down 60px from the top of the document, show it
window.onscroll = function () {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}; 