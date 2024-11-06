function initializeSwipers() {
    // Select all elements with the 'mySwiper' class
    const swiperElements = document.querySelectorAll('.mySwiper');

    // Initialize each Swiper instance separately
    swiperElements.forEach((element) => {
        new Swiper(element, {
            slidesPerView: 'auto',
            direction: 'horizontal',
            spaceBetween: 16,

            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1248: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });
    });
}

initializeSwipers();
export default initializeSwipers;
