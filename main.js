var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    disableOnInteraction: false,
    slidesPerView: "auto",
    freeMode: true,
    loop: true,
    breakpoint: {
        562: {
            spaceBetween: 31,
        },
    },
});

//

$(".slick-wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
    nextArrow: '<div class="slick-next slick-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></div>',
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});