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