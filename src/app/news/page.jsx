import Image from 'next/image'
import React from 'react'
import house from '../assets/img.png'


const News = () => {
  return (
    <div className='mt-[100px] mb-[100px]'>
      <div className='q'>
        
      </div>
      <div className='flex flex-wrap justify-evenly '>
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

      <p className='text-center text-[30px] text-[#056088] mt-[100px]'>See more</p>
    </div>
  )
}

export default News
