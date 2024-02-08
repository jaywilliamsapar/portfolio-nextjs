import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-12 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#5651e5] font-duke duke5'>JWs.</h1>
          <p className='py-4 font-duke'>A Front-end web developer from Asia&apos Latin city, Creating Websites and Applications both front end and Integrating back-end technologies.</p>
        </div>
          <div>
              <h2 className='font-medium font-duke duke5'>Support</h2>
              <ul className='font-duke text-[#3355]'>
                  <li className='py-2 text-sm'><BsFillPersonLinesFill/></li>
                  <li className='py-2 text-sm'>Links</li>
                  <li className='py-2 text-sm'>Guides</li>
                  <li className='py-2 text-sm'>Open AI </li>
                  <li className='py-2 text-sm'>Games </li>
              </ul>
          </div>

    </div>

  )
}

export default Footer
