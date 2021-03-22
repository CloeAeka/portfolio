<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>

    <title>Portfolio Cloé</title>
    
</head>

<body>

    <header>
        <div class="contain menu"> 
            <a href="#" id="contact">Contact</a>
            <button type="button" class="menu">
                <img src="icons/menu1.png" alt="burger">
            </button>
        </div> 
        
        <div class="titreheader">
                <h1>  DI GREGORIO CLOE</h1>
                <h2>  Web designer Frontend</h2>
            </div> 

            <div class="cv">
                <button type="button" class="buttoncv"><a href="image/CVweb.pdf" target="_blank">Télécharger mon CV</a></button>
        </div>
    </header>

    <main>
    <div class="real"><h2 class="titreRealisation">REALISATIONS</h2></div>
            
        <!--debut realisations-->
        <div>
            <div class="flex-container">
                <div class="flex-item-photos">
                    <div><img src="image/nuage.jpg" alt="ciel nuage" class="image"></div>
                    <div class="titre">PHOTOS</div>
                </div>

                <div class="flex-item-print">
                    <div><img src="print/carte visite.jpg" alt="carte de visite" class="image"></div>
                    <div class="titre">PRINT</div>
                </div>

                <div class="flex-item-illustration">
                    <div><img src="image/vase.jpg" alt="paint" class="image"></div>
                    <div class="titre">ILLUSTRATION</div>
                </div>

                <div class="flex-item-siteweb">
                    <div><img src="image/meiariweb.jpg" alt="web" class="image"></div>
                    <div class="titre">SITES WEB</div>
                </div>

                <div class="flex-item-projets">
                    <div><img src="image/newsletters.jpg" alt="newsletter" class="image"></div>
                    <div class="titre">MAQUETTES</div>
                </div>
                <div class="flex-item-infographie">
                    <div><img src="image/fleur.jpg" alt="infographie" class="image"></div>
                    <div class="titre">INFOGRAPHIES</div>
                </div>
            </div>
        </div>
        <!--fin realisations-->

        <!--début séparateur-->
        <div class="separateur"></div>
        <div><img src="image/dandelion.jpg" alt="fleur"></div>
        <!--fin séparateur-->

        <!--about me et compétence-->
        <div class="aboutme">
            <strong><p class="titreabout"> About me </p></strong>
            <p class="paraabout"> En pleine reconversion professionelle, je découvre le monde du numérique.</p>
            
        </div>

        <div class="competences">
            <strong><p class="compet"> Compétences </p></strong>
                <div class="allicons">
                    <img src="icons/photoshop.png" alt="icon photoshop" wight="50" height="50">
                    <img src="icons/illustrator.png" alt="icon ai" wight="50" height="50">
                    <img src="icons/adobexd.png" alt="icon xd" wight="50" height="50">
                    <img src="icons/html.png" alt="icon html" wight="50" height="50">
                    <img src="icons/css.png" alt="icon css" wight="50" height="50">
                    <img src="icons/javascript.png" alt="icon javascript" wight="50" height="50">
                    <img src="icons/wordpress.png" alt="icon wp" wight="50" height="50">
                    <img src="icons/bootstrap.png" alt="icon bootstrap" wight="50" height="50">
                </div>
        </div>
        <!--fin about me et compétence-->

        <!--carrousel photos-->
        <div id="carousel">

            <div class="hideLeft">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000165384395-rhrjdn-t500x500.jpg">
            </div>

            <div class="prevLeftSecond">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000185743981-tuesoj-t500x500.jpg">
            </div>

            <div class="prev">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000158708482-k160g1-t500x500.jpg">
            </div>

            <div class="selected">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000062423439-lf7ll2-t500x500.jpg">
            </div>

            <div class="next">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000028787381-1vad7y-t500x500.jpg">
            </div>

            <div class="nextRightSecond">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000108468163-dp0b6y-t500x500.jpg">
            </div>

            <div class="hideRight">
                <img class="imgcarrousel" src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg">
            </div>

        </div>


        <!--fin carrousel photos-->

  
    </main>

    <footer>
      
      
    </footer>
</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js"></script>
<script type="text/javascript" src="slick/slick.min.js"></script>
<script type="text/javascript" src="main.js"></script>
</html>