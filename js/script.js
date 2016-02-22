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
    //Hide sections
    function hideSections(){
        $("section").hide();
    }
    hideSections();
    //Show main sections
    about.show();
    //Navigation menu
    $("#about-link").click(function(){
        hideSections();
        about.show();
    })
    $("#honey-link").click(function(){
        hideSections();
        honey.show();
    })
    $("#offer-link").click(function(){
        hideSections();
        offer.show();
    })
    $("#contact-link").click(function(){
        hideSections();
        contact.show();
    })
    //Honey description animation
    var honeyTabs = $('.tabs');
    var honeyTexts = $('.honey-text');
    honeyTexts.hide();
    honeyTexts.siblings('.active').show();
    var tabsAnimation = function(){
        honeyTexts.siblings('.active').fadeOut(700).removeClass('active');
        honeyTexts.eq($(this).index()).delay(700).fadeIn(700).addClass('active');
        $('.tabs.active').removeClass('active');
        $(this).addClass('active');
    };
    honeyTabs.click(tabsAnimation);
};
$(document).ready(main);
