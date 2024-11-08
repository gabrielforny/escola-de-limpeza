<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $curso = $_POST['assunto'];

    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Telefone: $telefone\n";
    $mensagem .= "Curso: $curso\n";

    $destinatario = "contato@escoladelimpeza.com.br";
    $assunto = "Formulário - $curso";

    // Cabeçalhos adicionais corrigidos
    $headers = "From: $email\r\n";
    $headers .= "Cc: escoladelimpeza@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    mb_internal_encoding("UTF-8");

    // Enviar o e-mail
    if (mb_send_mail($destinatario, $assunto, $mensagem, $headers)) {
    } else {
        echo "Erro ao enviar o formulário. Tente novamente mais tarde.";
    }
}
?>
