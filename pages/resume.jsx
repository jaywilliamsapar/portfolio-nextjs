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
        <h2 className='text-center '>Resume</h2>
        <div className='bg-gradient-to-r from-[#73b267] to-[#2ec4b6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center hover:text-[#33f] animate-character flex'>Jay William</h2>
          <div className='flex'>
            <a className='text-[#22a] hover:text-[#1f7240] '
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <FcApproval size={25} style={{ marginRight: '1.5rem' }} />
            </a>
            <a className='text-[#000814] hover:text-[#1f7240]'
              href='https://www.linkedin.com/in/williamsapar/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={25} style={{ marginRight: '1.5rem' }} />
            </a>
            <a className='text-[#000814] hover:text-[#1f7240]'
              href='https://github.com/jaywilliamsapar'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={25} style={{ marginRight: '1.5rem' }} />
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
              <FaFilePdf size={25} style={{ marginRight: '1.5rem' }} className='text-[#f40f02] hover:text-[#23fa]' />
            </a>
            <a className='text-[#22a] hover:text-[#1f7240] hover:text-anchor'
              href='https://drive.google.com/file/d/1Kxd-Op3Yf3zqqrGKWSa_Nz8lQdztJQJZ/view?usp=drive_link'
              target='_blank'
              rel='noreferrer'
            >
              <MdOutlinePsychology size={28} style={{ marginRight: '1.5rem' }} className='text-[#030303df]' />
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
              Ensured comprehensive mobile responsive user interface (UI) layouts and user experience (UX) with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed by clients.
            </li>
            <li>
              Worked directly with a diverse clients base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        <p>I enjoyed working with these company a lot of talented person and great work ethic, Where I gained my Experience in Software Development. I appreciated working with them even though I am not a Computer Science Degree, They help me when I get stuck on a certain task.</p>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Freelance Web Developer | Fullstack Development
            </span>
            <span className='px-2'>|</span>Zamboanga City, Phil
          </p>
          <p className='py-1 italic'>Creating a Landing page for client small businesses and Enterprises</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2022 I started to freelancing, Focused on local client here in Zamboanga city
              building website for small business like, RTW Shop, Vape Shop, and Coffee Shop these client are generates growth for their small business.
            </li>
            <li>
              I help client growth their small business by giving them a website for their authenticity in the internet world.
            </li>
            <li>
              Give me a lot of techniques on each clients that I worked with their different needs when it comes to their business.
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
          <p className='py-1 italic'>Office Engineer (2015 – 2019)</p>
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
            <span className='px-2'>|</span>RCM Construction Supplies & Enterprises
          </p>
          <p className='py-1 italic'>Assisting Project Engineer (2013 – 2015)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              <span className='font-semibold text-gray-700'>Project Planning: </span>
              Assist in creating project plans, including defining project scope, objectives,
              and deliverables. Help with scheduling activities, determining resource requirements, and establishing timelines.
            </li>
            <li>
              <span className='font-semibold text-gray-700'>Documentation and Reporting: </span>
              Maintain project documentation, including progress reports,
              technical specifications, and project files.
              Help in preparing presentations and status updates for project stakeholders.
            </li>
            <li>
              <span className='font-semibold text-gray-700'>Quality Assurance:  </span>
              Participate in quality control and quality assurance activities,
              including conducting inspections, reviewing design documents,
              and ensuring compliance with industry standards and regulations.
            </li>
            <li>
              <span className='font-semibold text-gray-700'>Health and Safety: </span>
              Promote and adhere to health and safety standards within the project.
              Assist in identifying potential hazards, implementing safety measures,
              and ensuring compliance with relevant regulations.
            </li>
            <li>
              <span className='font-semibold text-gray-700'>Procurement and Vendor Management: </span>
              Assist in procuring materials, equipment, and services required for the project.
              Collaborate with vendors and contractors, obtain quotes, and assist in evaluating proposals.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
