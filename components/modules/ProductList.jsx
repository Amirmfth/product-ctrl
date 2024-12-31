import ProductItem from "./ProductItem";

const products = [
  { name: "Milk", id: "2024-12-31T05:39:58+03:30-0" },
  { name: "Butter", id: "2024-12-31T05:39:58+03:30-1" },
  { name: "Coffee", id: "2024-12-31T05:39:58+03:30-2" },
  { name: "Rice", id: "2024-12-31T05:39:58+03:30-3" },
  { name: "Frozen meat", id: "2024-12-31T05:39:58+03:30-4" },
  { name: "Youghurt", id: "2024-12-31T05:39:58+03:30-5" },
  { name: "Bread", id: "2024-12-31T05:39:58+03:30-6" },
];

function ProductList() {
  return (
    <div className="my-10 p-5 rounded-xl bg-softCream shadow-xl">
      <table className="w-full table-auto text-center ">
        <thead className="text-xl font-script text-charcoalGray">
          <tr>
            <th>Product</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem key={product.id} name={product.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
