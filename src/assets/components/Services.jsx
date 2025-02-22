import React from 'react';
import { CardsData } from '../constants';

const Services = () => {
  return (
    <section id='services' className='mb-20'>
      <h2 className="my-20 text-center text-3xl lg:text-8xl font-oswa">Services</h2>

      {/* cards */}
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center place-items-center gap-6'>
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group w-[320px]'>
              <img src={img} alt="" className='w-full h-[450px] object-cover rounded-lg mb-5' />

              <div className='p-4 w-full h-full bg-black/50 backdrop-blur-sm sm:static sm:opacity-100 sm:top-0 lg:absolute lg:left-0 lg:top-[-100%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0'>
                <h1 className='text-2xl font-semibold font-oswa'>{title}</h1>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
