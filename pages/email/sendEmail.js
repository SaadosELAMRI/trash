const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, subject, message }) => {
  try {
    // create a nodemailer transporter with your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'saadoselamri@gmail.com', // replace with your Gmail email address
        pass: 'wzjemyfqsqyspuzo', // replace with your Gmail password
      }
    });

    // send the email
    const info = await transporter.sendMail({
      from: email, // sender's email address (taken from the form)
      to: 'saadoselamri@gmail.com', // your email address
      subject: subject, // subject line (taken from the form)
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}` // email body (taken from the form)
    });

    console.log(`Email sent: ${info.messageId}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};

module.exports = sendEmail;
