<?php
/**
 * Endpoint del formulario de contacto (hosting compartido con PHP).
 * Recibe JSON { name, email, message, website } por POST y envía un correo.
 * `website` es un honeypot: debe llegar vacío.
 */

const CONTACT_TO = 'cuentame@taylorasprilla.dev';
const CONTACT_FROM = 'no-reply@taylorasprilla.dev'; // debe ser un correo del dominio en cPanel
const ALLOWED_HOSTS = ['taylorasprilla.dev', 'www.taylorasprilla.dev', 'localhost'];
const THROTTLE_SECONDS = 30;

// Nunca filtrar avisos/errores de PHP en la respuesta JSON
ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond($code, $payload)
{
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

// Solo aceptar peticiones del propio sitio
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    if (!in_array($originHost, ALLOWED_HOSTS, true)) {
        respond(403, ['ok' => false, 'error' => 'forbidden']);
    }
}

$data = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: los bots rellenan este campo. Responder "ok" sin enviar nada.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

// Limitar frecuencia por IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$throttleFile = sys_get_temp_dir() . '/contact_' . md5($ip);
if (is_file($throttleFile) && (time() - filemtime($throttleFile)) < THROTTLE_SECONDS) {
    respond(429, ['ok' => false, 'error' => 'too_many_requests']);
}

// Normalizar y validar
$clean = function ($value) {
    return trim(is_string($value) ? $value : '');
};
$name = $clean($data['name'] ?? '');
$email = $clean($data['email'] ?? '');
$message = $clean($data['message'] ?? '');

// Evitar inyección de cabeceras
$name = str_replace(["\r", "\n"], ' ', $name);
$email = str_replace(["\r", "\n"], '', $email);

$nameLen = mb_strlen($name);
$msgLen = mb_strlen($message);
if ($nameLen < 2 || $nameLen > 100 || $msgLen < 10 || $msgLen > 5000 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'invalid_input']);
}

$subject = mb_encode_mimeheader('Nuevo mensaje desde taylorasprilla.dev — ' . $name, 'UTF-8');
$body = "Nombre: {$name}\nCorreo: {$email}\n\n{$message}\n";
$headers = [
    'From: Portafolio <' . CONTACT_FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

if (!@mail(CONTACT_TO, $subject, $body, implode("\r\n", $headers), '-f' . CONTACT_FROM)) {
    respond(500, ['ok' => false, 'error' => 'send_failed']);
}

@touch($throttleFile);
respond(200, ['ok' => true]);
