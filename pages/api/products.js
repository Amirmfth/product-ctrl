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
    res.status(200).json({ status: "success", products });
  } else if (req.method === "POST") {
    try {
      const newProducts = req.body.products;
      newProducts.forEach(async (product) => {
        const prevProd = await Products.findOne({ _id: product._id });
        prevProd.status = product.status;
        prevProd.description = product.description;
        prevProd.save();
      });  
    } catch (error) {
      return res.status(500)
      .json({ status: "failed", message: "List update failed" });
    }

    res
      .status(200)
      .json({ status: "success", message: "List updated successfully" });
  }
}
