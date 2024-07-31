import React from 'react';

function Insights() {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-start px-10 pt-10">
      <h1 className="text-8xl text-white mb-4 mt-[150px]">INSIGHTS</h1>

      {/* Full-width border */}
      <div className="border-t-[2px] border-zinc-800 mt-32 w-full"></div>

      {/* Row for heading and buttons */}
      <div className="w-full flex justify-between items-center mt-8">
        {/* Heading */}
        <h2 className="text-xl text-white">Latest Insight</h2>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">Node.js</button>
          <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">React Native</button>
          <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">MongoDb</button>
        </div>
      </div>

      {/* Expanded black area for the boxes */}
      <div className="w-full flex mt-10">
        {/* Box 1 */}
        <div className="w-1/2 h-[400px] bg-gray-700 text-white p-4 rounded-lg">
          <div className="text-center">Box 1</div>
        </div>

        {/* Column for Box 2 and Box 3 */}
        <div className="w-1/2 flex flex-col">
          <div className="w-full h-[80%] bg-gray-700 text-white p-4 rounded-lg mb-4">
            <div className="text-center">Box 2</div>
          </div>
          <div className="w-full h-[20%] bg-gray-600 text-white p-4 rounded-lg">
            <div className="text-center">Box 3</div>
          </div>
        </div>
      </div>

      {/* New row with heading at leftmost corner */}
      <div className="w-full flex mt-10">
        <h3 className="text-xl text-white ml-10">
          Additional Information Heading
        </h3>
      </div>
    </div>
  );
}

export default Insights;
