$(document).ready(function() {

  particlesJS.load('home-page', function() {

  });

  particlesJS('home-page',

    {
      "particles": {
        "number": {
          "value": 13013,
          "density": {
            "enable": false,
            "value_area": 1013
          }
        },
        "color": {
          "value": ["#336762", "#567572"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": 0
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 1,
            "height": 1
          }
        },
        "opacity": {
          "value": 0.9,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 1.7,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "bounce",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": false
        },
        "modes": {
          "grab": {
            "distance": 40,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 4,
            "size": 4,
            "duration": 2,
            "opacity": 8,
            "speed": 1
          },
          "repulse": {
            "distance": 36,
            "duration": .1
          },
          "push": {
            "particles_nb": 5
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    });

  $("#contacter").click(function(event) {
    event.preventDefault()

    if ($(this).hasClass(".active")) {
      $(this).removeClass(".active")

    } else {
      $(this).addClass(".active")
      $(".contact").animate({left:" - 92 % "});
    }


  });




})
