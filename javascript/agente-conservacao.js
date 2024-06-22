function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');

    const allContent = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-icon');
    allContent.forEach((item) => {
        if (item !== content) {
            item.style.display = 'none';
        }
    });
    allIcons.forEach((item) => {
        if (item !== icon) {
            item.textContent = '➕';
        }
    });

    if (content.style.display === "flex") {
        content.style.display = "none";
        icon.textContent = "➕";
    } else {
        content.style.display = "flex";
        icon.textContent = "➖";
    }
}
