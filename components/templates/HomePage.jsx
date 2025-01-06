import ProductList from "../modules/ProductList";
import {
  selectProducts,
  setProducts,
} from "@/redux/features/product/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Layout from "../layout/Layout";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    backgroundColor: "#C3AB87",
  },
};

function HomePage() {
  // states
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  Modal.setAppElement("section");
  const { loading, error, products } = useSelector(selectProducts);
  const allProducts = products;
  const dispatch = useDispatch();

  //product categories
  const boissons = allProducts.filter(
    (product) => product.productType === "boissons"
  );
  const desserts = allProducts.filter(
    (product) => product.productType === "desserts"
  );
  const accessoires = allProducts.filter(
    (product) => product.productType === "accessoires"
  );

  // effects
  useEffect(() => {
    const authorize = async () => {
      const res = await axios.get("api/check-token").then((res) => res.data).catch(err => err.message);
      if (res.status === "success") {
        setIsOpen(false);
      }
    };
    authorize();
  }, []);
  useEffect(() => {
    dispatch(setProducts());
  }, []);

  // handlers
  const loginHandler = async () => {
    const res = await axios
      .post("api/signin", { password })
      .then((res) => res.data)
      .catch((err) => err.message);

    if (res.status === "success") {
      toast.success(res.message);
      setIsOpen(false);
    } else {
      toast.error("Log in failed");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <HashLoader color="#8FB399" size={150} />
      </div>
    );
  return (
    <Layout>
      <section>
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
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnEsc={false}
          shouldCloseOnOverlayClick={false}
        >
          <div className="flex flex-col space-y-10 w-72 items-start ">
            <h1 className="text-xl font-body">
              To access this page, you need to enter the password:
            </h1>
            <div className="flex space-x-6 w-full justify-between">
              <input
                className="w-full p-1 px-3  rounded-xl"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-fit p-1 px-3 bg-mutedGreen rounded-xl"
                onClick={loginHandler}
              >
                Done
              </button>
            </div>
          </div>
        </Modal>
      </section>
    </Layout>
  );
}

export default HomePage;
