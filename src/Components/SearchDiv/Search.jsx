import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';





function Search() {
  return (
    <div>
      <div className='text-center pt-10'>
        <h2 className='text-4xl font-semibold '>Find the now your expert for </h2>
        <h3 className=' text-blueColor text-4xl font-semibold'>more than 800 services.</h3>
      </div>
      <div class="flex justify-center items-center px-20">

        <div class="space-y-10">
          <div class="flex items-center p-6 space-x-6 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-full">
              <FiSearch className='width[200]'/>
              <input class="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
            </div>
            <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-full">
              <MdOutlineLocationOn/>
              <input class="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
            </div>
            <div class="bg-blueColor py-3 px-5 flex p-8 text-white font-semibold rounded-full hover:shadow-lg transition duration-3000 cursor-pointer">
            <FiSearch />
            <span>Search</span>
            
            </div>
          </div>      

        </div>
      </div>

      





    </div>
  )
}

export default Search