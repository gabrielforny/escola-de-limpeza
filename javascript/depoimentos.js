const depoimentos = [
    {
        "nome": "Karla Mendes ",
        "foto": "assets/images/karla-depoimento1.jpg",
        "texto": "Parabéns! Sempre com um conteúdo excelente, aulas maravilhosas e enriquecedoras, hoje podemos garantir a todos que fizemos a melhor escolha, desde o primeiro contato com a escola. Fantástico!",
        "rating": 5
    },
    {
        "nome": "Angra serviços",
        "foto": "assets/images/angra-depoimento-3.jpg",
        "texto": "Estou muito satisfeito com os treinamentos da Escola de Limpeza, nossa parceria com a escola, tem apresentado resultados positivos, comunicação clara, objetiva e certeira! Indico fortemente a Escola. Sempre que precisei, fui bem atendido.",
        "rating": 5
    },
    // {
    //     "nome": "Solange Coordenadora DPC serviços",
    //     "foto": "assets/images/angra-depoimento-3.jpg",
    //     "texto": "Nossa empresa DPC só temos que agradecer a escola de limpeza. Conseguimos cocientizar os profissionais da área de limpeza, a importância de se fazer uma limpeza profissional, com métodos seguros, com diluição correta, e a importância de avaliação do serviço a ser executado pra se colocar em prática início meio e fim. Com isso ganhando tempo, satisfação. Com os treinamentos semestral  capacitamos profissionais aptos ao mercado cada vez mais exigente.",
    //     "rating": 5
    // },
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
