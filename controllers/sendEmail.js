const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "brooklyn.schowalter@ethereal.email",
      pass: "ypJhT2fjgXC8Xyxhx3",
    },
  });

  let info = await transporter.sendMail({
    from: '"Ajay Bains" <webdevelpr2021@gmail.com>',
    to: "bar@example.com",
    subject: "Testing email sending in node js",
    html: "<h2>wohoo! sent</h2>",
  });
  res.json(info);
};
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "ajaybains2004@gmail.com", // Change to your recipient
    from: "webdevelpr2021@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
  console.log(info);
};
module.exports = sendEmail;
