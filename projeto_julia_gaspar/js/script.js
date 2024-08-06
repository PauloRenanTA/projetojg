// Alternar a visibilidade do menu hambúrguer na versão mobile
function clickMenu() {
    let menuMobile = document.getElementById('menu-mobile');
        if (window.getComputedStyle(menuMobile).display === 'flex') {
        //Se o menu estiver visível, oculte-o
        menuMobile.style.display = 'none';
        } else {
        //Se o menu estiver oculto, exiba-o
        menuMobile.style.display = 'flex';
        }
    }






    







/*Interações com o menu inicial na versão para telas menores. Adição de rolagem automática até uma sessão específica*/ 

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    }


// Manipuladores de clique no menu
document.addEventListener('DOMContentLoaded', function () {
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});
});


//Interação dos slides de imagens para versão mobile
let currentIndex = 0;
const images = document.querySelectorAll('.container');

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.remove('remova');
        } else {
            image.classList.add('remova');
        }
    });
}

//Função para mostrar próxima imagem
function proxImagem() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

//Função para mostrar imagem anterior
function antImagem() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


//Interação de slides de imagens para versão telas maiores utilizando Swiper
let swiper = new Swiper(".slide-content", {
slidesPerView: 3.5,
centeredSlides: true,
spaceBetween: 25,
pagination: {
type: "fraction",
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});

//Programação dos botões dos slides para versão telas maiores
let nextButton = document.querySelector(".swiper-button-next");
let prevButton = document.querySelector(".swiper-button-prev");

let nextClickCount = 0;
let prevClickCount = 0;

nextButton.addEventListener("click", function () {
nextClickCount++;

    if (nextClickCount % 3 === 0) {
    swiper.allowSlideNext = false;
    nextButton.classList.add("swiper-button-disabled");
    } else {
        swiper.allowSlideNext = true;
        nextButton.classList.remove("swiper-button-disabled");
    }
});

prevButton.addEventListener("click", function () {
prevClickCount++;

    if (prevClickCount % 3 === 0) {
    swiper.allowSlideNext = true;
    nextButton.classList.remove("swiper-button-disabled");
}
});


//Programação dos comentários da sessão feedbacks para a versão mobile
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 992) {
        const comments = document.querySelectorAll('.caixacomentarios');
        let currentIndex = 0;

        function showComment(index) {
            comments.forEach((comment, i) => {
                if (i === index) {
                    comment.classList.add('visivel');
                } else {
                    comment.classList.remove('visivel');
        }
    });
}

function nextComment() {
    comments[currentIndex].classList.remove('visivel');
    currentIndex = (currentIndex + 1) % comments.length;
    comments[currentIndex].classList.add('visivel');
}

setInterval(nextComment, 8000);
} else {
console.log ("Largura da tela é maior que 992px. Não executando o código Javascript para a Seção de Feedbacks.")
}
});