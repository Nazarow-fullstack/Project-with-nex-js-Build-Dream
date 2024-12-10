import React from 'react'
import sofa from '../assets/Vector.png'
import Image from 'next/image'
import left from '../assets/BG (1).png'
import right from '../assets/BG (8).png'
const Services = () => {
  return (
    <div className='mt-[100px] mb-[100px]'>
      <div className='flex flex-wrap justify-evenly'>
        <div className='shadow-xl p-[30px]'>
          <Image src={sofa} alt='' />
          <p className='font-[700] text-[18px] mt-[20px]'>Design building/house</p>
          <p className='w-[200px] text-[15px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>

        <div className='shadow-xl p-[30px]'>
          <Image src={sofa} alt='' />
          <p className='font-[700] text-[18px] mt-[20px]'>Design building/house</p>
          <p className='w-[200px] text-[15px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
        
        <div className='shadow-xl p-[30px]'>
          <Image src={sofa} alt='' />
          <p className='font-[700] text-[18px] mt-[20px]'>Design building/house</p>
          <p className='w-[200px] text-[15px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>

        <div className='shadow-xl p-[30px]'>
          <Image src={sofa} alt='' />
          <p className='font-[700] text-[18px] mt-[20px]'>Design building/house</p>
          <p className='w-[200px] text-[15px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
      </div>

      <div className='flex mt-[100px] justify-center flex-wrap items-center bg-slate-500'>
      <Image src={left} alt='' />
      <div className='w-[600px] text-white'>
        <p className='text-[40px] font-[700]'>Design building / house</p>
        <p className='text-[18px] mt-[10px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      </div>


      <div className='flex mt-[100px] justify-center flex-wrap items-center bg-slate-400'>
      <div className='w-[600px] text-white'>
        <p className='text-[40px] font-[700]'>Design building / house</p>
        <p className='text-[18px] mt-[10px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <Image src={right} alt='' />
      </div>
    </div>
  )
}

export default Services
