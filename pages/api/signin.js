import connectDB from "@/utils/connectDB";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const expiration = 7 * 24 * 60 * 60;

  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }

  const { password } = req.body;

  const isPassValid = password === process.env.PASSWORD;

  if (!isPassValid) {
    res.status(400).json({ status: "failed", message: "Invalid password" });
  }
  const token = sign({ name: "SEOUL_STATION" }, process.env.SECRET_KEY, {
    expiresIn: expiration,
  });
  const serializedCookie = serialize("token", token, {
    httpOnly: true,
    maxAge: expiration,
    path: "/",
  });

  res
    .status(200)
    .setHeader("Set-Cookie", serializedCookie)
    .json({ status: "success", message: "Logged in" });
}
