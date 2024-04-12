import { Button } from '@material-tailwind/react';
function Collectible(){
    return (
        <div className="absolute right-0  h-full" style={{width:'37vw',height:'auto'}}>
        <p className="text-4xl font-bold mt-3 ml-8"> Explore Youre First<br/> Collectible </p>
        <p className="text-7xl font-bold mt-12 ml-8">Meta<br/>Lives</p>
        <div className="flex text-align" >
        <p className="text-4xl font-bold mt-12 ml-8">Lives in Astrix</p>
        </div>
        <div>
          <p className="text-2xl font-bold mt-8 ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel quae earum optio totam ea nam consectetur sint quaerat voluptate.</p>
        </div>
        <div className=" flex justify-between text-2xl mt-8 ml-8 font-bold">
        <div className="flex ml-4 ">
          <img src='./Ellipse 1.png' alt='Ellipse 1' className="absolute -ml-4" />
          <img src='./Ellipse 2.png' alt='Ellipse 2' className="absolute  ml-2" />
          <img src='./Ellipse 3.png' alt='Ellipse 3' className="absolute  ml-8" />
          <img src='./Ellipse 4.png' alt='Ellipse 4' className="absolute  ml-16" />
          <img src='./Ellipse 5.png' alt='Ellipse 5' className="absolute ml-20" />
        </div>
        <div> <p className="mr-8">22k People intersested </p></div>
        </div>
        <p className="text-2xl mt-8 ml-8 font-bold">Collectibles</p>
       <div className="flex gap-4 mt-10 mr-4 ml-4 mobile-col">
       {
            Array(3).fill(0).map((_,index)=>(
                <div className="bg-violet-400 rounded-xl flex flex-col items-center py-1" >
                <div className="flex justify-between mr-1 mt-2">
                    <div className=" text-center ml21  py-1 px-2 rounded-2xl bg-black"><p>2024</p></div>
                    <p className=" font-bold text-black ml-3"  >By Pablo</p>
                </div>
                <div className="flex flex-col items-center overflow-hidden">
                <p className="font-bold text-black">Collectible Name</p>
                <img className="object-cover relative z-20 hover:scale-105 mt-2" style={{width:'200px',height:'200px',borderRadius:'10px'}} src='./collectible.png' alt='events'/>
                </div>
                </div>
            ))
        }
       </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <button className="mt-10 text-xl bg-yellow-400 text-black font-bold rounded-3xl px-6 py-3">
    Join Waitlist
  </button>
</div>
        </div>
    )
}
export default Collectible