var intro = document.querySelector('.intro')
var logo = document.querySelector('.intro .logo-header')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        intro.style.opacity = '0';
        intro.style.zIndex = '0'
        
    }, 900)
})