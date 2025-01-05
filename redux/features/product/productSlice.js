import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const setProducts = createAsyncThunk("product/setProducts", async () => {
  const products = await axios.get("/api/products");
  return products.data.products;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleDescription: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload.id
      );

      if (product) {
        product.description = action.payload.description;
      } else {
        console.warn(`Product with id ${action.payload.id} not found.`);
      }
    },
    handleStatus: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload.id
      );

      if (product) {
        product.status = action.payload.status;
      } else {
        console.warn(`Product with id ${action.payload.id} not found.`);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(setProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
export const { handleDescription, handleStatus } = productSlice.actions;
export { setProducts };
export const selectProducts = (store) => store.product;
