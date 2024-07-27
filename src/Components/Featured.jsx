import React from 'react';

function Featured() {
  return (
    <div className='w-full py-20 bg-black'>
        <div className='w-full px-20 border-b-[1px] border-white pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] text-white tracking-tight'>
                Featured Projects
            </h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">  
                <div className='cardcontainer relative w-1/2  h-[75vh]'>
                <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl">FYDE</h1>
                <div className="card w-full  h-full rounded-xl  overflow-hidden">
                <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl">
                <h1 className="absolute text-[#CDEA68] right-full -translate-x-1/2 top-1/2 translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl">
                {"FYDE".split('').map((item,index)=><span>{item}</span>)}
                </h1>
                </h1>
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/09/Fyde7-550x500.png"/>
                </div>
                </div>
                <div className='cardcontainer relative w-1/2  h-[75vh] '>
                <div className="card w-full h-full rounded-xl  overflow-hidden">
                <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 translate-y-1/2  z-[9]  leading-none tracking-tighter text-8xl">
                {"VISE".split('').map((item,index)=><span>{item}</span>)}
                </h1>
                <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/>
                </div>
                </div>
        </div>
        </div>
    </div>
  );
}

export default Featured;
