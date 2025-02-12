import React from 'react';
import backgroundImage from '../image/homebackground.jpg'; 

function Homepage() {
  return (
    <div
      className="container h-screen  bg-cover bg-no-repeat flex w-100vw justify-center items-center relative"
      style={{ backgroundImage: `url(${backgroundImage})`,
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      backgroundBlendMode: "overlay", }}
    >

      
      <div className='flex'>
      <div>
      <h1 className=" font-Kdam text-center p-5 text-[#2B2B2B] bg-[#7D2479] bg-opacity-15 text-7xl  text-opacity-85 rounded-[40px]">
        Personalized Stationery
      </h1>
      <h1 className=" font-Kdam text-center text-[#7D2479] opacity-100 stroke-[#7D2479] text-2xl "> 
      Crafted with Love!.
      </h1>
      </div>

      <div >
        <img 
        src="flowers.jpg"
        className=" rounded-full h-20 w-24 place-self-end m-7 ml-20  space-y-4"
        />
      </div>

      <div className=' absolute bottom-10 left-7  space-y-2 font-Kelly '>
         <h1 className=' text-black bg-white bg-opacity-45 px-4 py-2 rounded-2xl  shadow-lg drop-shadow-2xl place-self-end  '>Stickers & Bookmarks</h1>
         <h1 className='text-black bg-white bg-opacity-45 px-4 py-2 rounded-2xl  shadow-lg drop-shadow-xl  place-self-end '>Gift Cards</h1>
         <h1 className='text-black bg-white bg-opacity-45 px-4 py-2 rounded-2xl  shadow-lg drop-shadow-2xl place-self-end '>Customize Yours</h1>
      </div>
      </div>
      <div className='absolute bottom-20 right-auto '>
      <button className="group flex justify-end text-2xl font-jetbrains bg-[rgba(125,36,121,0.80)] text-white rounded-full px-10 py-2 border-white border-2 gap-x-2 overflow-hidden relative">
 
  <span className="group-hover:hidden transition-opacity duration-300">SHOP NOW</span>


  <img 
    src="shopping-bag.png" 
    className="h-7 w-6 absolute transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-75"
  />

 
  <img 
    src="shopping-bag2.png" 
    className="h-7 w-6 transition-all duration-100 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-150  "
  />
</button>





      </div>
    </div>
  );
}

export default Homepage;
