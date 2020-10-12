function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if ((name) && (email)) {
        alert(name + "thank you");
    } else {
        alert("fill the form")
    }

}

$(document).ready(function () {
    $("#davvy").click(function () {
        $("#davvy").hide();
        $(".done1").show();
    })
    $(".done1").click(function () {
        $("#davvy").show();
        $(".done1").hide();
    })

})
$(document).ready(function () {
    $("#davvy2").click(function () {
        $("#davvy2").hide();
        $(".done2").show();
    })
    $(".done2").click(function () {
        $("#davvy2").show();
        $(".done2").hide();
    })

})
$(document).ready(function () {
    $("#davvy3").click(function () {
        $("#davvy3").hide();
        $(".done3").show();
    })
    $(".done3").click(function () {
        $("#davvy3").show();
        $(".done3").hide();
    })

})
$(document).ready(function () {
    $("#good").mouseover(function () {
        $("#cute").show();
    })
    .mouseout(function () {
        $("#cute").hide();
    })
    $("#good1").mouseover(function () {
        $("#cute1").show();
    })
    .mouseout(function () {
        $("#cute").hide();
    })
    $("#good2").mouseover(function () {
        $("#cute2").show();
    })
    .mouseout(function () {
        $("#cute2").hide();
    })
    $("#good3").mouseover(function () {
        $("#cute3").show();
    })
    .mouseout(function () {
        $("#cute3").hide();
    })
    $("#good4").mouseover(function () {
        $("#cute4").show();
    })
    .mouseout(function () {
        $("#cute4").hide();
    })
    $("#good5").mouseover(function () {
        $("#cute5").show();
    })
    .mouseout(function () {
        $("#cute5").hide();
    })
    $("#good6").mouseover(function () {
        $("#cute6").show();
    })
    .mouseout(function () {
        $("#cute6").hide();
    })
    $("#good7").mouseover(function () {
        $("#cute7").show();
    })
    .mouseout(function () {
        $("#cute7").hide();
    })






});