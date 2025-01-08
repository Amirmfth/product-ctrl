import connectDB from "@/utils/connectDB";
import User from "@/models/products";
export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    await connectDB();
    const result = await User.updateMany(
      {},
      { $set: { status: "good", description: "" } }
    );
    res
      .status(200)
      .json({ status: "success", message: "DB reset successfully", result });
  } catch (error) {
    res.status(500).json({ status: "failed", error: "failed to reset DB" });
  }
}
