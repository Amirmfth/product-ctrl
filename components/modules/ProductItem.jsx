import React, { useEffect, useState } from "react";

function ProductItem({ name }) {
  const [status, setStatus] = useState("Good");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (status === "Zero") {
      setCount(0);
    }
  }, [status]);

  return (
    <tr className="odd:bg-opacity-50 odd:bg-warmBeige  even:bg-warmBeige  border-b ">
      {/* Product */}
      <td className="p-2"><p className="p-1 bg-softCream bg-opacity-50 rounded-xl">{name}</p></td>
      {/* Count */}
      <td className="p-2">
        <input
          type="text"
          className="w-12 p-2 rounded-xl"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          disabled={status === "Zero"}
        />
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
    </tr>
  );
}

export default ProductItem;
