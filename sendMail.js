const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: 'netcodenamitsaha@gmail.com', // Replace with your email
        pass: 'axupipqoejhossys'   // Replace with your email password
    }
});

// Define your email options
let mailOptions = {
  from: '"Amit Saha" <netcodenamitsaha@gmail.com>', // Sender address
  to: "sazzadshakhbd@gmail.com", // List of recipients
  subject: "Testing HTML Email Template", // Subject line
  html: htmlTemplate, // HTML body content from the file
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error: ', error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
