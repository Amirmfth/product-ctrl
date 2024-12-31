import React from "react";
import ProductList from "../modules/ProductList";

function HomePage() {
  return (
    <section>
      <h1 className="w-fit flex space-x-5 mx-auto p-3 px-10 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage">
        <i className="fa-solid fa-martini-glass-citrus"></i>
        <p>Drinks</p>
        <i className="fa-solid fa-martini-glass-citrus"></i>
      </h1>
      <ProductList />
      <h1 className="w-fit flex space-x-5 mx-auto p-3 px-10 rounded-xl font-script text-charcoalGray text-4xl font-bold bg-softSage">
        <i className="fa-solid fa-utensils"></i>
        <p>Salon Assets</p>
        <i className="fa-solid fa-utensils"></i>
      </h1>
      <ProductList />
    </section>
  );
}

export default HomePage;
