import { MdLocationOn } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock} from '@fortawesome/free-regular-svg-icons';
import { Button } from '@material-tailwind/react';
function RightSidepage(){
    return (
        // <div className="absolute right-0 h-full main-div" style={{width:'37vw',height:'auto'}}>
        <div className=" h-full" style={{width:'37vw', height:'auto'}}>
        <p className="text-4xl font-bold mt-3 ml-8"> Explore Your First <br/> Event </p>
        <p className="text-5xl lg:text-7xl font-bold mt-12 ml-8 mobile-font">Event Name</p>
        <div className="flex text-align items-center mobile-col" >
        <MdLocationOn className="text-5xl mt-2 ml-6" />
        <p className="text-2xl mt-3 font-bold ">Venue</p>
        <FontAwesomeIcon icon={faClock} className="text-3xl mt-4 ml-4"/>
        <p className="text-2xl mt-3 ml-2 font-bold">14/03/2024</p>
        <p className="text-2xl mt-3 ml-1 font-bold">@19:00</p>
        </div>
        <div>
          <p className="text-2xl font-bold mt-8 ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel quae earum optio totam ea nam consectetur sint quaerat voluptate.</p>
        </div>
        <div className="text-4xl mt-8 ml-8 font-bold"><p>Artist Lineup</p></div>
        
        <div className="flex gap-1  mt-10 ml-8 mr-4 cursor-pointer mobile-col ">
  <img className="object-cover relative z-20 hover:scale-105" style={{width:'200px',height:'200px',borderRadius:'10px'}} src='./Artist1.png' alt='events'/>
  <img className="object-cover relative z-20 hover:scale-150" style={{width:'200px',height:'200px',borderRadius:'10px'}} src='./Artist2.png' alt='events'/>
  <img className="object-cover relative z-20 hover:scale-150" style={{width:'200px',height:'200px',borderRadius:'10px'}} src='./Artist3.png' alt='events'/>
</div>
<div className="flex mr-12  items-center mobile-col ">
<img className="object-cover relative mt-14 ml-8" style={{width:'150px',height:'150px',borderRadius:'10px'}} src='./QRCode.png' alt='events'/>
<Button className="mt-28 ml-12 text-xl bg-yellow-400 text-black font-bold w-full h-full rounded-3xl ">Join Waitlist</Button>
</div>
        </div>
    )
}
export default RightSidepage