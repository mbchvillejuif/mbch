const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // ou tout autre port que vous préférez

app.use(bodyParser.json());

// Configurer le transporter pour nodemailer (utilisez vos propres informations SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'votre_adresse_email@gmail.com',
    pass: 'votre_mot_de_passe_email',
  },
});

// Endpoint pour gérer la soumission du formulaire
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Options du message
  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Nouveau message de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email envoyé : ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
