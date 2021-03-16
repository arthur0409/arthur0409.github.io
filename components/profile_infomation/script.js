$("#change-username").hide();
$("#change-email").hide();
$("#change-location").hide();
$("#change-age").hide();

$("#default-username").dblclick(function(){
    $(this).hide();
    $("#change-username").show();
    $("#change-username").val($("#default-username").html());
})

$("#default-email").dblclick(function(){
    $(this).hide();
    $("#change-email").show();
    $("#change-email").val($("#default-email").html());
})

$("#default-location").dblclick(function(){
    $(this).hide();
    $("#change-location").show();
    $("#change-location").val($("#default-location").html());
})

$("#default-age").dblclick(function(){
    $(this).hide();
    $("#change-age").show();
    $("#change-age").val($("#default-age").html());
})

$("#change-username").keypress(function (event) {
    if (event.which == 13)
    {
        $(".Change-username").html($(this).val());
        $("#default-username").show();
        $(this).hide();
    }
});

$("#change-email").keypress(function (event) {
    var email = $(this).val();
    var a = "@gmail.com";
    var b = "@yahoo.com";
    if (event.which == 13)
    {
        if(email.indexOf(a) != -1 || email.indexOf(b) != -1){
            $("#default-email").html(email).show();
            $(this).hide();
        }
        else{
            alert("Email không hợp lệ");
        }
    }
});

$("#change-location").keypress(function (event) {
    if (event.which == 13)
    {
        $("#default-location").html($(this).val()).show();
        $(this).hide();
    }
});

$("#change-age").keypress(function (event) {
    var age = $(this).val();
    if (event.which == 13)
    {
        if(age >= 0 && age < 200 && age != ''){
            $("#default-age").html(age).show();
            $(this).hide();
        }
        else{
            alert("Tuổi không hợp lệ");
        }
    }
});

$(document).click(function (event) {
    showdefault("username" , event);
    showdefault("email" , event);
    showdefault("location" , event);
    showdefault("age" , event);
});

function showdefault(name , event){
    var a = "#change-" + name;
    var b = "#default-" + name;
    if (!$(a).is(event.target) 
        &&
        $(a).has(event.target).length === 0)
    {
        $(a).hide();
        $(b).show();
    }
}