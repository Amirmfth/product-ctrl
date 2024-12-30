import ProductItem from "./ProductItem";

const products = [
  { name: "Milk" },
  { name: "Butter" },
  { name: "Coffee" },
  { name: "Rice" },
  { name: "Frozen meat" },
  { name: "Youghurt" },
  { name: "Bread" },
];

function ProductList() {
  return (
    <div className="my-10 p-5 rounded-xl bg-softCream">
      <table className="w-full table-fixed text-center ">
        <thead className="text-xl font-script">
          <tr>
            <th>Product</th>
            <th>Count</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductItem key={index} name={product.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
