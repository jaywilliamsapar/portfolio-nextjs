import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';


const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] animate-bounce'>
          😉
        </p>
        <h2 className='py-4 grad-text'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>


          {/* LEFT  --------------------------------------- SECTION */}


          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div className='hover:scale-105 ease-in duration-300'>
                <Image
                  className='rounded-xl hover4'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Jay William</h2>
                <p className='font-bold'> Front-End Web Developer </p>
                <p className='py-4 '>
                  I&#39;m available for Freelance or full-time positions. Contact
                  me and let&#39;s talk.😉
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 font-bold text-center text-[#5651e5]'>Connect With Me</p>
                <div className='flex items-center justify-between py-12 text-[#1f7240]'>
                  <a
                    href='https://www.linkedin.com/in/williamsapar/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#f8e5dd]'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/jaywilliamsapar'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#f8e5dd]'>
                      <FaGithub width='30'/>
                    </div>
                  </a>
                  <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#f8e5dd]'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#f8e5dd]'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* RIGHT --------------------------------------- SECTION */}


          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4 bg-[#edf0efde]'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/9dd3d013-7743-486b-8714-657e8aad7d98' 
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-[#006964] font-semibold'>
                  <div className='flex flex-col '>
                    <label className=' text-sm py-2 font-black'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-[#e7b156] duke3 font-black'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className=' text-sm py-2 font-black'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-[#e7b156] duke3 font-black'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-black'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#e7b156] duke3 font-black'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-black '>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#e7b156] duke3 font-black'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-black'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 text-[#e7b156] duke3 font-black'
                    rows='8'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-[#1d7b20ea] bg-[#fff] text-[#5651e5] hover:bg-[#0b1110] hover:text-[#cc1] glow-on-hover'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-125 ease-in duration-400 bg-[#f8e5dd] text-[#00df9a] glow-on-hover2'>
              <HiOutlineChevronDoubleUp
                  className='text-[#121313] hover:text-[#d55757]'
                  size={35}
                />
              </div>
            </a>
          </Link>
        </div>
        {/* <div className='flex justify-center py-2 px-2'> 
          <FaGithub size={65} className='px-4' />
          <FaGithub size={65} className='px-4' />
          <FaGithub size={65} className='px-4' />
          <FaGithub size={65} className='px-4' />
          <FaGithub size={65} className='px-4' />
          <FaGithub size={65} className='px-4' />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
