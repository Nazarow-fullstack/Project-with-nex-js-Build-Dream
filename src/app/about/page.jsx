import Image from 'next/image';
import React from 'react';
import first from '../assets/Rectangle 31.png'; 
import bg from '../assets/BG.png'; 

const About = () => {
  return (
    <div>
      
      <div className="flex flex-wrap justify-center md:justify-evenly items-start mt-[50px] px-4">
        <Image
          width={400}
          height={300}
          src={first}
          alt="A descriptive alt text"
          className="w-full sm:w-[400px] max-w-full"
        />
        <div className="w-full sm:w-[500px] mt-6 sm:mt-0 text-center sm:text-left">
          <p className="text-[#056088] text-[20px] sm:text-[25px]">Here where the story begins</p>
          <p className="mt-[10px] text-gray-500 text-[14px] sm:text-[16px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
          <p className="mt-[10px] text-gray-500 text-[14px] sm:text-[16px] leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been
            the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      
      <div className="relative h-auto sm:h-[400px] mt-[50px]">
        <Image
          className="absolute z-[-1] w-full h-[250px] sm:h-[350px] object-cover"
          src={bg}
          alt="Background"
        />
        <div className="flex flex-wrap justify-center md:justify-evenly items-center px-4 relative  pt-[30px] sm:pt-0">
          <div className="w-full sm:w-[600px] text-center sm:text-left">
            <p className="text-white text-[20px] sm:text-[25px]">We love to make perfect home</p>
            <p className="text-[14px] sm:text-[18px] text-white pt-[20px] sm:pt-[30px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div className="mt-[25px] sm:mt-0">
            <Image
              className="w-[300px] sm:w-auto max-w-full h-auto"
              height={300}
              src={first}
              alt="Illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
