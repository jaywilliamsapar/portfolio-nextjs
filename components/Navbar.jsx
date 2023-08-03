import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='80'
              height='70'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:text-[#1f7240] text-gray-700 font-bold'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden animate-bounce animate-character'
          >
            <AiOutlineMenu size={27} className='hover:animate-spin text-[#1f7240]' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e7e4e4] p-10 ease-in duration-500 font-semibold'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='50'
                    height='50'
                    alt='/'
                    className='z-20 hover:animate-spin'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:animate-spin '
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 '>
              <p className='w-[85%] md:w-[90%] py-4 text-center font-duke animate-character'>
                Let&#39;s build something 🔥
              </p>
            </div>
          </div>
          <div className='py-2 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:scale-105 ease-in duration-300 text-[#1f7240]'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-5'>
              <p className='uppercase tracking-widest text-[#a14cce] font-semibold text-center animate-bounce'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] animate-bounce ease-in-out'>
                <a
                  href='https://www.linkedin.com/in/williamsapar/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-[#f8e5dd]'>
                    <FaLinkedinIn className='ease-in-out text-[#a14cce]' />
                  </div>
                </a>
                <a
                  href='https://github.com/jaywilliamsapar'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-[#f8e5dd]'>
                    <FaGithub className='ease-in-out text-[#a14cce]' />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-[#f8e5dd]'
                  >
                    <AiOutlineMail className='ease-in-out text-[#a14cce]' />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-150 ease-in duration-300 bg-[#f8e5dd]'
                  >
                    <BsFillPersonLinesFill className='ease-in-out text-[#a14cce] animate-bounce' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
