import React from 'react';
import vid from '../../assets/images/about.mp4';

const About = () => {
  return (
    <section id="about" className="mb-20">
      <h2 className="my-5 text-center text-3xl lg:text-8xl font-oswa">About Us</h2>

      <div className="flex flex-col items-center justify-center">
        <p className="m-8 max-w-6xl text-3xl lg:text-5xl text-center">
          Click Creatix Studio is a dynamic startup dedicated to capturing moments with creativity and precision. 
          We specialize in professional portrait photography, offering innovative and artistic shoots that highlight 
          personality, emotion, and style. Our mission is to provide high-quality, visually compelling images that tell 
          a story—whether for personal branding, professional portfolios, or creative expression.
        </p>

        <video 
          className="mt-5 w-full max-w-4xl rounded-lg shadow-lg object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default About;
