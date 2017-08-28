$(document).ready(function(){
    $("#primary-navigation").click(function(){
        $("#secondary-navigation").toggleClass('opened');
        $("#main").toggleClass('slide-left');
        $("#main").toggleClass('animate');
    });


    /*inicializacion portafolio*/

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
    /*fin portafolio*/
});