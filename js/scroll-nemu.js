//para animar scroll
	$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .stop().animate({scrollTop: targetOffset}, 1300);
       return false;
      }
    }
  });

  $(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.ir-arriba').fadeIn(200);
        } else {
          $('.ir-arriba').fadeOut(200);
        }
      });
      // Animate the scroll to top
      $('.ir-arriba').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
      })

    });


