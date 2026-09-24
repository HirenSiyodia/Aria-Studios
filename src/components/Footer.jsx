import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200'>
       <div className='max-w-7xl mx-auto py-8 px-7'>
          <div className='grid grid-cols-2 gap-12'>
              <div>
                <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-semibold tracking-wider text-3xl'>
                  Aria Studios
                </h2>
                <p className='mt-2 tracking-wider leading-relaxed text-gray-500'>
                  A creative space where art, design, and imagination come together to create meaningful visual experiences.
                </p>
                <div className="flex items-center gap-4 mt-7">
                              <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-200
                                flex items-center justify-center
                                text-gray-600 hover:text-blue-500
                                hover:border-blue-400 transition"
                              >
                                <FaInstagram />
                              </a>
                
                              <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-200
                                flex items-center justify-center
                                text-gray-600 hover:text-blue-500
                                hover:border-blue-400 transition"
                              >
                                <FaLinkedinIn />
                              </a>
                
                              <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-200
                                flex items-center justify-center
                                text-gray-600 hover:text-blue-500
                                hover:border-blue-400 transition"
                              >
                                <FaGithub />
                              </a>
                
                              <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-200
                                flex items-center justify-center
                                text-gray-600 hover:text-blue-500
                                hover:border-blue-400 transition"
                              >
                                <FaDribbble />
                              </a>
                            </div>
              </div>
              <div className='md:flex md:justify-end'>
                <div>
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-5">
                Quick Links
              </h3>
              <div className='flex flex-col gap-3'>
                <Link to='/' className="text-gray-500 hover:text-blue-500 transition">
                  Home
                </Link>
                <Link to='/portfolio' className="text-gray-500 hover:text-blue-500 transition">
                  Portfolio
                </Link>
                <Link to='/about' className="text-gray-500 hover:text-blue-500 transition">
                  About
                </Link>
                <Link to='/contact' className="text-gray-500 hover:text-blue-500 transition">
                  Contact
                </Link>
              </div>
                </div>
              </div>
          </div>
          <div className="mt-14 pt-6 border-t border-gray-200 flex justify-center">
          <p className="text-sm text-gray-500">
            © 2026 All rights reserved. Built by Hiren Nanubhai Siyodia.
          </p>
        </div>
       </div>
       
    </footer>
  )
}

export default Footer
