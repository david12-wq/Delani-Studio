
function myFunction() {
    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;

    if ((name)&&(email)){
        alert(name +"thank you");
    }
    else{
        alert("fill the form")
    }
    
}
    
$(document).ready(function(){
    $("#davvy").click(function(){
        $("#davvy").hide();
        $(".done1").show();
    })
    $(".done1").click(function(){
        $("#davvy").show();
        $(".done1").hide();
    })

})
$(document).ready(function(){
    $("#davvy2").click(function(){
        $("#davvy2").hide();
        $(".done2").show();
    })
    $(".done2").click(function(){
        $("#davvy2").show();
        $(".done2").hide();
    })

}) 
$(document).ready(function(){
    $("#davvy3").click(function(){
        $("#davvy3").hide();
        $(".done3").show();
    })
    $(".done3").click(function(){
        $("#davvy3").show();
        $(".done3").hide();
    })

}) 


