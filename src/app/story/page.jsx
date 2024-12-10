import React from 'react'
import man from '../assets/Ellipse 6.png'
import pool from '../assets/Rectangle 5.png'
import Image from 'next/image'
const Story = () => {
  return (
    <div className='mt-[100px] mb-[100px]'>
      <div className='flex flex-wrap justify-evenly items-center' >
        <div className='p-[30px] shadow-2xl'>
      <Image src={man} alt='' />
          <p className='text-[18px] w-[300px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px]'>- Mr. James</p>
        </div>


        <div className='p-[30px] shadow-2xl'>
      <Image src={man} alt='' />
          <p className='text-[18px] w-[300px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px]'>- Mr. James</p>
        </div>


        <div className='p-[30px] shadow-2xl'>
      <Image src={man} alt='' />
          <p className='text-[18px] w-[300px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px]'>- Mr. James</p>
        </div>
      </div>

      <div className='b flex flex-wrap justify-evenly p-[40px] mt-[100px]'>
      <Image width={200} src={man} alt='' />
          <div className='text-white'>
          <p className='mt-[20px] text-[30px]'>Mr. James’s says : “I’m so happy!”</p>
          <p className='text-[18px] w-[600px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          </div>
      </div>


      <div className='text-center mt-[100px]'>
        <p className='text-[30px]'>Mr. James’s villa</p>
        <div className='flex flex-wrap items-center justify-evenly mt-[50px]'>
          <Image width={300} height={300} src={pool} alt='' />
          <Image width={300} height={300} src={pool} alt='' />
          <Image width={300} height={300} src={pool} alt='' />
          <Image width={300} height={300} src={pool} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Story
