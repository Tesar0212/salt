document.addEventListener('DOMContentLoaded', function()
{
    //toggler

    function toggler(){
        let toggler = document.querySelector('.nav__toggler'),
            menu = document.querySelector('.nav__menu')
        toggler.onclick = function () {
            toggler.classList.toggle('active')
            menu.classList.toggle('active')
        }
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

        //Functions

        function init(){
            width = document.querySelector('.landing-slider').offsetWidth
            sliderLine.style.width = width * totalSlides + 'px'
            slides.forEach( item => {
                item.style.width = width + 'px'
            })
            rollSlider()
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
        }, 10000)

    }

    //Popup

    function popup(){

        //var

        const openBtn = document.querySelector('.player-open-btn'),
            popupBody = document.querySelector('.product-spotlight__popup'),
            closeBtn = document.querySelector('.product-spotlight__popup-close'),
            video = document.querySelector('.product-spotlight__popup-video'),
            html = document.querySelector('html')

        //func

        function openPopup(){
            popupBody.classList.add('open')
            openBtn.classList.add('active')
            html.style.overflow = "hidden"
        }

        function closePopup(){
            popupBody.classList.remove('open')
            openBtn.classList.remove('active')
            video.pause()
            setTimeout(() =>{
                html.style.overflow = "unset"
            }, 1000)

        }

        openBtn.addEventListener('click', openPopup)
        closeBtn.addEventListener('click', closePopup)
    }

    toggler()
    popup()
    slider()

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vdG9nZ2xlclxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgICAgICBsZXQgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RvZ2dsZXInKSxcclxuICAgICAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUnKVxyXG4gICAgICAgIHRvZ2dsZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1NsaWRlclxyXG4gICAgZnVuY3Rpb24gc2xpZGVyKCl7XHJcblxyXG4gICAgICAgIC8vVmFyXHJcblxyXG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXNsaWRlciAubGFuZGluZy1zbGlkZXJfX2xpbmUgLmxhbmRpbmctc2xpZGVyX19pdGVtJyksXHJcbiAgICAgICAgICAgICAgc2xpZGVyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXNsaWRlcl9fbGluZScpLFxyXG4gICAgICAgICAgICAgIG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1zbGlkZScpLCAgLy/QndC1INGC0YDQtdCx0YPRjtGC0YHRjyDQsiDQv9GA0L7QtdC60YLQtSwg0L3QviDRjyDRgdC00LXQu9Cw0Y4uINCQINGC0L4g0LLQtNGA0YPQsyDQv9GA0LjQs9C+0LTQuNGC0YHRjyA6KVxyXG4gICAgICAgICAgICAgIHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1zbGlkZScpLCAgLy/QndC1INGC0YDQtdCx0YPRjtGC0YHRjyDQsiDQv9GA0L7QtdC60YLQtSwg0L3QviDRjyDRgdC00LXQu9Cw0Y4gOilcclxuICAgICAgICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctc2xpZGVyX19kb3RzLWl0ZW0nKSxcclxuICAgICAgICAgICAgICB0b3RhbFNsaWRlcyA9IHNsaWRlcy5sZW5ndGhcclxuICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgZG90SW5kZXggPSAwXHJcblxyXG4gICAgICAgIC8vRnVuY3Rpb25zXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1zbGlkZXInKS5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLndpZHRoID0gd2lkdGggKiB0b3RhbFNsaWRlcyArICdweCdcclxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByb2xsU2xpZGVyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJvbGxTbGlkZXIoKXtcclxuICAgICAgICAgICAgc2xpZGVyTGluZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0nICsgY291bnQgKiB3aWR0aCArICdweCknXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICAgZG90SW5kZXgrK1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPj0gdG90YWxTbGlkZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMFxyXG4gICAgICAgICAgICAgICAgZG90SW5kZXggPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFNsaWRlKGRvdEluZGV4KVxyXG4gICAgICAgICAgICByb2xsU2xpZGVyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZTbGlkZSAoKSB7XHJcbiAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgaWYgKGNvdW50IDwgMCApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gdG90YWxTbGlkZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb2xsU2xpZGVyKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZSAoaW5kZXgpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkb3Qgb2YgZG90cykge1xyXG4gICAgICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIGluZGV4ICogd2lkdGggKyAncHgpJ1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbmV4dFNsaWRlKSAvLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICAgICAgLy8gcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBwcmV2U2xpZGUpIC8vINCYINGN0YLQviDRgtC+0LbQtSA6KVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbml0KVxyXG4gICAgICAgIGluaXQoKVxyXG5cclxuICAgICAgICAvL3NldGludGVydmFsXHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+e1xyXG4gICAgICAgICAgICBuZXh0U2xpZGUoKVxyXG4gICAgICAgIH0sIDEwMDAwKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL1BvcHVwXHJcblxyXG4gICAgZnVuY3Rpb24gcG9wdXAoKXtcclxuXHJcbiAgICAgICAgLy92YXJcclxuXHJcbiAgICAgICAgY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb3Blbi1idG4nKSxcclxuICAgICAgICAgICAgcG9wdXBCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc3BvdGxpZ2h0X19wb3B1cCcpLFxyXG4gICAgICAgICAgICBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNwb3RsaWdodF9fcG9wdXAtY2xvc2UnKSxcclxuICAgICAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zcG90bGlnaHRfX3BvcHVwLXZpZGVvJyksXHJcbiAgICAgICAgICAgIGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJylcclxuXHJcbiAgICAgICAgLy9mdW5jXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cCgpe1xyXG4gICAgICAgICAgICBwb3B1cEJvZHkuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICAgICAgICAgIG9wZW5CdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICAgICAgcG9wdXBCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgICAgICAgICBvcGVuQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIHZpZGVvLnBhdXNlKClcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgICAgIGh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcInVuc2V0XCJcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblBvcHVwKVxyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3B1cClcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVyKClcclxuICAgIHBvcHVwKClcclxuICAgIHNsaWRlcigpXHJcblxyXG59KSJdLCJmaWxlIjoibWFpbi5qcyJ9