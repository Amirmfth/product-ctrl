import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, products } = req.body;
    console.log(products)

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amirmf831380@gmail.com",
        pass: "tnydqbowrqerohzc",
      },
    });

    function generateHtml(data) {
      return `<ul>${data
        .map((item) => `<li>${item.name}: ${item.status} - ${item.description}</li>`)
        .join("")}</ul>`;
    }

    // Email options
    const mailOptions = {
      from: "amirmf831380@gmail.com",
      to: email,
      subject: "Liste d'ingrédients requis",
      html: generateHtml(products),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ stauts: "failed", error: "Failed to send email" });
  }
}
