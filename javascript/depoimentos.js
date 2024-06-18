const depoimentos = [
    {
        "nome": "Matheus Lina",
        "curso": "Otimizando o time operacional de limpeza",
        "foto": "assets/images/matheus-lina.png",
        "texto": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
        "rating": 5
    },
    {
        "nome": "Marcia Almeida",
        "curso": "Otimizando o time operacional de limpeza",
        "foto": "assets/images/marcia-almeida.png",
        "texto": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
        "rating": 4
    },
    // Adicione mais depoimentos aqui
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".depoimentos");

    depoimentos.forEach(depoimento => {
        const card = document.createElement("div");
        card.className = "depoimento-card";
        let ratingStars = '';
        for (let i = 0; i < depoimento.rating; i++) {
            ratingStars += '<img class="rating-star" src="assets/icons/icone-rating.svg" alt="icone-rating" width="23px" height="23px">';
        }
        card.innerHTML = `
            <div class="col-1">
                <img src="${depoimento.foto}" alt="${depoimento.nome}">
            </div>
            <div class="col-2">
                <div class="topo">
                    <div class="rating">${ratingStars}</div>
                    <img class="aspas" src="assets/icons/icon-aspas.svg" alt="icone-aspas" width="48px" height="36px"> 
                </div>
                <div class="info">
                    <p class="texto">${depoimento.texto}</p>
                    <p class="curso"><span>Curso:</span> ${depoimento.curso}</p>
                    <p class="nome">${depoimento.nome}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    let scrollPosition = 0;

    rightArrow.addEventListener("click", () => {
        if (scrollPosition < container.scrollWidth - container.clientWidth) {
            scrollPosition += container.clientWidth;
            container.style.transform = `translateX(-${scrollPosition}px)`;
        }
    });

    leftArrow.addEventListener("click", () => {
        if (scrollPosition > 0) {
            scrollPosition -= container.clientWidth;
            container.style.transform = `translateX(-${scrollPosition}px)`;
        }
    });
});
