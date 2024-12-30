import React from "react";
import ProductList from "../modules/ProductList";

function HomePage() {
  return (
    <section>
      <h1 className="w-fit mx-auto p-3 px-20 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage">
        Drinks
      </h1>
      <ProductList />
      <h1 className="w-fit mx-auto p-3 px-20 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage">
        Salon Assets
      </h1>
      <ProductList />
    </section>
  );
}

export default HomePage;
