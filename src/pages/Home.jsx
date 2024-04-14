// Home.js
import React from 'react';
import Navbar from './Navbar';
import vid from '../Assets/3129671-uhd_3840_2160_30fps.mp4'

function Home() {
  return (<>
    <Navbar/>
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      {/* <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://i0.wp.com/evyom.com/wp-content/uploads/2020/05/analytics-app.gif?fit=800%2C600&ssl=1)' }}>
      </div> */}

<video
    className="absolute inset-0 w-full h-full object-cover object-center"
    autoPlay
    loop
    muted
  >
    <source
      src={vid}
      type="video/mp4"
    />
    {/* Add more <source> elements for other video formats like WebM or Ogg if needed */}
    Your browser does not support the video tag.
  </video>
      <div className="flex flex-col justify-center items-center z-10 text-center">
        <h1 className="text-5xl text-white font-bold mb-8">Your Heading Text Here</h1>
        <p className="text-white text-lg mb-4">Your paragraph text here.</p>
        <button id="b_btn">Request Demo</button>
      </div>
    </div>
    </>
  );
}

export default Home;
