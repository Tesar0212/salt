document.addEventListener('DOMContentLoaded', function()
{
    //toggler

    let toggler = document.querySelector('.nav__toggler'),
        menu = document.querySelector('.nav__menu')
    toggler.onclick = function () {
        toggler.classList.toggle('active')
        menu.classList.toggle('active')
    }

    //Slider
    function slider(){

        //Var

        const slides = document.querySelectorAll('.landing-slider .landing-slider__line .landing-slider__item'),
              sliderLine = document.querySelector('.landing-slider__line'),
              nextBtn = document.querySelector('.next-slide'),  //Не требуются в проекте, но я сделаю. А то вдруг пригодится :)
              prevBtn = document.querySelector('.prev-slide'),  //Не требуются в проекте, но я сделаю :)
              dots = document.querySelectorAll('.landing-slider__dots-item'),
              totalSlides = slides.length
        let count = 0,
            width

        console.log(dots)

        //Functions

        function init(){
            width = document.querySelector('.landing-slider').offsetWidth
            sliderLine.style.width = width * totalSlides + 'px'
            slides.forEach( item => {
                item.style.width = width + 'px'
            })
        }

        function rollSlider(){
            sliderLine.style.transform = 'translate(-' + count * width + 'px)'
        }

         function nextSlide() {
            count++
            if (count >= totalSlides) {
                count = 0
            }
            rollSlider()
        }

        function prevSlide () {
            count++
            if (count < 0 ) {
                count = totalSlides
            }
            rollSlider()
        }

        function currentSlide (index){
            for (let dot of dots) {
                dot.classList.remove('active')
            }
            dots[index].classList.add('active')
        }

        dots.forEach((dot, index) =>{
            dot.addEventListener('click', () => {
                sliderLine.style.transform = 'translate(-' + index * width + 'px)'
                currentSlide(index)
            })
        })

        // nextBtn.addEventListener( 'click', nextSlide) // При необходимости можно добавить
        // prevBtn.addEventListener( 'click', prevSlide) // И это тоже :)
        window.addEventListener('resize', init)
        init()

        //setinterval

        setInterval(() =>{
            nextSlide()
        }, 10000)

    }

    slider()

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vdG9nZ2xlclxyXG5cclxuICAgIGxldCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fdG9nZ2xlcicpLFxyXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51JylcclxuICAgIHRvZ2dsZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vU2xpZGVyXHJcbiAgICBmdW5jdGlvbiBzbGlkZXIoKXtcclxuXHJcbiAgICAgICAgLy9WYXJcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctc2xpZGVyIC5sYW5kaW5nLXNsaWRlcl9fbGluZSAubGFuZGluZy1zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICBzbGlkZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctc2xpZGVyX19saW5lJyksXHJcbiAgICAgICAgICAgICAgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXNsaWRlJyksICAvL9Cd0LUg0YLRgNC10LHRg9GO0YLRgdGPINCyINC/0YDQvtC10LrRgtC1LCDQvdC+INGPINGB0LTQtdC70LDRji4g0JAg0YLQviDQstC00YDRg9CzINC/0YDQuNCz0L7QtNC40YLRgdGPIDopXHJcbiAgICAgICAgICAgICAgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2LXNsaWRlJyksICAvL9Cd0LUg0YLRgNC10LHRg9GO0YLRgdGPINCyINC/0YDQvtC10LrRgtC1LCDQvdC+INGPINGB0LTQtdC70LDRjiA6KVxyXG4gICAgICAgICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZGluZy1zbGlkZXJfX2RvdHMtaXRlbScpLFxyXG4gICAgICAgICAgICAgIHRvdGFsU2xpZGVzID0gc2xpZGVzLmxlbmd0aFxyXG4gICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHdpZHRoXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvdHMpXHJcblxyXG4gICAgICAgIC8vRnVuY3Rpb25zXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1zbGlkZXInKS5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLndpZHRoID0gd2lkdGggKiB0b3RhbFNsaWRlcyArICdweCdcclxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcm9sbFNsaWRlcigpe1xyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLScgKyBjb3VudCAqIHdpZHRoICsgJ3B4KSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsU2xpZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb2xsU2xpZGVyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZTbGlkZSAoKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMCApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gdG90YWxTbGlkZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb2xsU2xpZGVyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZSAoaW5kZXgpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkb3Qgb2YgZG90cykge1xyXG4gICAgICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIGluZGV4ICogd2lkdGggKyAncHgpJ1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbmV4dFNsaWRlKSAvLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgLy8gcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBwcmV2U2xpZGUpIC8vINCYINGN0YLQviDRgtC+0LbQtSA6KVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbml0KVxyXG4gICAgICAgIGluaXQoKVxyXG5cclxuICAgICAgICAvL3NldGludGVydmFsXHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+e1xyXG4gICAgICAgICAgICBuZXh0U2xpZGUoKVxyXG4gICAgICAgIH0sIDEwMDAwKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzbGlkZXIoKVxyXG5cclxufSkiXSwiZmlsZSI6Im1haW4uanMifQ==