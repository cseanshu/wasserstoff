import React, { useState } from 'react';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
function Home({handleTabs}) {
    const [activeTab, setActiveTab] = useState('events');
    console.log("showing the active tab",activeTab);
    const handleTabClick = (value) => {
        setActiveTab(value);
        handleTabs(value);
      };
      const handleNextClick=(events)=>{
        setActiveTab(events);
        handleTabs(events);
      }
      const handlePreClick=(collections)=>{
        setActiveTab(collections);
        handleTabs(collections);
      }
    const data = [
        {
          label: "EVENTS",
          value: "events"
        },
        {
          label: "COLLECTIONS",
          value: "collections"
        }
      ];
  return (
    <div style={{ width: '60vw', overflow: 'hidden' }}
    className="min-h-screen">
      <div className="flex items-center">
        <img 
          src='./Astrix Branding (1).png' 
          alt='Astrix'/>
        <h1 className="sm:text-5xl font-bold mobile-font"style={{ color: '#ffcc5c' }}> Astrix. </h1>
      </div>
      <div className="relative">
  <div className="absolute w-60  text-left ml-10 mt-6 z-10">
    <p className="text-7xl font-bold text-gray-600">ASTR</p>
    <p className="text-7xl font-bold text-gray-600">IX</p>
    <p className="text-7xl font-bold text-gray-600">EVE</p>
    <p className="text-7xl font-bold text-gray-600">NTS</p>
  </div>
  {activeTab=='collections'&&<div style={{position:'absolute', left:'18vw',zIndex:30}}>
      <p className="text-4xl font-bold">Lunar Palace:</p>
      <p className="text-3xl font-bold">(ft.kanya west)</p>
      </div>}
  {
    activeTab=='collections'&&<div style={{position:'absolute', left:'25vw',zIndex:30}} className='animate__text'>
      <p className="text-4xl font-bold">Lunar Palace:</p>
      <p className="text-3xl font-bold">(ft.kanya west)</p>
      </div>
  }
  {/* <div className="flex gap-8 absolute left-10 mt-6 top-20 animate__image z-30"> */}
  <div className="flex gap-8  top-16 relative animate__image z-30">
  {activeTab === 'events' ? (
  <>
    <img className="object-cover relative z-20" style={{ width: '300px', height:'350px' }} src='./Event1.png' alt='events'/>
    <img className="object-cover relative z-20" style={{ width: '300px', height:'350px' }} src='./Event5.png' alt='events'/>
  </>
) : (
  <>
    <img className="object-cover relative z-20" style={{ width: '300px', height:'350px' }} src='./Flipframe1.png' alt='events'/>
    <img className="object-cover relative z-20" style={{ width: '300px', height:'350px' }} src='./Flipframe2.png' alt='events'/>
  </>
)}
  <img className="object-cover relative z-20" style={{width:'300px',height:'350px'}} src='./Event3.png' alt='events'/>
  <img className="object-cover relative z-20" style={{width:'300px',height:'350px'}} src='./Event2.png' alt='events'/>
  <img className="object-cover relative z-20" style={{width:'300px',height:'350px'}} src='./Event6.png' alt='events'/>
  <img className="object-cover relative z-20" style={{width:'300px',height:'350px'}} src='./Event4.png' alt='events'/>
</div>
</div>

{/* <div style={{left:'150px',position:'absolute', bottom:'-20vh', display:'flex'}}> */}
<div style={{ display:'flex',marginTop:'100px'}} className='mobile-col'>
<Tabs>
      <TabsHeader className="text-center bg-gray-400 rounded-3xl">
        {data.map(({ label, value}) => (
          <Tab key={value} value={value}
          onClick={() => handleTabClick(value)}
              className={`${activeTab === value ? 'bg-gray-800' : ''} mobile-col`}
              style={{height:'51px', borderRadius:'22px', fontWeight:'bold',fontSize:'20px',paddingLeft:'10px',paddingRight:'10px'}}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
    <div className="px-4 py-2 w-16  ml-10 lg:ml-60 flex justify-center items-center bg-black rounded-3xl"
    // style={{position:'absolute', left:'20vw'}}
    >
  <button className="px-2 bg-black text-white rounded-3xl  cursor-pointer outline-none"
   onClick={()=>{handleNextClick('events')}}>
  <span className="text-2xl font-bold">&lt;</span> </button>
  <button className=" px-2  bg-black text-white rounded-3xl  cursor-pointer outline-none"
   onClick={()=>{handlePreClick('collections')}}>
  <span className="text-2xl font-bold">&gt;</span></button>
</div>
</div>
    </div>
  );
}

export default Home;
