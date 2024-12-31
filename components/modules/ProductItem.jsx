import React, { useEffect, useRef, useState } from "react";

function ProductItem({ name }) {
  const [status, setStatus] = useState("Good");
  const [description, setDescription] = useState("");
  const desc = useRef(null)

  useEffect(() => {
    if (status === "Zero") {
      setDescription(0);
    }
  }, [status]);


  const handleInput = () => {
    const textarea = desc.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to calculate the scrollHeight
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust to scroll height
    }
  };

  return (
    <tr className="odd:bg-opacity-50 odd:bg-warmBeige  even:bg-warmBeige  border-b ">
      {/* Product */}
      <td className="p-2">
        <p className="p-1 bg-softCream bg-opacity-50 rounded-xl">{name}</p>
      </td>
      {/* Status */}
      <td className="p-2">
        <select
          className={`rounded-xl shadow-md p-2  ${
            status === "Good"
              ? "bg-mutedGreen"
              : status === "Low"
              ? "bg-goldenYellow"
              : "bg-terracottaRed"
          } `}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option className="bg-mutedGreen" value="Good">
            Good
          </option>
          <option className="bg-goldenYellow" value="Low">
            Low
          </option>
          <option className="bg-terracottaRed" value="Zero">
            Zero
          </option>
        </select>
      </td>
      {/* Description */}
      <td className="p-2">
        <textarea
          id="description"
          rows="1"
          className="w-full p-2  rounded-xl resize-none overflow-hidden focus:outline-none"
          placeholder="description..."
          ref={desc}
          onInput={handleInput}
        ></textarea>
      </td>
    </tr>
  );
}

export default ProductItem;
