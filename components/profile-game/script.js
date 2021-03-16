$(document).ready(function () {
    $(".favourite div.col-lg-3").slice(4).hide();
    $(".myDIV2").hide();
    $("#show-all-favourite").prop('checked', false);
    $("#show-all-mygame").prop('checked', false);
    $("#Favourite-Games").html($(".favourite div.col-lg-3").length);
    $("#My-Games").html($(".mygame div.cardgroup-card-inner").length);
});

function myFunction(tagname) {
    var a = "." + tagname;
    console.log($(a).siblings(":visible"));
    if (!$(a + ":visible").length) {
        $(a).show();
    } else {
        $(a).hide();
    }
}

$(".buttonupdown-hide1").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".favourite").offset().top
    }, 500);
    $(".favourite div.col-lg-3").delay(400).slice(4).hide();
});

$(".buttonupdown-hide2").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".mygame").offset().top
    }, 500);
});

function dislike(tagname) {
    var a = "#" + tagname;
    $(a).delay(200).hide(500, function () {
        $(a).remove();
        $("#Favourite-Games").html($(".favourite div.col-lg-3").length).animate({
            'opacity': '0'
        }, 300, function () {
            $("#Favourite-Games").delay(300).animate({
                'opacity': '1'
            })
        });
    });
    if (!$("#show-all-favourite").is(":checked")) {
        if (!$("a").hasClass("myDIV1")) {
            $(".favourite div.col-lg-3").slice(4, 5).removeClass("myDIV1").delay(700).show(500);
        }
    } else {
        if (!$("a").hasClass("myDIV1")) {
            $(".favourite div.col-lg-3").slice(4, 5).removeClass("myDIV1");
        }
    }
    console.log($(".favourite div.col-lg-3").length);
    if ($(".favourite div.col-lg-3").length <= 5)
        $("label[for='show-all-favourite']").hide();
}

