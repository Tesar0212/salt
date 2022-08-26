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
            width,
            dotIndex = 0

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
             dotIndex++
            if (count >= totalSlides) {
                count = 0
                dotIndex = 0
            }
            currentSlide(dotIndex)
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
            console.log(dotIndex)
        }, 10000)

    }

    slider()

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vdG9nZ2xlclxyXG5cclxuICAgIGxldCB0b2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fdG9nZ2xlcicpLFxyXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19tZW51JylcclxuICAgIHRvZ2dsZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0b2dnbGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vU2xpZGVyXHJcbiAgICBmdW5jdGlvbiBzbGlkZXIoKXtcclxuXHJcbiAgICAgICAgLy9WYXJcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctc2xpZGVyIC5sYW5kaW5nLXNsaWRlcl9fbGluZSAubGFuZGluZy1zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICBzbGlkZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmRpbmctc2xpZGVyX19saW5lJyksXHJcbiAgICAgICAgICAgICAgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXNsaWRlJyksICAvL9Cd0LUg0YLRgNC10LHRg9GO0YLRgdGPINCyINC/0YDQvtC10LrRgtC1LCDQvdC+INGPINGB0LTQtdC70LDRji4g0JAg0YLQviDQstC00YDRg9CzINC/0YDQuNCz0L7QtNC40YLRgdGPIDopXHJcbiAgICAgICAgICAgICAgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2LXNsaWRlJyksICAvL9Cd0LUg0YLRgNC10LHRg9GO0YLRgdGPINCyINC/0YDQvtC10LrRgtC1LCDQvdC+INGPINGB0LTQtdC70LDRjiA6KVxyXG4gICAgICAgICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZGluZy1zbGlkZXJfX2RvdHMtaXRlbScpLFxyXG4gICAgICAgICAgICAgIHRvdGFsU2xpZGVzID0gc2xpZGVzLmxlbmd0aFxyXG4gICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICBkb3RJbmRleCA9IDBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZG90cylcclxuXHJcbiAgICAgICAgLy9GdW5jdGlvbnNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgICAgICB3aWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXNsaWRlcicpLm9mZnNldFdpZHRoXHJcbiAgICAgICAgICAgIHNsaWRlckxpbmUuc3R5bGUud2lkdGggPSB3aWR0aCAqIHRvdGFsU2xpZGVzICsgJ3B4J1xyXG4gICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiByb2xsU2xpZGVyKCl7XHJcbiAgICAgICAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIGNvdW50ICogd2lkdGggKyAncHgpJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgIGRvdEluZGV4KytcclxuICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsU2xpZGVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDBcclxuICAgICAgICAgICAgICAgIGRvdEluZGV4ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZShkb3RJbmRleClcclxuICAgICAgICAgICAgcm9sbFNsaWRlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwcmV2U2xpZGUgKCkge1xyXG4gICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA8IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IHRvdGFsU2xpZGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm9sbFNsaWRlcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjdXJyZW50U2xpZGUgKGluZGV4KXtcclxuICAgICAgICAgICAgZm9yIChsZXQgZG90IG9mIGRvdHMpIHtcclxuICAgICAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb3RzLmZvckVhY2goKGRvdCwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLScgKyBpbmRleCAqIHdpZHRoICsgJ3B4KSdcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZShpbmRleClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG5leHRTbGlkZSkgLy8g0J/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjFxyXG4gICAgICAgIC8vIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgcHJldlNsaWRlKSAvLyDQmCDRjdGC0L4g0YLQvtC20LUgOilcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5pdClcclxuICAgICAgICBpbml0KClcclxuXHJcbiAgICAgICAgLy9zZXRpbnRlcnZhbFxyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PntcclxuICAgICAgICAgICAgbmV4dFNsaWRlKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG90SW5kZXgpXHJcbiAgICAgICAgfSwgMTAwMDApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNsaWRlcigpXHJcblxyXG59KSJdLCJmaWxlIjoibWFpbi5qcyJ9