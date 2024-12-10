import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#053E59]">
     
      <div className=" p-[40px] container mx-auto flex flex-wrap gap-6 py-10 text-white">
        
        <div className='w-[300px]'>
          <h2 className="text-2xl font-bold">DB-</h2>
          <p className="mt-2 text-sm">Lizenz street number 12<br />Jakarta, Indonesia</p>
          <button className="mt-4 bg-[#0BCAD4] text-white px-4 py-2 rounded-md">
            Get directions
          </button>
        </div>

        <div className='w-[100px]'>
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Service</li>
          </ul>
        </div>

        
        <div className='w-[100px]'>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>E-mail</li>
            <li>Mobile</li>
            <li>WhatsApp</li>
            <li>Fax</li>
          </ul>
        </div>

    
        <div className='w-[100px]'>
          <h3 className="text-lg font-semibold">Career</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Job</li>
            <li>Part-time</li>
            <li>Internship</li>
            <li>Service</li>
          </ul>
        </div>

     
        <div className='w-[100px]'>
          <h3 className="text-lg font-semibold">Business</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Affiliate</li>
            <li>Collaboration</li>
            <li>Investment</li>
            <li>People</li>
          </ul>
        </div>
      </div>


      <div className="bg-white text-center py-4">
        <p className="text-gray-500 text-sm">2021 - Copyright ZHB Studio</p>
      </div>
    </footer>
  )
}

export default Footer
