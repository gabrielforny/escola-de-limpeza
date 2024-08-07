document.addEventListener("DOMContentLoaded", function () {
    const faqData = [
        {
            "question": "Quais são os benefícios de contratar uma palestra sobre higienização e limpeza profissional?",
            "answer": "As palestras podem fornecer insights atualizados sobre as melhores práticas de limpeza, aumentar a conscientização sobre segurança e higiene no local de trabalho, motivar os funcionários, e promover um ambiente mais saudável e produtivo."
        },
        {
            "question": "O que está incluído em uma palestra típica sobre higienização e limpeza profissional?",
            "answer": "As palestras geralmente incluem informações sobre técnicas de limpeza eficientes, uso seguro de produtos químicos, práticas de sustentabilidade, normas de vigilância sanitária, biossegurança, e dicas para manter um ambiente de trabalho limpo e seguro."
        },
        {
            "question": "Quanto tempo dura uma palestra sobre higienização e limpeza profissional?",
            "answer": "A duração das palestras pode variar, mas geralmente duram entre 1 a 3 horas, dependendo da profundidade do conteúdo e das necessidades específicas da empresa."
        },
        {
            "question": "As palestras podem ser personalizadas para atender às necessidades específicas da minha empresa?",
            "answer": "Sim, a maioria dos palestrantes oferece a possibilidade de personalizar o conteúdo para abordar questões específicas e desafios enfrentados pela sua empresa, garantindo assim maior relevância e impacto."
        },
        {
            "question": "Qual é o custo de contratar uma palestra sobre higienização e limpeza profissional?",
            "answer": "O custo pode variar dependendo da experiência do palestrante, a duração da palestra, e a personalização do conteúdo. É recomendável solicitar um orçamento detalhado antes de contratar."
        },
        {
            "question": "Como posso avaliar a eficácia de uma palestra sobre higienização e limpeza profissional?",
            "answer": "A eficácia pode ser avaliada através de feedback dos participantes, observação de melhorias nas práticas de limpeza e higiene no local de trabalho, e indicadores de saúde e segurança pós-palestra."
        },
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
