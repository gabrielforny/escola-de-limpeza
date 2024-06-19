document.addEventListener("DOMContentLoaded", function () {
    const faqData = [
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
        },
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
        },
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
        },
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
        },
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
        },
        {
            "question": "Lorem Ipsum is simply dummy text?",
            "answer": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
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
