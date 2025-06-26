import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Medieval-Warfare</h2>
          <h3>React JS / Tailwind / Firebase.net</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Responsive Conquerors of Kingdoms - Medieval Warfare Website Using HTML, CSS & JavaScript.
            Contains animations when scrolling.
            It has three color designs (green, red and black)
            Smooth scrolling in each section.
            Developed first with the Mobile First methodology, then for desktop.
            Compatible with all mobile devices and with a beautiful and pleasant user interface.
            Join the channel to see more videos like this. Special Thank to -- [-Bedimcode-]
          </p>
          <a
            href='https://github.com/jaywilliamsapar/Conquerors-of-the-Kingdom-Medieval-Warfare'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 text-[#fffa] glow-on-hover'>Code</button>
          </a>
          <a
            href=' https://kingdom-mediaval-warefare.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 text-[#fffa] glow-on-hover'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coin Gecko API
              </p>
              <p className='text-[#921c7e] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
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

export default crypto;
