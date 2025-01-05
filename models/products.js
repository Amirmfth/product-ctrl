import { model, models, Schema } from "mongoose";

const productsSchema = new Schema({
  productType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: String,
});

const Products = models.products || model("products", productsSchema);

export default Products;
