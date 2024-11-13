<?php
// LLAMANDO A LOS CAMPOS
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

// DATOS PARA EL CORREO
$destinatario = "nericarrera@yahoo.com.ar";
$asunto = "Contacto desde nuestra web";

// CONSTRUYENDO EL MENSAJE
$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Teléfono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// CABECERAS
$headers = "From: $nombre <$correo>\r\n";
$headers .= "Reply-To: $correo\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// ENVIANDO MENSAJE
if (mail($destinatario, $asunto, $carta, $headers)) {
    // Si el mensaje se envía correctamente, redirige al usuario a la página de confirmación
    header('Location: mensaje-de-envio.html');
    exit();
} else {
    echo "Error al enviar el mensaje. Inténtelo más tarde.";
}
?>



