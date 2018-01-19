var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anniekhrystiuk@gmail.com',
    pass: 'ThatAccountIsFake180117'
  }
});

var mailOptions = {
  from: 'anniekhrystiuk@gmail.com',
  to: 'annarainier11@gmail.com',
  subject: 'Sending mail using nodeJS',
  text: 'KALI LINUX'
};

transporter.sendMail (mailOptions, function (err, info) {
  if (err) {
    console.log('error');
  } else {
    console.log('мейл отправлен' + info.response);
  }
});
