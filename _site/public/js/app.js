/**
 * @copyright  --
 * @category   Javascript / jQuery 
 * MIT License
 * @license    http://www.opensource.org/licenses/mit-license.php  MIT License
 * @version - 1.0.0
 * @author - Shan Dhiviyarajan <prashasoft@gmail.com>
 * @production
 */
(function ($, window) {
    'use strict';
    var App = App || {},
        body = $("body")


    /**
     * jQuery functions
     */
    App = function () {

        /**
         * Header
         */
        function Header() {

            function _searchToggle(){
                $(".search-button-mobile").on('click',function(e){
                    e.preventDefault();
                    $(this).toggleClass('open-search');
                    $(".search-bar").fadeToggle(300);
                });
            }
          
            function _slideout() {

                var slideout = new Slideout({
                    'panel': document.getElementById('panel'),
                    'menu': document.getElementById('menu'),
                    'padding': 280,
                    'tolerance': 70
                });

                // Toggle button
                document.querySelector('.navbar-toggler').addEventListener('click', function () {
                    slideout.toggle();
                });
            }

            function _closeCookie(){

                setTimeout(function(){
                    $(".cookies-contianer").fadeIn(300);
                },1500);
                $(".close-cookie ").on('click',function(e){
                    e.preventDefault();
                    $(".cookies-contianer").fadeOut(200);
                })
            }

            return {
                init: function () {
                   _closeCookie();
                   _searchToggle();
                }
            }
        }

        function Home (){

            function _wow(){
                var wow = new WOW(
                    {
                      boxClass:     'wow',      // animated element css class (default is wow)
                      animateClass: 'animated', // animation css class (default is animated)
                      offset:       0,          // distance to the element when triggering the animation (default is 0)
                      mobile:       true,       // trigger animations on mobile devices (default is true)
                      live:         true,       // act on asynchronously loaded content (default is true)
                      callback:     function(box) {
                        // the callback is fired every time an animation is started
                        // the argument that is passed in is the DOM node being animated
                      },
                      scrollContainer: null,    // optional scroll container selector, otherwise use window,
                      resetAnimation: true,     // reset animation on end (default is true)
                    }
                  );
                  wow.init();
                  console.log(wow);
            }
            function _slider(){
                var swiper = new Swiper(".mySwiper", {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    pagination: {
                      el: ".swiper-pagination",
                      clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }
                  });
            }

            return {
                init:function(){
                    _slider();
                    _wow();
                }
            }
        }

        return {
            init: function () {

                Pace.options = {
                    elements: false,
                    document: false,
                    ajax: true,
                    restartOnRequestAfter: false
                };

                Pace.on('done', function () {
                    new Header().init();
                    new Home().init();
                });

            }
        };
    };

    App().init();

})(jQuery, window);
