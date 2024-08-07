document.addEventListener("DOMContentLoaded", function () {
    const faqData = [
        {
            "question": "O que inclui a consultoria especializada em higienização e limpeza profissional?",
            "answer": "A consultoria pode incluir uma análise detalhada das práticas de limpeza atuais, desenvolvimento de protocolos personalizados, treinamento de equipe, seleção de produtos e equipamentos adequados, e monitoramento contínuo para garantir a eficácia e conformidade."
        },
        {
            "question": "Quais são os benefícios de contratar uma consultoria especializada em higienização e limpeza profissional?",
            "answer": "Benefícios incluem melhoria na eficiência e qualidade da limpeza, redução de custos operacionais, conformidade com normas de saúde e segurança, e criação de um ambiente mais seguro e saudável para funcionários e clientes."
        },
        {
            "question": "Como é o processo de contratação de uma consultoria especializada?",
            "answer": "O processo geralmente começa com uma avaliação inicial das necessidades da empresa, seguida por uma proposta detalhada que inclui objetivos, estratégias, cronograma e custos. Após a aprovação, a consultoria implementa as soluções e oferece suporte contínuo."
        },
        {
            "question": "Quanto tempo leva para ver os resultados de uma consultoria em higienização e limpeza profissional?",
            "answer": "Os resultados podem variar, mas melhorias significativas geralmente são observadas dentro de poucos meses após a implementação das novas práticas e protocolos."
        },
        {
            "question": "Como a consultoria ajuda a empresa a manter conformidade com normas de vigilância sanitária e segurança?",
            "answer": "A consultoria oferece orientação especializada sobre as normas e regulamentos relevantes, desenvolve e implementa protocolos de limpeza que atendem a esses requisitos, e realiza auditorias regulares para garantir a conformidade contínua."
        },
        {
            "question": "Qual é o custo de contratar uma consultoria especializada em higienização e limpeza profissional?",
            "answer": "O custo depende da extensão dos serviços necessários, a duração do projeto, e a complexidade das soluções implementadas. É importante solicitar uma proposta detalhada para entender todos os custos envolvidos."
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
