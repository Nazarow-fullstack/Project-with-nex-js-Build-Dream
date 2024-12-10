import Image from 'next/image'
import React from 'react'
import house from '../assets/img.png'
const Gallery = () => {
  return (
    <div className='flex flex-wrap justify-around mt-[100px] mb-[100px] items-center gap-10'>
      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>


      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>


      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>



      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>


      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>
      <div className='shadow-2xl'>
        <Image src={house} alt='' />
        <div className='p-[30px]'>
          <p className='text-[#056088] text-[25px]'>Interior design</p>
          <p className='mt-[20px] text-[18px]'>3 Months work time</p>
          <button className='py-[10px] px-[20px] mt-[30px] bg-[#056088]'>See process</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
