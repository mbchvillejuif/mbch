<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Composer le sujet et le corps de l'e-mail
    $subject = "Commentaire de $name";
    $body = "Email: $email\n\nMessage: $message";

    // Configurer PHPMailer
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mbch.societe@gmail.com';
        $mail->Password = 'otzcbwrqdarixaoi';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        // Envoyer l'e-mail
        $mail->setFrom('mbch.societe@gmail.com', 'MBCH');
        $mail->addAddress('mbch.societe@gmail.com');
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        
        // Envoyer une réponse JSON pour indiquer le succès
        http_response_code(200);
        echo json_encode(['status' => 'Success']);
    } catch (Exception $e) {
        // En cas d'erreur, envoyer une réponse JSON avec l'erreur
        http_response_code(500);
        echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
    }
} else {
    // En cas de méthode HTTP incorrecte, envoyer une réponse JSON avec une erreur
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>
