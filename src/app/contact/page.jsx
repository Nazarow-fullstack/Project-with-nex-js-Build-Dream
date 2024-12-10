import React from 'react';
import first from '../assets/Rectangle 31.png';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="mb-[50px]">
    
      <div className="flex flex-col md:flex-row justify-evenly items-center flex-wrap mb-[50px] mt-[50px]">
        <Image
          src={first}
          alt=""
          className="w-[90%] md:w-auto mb-6 md:mb-0"
        />
        <div className="bg-gray-300 p-6 md:p-[40px] w-[90%] md:w-auto">
          <p className="text-[#056088] text-[20px] md:text-[25px] mb-[20px] text-center md:text-start">
            Let’s talk about anything you need
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="border w-full md:w-[400px] h-[40px] px-2"
              placeholder="Enter something you want"
              type="text"
            />
            <input
              className="border w-full md:w-[400px] h-[40px] px-2"
              placeholder="Enter something you want"
              type="text"
            />
          </div>
          <textarea
            className="border w-full h-[150px] md:h-[200px] px-2 mt-[20px]"
            placeholder="Enter your message"
          ></textarea>
          <button className="py-[10px] px-[20px] block mt-[20px] bg-[#056088] text-white rounded-md mx-auto md:mx-0">
            Submit
          </button>
        </div>
      </div>

    
      <div className="text-center px-4">
        <p className="text-[#056088] text-[18px] md:text-[25px]">
          Or contact us via e-mails, mobile calls, or WhatsApp messages
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-[20px]">
          <button className="py-[10px] px-[20px] bg-[#056088] text-white rounded-md">
            E-mails
          </button>
          <button className="py-[10px] px-[20px] bg-[#056088] text-white rounded-md">
            Mobile Call
          </button>
          <button className="py-[10px] px-[20px] bg-[#056088] text-white rounded-md">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
