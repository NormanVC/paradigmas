<?php

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] : '';

$data = json_decode(file_get_contents('data.json'));

if ($data->usuario == $usuario && $data->pass == $pass) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
