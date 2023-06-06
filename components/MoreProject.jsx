import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


import One from '../public/assets/projects/1.png'
import Two from '../public/assets/projects/2.png'
import Three from '../public/assets/projects/3.png'
import Four from '../public/assets/projects/4.png'
import Five from '../public/assets/projects/5.png'
import MoreProjectItems from './MoreProjectItems'
import ProjectItem from './ProjectItem'

const MoreProject = () => {
  return (
    <div id='projects' className='w-full bg-[#222f]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='grid md:grid-cols-3 gap-10 pt-10'>
          <MoreProjectItems
            title='Real State'
            backgroundImg={One}
            projectUrl='/1'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={Two}
            projectUrl='/2'
            tech='React JS'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={Three}
            projectUrl='/3'
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={Four}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={Five}
            projectUrl='/4'
            tech='Next JS'
          />
            <ProjectItem
            title='Twitch UI'
            backgroundImg={Two}
            projectUrl='/4'
            tech='Next JS'
          />
        </div>
      </div >
      <div className='flex justify-center py-12'>
          <Link href='/#projects'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 bg-[#f8e5dd] hover:bg-[#0b1110]'>
                <HiOutlineChevronDoubleUp
                  className='text-[#006964] hover:text-[#ffff]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default MoreProject


{/* 
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={One}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={Three}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={Four}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={Two}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Twitch UI'
            backgroundImg={One}
            projectUrl='/4'
            tech='Next JS'
          /> */}