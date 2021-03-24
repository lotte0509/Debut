const quoteSwiper = new Swiper('.quote-swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
            allowTouchMove: false,
        }
    }
});

const styleSwiper = new Swiper('.style-swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            touchRatio: 0,
            loop: false,
        }
    },
});

const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    effect: 'fade',
    allowTouchMove: false,
    thumbs: {
        swiper: galleryThumbs
    }
});

const headerNav = document.querySelector('#header-nav');
const search = document.querySelector('#search-div');
const closeTogglesOverlay = document.querySelector('#close-toggles-overlay');
const dropdownNav = document.querySelector('#dropdown-nav');
const mediaMobile = window.matchMedia('(max-width: 767px)');
const subDropdown = document.querySelector('#sub-dropdown');

function toggleSearch() {
    const logo = document.querySelector('#logo');
    const searchCross = document.querySelector('#search-cross');
    const mfg = document.querySelector('#mfg');
    const headerIcons = document.querySelector('#header-icons');
    if (search.classList.contains('hidden')) {
        searchCross.classList.remove('hidden');
        mfg.classList.add('hidden');
        search.classList.remove('hidden');
        headerNav.classList.remove('md:block');
        headerIcons.classList.add('hidden');
        logo.classList.add('hidden');
        closeTogglesOverlay.classList.remove('hidden');
        closeTogglesOverlay.classList.add('bg-black', 'bg-opacity-40');
    } else {
        searchCross.classList.add('hidden');
        mfg.classList.remove('hidden');
        search.classList.add('hidden');
        headerNav.classList.add('md:block');
        headerIcons.classList.remove('hidden');
        logo.classList.remove('hidden');
        closeTogglesOverlay.classList.add('hidden');
        closeTogglesOverlay.classList.remove('bg-black', 'bg-opacity-40');
    }
}

function closeToggles() {
    if (!search.classList.contains('hidden')) {
        toggleSearch();
    }
    if (!dropdownNav.classList.contains('hidden')) {
        dropdownNav.classList.add('hidden');
        subDropdown.classList.add('hidden');
    }
    if (!headerNav.classList.contains('hidden')) {
        toggleNav();
    }
}

function toggleNav() {
    const burger = document.querySelector('#burger');
    const cross = document.querySelector('#cross');
    if (headerNav.classList.contains('hidden')) {
        cross.classList.remove('hidden');
        burger.classList.add('hidden');
        headerNav.classList.remove('hidden');
        headerNav.classList.remove('animation-custom-2');
        headerNav.classList.add('animation-custom');
        closeTogglesOverlay.classList.remove('hidden');
    } else {
        burger.classList.remove('hidden');
        cross.classList.add('hidden');
        headerNav.classList.remove('animation-custom');
        headerNav.classList.add('animation-custom-2');
        closeTogglesOverlay.classList.add('hidden');
        if (mediaMobile.matches) {
            setTimeout(() => {
                headerNav.classList.add('hidden');
            }, 300);
        } else {
            headerNav.classList.add('hidden');
        }
    }
}

function toggleDropdown() {
    if (dropdownNav.classList.contains('hidden')) {
        dropdownNav.classList.remove('hidden');
        dropdownNav.classList.add('dropdown-custom');
        dropdownNav.classList.remove('dropdown-custom-2');
        closeTogglesOverlay.classList.remove('hidden');
    } else {
        if (mediaMobile.matches) {
            setTimeout(() => {
                dropdownNav.classList.add('hidden')
            }, 300);
        } 
        else {
            dropdownNav.classList.add('hidden');
            closeTogglesOverlay.classList.add('hidden');
        }
        dropdownNav.classList.remove('dropdown-custom');
        dropdownNav.classList.add('dropdown-custom-2');
    }
}

