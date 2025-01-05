import Products from "@/models/products";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    res.status(500).json({ status: "failed", error: error.message });
  }

  if (req.method === "GET") {
    const products = await Products.find();
    res.status(200).json({ status: "success", data: products });
  } else if (req.method === "POST") {
    const { type, name, status, description } = req.body;
    const products = await Products.create({ type, name, status, description });
    res.status(200).json({ status: "success", data: products });
  }
}
