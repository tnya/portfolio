/* NAVBAR */
$(document).ready(function(){
    $("#primary-navigation").click(function(){
        $("#secondary-navigation").toggleClass('opened');
        $("#main").toggleClass('slide-left');
        $("#main").toggleClass('animate');
    });
});
/* HOME */
$("#os-phrases > h3")
    .css('opacity', 1).lettering( 'words' )
    .children( "span" ).lettering()
    .children( "span" ).lettering(); 
