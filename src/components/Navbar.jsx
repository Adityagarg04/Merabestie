import React, { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";

function Navbar() {
  const [showCategory, setShowCategory] = useState(false);
  const [showMenu,setShowMenu]=useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <h3 className="bg-[#7D2479] text-white text-center py-2">
        Free shipping on orders above Rs.799 @Personalized Stationery, Crafted with Love!
      </h3>

      <nav className="bg-[#FFD7FDA3] flex items-center justify-between px-6 py-3 shadow-md">
        <img src="logo.png" alt="Logo" className="w-[63px] h-[64px]" />
        <h1 className="font-italianno mr-auto text-5xl px-6 mt-2">MeraBestie.com</h1>

        
        <div 
          className="mr-auto flex gap-x-0.5 relative" 
          onMouseEnter={() => setShowCategory(true)} 
          onMouseLeave={() => setShowCategory(false)}
        >
          <h1 className="font-jetbrains mr-auto px-4 text-lg">Shop by Category</h1>
          <img src="down.png" alt="Dropdown" className="w-[13px] h-[14px] mt-2" />

          
          {showCategory && (
            <div className="absolute top-full left-0 bg-white shadow-lg">
              <Category />
            </div>
          )}


        </div>

        <div className="ml-auto flex gap-x-6">
          <img src="shopping-cart.png" alt="Cart" className="w-[28px] h-[29px]" />
          <img src="user.png" alt="User" className="w-[28px] h-[29px]" />
          <div 
          className="mr-auto flex gap-x-0.5 relative">
            <img src="menu.png" alt="Menu" className="w-[28px] h-[29px]" onClick={()=>{setShowMenu(true)}} />
            {showMenu && (
            <div className="absolute top-full right-0 bg-white shadow-lg">
              <Menu />
            </div>
          )}</div>
          
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
