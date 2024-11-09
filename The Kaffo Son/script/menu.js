let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("background");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}



const mainMenu = document.getElementById('mainMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

window.addEventListener('resize', function(){
    if (window.innerWidth > 450) {
        openMenu.style.display = "none";
        closeMenu.style.display = "none";
        mainMenu.style.display = "block";
    } else {
        openMenu.style.display = "block";
        mainMenu.style.display = "none";
    }
});

let i = 0; 

function menu(){
    if (i === 0) {
        i++;
        mainMenu.style.display = "block";
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }
}

function menukapat(){
    if (i === 1) {
        i--;
        mainMenu.style.display = "none";
        closeMenu.style.display = "none";
        openMenu.style.display = "block";
    }
}
