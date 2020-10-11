$(document).ready(function () {
    $("#davvy").click(function () {
        $("#davvy").hide();
        $(".done1").show();
    });
    $(".done1").click(function () {
        $(".done1").hide();
        $("#davvy").show();
    });
});