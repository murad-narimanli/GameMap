import React from 'react';
import WebMenu from "./WebMenu/WebMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
function Header(props) {
    document.addEventListener("DOMContentLoaded", function(event) {

        window.onscroll = function() {myFunction()};

        const navbar = document.getElementById("navbar");
        const menu = document.getElementById("menu");
        const sticky = navbar.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");

                menu.classList.add("show");
            } else {
                navbar.classList.remove("sticky");
            }
        }
        //The button scrool up to top
        const backToTopButton = document.getElementById('back-to-top-btn');

        window.addEventListener('scroll', scrollFunction);

        function scrollFunction() {
            if (window.pageYOffset > 300) {   //show backToTopButton
                if (!backToTopButton.classList.contains('btnEntrance')) {
                    backToTopButton.classList.remove('btnExit');
                    backToTopButton.classList.add('btnEntrance');
                    backToTopButton.style.display = "block";
                }
            }
            else {    // Hide backToTopButton
                if (backToTopButton.classList.contains('btnEntrance')) {
                    backToTopButton.classList.remove('btnEntrance');
                    backToTopButton.classList.add('btnExit');
                    setTimeout(function () {
                        backToTopButton.style.display = "none";
                    }, 300)
                }
            }
        }

        backToTopButton.addEventListener("click", smoothScroll);
        function smoothScroll() {
            const targetPoition = 0;
            const startPosition = window.pageYOffset;
            const distance = targetPoition - startPosition;
            const duration = 1200;
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);

            }

        }
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };
    });

    return (
        <div>
            <WebMenu/>
            <MobileMenu/>
        </div>
    );
}

export default Header;
