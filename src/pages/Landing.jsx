import React, { useState } from 'react';

function Landing({clickEvent}) {
  return (
    <div className="w-full h-screen relative " style={{backgroundColor:'rgb(223 219 190)'}} 
    onClick={()=>{ clickEvent(true)}}>
      <div className="flex items-center absolute top-5 left-10">
        <img src='./LandingLogo.png' alt='Astrix' className="w-12 h-12" />
        <h1 className="text-5xl font-bold" style={{ color: 'black' }}>Astrix.</h1>
      </div>
      <div className="responsive  responsive-medium absolute top-1/2 lg:left-1/2  transform -translate-x-1/2 -translate-y-1/2 lg:text-center md:left-80 ">
        <p className=" p_responsive font-bold text-black md:text-4xl sm:text-2xl lg:text-4xl " style={{ letterSpacing: '4px' }}>
          <span className="flex items-center lg:space-x-4 lg:-mt-4">
            WE <img className="w-20 h-16 Landing__image-animate" src='./image 143.png' alt='image1' />ORGANISE THE
          </span>
          <br />
          <span className="flex items-center space-x-4 -mt-4">
            CONNECTION <img className="w-20 h-16 Landing__image-animate" src='./image 141.png' alt='image1' />
          </span>
          <br />
          <span className="flex items-center space-x-4 -mt-4">
            <img className="w-20 h-16 Landing__image-animate" src='./image 144.png' alt='image1' /> BETWEEN
            <img className="w-20 h-16 Landing__image-animate" src='./image 145.png' alt='image1' /> MUSIC
          </span>
          <br />
          <span className="flex items-center space-x-4 -mt-4">
            ARTIST <img className="w-20 h-16 Landing__image-animate" src='./image 147.png' alt='image1' />
            CULTURE <img className="w-20 h-16 Landing__image-animate" src='./image 146.png' alt='image1' />
          </span>
          <br />
          <span className="flex items-center space-x-4 -mt-4">
            <img className="w-20 h-16 Landing__image-animate" src='./image 139.png' alt='image1' /> ART
            <img className="w-20 h-16 Landing__image-animate" src='./image 137.png' alt='image1' /><span>&</span> COLLECTIONS
          </span>
        </p>
      </div>
    </div>
  );
}

export default Landing;
