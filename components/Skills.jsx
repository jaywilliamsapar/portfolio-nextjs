import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';

import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Node from '../public/assets/skills/node.png';
import Canva from '../public/assets/skills/canva.png';
import MongoDB from '../public/assets/skills/mongo.png';
import AWS from '../public/assets/skills/aws.png';

import Mern from '../public/assets/skills/mern.png'; // Assuming you have a Mern image
import Docker from '../public/assets/skills/docker.png'; // Assuming you have a Docker image
import Npm from '../public/assets/skills/npm.png'; // Assuming you have an Npm image
import Shopify from '../public/assets/skills/shopify.png'; // Assuming you have a Shopify image
import Typescript from '../public/assets/skills/typescript.png'; // Assuming you have a Typescript image
import Git from '../public/assets/skills/zgit.png'; // Assuming you have a Figma image
import Angular from '../public/assets/skills/angular.png'; // Assuming you have an Angular image
import Bootstrap from '../public/assets/skills/bootstrap.png'; // Assuming you have a Bootstrap image
import Vscode from '../public/assets/skills/vscode.png'; // Assuming you have a Vscode image  
import Netlify from '../public/assets/skills/netlify.png'; // Assuming you have a Netlify image
import Vercel from '../public/assets/skills/vercel.png'; // Assuming you have a Vercel image
 





const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase animate-bounce'>
          ⚽🏀🏐
        </p>
        <h2 className='py-4 grad-text'>Tech Stacks💕</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#829bb1] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto' href='https://en.wikipedia.org/wiki/HTML5'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#829bb1] to-[#2ca] cursor-pointer hover4'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#d58242c2] to-[#83d1a2] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/'  />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#d58242c2] to-[#83d1a2] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#e8e9eb] to-[#83d1a2] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#e8e9eb] to-[#83d1a2] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#00c8ffae] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Node} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#00c8ffae] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Canva} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Canva</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#00c8ffae] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#00c8ffae] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MongoDB} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center '>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          {/* NEW ROWS 💖💖✔✔✔*/}
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Vercel} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Vercel</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bootstrap} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Angular} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Angular</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Netlify} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Netlify</h3>
              </div>
            </div>
          </div>
         

             <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Shopify} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Shopify</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Npm} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NPM</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Docker} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Docker</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 hover:bg-gradient-to-r from-[#79bd45cc] to-[#2ca] cursor-pointer hover3'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
               <Image src={Git} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
