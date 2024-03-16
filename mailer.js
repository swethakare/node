const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Outlook SMTP server
  port: 587, // Port for TLS/STARTTLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'skare@gmu.edu', // Your Outlook email address
    pass: 'Microsoft%12' // Your Outlook email password
  }
});

const mailOptions = {
  from: 'skare@gmu.edu', // Sender's email address
  to: 'skare@gmu.edu', // Recipient's email address
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
