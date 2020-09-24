$(document).ready(function(){
  $("body").on("click", ".flechedroite i", function() {
      changeImage("droite");
  });

  $("body").on("click", ".flechegauche i", function() {
      changeImage("gauche");
  });

});


let state = 0;

function changeImage(direction) {
  if (direction === "droite") {
    state = (state + 1)% 3;
  } else if (direction === "gauche") {
    state = (state + 2)%3;
  }

  if (state === 0) {
    $("#carrousel-image").attr("src", "images/florian.png");
    $(".textetemoignage .text").html('"L\'absence totale de compétition m\'a permis de m\'ouvrir à l\'aspect créatif du code"');
  } else if (state === 1) {
    $("#carrousel-image").attr("src", "images/lydia.png");
    $(".textetemoignage .text").html('"J\'adore la moto"');
  } else if (state === 2) {
    $("#carrousel-image").attr("src", "images/marine.png");
    $(".textetemoignage .text").html('"Je travaille chez LinkedIn"');
  }
}
