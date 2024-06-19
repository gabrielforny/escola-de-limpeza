document.addEventListener("DOMContentLoaded", function () {
    const eventos = [
        {
            "day": "12",
            "month": "Fevereiro",
            "title": "Transformação na área de limpeza e higienização",
            "time": "22:10",
            "organization": "Nome da Empresa"
        },
        {
            "day": "15",
            "month": "Março",
            "title": "Inovação em tecnologia",
            "time": "14:30",
            "organization": "Empresa Tech"
        },
        {
            "day": "18",
            "month": "Março",
            "title": "Inovação em tecnologia",
            "time": "20:30",
            "organization": "Empresa Eadae"
        }
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