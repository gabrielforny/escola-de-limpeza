<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $comoAjudar = $_POST['comoAjudar'];
    $area = $_POST['area'];
    $estado = $_POST['estado'];
    $cidade = $_POST['cidade'];

    $mensagem = "Nome: $nome\n";
    $mensagem .= "Email: $email\n";
    $mensagem .= "Telefone: $telefone\n";
    $mensagem .= "Mensagem: $comoAjudar\n";

    $destinatario = "gf097@hotmail.com";
    $assunto = "Formulário - Fale com a gente";

    mb_internal_encoding("UTF-8");

    mb_send_mail($destinatario, $assunto, $mensagem);

    exit();
}
