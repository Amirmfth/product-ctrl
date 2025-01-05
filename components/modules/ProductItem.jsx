import { handleDescription, handleStatus } from "@/redux/features/product/productSlice";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

function ProductItem(product) {
  const { _id, name, description, status } = product;
  const desc = useRef(null);
  const dispatch = useDispatch();

  // handlers
  const handleInput = () => {
    const textarea = desc.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to calculate the scrollHeight
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to scroll height
    }
  };

  const StatusChangeHandler = (e) => {
    dispatch(handleStatus({ id: _id, status: e.target.value }));
  }

  const descriptionChangeHandler = (e) => {
    dispatch(handleDescription({ id: _id, description: e.target.value }));
  };

  return (
    <tr className="odd:bg-opacity-50 odd:bg-warmBeige even:bg-warmBeige  border-b ">
      {/* Product */}
      <td className="p-2">
        <p className="p-1 bg-softCream bg-opacity-50 rounded-md ">{name}</p>
      </td>
      {/* Status */}
      <td className="p-2">
        <select
          className={`rounded-md shadow-md p-2  ${
            status === "good"
              ? "bg-mutedGreen"
              : status === "low"
              ? "bg-goldenYellow"
              : "bg-terracottaRed"
          } `}
          value={status}
          onChange={StatusChangeHandler}
        >
          <option className="bg-mutedGreen" value="good">
            Good
          </option>
          <option className="bg-goldenYellow" value="low">
            Low
          </option>
          <option className="bg-terracottaRed" value="zero">
            Zero
          </option>
        </select>
      </td>
      {/* Description */}
      <td className="p-2">
        <textarea
          id="description"
          rows="1"
          className="w-full p-2 rounded-md resize-none overflow-hidden focus:outline-none"
          placeholder="description..."
          ref={desc}
          value={description}
          onInput={handleInput}
          onChange={descriptionChangeHandler}
        ></textarea>
      </td>
    </tr>
  );
}

export default ProductItem;
