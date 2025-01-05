import ProductList from "../modules/ProductList";
import {
  selectProducts,
  setProducts,
} from "@/redux/features/product/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Layout from "../layout/Layout";

function HomePage() {
  const { loading, error, products } = useSelector(selectProducts);
  const allProducts = products;
  const dispatch = useDispatch();
  const boissons = allProducts.filter(
    (product) => product.productType === "boissons"
  );
  const desserts = allProducts.filter(
    (product) => product.productType === "desserts"
  );
  const accessoires = allProducts.filter(
    (product) => product.productType === "accessoires"
  );

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <HashLoader color="#8FB399" size={150} />
      </div>
    );
  return (
    <Layout>
      <section id="home-page">
        <h1
          id="boissons"
          className="w-fit flex space-x-5 mx-auto mt-16 p-3 px-10 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage"
        >
          <i className="fa-solid fa-martini-glass-citrus"></i>
          <p>Boissons</p>
          <i className="fa-solid fa-martini-glass-citrus"></i>
        </h1>
        <ProductList products={boissons} />
        <h1
          id="desserts"
          className="w-fit flex space-x-5 mx-auto p-3 px-10 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage"
        >
          <i className="fa-solid fa-ice-cream"></i>
          <p>Desserts</p>
          <i className="fa-solid fa-ice-cream"></i>
        </h1>
        <ProductList products={desserts} />
        <h1
          id="accessoires"
          className="w-fit flex space-x-5 mx-auto p-3 px-10 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage"
        >
          <i className="fa-solid fa-utensils"></i>
          <p>Accessoires</p>
          <i className="fa-solid fa-utensils"></i>
        </h1>
        <ProductList products={accessoires} />
      </section>
    </Layout>
  );
}

export default HomePage;
