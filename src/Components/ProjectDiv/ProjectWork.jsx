import React from 'react'
import logo1 from '../../Assets/psicologo.png';
import logo2 from '../../Assets/pulizie.png';
import logo3 from '../../Assets/personal-trainer.png';
import logo4 from '../../Assets/caldaia.png';

function ProjectWork() {
  const Data = [
    {
      id: 1,
      image: logo1,
      title: 'Web Developer',
    },
    {
      id: 1,
      image: logo2,
      title: 'Web Developer',
    },
    {
      id: 1,
      image: logo3,
      title: 'Web Developer',
    },
    {
      id: 1,
      image: logo4,
      title: 'Web Developer',
    },
  ]
  return (
    <div>
      <div className='p-8'>
        <h2 class="text-4xl font-extrabold">An expert for every need</h2>
      </div>
      <div className='flex gap-5'>
        {
          Data.map(({ id, image, title, time, location, desc, company }) => {
            return (
              <div className='flex'>
                <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <img className='rounded-lg' src={image} alt="" />
                </div>
              </div>
                 )
                })
              }
      </div>        
    </div>
  )
}
export default ProjectWork