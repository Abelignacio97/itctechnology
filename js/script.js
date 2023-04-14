
// script de bton de busqueda
    const abrir=document.getElementById("abrir");
    const buscar=document.getElementById("search-mostrar")
  
    abrir.addEventListener('click',function (event){
      event.preventDefault();
      if (buscar.classList.contains('search')) {
        buscar.classList.add("search-active");
      buscar.classList.remove("search");
    }
    else {
      buscar.classList.remove("search-active");
      buscar.classList.add("search");
    }
      }) 
      
      
      // carruvel owl
      $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// boton de deslizamiento
 // Back to top button
 $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


