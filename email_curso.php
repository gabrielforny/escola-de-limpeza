<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $curso = $_POST['curso'];

    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Telefone: $telefone\n";
    $mensagem .= "Curso: $curso\n";

    $destinatario = "contato@escoladelimpeza.com.br";
    $assunto = "Formulário - $curso";

    // Cabeçalhos adicionais
    $headers = "From: $email";
    $headers .= "Cc: escoladelimpeza@gmail.com";

    mb_internal_encoding("UTF-8");

    // Enviar email com cabeçalhos
    if (mb_send_mail($destinatario, $assunto, $mensagem, $headers)) {
        // Redirecionamento com base no curso
        switch ($curso) {
            case "Tratamento de Pisos - para diversos setores":
                header("Location: https://pay.hotmart.com/D95587814R");
                break;
        }
        exit();
    } else {
        echo "Erro ao enviar o formulário. Tente novamente mais tarde.";
    }
}
