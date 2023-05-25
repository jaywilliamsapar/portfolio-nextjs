import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#2233]'>
          Creativity&#39;  knows no boundaries
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#1f7240]'> Jay </span>
          </h1>
          <h1 className='py-2 text-gray-700 '> Front-End Web Developer</h1>
          <p className='py-4 text-gray-700 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive Front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn className=' hover:animate-spin text-[#a14cce]'/>
              </div>
            </a>
            <a
              href='https://github.com/jaywilliamsapar'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub className=' hover:animate-spin text-[#a14cce]'/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail className=' hover:animate-spin text-[#a14cce]'/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill className=' hover:animate-spin text-[#a14cce]'/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
