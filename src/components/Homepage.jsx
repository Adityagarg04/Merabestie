import React from 'react';

function Homepage() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('./src/image/homebackground.jpg')", // ✅ Assuming the image is in the public folder
        backgroundSize: 'cover',          // Ensures the image covers the entire container
        backgroundPosition: 'center',     // Centers the image
        backgroundRepeat: 'no-repeat',    // Prevents the image from repeating
        height: '661px',
        width: '1440px',
        display: 'flex',                  // ✅ Flexbox for centering
        justifyContent: 'center',         // ✅ Horizontally center the text
        alignItems: 'center',             // ✅ Vertically center the text
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          padding: '20px',
          color: 'white',                 // ✅ Text color for contrast
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // ✅ Semi-transparent overlay for better readability
          fontSize: '48px',               // ✅ Larger font size for impact
          fontWeight: 'bold',   
          borderStyle: 'round',  
          borderRadius: '40px',      
          borderlength     
        }}
      >
        Personalized Stationery
      </h1>
    </div>
  );
}

export default Homepage;
