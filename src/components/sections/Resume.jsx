import React from 'react'
import myresume from '../assets/Rohit Dubey.docx.pdf'

export default function Resume() {
  return (
    <div className='flex flex-col justify-center   mx-8 min-h-screen '>
      <p className='md:text-6xl text-3xl flex flex-col text-[var(--foreground)]  font-[Poppins]'>My Resume</p>
      <p className='text-base mt-4'> Here's a detailed version of my skills. Please click the button below to download my full resume.  </p>
      <a target='_blank' href={myresume}><button  className='btn-2 block border-3  duration-300 border-white  transition  hover:text-black cursor-pointer text-3xl font-[Poppins] mt-4 max-w-fit px-4 py-2 min-w-1/5  h-16'>Resume</button></a>
      {/* <button className='class="neo-btn w-2/3 h-14  mx-auto xl:mx-0 xl:my-10 xl:w-60 xl:h-[68px] xl:mb-16 xl:h-[5rem] 2xl:w-[18rem] 2xl:text-xl'>My Resume</button> */}

    </div>
  )
}

