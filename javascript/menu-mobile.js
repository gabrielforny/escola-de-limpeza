document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('menu-hamburger');
    const offCanvas = document.getElementById('off-canvas');
    const closeBtn = document.getElementById('close-btn');
    const dropdownBtns = document.querySelectorAll('.dropbtn-mobile');

    hamburger.addEventListener('click', function () {
        offCanvas.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        offCanvas.style.left = '100%';
    });

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const parent = btn.parentElement;
            parent.classList.toggle('open');
        });
    });
});
