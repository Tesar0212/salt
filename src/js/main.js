document.addEventListener('DOMContentLoaded', function()
{

    let toggler = document.querySelector(".nav__toggler")
    let menu = document.querySelector(".nav__menu")

    toggler.onclick = function () {
        toggler.classList.toggle('active')
        menu.classList.toggle('active')
    }
})