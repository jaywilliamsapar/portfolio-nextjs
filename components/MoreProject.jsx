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
    <div id='projects' className='w-full bg-gradient-to-r from-[#e5ebe5] to-[#9bb8ba]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <div className='grid md:grid-cols-3 gap-10 pt-10'>
          <MoreProjectItems
            title='App name'
            backgroundImg={One}
            projectUrl='/1'
            tech='React JS'
          />
          <ProjectItem
            title='App Name'
            backgroundImg={Two}
            projectUrl='/2'
            tech='React JS'
          />
          <ProjectItem
            title='App name'
            backgroundImg={Three}
            projectUrl='/3'
            tech='React JS'
          />
          <ProjectItem
            title='Appnme'
            backgroundImg={Four}
            projectUrl='/4'
            tech='Next JS'
          />
           <ProjectItem
            title='Apname'
            backgroundImg={Five}
            projectUrl='/4'
            tech='Next JS'
          />
            <ProjectItem
            title='Appname'
            backgroundImg={Two}
            projectUrl='/4'
            tech='Next JS'
          />
          {/* <ProjectItem
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
          /> */}
        </div>
      </div >
      <div className='flex justify-center py-12'>
      <button className='mx-auto p-3 flex justify-center items-center text-[#5651e5] hover:bg-[#0b1110] hover:text-[#e5bb16] glow-on-hover'>
              <Link href='/#projects'>Back</Link>
      </button>
      <button className='mx-auto p-3 flex justify-center items-center text-[#5651e5] hover:bg-[#0b1110] hover:text-[#e5bb16] glow-on-hover'>
              <Link href='/#projects'>Next</Link>
      </button>
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