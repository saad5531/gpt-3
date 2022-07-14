
$(document).ready(function () {
    $('.images').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2
                }
            }
            ,
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });
})

$(document).ready(function () {


    $(".navbar-toggler").click(function () {
        $(".ham-menu").addClass("active");
        console.log("clicked");
    })
    $(".fa-solid").click(function () {
        $(".ham-menu").removeClass("active");
        console.log("clicked");
    })

});

