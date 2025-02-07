import React from 'react';
import { CardsData } from '../constants';

const Services = () => {
  return (
    <section id='services' className='mb-20'>
      <h2 className="my-20 text-center text-3xl lg:text-8xl font-oswa">Services</h2>

      {/* cards */}
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center place-items-center'>
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group w-[320px]'>
              <img src={img} alt="" className='w-full h-[450px] object-cover rounded-lg mb-5'/>

              <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-0 p-4 w-full h-full bg-black/50 group-hover:backdrop-blur-sm'>
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
