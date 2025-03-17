// scroll on counter start
const counters = document.querySelectorAll('.counter');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(handleIntersect, options);

counters.forEach(counter => {
    observer.observe(counter);
});

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target);
        }
    });
}

function startCounting(element) {
    const target = +element.getAttribute('data-target');
    const increment = target / 200;

    let count = 0;
    const updateCounter = () => {
        count += increment;
        if (count < target) {
            element.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            element.innerText = target;
        }
    };

    element.classList.add('visible');
    updateCounter();
}
// scroll on counter end


// scroll top top on button click start
const scroll_up = document.getElementById("scroll-up")
scroll_up.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})
// scroll top top on button click end

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

