const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').load();
const nodemailer = require('nodemailer');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/black.html`);
});

app.post('/contact', function(req, res) {
  let mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'emaildummytest123@gmail.com',
      pass: 'hobbes!23'
    }
  });
  mailOpts = {
    from: req.body.email,
    to: 'emaildummytest123@gmail.com',
    subject: 'daybreaker',
    text: `${req.body.email}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response) {
    if (error) {
      console.log('false');
      res.json({ success: false });
    } else {
      console.log('true');
      res.json(200, { success: true });
    }
  });
});

app.listen(3001, err => {
  console.log(err || `server running on port 3001`);
});
