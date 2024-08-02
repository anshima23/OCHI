import React from 'react';

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2 flex items-center justify-center'>
             <div className='card relative rounded-xl w-[85%] h-full bg-[#004D43] flex items-center justify-center'>
                <img src="https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_1280.jpg" className='max-w-full max-h-full'/>
             </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
             <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img src="https://cdn.pixabay.com/photo/2024/04/17/18/22/ai-generated-8702697_1280.jpg" className='w-full max-h-full'/>
             </div>
             <div className='card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img src="https://cdn.pixabay.com/photo/2023/07/28/16/41/ai-generated-8155552_1280.jpg" className='max-w-full h-full'/>
             </div>
        </div>
    </div>
  );
}

export default Cards;
