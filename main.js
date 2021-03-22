
//photo cover
window.addEventListener('resize', autoHeight);
window.addEventListener('load', autoHeight);

function autoHeight() {
var hauteur = window.innerHeight;
let doc = document.querySelector('header');
doc.style.height = hauteur+"px";
}



  /* function titlepath(path,name){

        //In this path defined as your pdf url and name (your pdf name)

            var prntWin = window.open();
            prntWin.document.write("<html><head><title>"+name+"</title></head><body>"
                + '<embed width="100%" height="100%" name="plugin" src="'+ path+ '" '
                + 'type="application/pdf" internalinstanceid="21"></body></html>');
            prntWin.document.close();
        }
        */
        $(document).ready(function(){
      
       

        $('#carousel').slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          arrows:true,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });

      });