import React from 'react'
import Eyes from '../../assets/images/eyes.jpg'

const Hero = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-16  overflow-hidden text-[12vw] font-semibold font-oswa uppercase leading-none'>click creatix</h1>

            <div className='w-full'>
                <img src={Eyes} alt="" className='mt-6 h-94 w-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default Hero