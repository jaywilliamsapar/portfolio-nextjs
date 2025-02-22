import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

import One from '../public/assets/projects/1.png'
import Two from '../public/assets/projects/2.png'
import Three from '../public/assets/projects/3.png'
import Four from '../public/assets/projects/4.png'
import Five from '../public/assets/projects/5.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] animate-bounce'>
          ⚙
        </p>
        <h2 className='py-4 grad-text'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Medieval-Warfare'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Designer Watch'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'
          />
        </div>
      </div>
        <button className='mx-auto p-3 flex justify-center items-center bg-[#fff] text-[#5651e5] hover:bg-[#0b1110] hover:text-[#cc1] glow-on-hover'>
              <Link href='/moreprojects'>More Projects</Link>
        </button>
    </div>
  );
};

export default Projects;
