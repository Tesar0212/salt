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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9TbGlkZXJcclxuZnVuY3Rpb24gc2xpZGVyKCl7XHJcblxyXG4gICAgLy9WYXJcclxuXHJcbiAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZGluZy1zbGlkZXIgLmxhbmRpbmctc2xpZGVyX19saW5lIC5sYW5kaW5nLXNsaWRlcl9faXRlbScpLFxyXG4gICAgICAgIHNsaWRlckxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1zbGlkZXJfX2xpbmUnKSxcclxuICAgICAgICBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtc2xpZGUnKSwgIC8v0J3QtSDRgtGA0LXQsdGD0Y7RgtGB0Y8g0LIg0L/RgNC+0LXQutGC0LUsINC90L4g0Y8g0YHQtNC10LvQsNGOLiDQkCDRgtC+INCy0LTRgNGD0LMg0L/RgNC40LPQvtC00LjRgtGB0Y8gOilcclxuICAgICAgICBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXYtc2xpZGUnKSwgIC8v0J3QtSDRgtGA0LXQsdGD0Y7RgtGB0Y8g0LIg0L/RgNC+0LXQutGC0LUsINC90L4g0Y8g0YHQtNC10LvQsNGOIDopXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5kaW5nLXNsaWRlcl9fZG90cy1pdGVtJyksXHJcbiAgICAgICAgdG90YWxTbGlkZXMgPSBzbGlkZXMubGVuZ3RoXHJcbiAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGRvdEluZGV4ID0gMFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRvdHMpXHJcblxyXG4gICAgLy9GdW5jdGlvbnNcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgd2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZGluZy1zbGlkZXInKS5vZmZzZXRXaWR0aFxyXG4gICAgICAgIHNsaWRlckxpbmUuc3R5bGUud2lkdGggPSB3aWR0aCAqIHRvdGFsU2xpZGVzICsgJ3B4J1xyXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKCBpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4J1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcm9sbFNsaWRlcigpe1xyXG4gICAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtJyArIGNvdW50ICogd2lkdGggKyAncHgpJ1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcclxuICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgZG90SW5kZXgrK1xyXG4gICAgICAgIGlmIChjb3VudCA+PSB0b3RhbFNsaWRlcykge1xyXG4gICAgICAgICAgICBjb3VudCA9IDBcclxuICAgICAgICAgICAgZG90SW5kZXggPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRTbGlkZShkb3RJbmRleClcclxuICAgICAgICByb2xsU2xpZGVyKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2U2xpZGUgKCkge1xyXG4gICAgICAgIGNvdW50KytcclxuICAgICAgICBpZiAoY291bnQgPCAwICkge1xyXG4gICAgICAgICAgICBjb3VudCA9IHRvdGFsU2xpZGVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvbGxTbGlkZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZSAoaW5kZXgpe1xyXG4gICAgICAgIGZvciAobGV0IGRvdCBvZiBkb3RzKSB7XHJcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGRvdHMuZm9yRWFjaCgoZG90LCBpbmRleCkgPT57XHJcbiAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXJMaW5lLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLScgKyBpbmRleCAqIHdpZHRoICsgJ3B4KSdcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgbmV4dFNsaWRlKSAvLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICAvLyBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHByZXZTbGlkZSkgLy8g0Jgg0Y3RgtC+INGC0L7QttC1IDopXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5pdClcclxuICAgIGluaXQoKVxyXG5cclxuICAgIC8vc2V0aW50ZXJ2YWxcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PntcclxuICAgICAgICBuZXh0U2xpZGUoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvdEluZGV4KVxyXG4gICAgfSwgMTAwMDApXHJcblxyXG59XHJcblxyXG5zbGlkZXIoKSJdLCJmaWxlIjoic2xpZGVyLmpzIn0=