"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  let path = usePathname();

  return (
    <header className="y relative bg-cover bg-center h-[400px] sm:h-[500px] flex flex-col justify-center px-6 sm:px-8 text-white">
      
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between bg-transparent p-4 sm:p-6">
        <h1 className="text-lg sm:text-2xl font-bold">DB-</h1>
        <div className="flex flex-wrap items-center">
          <Link href="/" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Home
          </Link>
          <Link href="/about" className="ml-3 sm:ml-4 text-sm sm:text-base">
            About
          </Link>
          <Link href="/services" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Services
          </Link>
          <Link href="/gallery" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Gallery
          </Link>
          <Link href="/contact" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Contact
          </Link>
          <Link href="/story" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Story
          </Link>
          <Link href="/careers" className="ml-3 sm:ml-4 text-sm sm:text-base">
            Careers
          </Link>
          <Link href="/news" className="ml-3 sm:ml-4 text-sm sm:text-base">
            News
          </Link>
        </div>
      </nav>

     
      <div className="mt-20 sm:mt-28 lg:mt-36 text-center lg:text-left">
        {path === "/" && (
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold max-w-xl mx-auto lg:mx-0">
              We build your dream house well and professionally
            </h2>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen.
            </p>
            <button className="mt-6 bg-[#0BCAD4] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base">
              Contact us
            </button>
          </div>
        )}

        
        {path === "/about" && (
          <div className="text-center text-2xl sm:text-[40px]">
            About our story - We are <br /> the best team
          </div>
        )}
        {path === "/contact" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Need some consultation or want to <br /> collaborate with us? Let’s
            connect!
          </div>
        )}
        {path === "/gallery" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Here are some of our best works
          </div>
        )}
        {path === "/services" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Our team services
          </div>
        )}
        {path === "/story" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Read some stories from clients!
          </div>
        )}
        {path === "/careers" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Have a brilliant idea? Join us. We have opportunities for you.
          </div>
        )}
        {path === "/news" && (
          <div className="text-center text-2xl sm:text-[40px]">
            Articles and news about <br /> property and construction
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
