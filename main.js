
/*/photo cover
window.addEventListener('resize', autoHeight);
window.addEventListener('load', autoHeight);

function autoHeight() {
var hauteur = window.innerHeight;
let doc = document.querySelector('header');
doc.style.height = hauteur+"px";
}*/

//anim titre portfolio
const logo = document.querySelectorAll("#logo #Calque_2-2 path");
console.log(logo);
for(let i = 0; i<logo.length; i++){
 console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);

}

//CARROUSSEL
$(document).ready(function(){
      
        //carrousel photos
        $('#carousel').slick({      
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 4,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });

        //caroussel print
        $('#carousel2').slick({
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 4,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });
        
        //carrousel logo
        $('#carousel3').slick({
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 4,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });

        //carrousel sites web
        $('#carousel4').slick({
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 4,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });

        //carrousel maquettes
        $('#carousel5').slick({
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 4,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });

        //carrousel infographie
        $('#carousel6').slick({
          centerMode: true,
          mobileFirst: true,
          centerPadding: '60px',
          slidesToShow: 2,
          arrows:true,
          responsive: [
            {breakpoint: 1270,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3}
            },
            {breakpoint: 768,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2}
            },
            {breakpoint: 326,
              settings: {arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1}
            }
          ]
        });

      });

      var slickOptions = {
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        mobileFirst: true
    };
    
    $('.imgcarrousel').slick(slickOptions);
    
    $(window).on('resize orientationchange', function() {
        $('.imgcarrousel').slick('unslick');
        $('.imgcarrousel').slick(slickOptions);
    });

//CAP LOCK
var input = document.querySelector(".cap");
var text = document.getElementById("warning");
document.addEventListener("keyup", function(event) {
  
if (event.getModifierState("CapsLock")) {
text.style.display = "block";
} else {
text.style.display = "none"
}
});



    