$('.username #navthing .userdropdown .formholder input[type="button"]').mousedown(function () {
    $(this).css('background', '#08939b');
});
$('.username #navthing .userdropdown .formholder input[type="button"]').mouseup(function () {
    $(this).css('background', '#0dcfda');
});

$('#Username').click(function () {
    $('.userdropdown').fadeToggle('slow');
});

$("a .arrow").hide();

$(document).mouseup(function (event) {
    var container = $(".userdropdown");

    if (!container.is(event.target) // if the target of the click isn't the container...
        &&
        container.has(event.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});

$(function(){
    $(window).resize(function(){
        var windowSize = $(window).innerWidth();
        if(windowSize > 896){
            $("a .arrow").hide();
            $('#navBar-icon').prop('checked', false);
            $("#dropdown-son").css('margin-left', $('#dropdown-father').width() + 'px');
        }
        else{
            $("a .arrow").show();
            $("#dropdown-son").css('margin-left', 0 + 'px');
        }
    });

    if($(window).innerWidth() > 896)
        $("#dropdown-son").css('margin-left', $('#dropdown-father').width() + 'px');
});

$('#navthing input[type="button"][value="Profile"]').click(function(){
    window.location.href='profile.html';
});

$('#navthing input[type="button"][value="Logout"]').click(function(){
    window.location.href='../index.html';
});

$(".navigation .logo").click(function(){
    window.location.href='home.html';
})

$(".heading-right .fas.fa-shopping-cart.large-size").click(function(){
    window.location.href='cart.html';
})

$("#bottom-shopping-cart .fas.fa-shopping-cart").click(function(){
    window.location.href='cartSEO.html';
})


// $(".navigation").hover(function(){
//     $("li#Store-menu-hover ul.drop li").mouseout(function () {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $(".header").offset().top
//         }, 0);
//     });
// });

$(".navigation ul.menu li a").each(function() {
    if (this.href == window.location.href && this.href.indexOf('#') == -1) {
        $(this).css("color", "#28a745");
    }
});

$(".navigation ul.menu li ul.drop li a").click(function(){
    window.location.href='AllGame.html';
})
