$(document).ready(function() {
    $('.inspiration_slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 8000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })
        //
    $('.review_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 8000,
    })
});

function BookTrip() {
    if ($("#bonVoyageBookNow")[0].checkValidity()) {
        document.getElementById('bonVoyageBookNowModal').style.display = 'none';
        document.getElementById('bonVoyageConfirmMessageModal').style.display = 'block';
    }
    else {
        $("#bonVoyageBookNow")[0].reportValidity();
    }
}

function ScrollToFocus(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 2000)
};