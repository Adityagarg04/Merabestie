import React from 'react'

function Menu() {
  return (
    <div >
      <div class="flex flex-row  bg-cover border-red-300 border-2 "  >
  <div class="px-4 py-4 sm:p-4 sm:pb-4 ">
    <div 
    class="grid items-center justify-center w-48  text-left grid-row-3 gap-4  "
        >
            <div className='flex place-items-center  border-zinc-500 rounded-full px-2 p-1 '>
             <img className='fixed'
             src="logo.png" 
             />
             <span className='ml-12  font-italianno text-2xl p-2 bg-slate-300  rounded-full px-4 '>MeraBestie.com</span>
            </div>
           <div className='font-Khand text-[#7D2479] place-self-center'>
            <h1>
                About us 
            </h1>
            <h1>
                Shipping & Returns
            </h1>
            <h1>
                Privacy Policy
            </h1>
            <h1>
                Contact Us
            </h1>
            <h1>
                Term Of Use
            </h1>
            </div>
            <button>

            </button>
     
</div>
  </div>
</div>
    </div>
  )
}

export default Menu
