import React from 'react';

function Homepage() {
  return (
    <div
      className="container bg-cover bg-center bg-no-repeat h-screen w-full flex justify-center items-center"
      style={{ backgroundImage: "url('./src/image/homebackground.jpg')" }}
    >
      <h1 className="text-center p-5 text-white bg-black bg-opacity-50 text-4xl font-bold rounded-[40px]">
        Personalized Stationery
      </h1>
    </div>
  );
}

export default Homepage;
