<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];

    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Telefone: $telefone\n";

    $destinatario = "gf097@hotmail.com";
    $assunto = "Formulário - {curso}";

    mb_internal_encoding("UTF-8");

    mb_send_mail($destinatario, $assunto, $mensagem);

    exit();
}
