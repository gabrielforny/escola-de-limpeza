const coursesData = [
    {
        "titulo": "Agente de Conservação e Limpeza (Do zero ao avançado)",
        "tipo": "profissionais",
        "image": "assets/images/agente-de-conservacao.png",
        "preco": "R$ 400,00",
        "desconto": "R$ 200,00",
        "nivel": "Avançado",
        "horas": "120 horas",
        "porcentagemDesconto": "50% de desc"
    },
    {
        "titulo": "Tratamento de Pisos (Para diversos setores)",
        "tipo": "profissionais",
        "image": "assets/images/tratamento-de-piso.png",
        "preco": "R$ 500,00",
        "desconto": "R$ 250,00",
        "nivel": "Avançado",
        "horas": "120 horas",
        "porcentagemDesconto": "50% de desc"
    }
];

const coursesContainer = document.querySelector('.courses-container');
const filterButtons = document.querySelectorAll('.filter-button');
let displayedCourses = [];
let currentFilter = 'all';
let coursesPerPage = 6;
let currentPage = 1;

function displayCourses() {
    coursesContainer.innerHTML = '';
    const filteredCourses = coursesData.filter(course => currentFilter === 'all' || course.tipo === currentFilter);
    displayedCourses = filteredCourses.slice(0, currentPage * coursesPerPage);
    displayedCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
        <img src="${course.image}" alt="${course.titulo}" width: 394px; height: 210px;">
        <div>
            <div class="info">
                <p>PARA ${course.tipo.toUpperCase()}</p>
                <div class="valores">
                    <h3 class="valor-com-desconto">${course.preco}</h3>
                    <p class="valor-original">${course.desconto}</p>
                </div>
            </div>
            <div class="info-curso">
                <p class="nivel">  
                    <img src="assets/icons/icon-avancado.svg" alt="icone-coroa" width: 20px; height: 16px;"> 
                    ${course.nivel}
                </p>
                <p class="hora">
                    <img src="assets/icons/icon-hora.svg" alt="icone-horas" width: 20px; height: 16px;"> 
                    ${course.horas}
                </p>
                <p class="desconto">
                    <img src="assets/icons/icon-check.svg" alt="icone-check" width: 20px; height: 16px;"> 
                    ${course.porcentagemDesconto}
                    </p>
            </div>
            <h3>${course.titulo}</h3>
        </div>
        <a>
            Conhecer o curso
            <img src="assets/icons/arrow-right.svg" alt="icone-arrow-right|"> 
        </a>
    `;
        coursesContainer.appendChild(courseCard);
    });
}

function filterCourses(filter) {
    currentFilter = filter;
    currentPage = 1;
    displayCourses();
}

function loadMoreCourses() {
    currentPage++;
    displayCourses();
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterCourses(button.getAttribute('data-filter'));
    });
});

displayCourses();
