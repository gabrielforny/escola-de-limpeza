document.addEventListener("DOMContentLoaded", function () {
    const faqData = [
        {
            "question": "Quais são os pré-requisitos para se inscrever em um curso?",
            "answer": "Não há pré-requisitos específicos para a maioria dos cursos oferecidos. No entanto, é recomendado que os candidatos tenham pelo menos o ensino fundamental completo e interesse na área de limpeza profissional."
        },
        {
            "question": "O que é abordado nos cursos de higienização e limpeza?",
            "answer": "Os cursos geralmente cobrem uma variedade de tópicos, incluindo técnicas de limpeza, uso seguro de produtos químicos, manuseio de equipamentos de limpeza, práticas de sustentabilidade, segurança no trabalho, biossegurança, e normas de vigilância sanitária."
        },
        {
            "question": "Os cursos  são oferecidos online ou presencialmente?",
            "answer": "A maioria dos cursos são oferecido no formato online. Mas temos módulos presenciais diretamente nas empresas como parte de um treinamento de equipe. . A escolha do formato depende da disponibilidade do aluno e da natureza do curso."
        },
        {
            "question": "Qual tempo médio de duração?",
            "answer": "A duração dos cursos pode variar. Treinamentos de apenas 01 dia ou semanas, dependendo do conteúdo e da intensidade do curso. Existem cursos rápidos de capacitação e cursos mais aprofundados que abrangem uma formação mais completa."
        },
        {
            "question": "Os cursos fornecem certificado?",
            "answer": "Sim, a maioria dos cursos profissionalizantes de higienização e limpeza oferece um certificado de conclusão, que pode ser útil para melhorar as oportunidades de emprego e demonstrar competência na área."
        },
        {
            "question": "Quais são as oportunidades de carreira após a conclusão de um curso de higienização e limpeza?",
            "answer": "Após a conclusão do curso, os participantes podem buscar oportunidades em diversos setores, como saúde (hospitais e clínicas), hotelaria, escolas, indústrias alimentícias, serviços de limpeza profissional, entre outros. O certificado pode ajudar a obter posições como auxiliar de limpeza, supervisor de limpeza, consultor de higiene, entre outros cargos relacionados."
        }
    ];

    const faqContainer = document.querySelector('.faq-container');

    const column1 = document.createElement('div');
    column1.classList.add('faq-column');

    const column2 = document.createElement('div');
    column2.classList.add('faq-column');

    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const faqQuestion = document.createElement('div');
        faqQuestion.classList.add('faq-question');
        faqQuestion.innerHTML = `${item.question} <span class="faq-toggle closed"></span>`;

        const faqAnswer = document.createElement('div');
        faqAnswer.classList.add('faq-answer');
        faqAnswer.innerText = item.answer;

        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);

        if (index % 2 === 0) {
            column1.appendChild(faqItem);
        } else {
            column2.appendChild(faqItem);
        }

        faqQuestion.addEventListener('click', () => {
            faqItem.classList.toggle('active');
            const faqToggle = faqQuestion.querySelector('.faq-toggle');
            if (faqItem.classList.contains('active')) {
                faqToggle.classList.remove('closed');
                faqToggle.classList.add('open');
            } else {
                faqToggle.classList.remove('open');
                faqToggle.classList.add('closed');
            }
        });
    });

    faqContainer.appendChild(column1);
    faqContainer.appendChild(column2);
});
