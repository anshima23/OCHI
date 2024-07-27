import React from 'react';

function Eyes() {
  return (
    <div className='eyes w-full h-screen overflow-hidden relative'>
      {/* Background image container */}
      <div className='w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        {/* Circles */}
        <div className='absolute top-1/2 left-1/2 flex gap-10 -translate-x-1/2 -translate-y-1/2'>
          {/* Eye container */}
          <div className='relative flex items-center justify-center'>
            {/* Large white circle */}
            <div className='w-32 h-32 rounded-full bg-white absolute -z-10'></div>
            {/* Black circle */}
            <div className='w-24 h-24 rounded-full bg-zinc-900 relative'>
              {/* Red line through center */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-full h-2'></div>
              </div>
              {/* Small white circle at the leftmost end of the red line */}
              <div className='w-4 h-4 rounded-full bg-zinc-100 absolute top-1/2 left-0 -translate-y-1/2'></div>
            </div>
          </div>
          <div className='relative flex items-center justify-center'>
            {/* Large white circle */}
            <div className='w-32 h-32 rounded-full bg-white absolute -z-10'></div>
            {/* Black circle */}
            <div className='w-24 h-24 rounded-full bg-zinc-900 relative'>
              {/* Red line through center */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-full h-2 '></div>
              </div>
              {/* Small white circle at the leftmost end of the red line */}
              <div className='w-4 h-4 rounded-full bg-zinc-100 absolute top-1/2 left-0 -translate-y-1/2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
