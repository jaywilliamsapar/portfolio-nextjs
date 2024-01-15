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
           Hi, I&#39;m <span className='text-[#1f7240] animate-character'> Jay </span>
          </h1>
          <h1 className='py-2 text-gray-700'><span className='text-[#2222aac9] hover:text-[#1f7240dd]'><span className='text-[#1f7240]'> Front End </span></span> Web Develop<span>er</span></h1>
          <p className='py-4 text-gray-700 sm:max-w-[70%] m-auto'>
            A Front-end web developer from Asia&#39;s Latin city, Creating Websites and Applications
           both front end and Integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#171616ee]'>
                <FaLinkedinIn className=' hover:animate-bounce text-[#1f7240]' size={20}/>
              </div>
            </a>
            <a
              href='https://github.com/jaywilliamsapar'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#171616ee]'>
                <FaGithub className=' hover:animate-bounce text-[#1f7240]' size={20}/>
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#171616ee]'>
                <AiOutlineMail className=' hover:animate-bounce text-[#1f7240]' size={20}/>
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#171616ee]'>
                <BsFillPersonLinesFill className=' hover:animate-bounce text-[#1f7240]' size={20}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className='uppercase text-sm tracking-widest text-[#2233]'>
          Let&#39;s build projects
          </p>
    </div>
  );
};

export default Main;
