import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <h3 className="bg-[#7D2479] text-white text-center py-2">
        Free shipping on orders above Rs.799 @Personalized Stationery, Crafted with Love!
      </h3>

      <nav className="bg-[#FFD7FDA3] flex items-center justify-between px-6 py-3 shadow-md">
        <img src="logo.png" alt="Logo" className="w-[53px] h-[54px]" />
        <h1 className="font-italianno mr-auto px-4">MeraBestie.com</h1>
      </nav>
    </header>
  );
}

export default Navbar;
