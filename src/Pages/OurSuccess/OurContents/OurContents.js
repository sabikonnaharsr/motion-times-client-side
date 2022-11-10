import React from 'react';
import UseTitle from '../../Hooks/UseTitle';


const OurContents = () => {
  UseTitle('OurClients')


    return (
      <div>
      <div>
      <h1 className='text-5xl text-blue-600 font-semibold mt-10'> Our Packages</h1>
      <p className='text-4xl text-blue-600'>________    ________</p>
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-slate-900 rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
               <div className='flex items-center'>
            
                   <h1 className='text-7xl text-blue-700 font-bold text-center'>10</h1>
               </div>
              <p className="mb-2 font-bold">Traditional Religious</p>
              <p className="text-sm leading-5 text-gray-400">
                Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between bg-slate-900 overflow-hidden text-left transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center text-blue-700 font-bold text-7xl">
                 450+
              </div>
              <p className="mb-2 font-bold">Civil Ceremony Wedding.</p>
              <p className="text-sm leading-5 text-gray-400">
                Disrupt inspire and think tank, social entrepreneur but
                preliminary thinking think tank compelling.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-slate-900 rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center text-7xl font-bold text-blue-700">
                 99+
              </div>
              <p className="mb-2 font-bold">Formal Wedding.</p>
              <p className="text-sm leading-5 text-gray-400">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-slate-900 rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              <div className="flex items-center justify-center text-blue-700 font-bold text-7xl">
                  999+
              </div>
              <p className="mb-2 font-bold">Destination Wedding.</p>
              <p className="text-sm leading-5 text-gray-400">
                Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                a horse.
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
           
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default OurContents;