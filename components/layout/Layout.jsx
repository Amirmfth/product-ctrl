import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header>
        <div className="fixed flex justify-between items-center bg-softSage top-0 left-0 right-0 p-4">
          <h1 className="font-script px-3 text-4xl text-darkChocolate font-bold">
            Seoul Station
          </h1>
          <div className="flex space-x-3">
            <a href="#boissons" className="text-xl p-2 rounded-xl bg-softCream">
              <i className="fa-solid fa-martini-glass-citrus"></i>
            </a>
            <a href="#desserts" className="text-xl p-2 rounded-xl bg-softCream">
              <i className="fa-solid fa-ice-cream"></i>
            </a>
            <a
              href="#accessoires"
              className="text-xl p-2 rounded-xl bg-softCream"
            >
              <i className="fa-solid fa-utensils"></i>
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="w-full text-center text-charcoalGray pb-6">
        <p>
          developed by <b className=" text-2xl">Amir</b> with<b className=" text-2xl">❤️</b> 
        </p>
      </footer>
    </div>
  );
}

export default Layout;
