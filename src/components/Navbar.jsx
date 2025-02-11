import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <h3 className="bg-[#7D2479] text-white text-center py-2">
        Free shipping on orders above Rs.799 @Personalized Stationery, Crafted with Love!
      </h3>

      <nav className="bg-[#FFD7FDA3] flex items-center justify-between px-6 py-3 shadow-md">
        <img src="logo.png" alt="Logo" className="w-[63px] h-[64px]" />
        <h1 className="font-italianno mr-auto text-5xl px-6 mt-2">MeraBestie.com</h1>
        <div className="mr-auto flex gap-x-0.5">
          <h1 className="font-jetbrains mr-auto px-4 text-2xl">Shop by Category</h1>
          <img src="down.png" alt="Logo" className="w-[23px] h-[24px] mt-2" />
        </div>
        <div className="ml-auto flex gap-x-4 ">
        <img src="shopping-cart.png" alt="Logo" className="w-[28px] h-[29px]  gap-x-2" />
        <img src="user.png" alt="user" className="w-[28px] h-[29px] px-auto gap-x-3" />
        <img src="menu.png" alt="Logo" className="w-[28px] h-[29px] px-auto " />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
