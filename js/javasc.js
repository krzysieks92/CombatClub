/*płynne przewijanie strony*/
$(document).ready(function() { 
 
	$('a[href^="."]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});

/*przycisk scrollup*/

$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
	
/*wyświetlanie nazwy trenera po najechaniu na img*/
	var para = document.querySelector('#para');
	var trainer = document.querySelectorAll('.trener');

	for(var i=0; i<trainer.length;i++){
		trainer[0].onmouseover = function(){
				para.textContent = 'trener A';
		}
		
		trainer[1].onmouseover = function(){
				para.textContent = 'trener B';
		}
		
		trainer[2].onmouseover = function(){
				para.textContent = 'trener C';
		}
		
		trainer[3].onmouseover = function(){
				para.textContent = 'trener D';
		}
		
		trainer[4].onmouseover = function(){
				para.textContent = 'trener E';
		}
		
		trainer[5].onmouseover = function(){
				para.textContent = 'trener F';
		}
		
		trainer[i].onmouseout = function(){
			para.textContent='';
		}
	}
	
/*flexslider*/
$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
	
/*pojawianie sie elementow strony podczas przewijania*/
window.sr = ScrollReveal();
    sr.reveal('.socialMedia', {
        reset: true,
        delay: 300,
        distance: 0
    });
    sr.reveal('h1, h2, h3, .tile, .flexslider, .trener, .contact-para', {
        reset: true,
        delay: 300
    });
	
/*mapa*/
function initMap() {
        var uluru = {lat: 52.229676, lng: 21.012228999999934};
        var map = new google.maps.Map(document.querySelector('.map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

