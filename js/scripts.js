
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
    



