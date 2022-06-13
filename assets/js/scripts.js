$(document).ready(function(){
    // canva=circle=jss=tart
    $('#myCanvas').tagcanvas({
        textColour : '#fffb00',
        outlineThickness : 0.5,
        outlineColour : '#fe0853',
        maxSpeed : 0.06,
        freezeActive:true,
        shuffleTags:true,
        shape:'sphere',
        zoom:0.9,
        noSelect:true,
        textFont:null,
        pinchZoom:true,
        freezeDecel:true,
        fadeIn:1000,
        initial: [0.3,-0.1],
        depth : 0.8
    });
    // start=responsive-of-canvas-menu

    $('.menu-open a').click(function(){
        $('.header-left-area').toggleClass('open');
        $('.menu-open a').hide();
    });
    $('.menu-close a').click(function(){
        $('.header-left-area').removeClass('open');
        $('.menu-open a').show();
    });

    // end=responsive-of-canvas-menu

    // progreebar
    $('.photoshop').rProgressbar({
        percentage: 85,
        fillBackgroundColor:'#2C98F0',
        backgroundColor:'#EEEEEE',
        borderRadius:'100px',
        duration: 2000
    });
    $('.html').rProgressbar({
        percentage: 98,
        fillBackgroundColor:'#F9BF3F',
        duration: 3000
    });
    $('.WordPress').rProgressbar({
        percentage: 80,
        fillBackgroundColor:'#2FA499',
    });
    $('.jQuery').rProgressbar({
        percentage: 80,
       fillBackgroundColor:'#EC5453',
    });
    $('.CSS3').rProgressbar({
        percentage: 95,
        fillBackgroundColor:'#A84CB8',
    });
    $('.SEO').rProgressbar({
        percentage: 80,
        fillBackgroundColor:'#4054B2',
        duration: 2000
    });
    // mixitupportfolioarea
    // var mixer = mixitup('.portfolio-area');
    var containerEl = document.querySelector('.portfolio-area'); 
    var mixer = mixitup(containerEl, {
        load: {
            filter: '.all'
        },
        animation: {
            effectsIn: 'fade translateY(-100%)',
            effects: 'fade translateZ(-100px)'
        }
    });

    // workcarodel
    $('.work').owlCarousel({
        center: true,
        items:3,
        nav:false,
        autoplay:false,
        autoplayTimeout:2000,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            768:{
                items:3
            },
            991:{
                items:3
            }
        }
    });

    // service-carosel
    $('.service').owlCarousel({
        center: false,
        items:3,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            768:{
                items:3
            },
            991:{
                items:3
            }
        }
    });

    // scrollspy
    $('body').scrollspy({ target: '#list-example' })

    // text-typejs
    var typed = new Typed('.type', {
        strings: [
            "Web Designer",
            "Web Devloper",
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true,
        smartBackspace: true
    });
    // canva=circle=jss=end

    // curesor
   
    
    
});


