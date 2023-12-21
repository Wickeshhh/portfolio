$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
    });
    // slideup script 
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu nav script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING ANIMATION 
    var typed = new Typed(".typing", {
        strings: ["UX Designer", "UX/UI Developer", "Web3 Enthusiast", "Web Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true  
    });

    var typed = new Typed(".typing2", {
        strings: ["UX Designer", "UX/UI Developer", "Web3 Enthusiast", "Web Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true  
    });
    // carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

