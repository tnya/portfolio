$(document).ready(function(){
    $("#primary-navigation").click(function(){
        $("#secondary-navigation").toggleClass('opened');
        $("#main").toggleClass('slide-left');
        $("#main").toggleClass('animate');
    });
});