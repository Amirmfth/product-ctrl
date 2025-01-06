import { verifyToken } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ status: "failed", message: "not logged in" });
  }

  const isTokenValid = verifyToken(token, process.env.SECRET_KEY);

  if (!isTokenValid) {
    return res.status(401).json({ status: "failed", message: "not authorized" });
  }

  res.status(200).json({ status: "success", message: "authorized" });
}
