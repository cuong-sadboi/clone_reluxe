// Initialize Intro Slider
document.addEventListener('DOMContentLoaded', function() {
    // Check if Swiper is loaded
    if (typeof Swiper !== 'undefined') {
        var swiper = new Swiper('.introSliderOne', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.hero-section .swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            on: {
                slideChange: function() {
                    // Reset và trigger animation lại cho slide mới
                    var activeSlide = this.slides[this.activeIndex];
                    if (!activeSlide) return;
                    
                    var introBox = activeSlide.querySelector('.intro-box');
                    var introContent = activeSlide.querySelector('.intro-content');
                    var introImage = activeSlide.querySelector('.intro-image-wrapper');
                    
                    // Reset opacity và transform trước
                    if (introBox) {
                        introBox.style.opacity = '0';
                        introBox.style.transform = 'translateY(-30px)';
                        introBox.style.animation = 'none';
                        setTimeout(function() {
                            introBox.style.animation = 'slideInBox 1s ease forwards';
                        }, 50);
                    }
                    
                    if (introContent) {
                        introContent.style.opacity = '0';
                        introContent.style.transform = 'translateX(-80px)';
                        introContent.style.animation = 'none';
                        setTimeout(function() {
                            introContent.style.animation = 'slideInLeft 1.1s ease forwards 0.2s';
                        }, 50);
                    }
                    
                    if (introImage) {
                        introImage.style.opacity = '0';
                        introImage.style.transform = 'translateX(80px)';
                        introImage.style.animation = 'none';
                        setTimeout(function() {
                            introImage.style.animation = 'slideInRight 1.1s ease forwards 0.3s';
                        }, 50);
                    }
                }
            }
        });
    } else {
        console.error('Swiper library is not loaded');
    }
    
    // Navbar scroll effect
    var navbar = document.querySelector('.navbar-custom');
    var scrollThreshold = 100; // Khoảng cách scroll để kích hoạt
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Initialize Tilt.js for service cards
    if (typeof VanillaTilt !== 'undefined') {
        var serviceCards = document.querySelectorAll('.service-card[data-tilt]');
        serviceCards.forEach(function(card) {
            VanillaTilt.init(card, {
                max: 10,
                speed: 1000,
                glare: false,
                'max-glare': 0.5
            });
        });
    }
    
    // Initialize Projects Carousel
    if (typeof Swiper !== 'undefined') {
        var projectSwiper = new Swiper('.projectSliderOne', {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            loop: false,
            initialSlide: 3, // Bắt đầu từ ảnh 4 (index 3)
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            },
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                    centeredSlides: true,
                    initialSlide: 3
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    centeredSlides: true,
                    initialSlide: 3
                },
                992: {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                    centeredSlides: true,
                    initialSlide: 3
                }
            },
            speed: 800,
            effect: 'slide',
            on: {
                slideChange: function() {
                    // Khi đến slide 6 (index 5), chuyển nhanh về slide 4 (index 3)
                    if (this.activeIndex === 5) {
                        setTimeout(function() {
                            projectSwiper.slideTo(3, 300); // Chuyển nhanh với speed 300ms
                        }, 1500); // Đợi 1.5 giây sau khi hiển thị slide 6
                    }
                }
            }
        });
    }
});

