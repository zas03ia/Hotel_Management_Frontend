import React from "react";

const RefundTimeline = () => {
  return (

    <div className="timeline-container bg-gray-100 p-[20px] rounded-lg">
  {/* Vertical Timeline (visible on small screens) */}
  <div className="inline-block relative w-full max-w-sm mx-auto min-h-[200px] block sm:hidden ">

    <div className="flex flex-row justify-center">
    <div className="flex flex-col">
        {/* Left Column */}
        <div className="h-1/2 w-[100px] flex items-center justify-center">
            <p>Full refund</p>
        </div>

        {/* Right Column */}
        <div className="h-1/2 w-[100px] flex items-center justify-center">
            <p>No refund</p>
        </div>
    </div>

    {/* Timeline */}
    <div className="flex flex-col items-center justify-between relative h-full">
      {/* Vertical Line */}
      <div className="absolute w-[2px] h-full z-0 min-h-[200px]">
  <div className="h-1/2 bg-black"></div>
  <div className="h-1/2 bg-gray-500"></div>
</div>

      {/* Circles */}
      <div className="flex flex-col justify-evenly relative w-full z-10 h-full">
  {/* Top Circle */}
  <div className="flex items-center justify-center flex-grow">
    <div className="w-4 h-4 bg-black rounded-full mb-[144px]"></div>
  </div>

  {/* Middle Circle */}
  <div className="flex items-center justify-center flex-grow">
    <div className="w-4 h-4 border-2 border-black bg-gray-100 rounded-full mb-[144px]"></div>
  </div>

  {/* Bottom Circle */}
  <div className="flex items-center justify-center flex-grow">
    <div className="w-4 h-4 bg-gray-100 border-2 border-gray-500 rounded-full"></div>
  </div>
</div>

    </div>

    <div className="flex flex-col ">
        {/* Left Column */}
        <div className="h-1/3 w-[100px] flex items-start justify-center">
            <p>Today</p>
        </div>

        <div className="h-1/3 w-[100px] flex items-center justify-center">
            <p>Nov 4</p>
        </div>

        {/* Right Column */}
        <div className="h-1/3 w-[100px] flex items-end justify-center">
  <p>Check-in</p>
</div>
    </div>
    </div>

  
  </div>

  {/* Horizontal Timeline (visible on medium and larger screens) */}
  <div className="inline-block relative w-full max-w-sm mx-auto  hidden sm:block">
    <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 h-[40px] flex items-center justify-center">
            <p>Full refund</p>
        </div>

        {/* Right Column */}
        <div className="w-1/2 h-[40px] flex items-center justify-center">
            <p>No refund</p>
        </div>
        </div>

    {/* Timeline */}
    <div className="flex flex-row items-center justify-between relative h-full">
    {/* Horizontal Line */}
{/* Horizontal Line */}
<div className="absolute w-full h-[1px] h-1 z-0 top-1/2 transform -translate-y-1/2 flex">
  <div className="w-1/2 h-full bg-black"></div>
  <div className="w-1/2 h-full bg-gray-500"></div>
</div>


      {/* Circles */}
      <div className="flex flex-row items-center justify-between relative w-full z-10">
        {/* Left Circle */}
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>

        {/* Middle Circle */}
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-black bg-gray-100 rounded-full"></div>
        </div>

        {/* Right Circle */}
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-100 border-2 border-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex">
        {/* Left Column */}
        <div className="w-1/3 h-[40px] flex items-center justify-start">
            <p>Today</p>
        </div>

        <div className="w-1/3 h-[40px] flex items-center justify-center">
            <p>Nov 4</p>
        </div>

        {/* Right Column */}
        <div className="w-1/3 h-[40px] flex items-center  justify-end mr-0">
            <p>Check-in</p>
        </div>
    </div>

  </div>

  

</div>
  );
};

export default RefundTimeline;
