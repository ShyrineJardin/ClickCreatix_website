import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='mx-auto max-w-6xl'> 
            <p className='my-10 text-center text-3xl lg:text-8xl font-oswa'>
                Book now!
            </p>
            <p className='text-center text-2xl font-medium text-pink lg:pt-2 lg:text-6xl'>
                +639 903 358 672
            </p>

            <div className='flex flex-row gap-5 items-center justify-center p-10'>
                {
                    SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a key={index} href={link.href} target='_blank' rel='noopener noreferrer' className='text-3xl text-white hover:text-pink'>
                            {link.icon}
                        </a>
                    ))
                }

            </div>
            <p className='text-center p-10 text-lg font-oswa'>©2025 Click Creatix. All Rights Reserved</p>
        </div>
    </section>
  )
}

export default Contact
