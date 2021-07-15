(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 360px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Items.
        $('.item').each(function() {

            var $this = $(this),
                $header = $this.find('header'),
                $a = $header.find('a'),
                $img = $header.find('img');

            // Set background.
            $a.css('background-image', 'url(' + $img.attr('src') + ')');

            // Remove original image.
            $img.remove();

        });

    });

})(jQuery);
// Hero rotating texts
$("#hero.rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
});

//text animation 
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
window.onload = function() {
    {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }

        var audio = document.querySelector('audio');

        if (audio) {

            window.addEventListener('keydown', function(event) {

                var key = event.which || event.keyCode;

                if (key === 32) { // spacebar

                    // eat the spacebar, so it does not scroll the page
                    event.preventDefault();

                    audio.paused ? audio.play() : audio.pause();

                }

            });
        }

        var barra = document.getElementById("volumen");

        barra.addEventListener("change", function(ev) {
            var v = document.getElementById("musica");
            v.volume = ev.target.value;
        }, true);

        {
            function myFunction()
            alert("Toto©#3719");
        };
    };
};