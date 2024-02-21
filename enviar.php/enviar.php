<?php


// LLAMANDO A LOS CAMPOS

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// DATOS PARA EL CORREO

$destinatario = "nericarrera@yahoo.com.ar";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// ENVIANDO MENSAJE

mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html');




?>



