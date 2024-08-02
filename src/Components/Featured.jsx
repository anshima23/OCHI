import React from 'react';

function Featured() {
  return (
    <div data-scroll data-scroll-section className='w-full py-20 bg-black'>
        <div className='w-full px-20 border-b-[1px] border-white pb-20'>
            <h1 className='text-7xl font-["Neue_Montreal"] text-white tracking-tight'>
                Featured Projects
            </h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-10">  
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://cdn.pixabay.com/photo/2024/02/26/09/17/synthetic-8597464_1280.jpg" alt="FYDE"/>
                </div>
                </div>
                <div className='cardcontainer relative w-1/2 h-[75vh]'>
                <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src="https://media.istockphoto.com/id/1257980223/photo/smart-office-concept.jpg?s=2048x2048&w=is&k=20&c=vWdtNMrKMS4mOZFF4jOqtCOOvDoXrQrWIPkGnHXKR6o=" alt="VISE"/>
                </div>
                </div>
        </div>
        </div>
    </div>
  );
}

export default Featured;
