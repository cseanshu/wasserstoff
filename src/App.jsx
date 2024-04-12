import { useState } from 'react'
import './App.css'
import './index.css'
import Collectible from './pages/Collectible'
import Home from './pages/Home'
import RightSidepage from './pages/RightSidepage'
import Verticaldiv from './pages/Verticaldiv'
import Landing from './pages/Landing'
function App() {

const [activeTab, setactiveTab] = useState('events');
const [landingClicked, setlandingClicked] = useState(false)
console.log("this is from the App",activeTab);
console.log("this is landing page",landingClicked)
const handleTabs=(x)=>{
   setactiveTab(x);
}
const handleLandingClick=(x)=>{
  setlandingClicked(x);
}
return (
  <>
    {!landingClicked && <Landing clickEvent={handleLandingClick} />}
    {landingClicked && (
      <div className="flex">
        <Home handleTabs={handleTabs} />
        <Verticaldiv />
        {activeTab === 'events' ? <RightSidepage /> : <Collectible />}
      </div>
    )}
  </>
);
}

export default App
