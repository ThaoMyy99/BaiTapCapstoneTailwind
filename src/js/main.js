

const testimonial = new Swiper('.testimonial-swiper', {
    autoplay: {
        delay: 5000,
      },
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        1280: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        }
    },
});

const partner_swiper = new Swiper('.partner-swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        575: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 3,
        },
        10240: {
            slidesPerView: 4,
        },
        1290: {
            slidesPerView: 5,
        }
    },
});
const service_swiper = new Swiper('.service-swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
        el: ".service-pagination",
        clickable: true
    },
    breakpoints: {
        5320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        10240: {
            slidesPerView: 3,
        },
        1290: {
            slidesPerView: 3,
        }
    },
});

