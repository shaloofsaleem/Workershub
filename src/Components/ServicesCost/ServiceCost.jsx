import React from 'react'

function ServiceCost() {
  return (
    <div>
      <div>
        <h1 className="text-left text-4xl font-extrabold">Find out how much our services cost</h1>
        <h1 className="text-right">Discover the prices of all services</h1>
      </div >

      <div className='p-8'>
        <section className='flex gap-4'>
          <div>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
              </a>
              <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
              </a>
              <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>
              </figcaption>
            </figure>
          </div>    
          <div>
            <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <a href="#">
                <img class="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
              </a>
              <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <p>Do you want to get notified when a new component is added to Flowbite?</p>
              </figcaption>
            </figure>
          </div>      
        </section>
      </div>


    </div>
  )
}

export default ServiceCost