let slideIndex = 0;
showSlides();
menu();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    
    // Oculta todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";  

    // Inicia a transição para o próximo slide
    slides[slideIndex - 1].style.opacity = "0"; // Começa com a opacidade 0

    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1"; // Altera a opacidade para 1 após um curto período
    }, 100);

    setTimeout(() => {
        // Chama a função showSlides após um tempo específico para o próximo slide
        showSlides();
    }, 5000); // Altera o slide após 5 segundos
}

const cards = document.getElementById("carrousel-cards");
const card = document.querySelector("#card card")

let idx = 0;

function carrossel(){
    idx++;

    if(idx > card.length -1){
        idx = 0;
    }

    cards.style.transform = `translateX(${-idx * 250}px)`;   
}

setInterval(carrossel, 180);

function menu() {
    let btnMenu = document.getElementById('btn-menu')
    let menu = document.getElementById('menu-mobile')
    let overlay = document.getElementById('overlay-menu')

    btnMenu.addEventListener('click',() => {
    menu.classList.add('abrir-menu')})

    menu.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})

    overlay.addEventListener('click',() => {
    menu.classList.remove('abrir-menu')
})
}

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.integrante-card');
  
    cards.forEach(card => {
      card.addEventListener('click', function() {
        let linkId = this.id;
        let link;
  
        switch(linkId) {
          case 'link1':
            link = 'https://www.link1.com';
            break;
          case 'link2':
            link = 'https://www.link2.com';
            break;
          case 'link3':
            link = 'https://www.link3.com';
            break;
          default:
            link = 'https://www.defaultlink.com';
        }
  
        window.open(link, '_blank');
      });
    });
  });
  
