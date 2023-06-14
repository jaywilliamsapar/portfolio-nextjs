import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';
import { MdOutlinePsychology } from 'react-icons/md';


const resume = () => {
  return (
    <>
      <Head>
        <title> Jay | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#CBC8C7] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center hover:text-[#33f]'>Jay William</h2>
          <div className='flex'>
          <a className='text-[#22a] hover:text-[#1f7240] '
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <FcApproval size={25} style={{ marginRight: '1.5rem' }} />
            </a>
            <a className='text-[#22a] hover:text-[#1f7240]'
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={25} style={{ marginRight: '1.5rem' }} />
            </a>
            <a className='text-[#22a] hover:text-[#1f7240]'
              href='https://github.com/jaywilliamsapar'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={25} style={{ marginRight: '1.5rem'}} />
            </a>
            <a className='text-[#22a] hover:text-[#1f7240]'
              href='https://github.com/jaywilliamsapar'
              target='_blank'
              rel='noreferrer'
            >
            </a>
            <a className='text-[#22a] hover:text-[#1f7240] animate-bounce hover:text-anchor'
              href='https://drive.google.com/file/d/1WAoP5-w3KH4qWRvVgx0plqfa9uYhVuuL/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
            <FaFilePdf size={25} style={{ marginRight: '1.5rem' }} className='text-[#f40f02] hover:text-[#23fa]'  />
            </a>
            <a className='text-[#22a] hover:text-[#1f7240] hover:text-anchor'
              href='https://drive.google.com/file/d/1Kxd-Op3Yf3zqqrGKWSa_Nz8lQdztJQJZ/view?usp=drive_link'
              target='_blank'
              rel='noreferrer'
            >
            <MdOutlinePsychology size={28} style={{ marginRight: '1.5rem' }} className='text-[#030303df]'  />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven experience <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven work experience</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4 font-bold'>
          <h5 className='text-center underline text-[18px] py-2 text-[#1f7240] '>Tech Stacks</h5>
          <p className='py-2 text-[#1f7240] '>
            <span className='font-bold text-[#11dc]'>Technical Skills</span>
            <span className='px-3 text-[#11dc]'>|</span> Front-End Web Development
            <span className='px-2 text-[#11dc]'>|</span> HTML
            <span className='px-2 text-[#11dc]'>|</span> CSS
            <span className='px-2 text-[#11dc]'>|</span> JavaScript
            <span className='px-2 text-[#11dc]'>|</span> React
            <span className='px-2 text-[#11dc]'>|</span> TypeScript
            <span className='px-2 text-[#11dc]'>|</span> Next.js
            <span className='px-2 text-[#11dc]'>|</span> Node.js
            <span className='px-2 text-[#11dc]'>|</span> Redux
            <span className='px-2 text-[#11dc]'>|</span> Tailwind
            <span className='px-2 text-[#11dc]'>|</span> Firebase
            <span className='px-2 text-[#11dc]'>|</span> Axios
          </p>
          <p className='py-2  font-bold'>
            <span className='font-bold text-[#11dc]'>Amazon Web Services</span>
            <span className='px-2 text-[#1f7240]'> | Amazon Web Services Cloud</span>
            <span className='px-2 text-[#1f7240]'> | AWS : Identity Access Management (AIM)</span>
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4 text-[#1f7240] font-bold'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Exco IT-Service
            </span>
            <span className='px-2'>|</span>Zamboanga City, Phil
          </p>
          <p className='py-1 italic'>Jr. Front End Web Developer </p>
          <ul className='list-disc list-outside px-8 py-1 leading-relaxed'>
            <li>
               ⨝ Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Freelance Web Developer | Wordpress
            </span>
            <span className='px-2'>|</span>Zamboanga City, Phil
          </p>
          <p className='py-1 italic'>Creating a Landing page for client small shop</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2020 I started to learn Coding, on YouTube channel focused on
              building website learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4 font-bold text-[#1f7240]'>
          Other Professional Work Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Junior Civil Engineer </span>
            <span className='px-2'>|</span>E.G. AYOMA Construction & Enterprises
          </p>
          <p className='py-1 italic'>Office Engineer / Field Engineer (2015 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Assist with the preparation of project proposals, bids, and contracts.
            </li>
            <li>
            Prepare progress reports and other project documentation.
            </li>
            <li>
            Conduct field surveys and inspections to gather data for engineering designs.
            </li>
            <li>
            Work collaboratively with project managers and other team members to ensure that projects are completed on time and within budget.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Microsoft tools, Advanced TL Support,
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Junior Field Engineer</span>
            <span className='px-2'>|</span>RCM Construction Suplies & Enterprises
          </p>
          <p className='py-1 italic'>Assist Project Engineer (2014 – 2015)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
