var main = function(){
    var goToAbout = $("#goToAbout");
    var about = $("#about");
    var goToHoney = $("#goToHoney");
    var honey = $("#honey");
    var goToOffer = $("#goToOffer");
    var offer = $("#offer");
    var goToContact = $("#goToContact");
    var contact = $("#contact");
    var brand = $(".navbar-brand");
    var scrollTo = function(clickOn, goTo){
        clickOn.click(function(event){
            event.preventDefault();
            $("html, body").animate({
                scrollTop: goTo.offset().top
            }, 1000);
        });
    };
    scrollTo(goToAbout, about);
    scrollTo(goToHoney, honey);
    scrollTo(goToOffer, offer);
    scrollTo(goToContact, contact);
    scrollTo(brand, about);
};
$(document).ready(main);
