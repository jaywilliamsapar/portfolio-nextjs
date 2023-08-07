import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
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
          🤠
        </p>
        <h2 className='py-4 grad-text'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div className='hover:scale-105 ease-in duration-300'>
                <Image
                  className='rounded-xl  animate-pulse'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 animate-character'>Jay William</h2>
                <p className='font-bold'>Specialized in Front-End Web Development</p>
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

          {/* bg-[#e1f0ec] */}

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4 bg-gray-300'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/9dd3d013-7743-486b-8714-657e8aad7d98' 
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-[#35b3ac] font-semibold'>
                  <div className='flex flex-col '>
                    <label className=' text-sm py-2 '>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-1 00 text-[#1236]'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className=' text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-[#1236]'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-semibold'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#1236]'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-semibold'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300 text-[#1236]'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className=' text-sm py-2 text-[#006964] font-semibold'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300 text-[#1236]'
                    rows='8'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 mt-4 text-[#fff] hover:text-[#22a] animate-character'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-125 ease-in duration-400 bg-[#f8e5dd] hover:bg-[#006964]'>
                <HiOutlineChevronDoubleUp
                  className='text-[#111013ea] hover:text-[#ffff]'
                  size={35}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
