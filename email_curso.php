<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Telefone: $telefone\n";

    $destinatario = "contato@escoladelimpeza.com.br";
    $assunto = "Formulário - {curso}";

    // Cabeçalhos adicionais
    $headers = "From: $email";
    $headers .= "Cc: escoladelimpeza@gmail.com";

    mb_internal_encoding("UTF-8");

    // Enviar email com cabeçalhos
    mb_send_mail($destinatario, $assunto, $mensagem, $headers);

    exit();
}
?>
