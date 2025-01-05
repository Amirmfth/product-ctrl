import ProductItem from "./ProductItem";


function ProductList({products}) {
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
            <ProductItem key={product.id} {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
