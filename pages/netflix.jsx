import Image from 'next/image';
import React from 'react';
// import netflixImg from '../public/assets/projects/netflix.jpg';
import mobile from '../public/assets/projects/watch2.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={mobile}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Designer Watch</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Responsive Watches Website Using HTML CSS & JavaScript
          Smooth scrolling in each section.
          Includes a dark and light mode.
          Developed first with the Mobile First methodology, then for desktop.
          Compatible with all mobile devices and with a beautiful and pleasant user interface.
          oin the channel to see more videos like this. Special Thanks to -- [ Bedimcode ]
          </p>
          <a
            href='https://github.com/jaywilliamsapar/designer-watch'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 glow-on-hover'>Code</button>
          </a>
          <a
            href='https://designer-watch-v1.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 glow-on-hover'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 hover3'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 hover3' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 hover3' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 hover3' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 hover3' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 hover3' /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <button className='px-8 py-2 mt-4 hover3 glow-on-hover'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
