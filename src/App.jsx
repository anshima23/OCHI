import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
    </div>
  )
}

export default App



