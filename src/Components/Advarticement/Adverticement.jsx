import React from 'react'
import logo1 from '../../Assets/find-your-expert@2x.jpg'
import logo2 from '../../Assets/about-us@2x.jpg'
import logo3 from '../../Assets/are-you-a-merchant@2x.jpg'


function Adverticement() {
  return (
    <div>
      <div className="flex p-8">
        <div className="w-2/3  ">
          <div class="ml-20 p-10 bg-skin-lighter">
            <div className=''>
              <h1 class="text-4xl mt-2 font-bold  text-blue-500">Find</h1>
            </div>
            <div className=''>
              <h1 class="text-4xl mt-2 font-bold text-blue-500">your expert.</h1>
            </div>
            <div>
              <p class="mt-9 text-gray-500 dark:text-gray-400">With ProntoPro you will find the best</p>
              <p class="text-gray-500 dark:text-gray-400">Professionals in the area, whatever your need.</p>
            </div>
            <div>
              <p class="mt-9 text-gray-500 dark:text-gray-400">Free and without obligation.</p>
            </div>
            <div className='p-4'>
              <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Search for a service </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 ">
          <img src={logo1} alt="" srcset="" />

        </div>
      </div>
      <div className="flex p-8">
        <div className="w-2/3  ">
          <img src={logo2} alt="" srcset="" />
        </div>
        <div className="w-2/3 ">
          <div className='ml-14 p-10'>
            <div className=''>
              <h2 class="text-4xl mt-2 font-bold text-blue-500">The largest service</h2>
            </div>
            <div className=''>
              <h1 class="text-4xl mt-2 font-bold text-blue-500">portal in Italy</h1>
            </div>
            <div>
              <h1 class="text-4xl mt-9 font-bold text-blue-500">5 million</h1>
              <p class=" text-gray-500 dark:text-gray-400">customers have chosen us in Europe</p>
            </div>
            <div>
              <h1 class="text-4xl mt-9 font-bold text-blue-500">690 thousand</h1>
              <p class=" text-gray-500 dark:text-gray-400">Professionals have used ProntoPro to find new customers</p>
            </div>
            <div className='p-4'>
              <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Search for a service</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-8">
        <div className="w-2/3  ">
          <div className='ml-14 p-10'>
            <div className=''>
              <h2 class="text-4xl mt-2 font-bold text-blue-500">The largest service</h2>
            </div>
            <div>
              <p class=" mt-5 text-gray-500 dark:text-gray-400">customers have chosen us in Europe</p>
            </div>
            <div className='p-4'>
              <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Search for a service</button>
            </div>
          </div>

        </div>
        <div className="w-2/3 ">
          <img src={logo3} alt="" srcset="" />

        </div>
      </div>


    </div>
  )
}

export default Adverticement