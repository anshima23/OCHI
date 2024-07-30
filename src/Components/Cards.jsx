import React from 'react';

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2 flex items-center justify-center'>
             <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='max-w-full max-h-full'/>
                <button className='absolute px-5 py-1 rounded-full border-2 border-white left-10 bottom-10 text-white'>©2019</button>
             </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
             <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='max-w-full max-h-full'/>
                <button className='absolute px-5 py-0.5 rounded-full border-2 border-white left-10 bottom-10 text-white'>RATING 5.0 ON CLUTCH</button>
             </div>
             <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='max-w-full max-h-full'/>
                <button className='absolute px-2 py-0.5 rounded-full border-2 border-white left-10 bottom-4 text-white '>BUSINESS BOOTCAMP ALUMNI</button>
             </div>
        </div>
    </div>
  );
}

export default Cards;
