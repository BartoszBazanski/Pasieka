var main = function(){
    var scrollTo = function(clickOn, goTo){
        $(clickOn).click(function(event){
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $(goTo).offset().top
            }, 1000);
        });
    };
    scrollTo("#goToAbout", "#about");
    scrollTo("#goToHoney", "#honey");
    scrollTo("#goToOffer", "#offer");
    scrollTo("#goToContact", "#contact");
};
$(document).ready(main);