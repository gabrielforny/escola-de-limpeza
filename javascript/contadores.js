document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o dispositivo é móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Se for um dispositivo móvel, inicia a animação imediatamente
    if (isMobile) {
        animateNumbers();
    } else {
        // Se não for, configura a verificação do viewport para acionar a animação
        function checkViewportAndAnimateNumbers() {
            if (isElementInViewport(document.getElementById("numeracaoSection"))) {
                animateNumbers();
                window.removeEventListener("scroll", checkViewportAndAnimateNumbers);
                window.removeEventListener("resize", checkViewportAndAnimateNumbers);
            }
        }

        window.addEventListener("scroll", checkViewportAndAnimateNumbers);
        window.addEventListener("resize", checkViewportAndAnimateNumbers);
    }
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateNumbers() {
    const duration = 2000;
    const endValues = {
        teoria: 1200,
        teoria2: 2500,
        teoria3: 100,
        teoria4: 100
    };

    Object.entries(endValues).forEach(([key, end]) => {
        let start = 0;
        const element = document.getElementById(key);

        const interval = setInterval(() => {
            element.textContent = start + " +";
            start += Math.ceil(end / (duration / 100));
            if (start >= end) {
                element.textContent = end + " +";
                clearInterval(interval);
            }
        }, 50);
    });
}
