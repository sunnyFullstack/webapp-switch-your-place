const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text, html }) => {
  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or "Outlook", "Yahoo", or use custom SMTP
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password (not email password)
    },
  });

  // Email options
  const mailOptions = {
    from: `"My App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  // Send mail
  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to:", to);
  } catch (err) {
    console.error("❌ Email send failed:", err.message);
    throw err;
  }
};

module.exports = sendEmail;
