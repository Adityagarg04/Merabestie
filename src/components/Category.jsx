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
    <div>


 
<div class="flex flex-col  bg-cover"  style={{ backgroundImage: `url('/category-bg.jpg')`,
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          backgroundBlendMode: "overlay", }}>
  <div class="px-6 py-8 sm:p-10 sm:pb-6 rounded-3xl">
    <div class="grid items-center justify-center w-80  text-left grid-cols-3 gap-3  "
   
        >
     <button className='bg-[#F7E1E0] rounded-2xl '>Writing Essential </button>
     <button className='bg-[#0A1020] bg-opacity-25 rounded-2xl py-3'>Gifts & Wraps</button>
     <button className='bg-[#C57D53] rounded-2xl'>Office Essential </button>
     <button className='bg-[#7D2479] rounded-2xl'>Stamps & Stickers </button>
     <button className='bg-[#AA6172] rounded-2xl'>Art & Craft Supplies </button>
     <button className='bg-[#9CBEE4] rounded-2xl '>Writing Essential </button>
     <button className='bg-[#3B0B17] bg-opacity-55 rounded-2xl ' >Writing Essential </button>
</div>
  </div>
</div>




</div>
  )
}

export default Category;
