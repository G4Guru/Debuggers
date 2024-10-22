/******************************************
    CUSTOM JAVA SCRIPT
/****************************************** */

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable F12 Key (DevTools)
document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+I (DevTools)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+J (Console)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
    }
});

// Disable Ctrl+U (View Source)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "U") {
        e.preventDefault();
    }
});

// Disable Ctrl+S (Save Page)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "S") {
        e.preventDefault();
    }
});

// Disable Ctrl+Shift+C (Inspect Element)
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
    }
});

(function($) {
    "use strict";

   /* ==============================================
    FIXED MENU
    =============================================== */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header_style_01').addClass('fixed-menu');
		} else {
			$('.header_style_01').removeClass('fixed-menu');
		}
	});
	
	
   /* ==============================================
		SCROLL TO TOP
	============================================== */
		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
	
	/* ==============================================
     FUN FACTS -->
     =============================================== */
	
	$(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);

/* ==============================================
     FAQs Answers Toggler -->
     =============================================== */

function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const question = answer.previousElementSibling;
    
    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
        question.classList.remove('active');
    } else {
        answer.classList.add('open');
        question.classList.add('active');
    }
}