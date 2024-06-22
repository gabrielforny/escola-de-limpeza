function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');

    const allContent = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-icon');
    const allHeaders = document.querySelectorAll('.accordion-header');
    allContent.forEach((item) => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });
    allIcons.forEach((item) => {
        if (item !== icon) {
            item.src = '/assets/icons/icon-plus-faq.svg';
        }
    });
    allHeaders.forEach((item) => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    if (content.style.display === "flex") {
        content.style.display = "none";
        icon.src = "/assets/icons/icon-plus-faq.svg";
        element.classList.remove('active');
    } else {
        content.style.display = "flex";
        icon.src = "/assets/icons/icon-close-faq.svg";
        element.classList.add('active');
    }
}