function toggleSubDropdown() {
    if (subDropdown.classList.contains('hidden')) {
        subDropdown.classList.remove('hidden');
        subDropdown.classList.add('dropdown-custom');
        subDropdown.classList.remove('dropdown-custom-2');
        closeTogglesOverlay.classList.remove('hidden');
    } else {
        setTimeout(() => {
            subDropdown.classList.add('hidden');
        }, 300);
        subDropdown.classList.remove('dropdown-custom');
        subDropdown.classList.add('dropdown-custom-2');
    }
}

let slideIndex = 0;
window.onload = function showSlides() {
    let i;
    const slides = document.querySelectorAll('.slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.remove('hidden');
    setTimeout(showSlides, 5000);
}

const addToCart = document.querySelector('#add-to-cart');
if (addToCart) {
    const addedToCart = document.querySelector('#added-to-cart');
    const closeCartOverlay = document.querySelector('#close-cart-overlay');
    addToCart.addEventListener('click', function() {
        addedToCart.classList.remove('hidden');
        closeCartOverlay.classList.remove('hidden');
    })

    function closeCart() {
        addedToCart.classList.add('hidden');
        closeCartOverlay.classList.add('hidden');
    }
}

const checkoutForm = document.querySelector('#checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
        const loadSVG = document.querySelector('#load-SVG');
        const checkoutP = document.querySelector('#checkout-p');
        loadSVG.classList.remove('hidden');
        checkoutP.classList.add('hidden');
        if (!isValid) {
            e.preventDefault(); //stop form from submitting
            loadSVG.classList.add('hidden');
            checkoutP.classList.remove('hidden');
            alert('checkout form not valid!');
        }
    })
}

const newsletterForm = document.querySelector('#newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        const newsLoadSVG = document.querySelector('#news-load-SVG');
        const newsP = document.querySelector('#news-p');
        newsLoadSVG.classList.remove('hidden');
        newsP.classList.add('hidden');
        if (!isValid) {
            e.preventDefault(); //stop form from submitting
            newsLoadSVG.classList.add('hidden');
            newsP.classList.remove('hidden');
            alert('newsletter form not valid!');
        }
    })
}

const addToCartForm = document.querySelector('#add-to-cart-form');
if (addToCartForm) {
    addToCartForm.addEventListener('submit', function(e) {
        const addToCartLoadSVG = document.querySelector('#add-to-cart-load-SVG');
        const addToCartP = document.querySelector('#add-to-cart-p');
        addToCartLoadSVG.classList.remove('hidden');
        addToCartP.classList.add('hidden');
        if (!isValid) {
            e.preventDefault(); //stop form from submitting
            addToCartLoadSVG.classList.add('hidden');
            addToCartP.classList.remove('hidden');
            alert('add to cart form not valid!');
        }
    })
}

if (document.querySelector('#countdown-timer')) {
    pad = function(n, len) { // leading 0's
        let s = n.toString();
        return (new Array((len - s.length + 1)).join('0')) + s;
    };
    const timerRunning = setInterval(
        function countDown() {
            let target = 14; // 15:00hrs is the cut-off point
            let now = new Date();
            //Put this in a variable for convenience
            let weekday = now.getDay();
            if (weekday == 0) { //Sunday? Add 24hrs
                target += 24;
            }
            if (weekday == 6) { //It's Saturday? Add 48hrs
                target += 48;
            }
            //If between Monday and Friday, 
            //check if we're past the target hours, 
            //and if we are, abort.
            if ((weekday >= 1) && (weekday <= 5)) {
                if (now.getHours() > target) { //stop the clock
                    return 0;
                }
            }
            let hrs = (target) - now.getHours();
            if (hrs < 0) hrs = 0;
            let mins = 59 - now.getMinutes();
            if (mins < 0) mins = 0;
            let secs = 59 - now.getSeconds();
            if (secs < 0) secs = 0;
            let str = 'Order soon for same day shipping<br>' + pad(hrs, 2) + ':' + pad(mins, 2) + ':' + pad(secs, 2);
            document.querySelector('#countdown-timer').innerHTML = str;
        }, 1000
    );
}