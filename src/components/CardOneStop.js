import React from 'react'
export default function CardOneStop() {
  return (
    <div>  
      {/* card Component*/}
      <div className='flex flex-col relative w-[50rem] h-[23rem] sm:w-[68rem] sm:h-[22rem] rounded-3xl flex-initial'>
        {/* Image part of Card */}
        <div className='h-[60%] sm:h-[65%] bg-[url(/swc/cards/oneStop.jpg)] bg-cover rounded-t-3xl'></div>
        {/* Footer part of Card */}
        <div className='bg-[#1A2636] overflow-hidden w-full h-fit rounded-b-3xl px-[1rem] pb-[0.5rem]'>  
          <div>
            <h1 className='p-[0.5rem] sm:p-[1rem] pb-[0.5rem] pt-[1rem] text-white text-xl font-bold'>One Stop</h1>{/* Title of Card*/}
            <ul className='text-white/50 flex flex-row flex-start flex-initial flex-wrap gap-[0.5rem] pb-[0.5rem] sm:pb-[1rem] px-[0.5rem] sm:px-[1rem]'>
                {/* Buttons of Card*/}
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://play.google.com/store/apps/details?id=com.swciitg.onestop2" target='_blank'>Play Store</a> </li>
            <li className='rounded-[2.5rem] text-sm sm:text-[1rem] border-white/50 border px-4 py-2.5 bg-black bg-opacity-50 hover:opacity-50 hover:cursor-pointer'><a href="https://apps.apple.com/in/app/onestop-iitg/id1642792642" target='_blank'>App Store</a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}
