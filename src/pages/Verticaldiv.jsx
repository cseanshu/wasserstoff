import React from 'react'
function Verticaldiv() {
  return (
    <div className="h-full sm:w-24  bg-violet-400 text-black py-4 text-2xl font-bold tracking-widest fixed z-40  mobile-aspect"
    style={{right:'38vw'}}
    >
    <p className="whitespace-nowrap ml-8 animate__top-bottom" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
    Event: Oasis Bus tour, JLN Stadium, <span style={{ fontSize: '6rem'}}>*</span> Delhi collection Live</p>
    </div>
  )
}

export default Verticaldiv