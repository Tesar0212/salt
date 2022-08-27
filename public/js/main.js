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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vdG9nZ2xlclxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZXIoKXtcclxuICAgICAgICBsZXQgdG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RvZ2dsZXInKSxcclxuICAgICAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX21lbnUnKVxyXG4gICAgICAgIHRvZ2dsZXIub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdG9nZ2xlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1NsaWRlclxyXG4gICAgZnVuY3Rpb24gc2xpZGVyKCl7XHJcblxyXG4gICAgICAgIC8vVmFyXHJcblxyXG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXNsaWRlciAubGFuZGluZy1zbGlkZXJfX2xpbmUgLmxhbmRpbmctc2xpZGVyX19pdGVtJyksXHJcbiAgICAgICAgICAgICAgc2xpZGVyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5kaW5nLXNsaWRlcl9fbGluZScpLFxyXG4gICAgICAgICAgICAgIG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1zbGlkZScpLCAgLy/QndC1INGC0YDQtdCx0YPRjtGC0YHRjyDQsiDQv9GA0L7QtdC60YLQtSwg0L3QviDRjyDRgdC00LXQu9Cw0Y4uINCQINGC0L4g0LLQtNGA0YPQsyDQv9GA0LjQs9C+0LTQuNGC0YHRjyA6KVxyXG4gICAgICAgICAgICAgIHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1zbGlkZScpLCAgLy/QndC1INGC0YDQtdCx0YPRjtGC0YHRjyDQsiDQv9GA0L7QtdC60YLQtSwg0L3QviDRjyDRgdC00LXQu9Cw0Y4gOilcclxuICAgICAgICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmRpbmctc2xpZGVyX19kb3RzLWl0ZW0nKSxcclxuICAgICAgICAgICAgICB0b3RhbFNsaWRlcyA9IHNsaWRlcy5sZW5ndGhcclxuICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgZG90SW5kZXggPSAwXHJcblxyXG4gICAgICAgIC8vRnVuY3Rpb25zXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgICAgICAgICAgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1zbGlkZXInKS5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLndpZHRoID0gd2lkdGggKiB0b3RhbFNsaWRlcyArICdweCdcclxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcm9sbFNsaWRlcigpe1xyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLScgKyBjb3VudCAqIHdpZHRoICsgJ3B4KSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICBkb3RJbmRleCsrXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSB0b3RhbFNsaWRlcykge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwXHJcbiAgICAgICAgICAgICAgICBkb3RJbmRleCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUoZG90SW5kZXgpXHJcbiAgICAgICAgICAgIHJvbGxTbGlkZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHJldlNsaWRlICgpIHtcclxuICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPCAwICkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSB0b3RhbFNsaWRlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvbGxTbGlkZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3VycmVudFNsaWRlIChpbmRleCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRvdCBvZiBkb3RzKSB7XHJcbiAgICAgICAgICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG90cy5mb3JFYWNoKChkb3QsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyTGluZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0nICsgaW5kZXggKiB3aWR0aCArICdweCknXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUoaW5kZXgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBuZXh0U2xpZGUpIC8vINCf0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0YxcclxuICAgICAgICAvLyBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHByZXZTbGlkZSkgLy8g0Jgg0Y3RgtC+INGC0L7QttC1IDopXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluaXQpXHJcbiAgICAgICAgaW5pdCgpXHJcblxyXG4gICAgICAgIC8vc2V0aW50ZXJ2YWxcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT57XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSgpXHJcbiAgICAgICAgfSwgMTAwMDApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vUG9wdXBcclxuXHJcbiAgICBmdW5jdGlvbiBwb3B1cCgpe1xyXG5cclxuICAgICAgICAvL3ZhclxyXG5cclxuICAgICAgICBjb25zdCBvcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vcGVuLWJ0bicpLFxyXG4gICAgICAgICAgICBwb3B1cEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zcG90bGlnaHRfX3BvcHVwJyksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc3BvdGxpZ2h0X19wb3B1cC1jbG9zZScpLFxyXG4gICAgICAgICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNwb3RsaWdodF9fcG9wdXAtdmlkZW8nKSxcclxuICAgICAgICAgICAgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxyXG5cclxuICAgICAgICAvL2Z1bmNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblBvcHVwKCl7XHJcbiAgICAgICAgICAgIHBvcHVwQm9keS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgICAgICAgICAgb3BlbkJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICBodG1sLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpe1xyXG4gICAgICAgICAgICBwb3B1cEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICAgICAgICAgIG9wZW5CdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgdmlkZW8ucGF1c2UoKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xyXG4gICAgICAgICAgICAgICAgaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidW5zZXRcIlxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUG9wdXApXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHRvZ2dsZXIoKVxyXG4gICAgcG9wdXAoKVxyXG4gICAgc2xpZGVyKClcclxuXHJcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=