document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");
    const telefoneMask = IMask(telefoneInput, {
        mask: '(00) 00000-0000'
    });

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.querySelector(".messagem-sucesso");

    const btnForm = document.querySelector(".no-loading");
    const btnEnvio = document.querySelector(".loading");
    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        btnForm.style.display = "none";
        btnEnvio.style.display = "inline";
        btnForm.disabled = true;
        btnEnvio.disabled = true;

        fetch('send_email_fale_com_a_gente.php', {
            method: 'POST',
            body: new FormData(contactForm)
        })
            .then(response => {
                if (response.ok) {
                    successMessage.style.display = "flex";
                }
            })
            .catch(error => {
                console.error('Erro ao enviar formulário:', error);
            })
            .finally(() => {
                btnForm.style.display = "inline";
                btnEnvio.style.display = "none";
                btnForm.disabled = false;
                btnEnvio.disabled = false;
    
                contactForm.reset();
            });

        contactForm.reset();
    });

    function validateForm() {
        const nome = contactForm.elements['nome'].value.trim();
        const email = contactForm.elements['email'].value.trim();
        const telefone = contactForm.elements['telefone'].value.trim();
        const comoAjudar = contactForm.elements['comoAjudar'].value.trim();

        if (nome === '' || email === '' || telefone === '' || comoAjudar === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return false;
        }
        
        if (!contactForm.elements['termos'].checked) {
            alert('Você deve aceitar os termos e condições antes de enviar o formulário.');
            return false;
        }

        return true;
    }
});