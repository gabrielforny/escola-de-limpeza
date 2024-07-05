document.addEventListener("DOMContentLoaded", function () {
    const eventos = [
        {
            "day": "05",
            "month": "Julho",
            "title": " Treinamento exclusivo para empresa",
            "time": "22:10",
            "organization": "São Paulo"
        },
        {
            "day": "06",
            "month": "Julho",
            "title": " Treinamento exclusivo distribuidor",
            "time": "22:10",
            "organization": "Mercotech /SP"
        },
        {
            "day": "01",
            "month": "Agosto",
            "title": "webinar exclusivo para distribuidores Mercotech. Tema: Segurança dos Alimentos em Supermercados",
            "time": "14:30",
            "organization": "Online"
        },
        {
            "day": "17",
            "month": "Agosto",
            "title": "Cronograma de treinamento hospitalar Tema NR32",
            "time": "14:30",
            "organization": "Serranaa/SP"
        },
        {
            "day": "25",
            "month": "Agosto",
            "title": "Cronograma de treinamento hospitalar. Tema Humanização na  Higienização e Lavanderia e NR32 para SND",
            "time": "20:30",
            "organization": "Catalão/GO"
        },
        {
            "day": "01",
            "month": "Setembro",
            "title": "Consultoria de Higienização",
            "time": "20:30",
            "organization": "Botucatu/SP"
        },
        {
            "day": "11",
            "month": "Dezembro",
            "title": "Assessoria e treinamento a distribuidora de químicos saneantes",
            "time": "22:10",
            "organization": "Juiz de fora"
        },
    ];

    const eventosContainer = document.querySelector('.cards-eventos');
    eventos.forEach(evento => {
        const eventoCard = document.createElement('div');
        eventoCard.classList.add('evento-card');

        eventoCard.innerHTML = `
            <div class="topo">
                <div class="evento-data">
                    <span class="evento-dia">${evento.day}</span>
                    <span class="evento-mes">${evento.month.toUpperCase()}</span>
                </div>
                <h3>${evento.title}</h3>
            </div>
            <div class="evento-details">
                <p class="hora">${evento.time}</p>
                <p class="realizacao">Realização: ${evento.organization}</p>
            </div>
        `;

        eventosContainer.appendChild(eventoCard);
    });
});