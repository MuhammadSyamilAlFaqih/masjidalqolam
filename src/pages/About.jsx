import React from 'react';

const FotoResq = () => {
  
}




const About = () => {
  return (
  <div className="flex items-center justify-center min-h-screen relative">
    <h2 className="absolute top-0 left-1/2 -translate-x-1/2 mt-10 text-2xl font-extrabold text-shadow-strong text-white drop-shadow-lg font-[merriweather]">
      Tentang Kami
    </h2>

  {/* Card */}
      <div className='flex flex-wrap justify-center gap-6 mt-20'>
       
       <div className='bg-orange-900 rounded-2xl shadow-lg p-6 w-full md:w-1/2 lg:w-1/3'>
        <img 
        src="/src/assets/cwe.jpg"
         alt=""
        className='w-full h-full object-cover rounded-lg' />
        
       </div>






      </div>

  </div>
);
};

export default About;