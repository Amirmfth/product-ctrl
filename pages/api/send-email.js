import nodemailer from "nodemailer";

const data = [
  { name: "milk", status: "zero" },
  { name: "salt", status: "low" },
  { name: "bread", status: "low" },
];

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, fName, lName } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amirmf831380@gmail.com",
        pass: "tnydqbowrqerohzc",
      },
    });

    function generateHtml(data) {
      return `<ul>${data.map(item => `<li>${item.name}: ${item.status}</li>`).join('')}</ul>`;
    }


    // Email options
    const mailOptions = {
      from: "amirmf831380@gmail.com",
      to: email,
      subject: "Thank you for your reservation!",
      html: generateHtml(data),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
