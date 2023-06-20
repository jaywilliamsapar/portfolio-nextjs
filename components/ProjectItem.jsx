import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (

    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#3dcd49] to-[#7222b9aa]'>
    <Image className='rounded-xl group-hover:opacity-10 hover:animate-ping' src={backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider text-center text-[#b932decc]'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center font-bold'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-[#111] font-bold text-lg cursor-pointer hover:bg-[#19752d] text-[#c8621a] hover:text-[#fff]'>More Info</p>
        </Link>
    </div>
 </div>


  )
}

export default ProjectItem