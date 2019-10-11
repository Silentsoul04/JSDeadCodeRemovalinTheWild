
        $('.slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: '10%',
            slidesToShow: 3,
            speed: 500,
            responsive: [{

                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }

            }]
        });
    