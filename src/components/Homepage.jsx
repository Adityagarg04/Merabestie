import React from 'react';
import backgroundImage from '../image/homebackground.jpg'; // Adjust the path based on location

function Homepage() {
  return (
    <div
      className=" bg-cover bg-center bg-no-repeat   flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})`,
      width: "100vw",  /* Full width of the viewport */
      height: "100vh" }}
    >
      <h1 className="text-center p-5 text-white bg-black bg-opacity-50 text-4xl font-bold rounded-[40px]">
        Personalized Stationery
      </h1>
    </div>
  );
}

export default Homepage;
