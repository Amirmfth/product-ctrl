import {
  selectProducts,
  setProducts,
} from "@/redux/features/product/productSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useState } from "react";

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

function FixedBtns() {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, products } = useSelector(selectProducts);
  const dispatch = useDispatch();
  Modal.setAppElement("#app");

  // handlers
  const cancelHandler = () => {
    dispatch(setProducts());
    toast.success("All changed got cancelled");
  };

  const saveHandler = async () => {
    const res = await axios.post("api/products", { products });
    if (res.data.status === "success") {
      toast.success(res.data.message);
    } else {
      toast.error("failed to save changes");
    }

    setIsOpen(false);
  };

  const sendEmailHandler = async () => {
    const res = await axios.post("api/products", { products });
    if (res.data.status === "success") {
      const changedProducts = products.filter((product) => {
        if (product.status !== "good") {
          return product;
        }
      });
      const emailRes = await axios.post("api/send-email", {
        email: "Pani.fatahi@gmail.com",
        products: changedProducts,
      });
      if (emailRes.data.status === "success") {
        toast.success(emailRes.data.message);
      } else {
        toast.error("failed to send email");
      }
    } else {
      toast.error("failed to save changes");
    }

    setIsOpen(false);
  };

  const openModal = () => setIsOpen(true);

  return (
    <div
      id="app"
      className="fixed right-0 bottom-0 left-0 flex justify-evenly p-5 bg-softCream bg-opacity-80"
    >
      <button
        onClick={cancelHandler}
        className="p-2 px-6  rounded-xl bg-terracottaRed text-xl "
      >
        Cancel
      </button>
      <button
        onClick={openModal}
        className="p-2 px-6  rounded-xl bg-mutedGreen text-xl "
      >
        Save Changes
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col space-y-10 w-72 items-start ">
          <h1 className="text-3xl font-body">Are you sure?</h1>
          <div className="flex space-x-6 w-full justify-between">
            <button
              className=" p-1 px-3  bg-terracottaRed rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <div className="flex flex-col space-y-3 items-center">
              <button
                className="w-fit p-1 px-3 bg-mutedGreen rounded-xl"
                onClick={saveHandler}
              >
                Save
              </button>
              <button
                className="p-1 px-3   bg-mutedGreen rounded-xl"
                onClick={sendEmailHandler}
              >
                Save & Send email
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FixedBtns;
