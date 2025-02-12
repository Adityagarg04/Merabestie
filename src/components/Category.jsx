import React from 'react';
import backgroundImage from '../image/category-bg.jpg';
function Category() {
  const categories = [
    { name: 'Writing Essential', bgColor: 'bg-[#F7E1E0]' , opacity: 'bg-opacity-55'},
    { name: 'Gifts & Wraps', bgColor: 'bg-[#0A1020]', opacity: 'bg-opacity-25' },
    { name: 'Office Essential', bgColor: 'bg-[#C57D53]', opacity: 'bg-opacity-55' },
    { name: 'Stamps & Stickers', bgColor: 'bg-[#7D2479]' , opacity: 'bg-opacity-45'},
    { name: 'Art & Craft Supplies', bgColor: 'bg-[#AA6172]' , opacity: 'bg-opacity-65'},
    { name: 'Desk Accessories', bgColor: 'bg-[#9CBEE4]' , opacity: 'bg-opacity-65'},
    { name: 'Notebook & Paper Products', bgColor: 'bg-[#3B0B17]', opacity: 'bg-opacity-55' },
  ];

  return (
    <div   className="container  bg-cover bg-no-repeat flex  justify-center items-center relative"
    style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    backgroundBlendMode: "overlay", }}
    >
      <div className="px-6 py-8 sm:p-10 sm:pb-6 rounded-3xl">
        <div className="grid grid-cols-3 gap-3 justify-center items-center w-80 text-left">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`rounded-2xl py-3 px-4 text-sm font-medium text-gray-800 shadow-md hover:shadow-lg transition duration-300 ease-in-out ${category.bgColor} ${category.opacity || ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
