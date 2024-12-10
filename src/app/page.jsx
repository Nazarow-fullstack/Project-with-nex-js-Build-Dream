import Image from 'next/image'
import house from './assets/Rectangle 5.png'
import house2 from './assets/Rectangle 23.png'
import sofa from './assets/Vector.png'
import yes from './assets/Group (1).png'
import long from './assets/Rectang.png'
import long2 from './assets/Rectangle h.png'
import logo from './assets/J.construct.png'
import vid from './assets/Video.png'
export default function Home() {
  return (
    <div className='mt-[100px] mb-[100px]'>
      <div className='flex flex-wrap justify-evenly gap-16 items-center'>
        <div className='flex flex-wrap w-[620px] gap-10'>
          <Image width={290} src={house} alt='' />
          <Image width={290} src={house} alt='' />
          <Image width={290} src={house} alt='' />
          <Image width={290} src={house} alt='' />
        </div>
        <div>
          <p className='text-[#056088] text-[30px]'>Our company</p>
          <p className='w-[400px] text-[#434343] text-[18px] mt-[20px]'>Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used.</p>
          <p className='text-gray-500 mt-[20px]'>We already handled</p>
          <div className='flex flex-wrap gap-[20px] text-[#056088] mt-[20px] text-[20px] font-[600]'>
            <p>50+ Clients</p>
            <p>50+ Clients</p>
            <p>50+ Clients</p>
          </div>
          <button className='py-[10px] px-[20px] bg-[#056088] mt-[30px]'>See more</button>
        </div>
      </div>

      <div className='mt-[100px] '>
        <div className='text-center'>
          <p className='text-[#056088] text-[30px]'>Our services</p>
          <p className='text-[#434343] text-[18px] mt-[10px]'>Our services include building new buildings <br /> and renovating old buildings</p>
        </div>

        <div className='flex flex-wrap justify-evenly mt-[50px]'>
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
      </div>



      <div className='flex flex-wrap justify-evenly mt-[100px] gap-10'>
        <div className='w text-center p-[30px] bg-gray-700 text-[white]'>
          <Image src={yes} className='ml-[70px]' alt='' />
          <p className='text-[30px] mt-[20px]'>Flexible time</p>
          <p className='text-[18px] mt-[20px]'>We work wherever you <br /> ready  to builds. Work fast <br />and profesional</p>
        </div>
        <div className='w text-center p-[30px] bg-gray-700 text-[white]'>
          <Image src={yes} className='ml-[70px]' alt='' />
          <p className='text-[30px] mt-[20px]'>Flexible time</p>
          <p className='text-[18px] mt-[20px]'>We work wherever you <br /> ready  to builds. Work fast <br />and profesional</p>
        </div>
        <div className='w text-center p-[30px] bg-gray-700 text-[white]'>
          <Image src={yes} className='ml-[70px]' alt='' />
          <p className='text-[30px] mt-[20px]'>Flexible time</p>
          <p className='text-[18px] mt-[20px]'>We work wherever you <br /> ready  to builds. Work fast <br />and profesional</p>
        </div>
        <div className='w text-center p-[30px] bg-gray-700 text-[white]'>
          <Image src={yes} className='ml-[70px]' alt='' />
          <p className='text-[30px] mt-[20px]'>Flexible time</p>
          <p className='text-[18px] mt-[20px]'>We work wherever you <br /> ready  to builds. Work fast <br />and profesional</p>
        </div>
      </div>


      <div className='mt-[100px]'>
      <div className='text-center'>
          <p className='text-[#056088] text-[30px]'>Our services</p>
          <p className='text-[#434343] text-[18px] mt-[10px]'>Our services include building new buildings <br /> and renovating old buildings</p>
        </div>
      </div>



      <section className='max-w-6xl m-auto flex gap-[20px] h-[460px] mb-[100px] mt-[50px]'>
     <div className='grid grid-cols-1 gap-[20px] h-[100%]'>
     <Image src={long2} alt="" />
     <Image src={long2} alt="" />
     </div>
     <div className='h-[100%]'>
     <Image src={long} alt="" />
     </div>
    <div className='h-[100%] grid grid-cols-1 gap-[20px]'>
       <Image src={long2} alt="" />
       <Image src={long2} alt="" />
    </div>
   <div className='h-[100%] grid grid-cols-1 gap-[20px]'>
   <div className='flex gap-[20px]'>
        <Image className='h-[100%] w-[50%]' src={long} alt="" />
        <div className='grid grid-cols-1 gap-[20px]'>
        <Image src={long2} alt="" />
        <Image src={long2} alt="" />
        </div>
    </div>
   </div>
     </section>



    <section className="flex flex-col lg:flex-row items-center gap-6 bg-blue-900 text-white p-6">
      
      <div className="bg-white text-blue-900 p-4 rounded-lg shadow-md flex-1">
        <h2 className="text-xl font-bold">What our clients say?</h2>
        <p className="mt-2">See what our clients say about their new home</p>
        <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          See more
        </button>
      </div>

    
      <div className="flex-1 bg-gray-300  rounded-lg">
        <Image className='w-full' src={house2} />
      </div>

      
      <div className="flex-1 bg-blue-800 p-4 rounded-lg shadow-md">
        <p>
          "I really happy to see the result my new home. It's really good house
          and good price too. And they work so fast because they have the best
          team. Once again, thank you. I really appreciate it."
        </p>
        <p className="mt-4 font-bold text-right">- Mr. Roberto</p>
      </div>
    </section>

    <div className='flex flex-wrap justify-evenly mt-[100px] gap-10'>
    <Image src={logo} />
    <Image src={logo} />
    <Image src={logo} />
    <Image src={logo} />
    </div>

    <div className='flex justify-center flex-wrap mt-[100px]'>
      <Image src={vid} />
    </div>



    <section className="relative bg-blue-950 text-white py-12 px-6 flex items-center justify-center mt-[100px]">
      
      <div className="absolute inset-0 bg-gray-500 bg-opacity-40 rounded-lg">
        
      </div>

      
      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-[50px] font-bold">
          Want to get our offer updates and news?
        </h2>
        <p className="mt-4">
          Submit your e-mail and we will give you updates about information and
          discounts. Every single week. (not spamming)
        </p>

        
        <form className="mt-6 flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your e-mail here"
            className="w-full lg:w-2/3 px-4 py-2 rounded-l-lg text-black"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-r-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>


    </div>
  );
}
